import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate the input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create a test account with Ethereal for development
    // In production, you would use your actual SMTP credentials
    const testAccount = await nodemailer.createTestAccount();

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Contact Form" <${email}>`,
      to: 'jakedevsthings@gmail.com', // Your email address
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    // For development, log the Ethereal URL to view the email
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        previewUrl: nodemailer.getTestMessageUrl(info)
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
