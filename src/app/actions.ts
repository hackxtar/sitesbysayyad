
'use server';

import { z } from 'zod';
import { sendMail } from '@/services/email-service';
import { verifyEmail } from '@/services/email-verifier';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters long.'),
});

export async function submitContactForm(formData: { name: string; email: string; message: string; }) {
  const parsed = contactSchema.safeParse(formData);

  if (!parsed.success) {
    return { success: false, message: 'Invalid form data.', errors: parsed.error.flatten().fieldErrors };
  }

  const { name, email, message } = parsed.data;

  const isEmailValid = await verifyEmail(email);
  if (!isEmailValid) {
    return { success: false, message: 'Email address is from a disposable provider.' };
  }

  const subject = `New Contact Form Submission from ${name}`;
  const html = `
    <h1>New Contact Form Submission</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  try {
    await sendMail({
      to: process.env.EMAIL_USER || 'test@example.com',
      subject,
      html,
    });
    return { success: true, message: 'Thank you for your message! We will get back to you soon.' };
  } catch (error) {
    console.error('Failed to send contact email:', error);
    return { success: false, message: 'Something went wrong. Please try again later.' };
  }
}
