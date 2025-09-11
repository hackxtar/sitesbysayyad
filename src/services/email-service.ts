
'use server';

import nodemailer from 'nodemailer';

interface MailOptions {
  to: string;
  subject: string;
  html: string;
}

// Ensure that the environment variables are loaded
import 'dotenv/config';

const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

if (!user || !pass) {
  console.warn('Email credentials (EMAIL_USER, EMAIL_PASS) are not set in .env file. Email sending will be disabled.');
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user,
    pass,
  },
});

export async function sendMail({ to, subject, html }: MailOptions) {
  // If credentials are not set, don't attempt to send email
  if (!user || !pass) {
    console.log('Email sending is disabled. Would have sent email to:', to);
    console.log('Subject:', subject);
    return;
  }

  const mailOptions = {
    from: `"SitesBySayyad" <${user}>`,
    to,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to', to);
  } catch (error) {
    console.error('Error sending email:', error);
    // In a production app, you might want to throw this error
    // or handle it in a way that the user is notified.
  }
}
    