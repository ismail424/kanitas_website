import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// The recipient is fixed server-side; the endpoint must never relay
// mail to arbitrary addresses supplied by the client.
const RECIPIENT = process.env.CONTACT_RECIPIENT ?? "info@kanitas.se";
const SMTP_HOST = process.env.SMTP_HOST ?? "send.one.com";
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 465);
const SMTP_USER = process.env.SMTP_USER ?? "info@kanitas.se";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(5000),
  // Honeypot: humans never see this field, bots fill it in.
  company: z.string().max(200).optional().or(z.literal("")),
});

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

function rateLimited(ip: string): boolean {
  const now = Date.now();
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
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
    if (rateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const result = ContactSchema.safeParse(await request.json());
    if (!result.success) {
      return NextResponse.json({ error: "Validation failed" }, { status: 400 });
    }

    const { name, email, phone, message, company } = result.data;

    // Honeypot triggered: pretend success, send nothing.
    if (company) {
      return NextResponse.json({ success: true });
    }

    if (!process.env.EMAIL_PASSWORD) {
      console.error("EMAIL_PASSWORD environment variable is not set");
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: process.env.EMAIL_PASSWORD },
    });

    const now = new Date();
    const timestamp = `${now.toLocaleDateString("sv-SE")} kl. ${now.toLocaleTimeString("sv-SE")}`;

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: phone ? escapeHtml(phone) : "Ej angivet",
      message: escapeHtml(message),
    };

    await transporter.sendMail({
      from: `"Kanitas webbplats" <${SMTP_USER}>`,
      to: RECIPIENT,
      replyTo: email,
      subject: `Kontaktformulär: ${name}`,
      text: [
        `Nytt meddelande via kanitas.se (${timestamp})`,
        "",
        `Namn: ${name}`,
        `E-post: ${email}`,
        `Telefon: ${phone || "Ej angivet"}`,
        "",
        "Meddelande:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e3dfd6; border-radius: 12px;">
          <h2 style="color: #1a1915; border-bottom: 3px solid #e8892b; padding-bottom: 10px;">Nytt meddelande via kanitas.se</h2>
          <p style="color: #6e6759;">Mottaget: <strong>${timestamp}</strong></p>
          <div style="background-color: #f7f5f1; padding: 16px; border-radius: 8px; margin: 16px 0;">
            <p><strong>Namn:</strong> ${safe.name}</p>
            <p><strong>E-post:</strong> <a href="mailto:${safe.email}" style="color: #b45f0d;">${safe.email}</a></p>
            <p><strong>Telefon:</strong> ${safe.phone}</p>
          </div>
          <div style="background-color: #f7f5f1; padding: 16px; border-radius: 8px; margin: 16px 0;">
            <p style="white-space: pre-wrap;">${safe.message}</p>
          </div>
          <p style="font-size: 12px; color: #6e6759; border-top: 1px solid #e3dfd6; margin-top: 20px; padding-top: 12px;">
            Svara direkt på detta mejl för att nå avsändaren.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
