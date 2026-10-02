import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { contactTopics } from "@/lib/site";

// Run the form handler in Stockholm, next to the mail server and the people
// whose details it carries (the privacy policy says so).
export const preferredRegion = "arn1";

// The recipient is fixed server-side; the endpoint must never relay
// mail to arbitrary addresses supplied by the client.
const RECIPIENT = process.env.CONTACT_RECIPIENT ?? "info@kanitas.se";
const SMTP_HOST = process.env.SMTP_HOST ?? "send.one.com";
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 465);
const SMTP_USER = process.env.SMTP_USER ?? "info@kanitas.se";

// A real request is a few hundred bytes; anything near this is not a person.
const MAX_BODY_BYTES = 16_384;

// The form asks for a phone number first and everything else after, so a
// request is valid with nothing but a number we can call back. The rules
// match the form's: any separators, at least seven digits. Optional fields
// never fail a request; a lead is worth more than tidy input.
const ContactSchema = z.object({
  phone: z
    .string()
    .max(40)
    .transform((value) => value.replace(/[^\d+]+/g, " ").trim())
    .refine((value) => value.replace(/\D/g, "").length >= 7),
  name: z.string().trim().max(200).optional().catch(undefined),
  email: z.string().trim().max(200).optional().catch(undefined),
  topic: z.enum(contactTopics).optional().catch(undefined),
  message: z.string().trim().max(5000).optional().catch(undefined),
});

const isEmail = (value: string) => z.string().email().safeParse(value).success;

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
  // Keep the map bounded: drop expired entries, then the oldest if needed.
  if (hits.size > MAX_TRACKED_IPS) {
    for (const [key, value] of hits) {
      if (now > value.reset) hits.delete(key);
    }
    for (const key of hits.keys()) {
      if (hits.size <= MAX_TRACKED_IPS) break;
      hits.delete(key);
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

/** The client's address as the hosting platform saw it. x-real-ip and the
 *  last x-forwarded-for entry are set by the proxy; the first entry of
 *  x-forwarded-for is whatever the client claimed. */
function clientIp(request: NextRequest): string | null {
  return (
    request.headers.get("x-real-ip") ??
    request.headers.get("x-forwarded-for")?.split(",").at(-1)?.trim() ??
    null
  );
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Only our own page may post here: a cross-site HTML form can send
    // text/plain without a preflight, but not application/json.
    if (!request.headers.get("content-type")?.startsWith("application/json")) {
      return NextResponse.json(
        { error: "Unsupported media type" },
        { status: 415 },
      );
    }
    const fetchSite = request.headers.get("sec-fetch-site");
    if (fetchSite && fetchSite !== "same-origin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    if (Number(request.headers.get("content-length") ?? 0) > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Too large" }, { status: 413 });
    }
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Too large" }, { status: 413 });
    }

    let body: unknown = null;
    try {
      body = JSON.parse(raw);
    } catch {
      // Falls through to the type check below.
    }
    if (body === null || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // Honeypot triggered: pretend success, send nothing.
    if ((body as Record<string, unknown>).hp_kanitas) {
      return NextResponse.json({ success: true });
    }

    const result = ContactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: "Validation failed" }, { status: 400 });
    }

    // Counted only for requests that would send mail, so a visitor fixing a
    // typo never uses up their attempts. Without an identifiable client the
    // request is let through rather than pooled with everyone else.
    const ip = clientIp(request);
    if (ip && rateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
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
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    });

    // The server runs in UTC; whoever reads the mail is in Sweden.
    const now = new Date();
    const zone = { timeZone: "Europe/Stockholm" } as const;
    const timestamp = `${now.toLocaleDateString("sv-SE", zone)} kl. ${now.toLocaleTimeString("sv-SE", { ...zone, hour: "2-digit", minute: "2-digit" })}`;

    const missing = "Ej angivet";
    const safe = {
      name: name ? escapeHtml(name) : missing,
      email: email ? escapeHtml(email) : missing,
      phone: escapeHtml(phone),
      topic: topic ? escapeHtml(topic) : missing,
      message: message ? escapeHtml(message) : "Inget meddelande, ring upp.",
    };
    const subjectName = name ? `: ${name.replace(/[\r\n]+/g, " ")}` : "";
    // An address that does not parse is still shown, just not replied to.
    const replyTo = email && isEmail(email) ? email : undefined;

    // Inline styles are all a mail client reads; the colours are the site's
    // petrol palette.
    await transporter.sendMail({
      from: `"Kanitas webbplats" <${SMTP_USER}>`,
      to: RECIPIENT,
      replyTo,
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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #dbe2e2; border-radius: 12px;">
          <h2 style="color: #0f2229; border-bottom: 3px solid #134b58; padding-bottom: 10px;">Ny förfrågan via kanitas.se</h2>
          <p style="color: #5a6a70;">Mottaget: <strong>${timestamp}</strong></p>
          <div style="background-color: #f1f4f4; padding: 16px; border-radius: 8px; margin: 16px 0;">
            <p><strong>Telefon:</strong> <a href="tel:${safe.phone.replace(/\s/g, "")}" style="color: #134b58;">${safe.phone}</a></p>
            <p><strong>Namn:</strong> ${safe.name}</p>
            <p><strong>E-post:</strong> ${safe.email}</p>
            <p><strong>Ärende:</strong> ${safe.topic}</p>
          </div>
          <div style="background-color: #f1f4f4; padding: 16px; border-radius: 8px; margin: 16px 0;">
            <p style="white-space: pre-wrap;">${safe.message}</p>
          </div>
          <p style="font-size: 12px; color: #5a6a70; border-top: 1px solid #dbe2e2; margin-top: 20px; padding-top: 12px;">
            Ring upp på numret ovan${replyTo ? " eller svara på det här mejlet" : ""}.
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
