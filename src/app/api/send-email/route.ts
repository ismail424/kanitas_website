// File: /app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Define the request schema using Zod for strict type validation
const EmailRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  recipient: z.string().email("Invalid recipient email"),
  subject: z.string().min(1, "Subject is required"),
});

// Interface for nodemailer transport options
interface TransportOptions {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string | undefined;
  };
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Parse and validate the request body
    const body = await request.json();
    const result = EmailRequestSchema.safeParse(body);
    
    if (!result.success) {
      // Return validation errors
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: result.error.format() 
        },
        { status: 400 }
      );
    }
    
    // Extract validated data
    const { name, email, phone, message, recipient, subject } = result.data;
    
    // Validate that we have an email password in environment variables
    if (!process.env.EMAIL_PASSWORD) {
      throw new Error('EMAIL_PASSWORD environment variable is not set');
    }

    // Get the current date and time
    const now = new Date();
    const formattedDate = now.toLocaleDateString('sv-SE'); // Swedish date format
    const formattedTime = now.toLocaleTimeString('sv-SE'); // Swedish time format

    // Configure email transporter with your One.com email settings
    const transportOptions: TransportOptions = {
      host: 'send.one.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: 'info@kanitas.se', // your email
        pass: process.env.EMAIL_PASSWORD, // use environment variable for security
      },
    };

    const transporter = nodemailer.createTransport(transportOptions);

    // Format the email content with enhanced styling
    const emailContent = `
      ========== NYTT KONTAKTFORMULÄR - KANITAS AB ==========
      
      Mottaget: ${formattedDate} kl. ${formattedTime}
      
      === KONTAKTINFORMATION ===
      Namn: ${name}
      E-post: ${email}
      Telefon: ${phone || 'Ej angivet'}
      
      === MEDDELANDE ===
      ${message}
      
      =======================================
      
      Detta är ett automatiskt meddelande från Kanitas AB webbplats.
      Vänligen svara inte på detta e-postmeddelande, utan kontakta kunden direkt via deras kontaktuppgifter ovan.
    `;

    // Create a nicer HTML version for email clients that support it
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">Nytt kontaktformulär - Kanitas AB</h2>
        
        <p style="color: #666;">Mottaget: <strong>${formattedDate}</strong> kl. <strong>${formattedTime}</strong></p>
        
        <div style="background-color: #f8fafc; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <h3 style="color: #2563eb; margin-top: 0;">Kontaktinformation</h3>
          <p><strong>Namn:</strong> ${name}</p>
          <p><strong>E-post:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
          <p><strong>Telefon:</strong> ${phone ? `<a href="tel:${phone}" style="color: #2563eb;">${phone}</a>` : 'Ej angivet'}</p>
        </div>
        
        <div style="background-color: #f8fafc; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <h3 style="color: #2563eb; margin-top: 0;">Meddelande</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        
        <div style="font-size: 12px; color: #666; border-top: 1px solid #e0e0e0; margin-top: 20px; padding-top: 10px;">
          <p>Detta är ett automatiskt meddelande från Kanitas AB webbplats.</p>
          <p>Vänligen svara inte på detta e-postmeddelande, utan kontakta kunden direkt via deras kontaktuppgifter ovan.</p>
        </div>
      </div>
    `;

    // Send the email with both text and HTML versions
    await transporter.sendMail({
      from: '"Kanitas Webbplats" <info@kanitas.se>',
      to: recipient,
      subject: `${subject} från ${name}`,
      text: emailContent,
      html: htmlContent,
    });

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending failed:', error);
    
    // Type-safe error handling
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    // Return error response
    return NextResponse.json(
      { error: 'Failed to send email', details: errorMessage },
      { status: 500 }
    );
  }
}