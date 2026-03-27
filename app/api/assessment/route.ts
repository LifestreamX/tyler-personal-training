import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      goals,
      experience,
      ageRange,
      injuries,
      trainingPreference,
      availability,
      additionalInfo,
    } = body;

    // Validate required fields
    if (!name || !email || !phone) {
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

    const emailBody = `
New Assessment Submission

Name: ${name}
Email: ${email}
Phone: ${phone}

Goals: ${Array.isArray(goals) ? goals.join(', ') : goals}
Experience Level: ${experience}
Age Group: ${ageRange}
Injuries/Limitations: ${injuries || 'None'}
Training Preference: ${trainingPreference}
Availability: ${availability}

Additional Info:
${additionalInfo || 'N/A'}
    `.trim();

    const sendResult = await resend.emails.send({
      from: 'Assessment Form <noreply@tyler-allen.com>',
      to: process.env.CONTACT_EMAIL || 'tylerallen@live.com',
      replyTo: email,
      subject: `New Fitness Assessment from ${name}`,
      text: emailBody,
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
        message: 'Assessment received and email sent successfully',
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Assessment form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
