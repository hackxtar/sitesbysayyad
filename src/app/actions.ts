
'use server';

import { z } from 'zod';
import { sendMail } from '@/services/email-service';
import { verifyEmail } from '@/services/email-verifier';
import { calculateQuote, type QuoteInput } from '@/ai/flows/calculate-quote-flow';

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

export async function generateQuote(values: QuoteInput) {
    try {
        const quoteResult = await calculateQuote(values);

        const subject = `Your Project Quote from SitesBySayyad`;
        const html = `
            <h1>Your Project Quote</h1>
            <p>Thank you for your interest, ${values.name}. Here is a preliminary quote for your project.</p>
            <h2>Project: ${quoteResult.projectName}</h2>
            <p>${quoteResult.projectDescription}</p>
            <h3>Estimated Cost: $${quoteResult.estimatedCost.min} - $${quoteResult.estimatedCost.max}</h3>
            <h3>Estimated Timeline: ${quoteResult.estimatedTimeline.minWeeks} - ${quoteResult.estimatedTimeline.maxWeeks} weeks</h3>
            
            <h2>Feature Breakdown:</h2>
            <ul>
                ${quoteResult.featureBreakdown.map(feature => `<li><strong>${feature.feature}:</strong> ${feature.description}</li>`).join('')}
            </ul>
            <p><strong>Disclaimer:</strong> This is an AI-generated estimate. A detailed, formal quote will be provided after a consultation.</p>
        `;

        await sendMail({
            to: values.email,
            subject,
            html,
        });

        // Also send a notification to the admin
        const adminSubject = `New Quote Generated for ${values.name}`;
        const adminHtml = `
          <h1>New Quote Generated</h1>
          <p>A new quote was generated for a potential client.</p>
          <p><strong>Name:</strong> ${values.name}</p>
          <p><strong>Email:</strong> ${values.email}</p>
          <p><strong>Company:</strong> ${values.company || 'N/A'}</p>
          <hr/>
          <h2>AI Generated Quote Details:</h2>
          <p><strong>Estimated Cost:</strong> $${quoteResult.estimatedCost.min} - $${quoteResult.estimatedCost.max}</p>
          <p><strong>Estimated Timeline:</strong> ${quoteResult.estimatedTimeline.minWeeks} - ${quoteResult.estimatedTimeline.maxWeeks} weeks</p>
          <hr/>
          <h2>User Request:</h2>
          <pre>${JSON.stringify(values, null, 2)}</pre>
        `;

        await sendMail({
            to: process.env.EMAIL_USER || 'test@example.com',
            subject: adminSubject,
            html: adminHtml,
        });


        return { success: true, message: 'Your quote has been sent to your email! Please check your inbox.', data: quoteResult };
    } catch (error) {
        console.error("Error generating quote:", error);
        return { success: false, message: 'There was an error generating your quote. Please try again later.' };
    }
}
