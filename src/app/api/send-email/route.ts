import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// The recipient is fixed server-side; the endpoint must never relay
// mail to arbitrary addresses supplied by the client.
const RECIPIENT = process.env.CONTACT_RECIPIENT ?? "info@kanitas.se";
const SMTP_HOST = process.env.SMTP_HOST ?? "send.one.com";
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 465);
const SMTP_USER = process.env.SMTP_USER ?? "info@kanitas.se";

// The form asks for a phone number first and everything else after, so a
// request is valid with nothing but a number we can call back.
const ContactSchema = z.object({
  phone: z
    .string()
    .trim()
    .max(40)
    .regex(/^[+()\d\s-]+$/)
    .refine((value) => value.replace(/\D/g, "").length >= 7),
  name: z.string().trim().max(200).optional().or(z.literal("")),
  email: z.string().trim().email().max(200).optional().or(z.literal("")),
  topic: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(5000).optional().or(z.literal("")),
});
// Honeypot: the hidden "company" field is checked on the raw body before
// validation, so it never needs to be part of the schema.

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

// Best-effort rate limit per runtime instance.
const hits = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const MAX_TRACKED_IPS = 10_000;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  // Keep the map bounded: evict expired entries once it grows large.
  if (hits.size > MAX_TRACKED_IPS) {
    for (const [key, value] of hits) {
      if (now > value.reset) hits.delete(key);
    }
  }
  const entry = hits.get(ip);
  if (!entry || now > entry.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Best-effort limiter: only rate-limit when a client IP is identifiable.
    // Pooling unidentified clients under one bucket would let 5 submissions
    // block the form for everyone.
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip");
    if (ip && rateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const body = await request.json().catch(() => null);
    if (body === null || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // Honeypot triggered: pretend success, send nothing. Checked before
    // schema validation so oversized bot payloads also get the fake success.
    if ((body as Record<string, unknown>).company) {
      return NextResponse.json({ success: true });
    }

    const result = ContactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: "Validation failed" }, { status: 400 });
    }

    const { name, email, phone, topic, message } = result.data;

    if (!process.env.EMAIL_PASSWORD) {
      console.error("EMAIL_PASSWORD environment variable is not set");
      return NextResponse.json(
        { error: "Server misconfigured" },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: process.env.EMAIL_PASSWORD },
    });

    const now = new Date();
    const timestamp = `${now.toLocaleDateString("sv-SE")} kl. ${now.toLocaleTimeString("sv-SE")}`;

    const missing = "Ej angivet";
    const safe = {
      name: name ? escapeHtml(name) : missing,
      email: email ? escapeHtml(email) : missing,
      phone: escapeHtml(phone),
      topic: topic ? escapeHtml(topic) : missing,
      message: message ? escapeHtml(message) : "Inget meddelande, ring upp.",
    };
    const subjectName = name ? `: ${name.replace(/[\r\n]+/g, " ")}` : "";

    await transporter.sendMail({
      from: `"Kanitas webbplats" <${SMTP_USER}>`,
      to: RECIPIENT,
      replyTo: email || undefined,
      subject: `Ring upp ${phone}${topic ? ` [${topic}]` : ""}${subjectName}`,
      text: [
        `Ny förfrågan via kanitas.se (${timestamp})`,
        "",
        `Telefon: ${phone}`,
        `Namn: ${name || missing}`,
        `E-post: ${email || missing}`,
        `Ärende: ${topic || missing}`,
        "",
        "Meddelande:",
        message || "Inget meddelande, ring upp.",
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e8e4; border-radius: 12px;">
          <h2 style="color: #131715; border-bottom: 3px solid #1e4d3b; padding-bottom: 10px;">Ny förfrågan via kanitas.se</h2>
          <p style="color: #5b6660;">Mottaget: <strong>${timestamp}</strong></p>
          <div style="background-color: #f4f6f4; padding: 16px; border-radius: 8px; margin: 16px 0;">
            <p><strong>Telefon:</strong> <a href="tel:${safe.phone.replace(/\s/g, "")}" style="color: #1e4d3b;">${safe.phone}</a></p>
            <p><strong>Namn:</strong> ${safe.name}</p>
            <p><strong>E-post:</strong> ${safe.email}</p>
            <p><strong>Ärende:</strong> ${safe.topic}</p>
          </div>
          <div style="background-color: #f4f6f4; padding: 16px; border-radius: 8px; margin: 16px 0;">
            <p style="white-space: pre-wrap;">${safe.message}</p>
          </div>
          <p style="font-size: 12px; color: #5b6660; border-top: 1px solid #e5e8e4; margin-top: 20px; padding-top: 12px;">
            Ring upp på numret ovan${email ? ", eller svara på detta mejl" : ""}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
