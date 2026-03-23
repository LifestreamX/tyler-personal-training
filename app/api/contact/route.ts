import { NextRequest, NextResponse } from 'next/server';

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

    // TODO: Integrate with your email service
    // Options:
    // 1. SendGrid: https://www.sendgrid.com/
    // 2. Resend: https://resend.com/
    // 3. Nodemailer with SMTP
    // 4. AWS SES

    // For now, just log the data (replace with actual email service)
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    // Example with environment variable for email service
    // const apiKey = process.env.SENDGRID_API_KEY;
    // await sendEmail({ to: process.env.CONTACT_EMAIL, from: email, subject: `Contact from ${name}`, body: message });

    return NextResponse.json(
      { success: true, message: 'Message received successfully' },
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
