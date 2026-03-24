import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 },
      );
    }

    // Send email using Resend
    const sendResult = await resend.emails.send({
      from: 'Contact Form <noreply@tyler-allen.com>',
      to: process.env.CONTACT_EMAIL || 'tylerallen@live.com',
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nMessage: ${message}`,
    });

    if (sendResult.error) {
      console.error('Resend error:', sendResult.error);
      return NextResponse.json(
        { error: 'Failed to send email', details: sendResult.error },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message received and email sent successfully',
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
