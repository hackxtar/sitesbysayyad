
'use server';

import { parseResumeAndDisplay, ParseResumeAndDisplayInput } from "@/ai/flows/parse-resume-and-display";
import { calculateQuote, CalculateQuoteInput, CalculateQuoteOutput } from '@/ai/flows/calculate-quote-flow';
import { sendMail } from "@/services/email-service";


export async function handleResumeUpload(resumeText: string) {
  try {
    const input: ParseResumeAndDisplayInput = { resumeText };
    const { parsedResume } = await parseResumeAndDisplay(input);
    return { success: true, data: parsedResume };
  } catch (error) {
    console.error('Error parsing resume:', error);
    return { success: false, error: 'Failed to parse resume. Please try again.' };
  }
}

export async function submitContactForm(prevState: any, formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
        // Send notification to site owner
        await sendMail({
            to: 'info@sitesbysayyad.com', // Your email address
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <p>You have a new message from your website's contact form:</p>
                <ul>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                </ul>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        // Simulate a network delay for the rest of the process
        await new Promise(resolve => setTimeout(resolve, 500));
        
        return { message: "Thank you for your message! We'll get back to you soon.", errors: null };

    } catch (error) {
        console.error("Error in submitContactForm:", error);
        return { message: "An unexpected error occurred while sending your message. Please try again later.", errors: null };
    }
}


export async function generateQuote(input: CalculateQuoteInput): Promise<CalculateQuoteOutput> {
    try {
        const quote = await calculateQuote(input);

        // Do not send email if the quote was not generated due to a disposable email address
        if (quote.notes && quote.notes.includes('disposable')) {
            return quote;
        }

        // Send the quote to the user's email
        await sendMail({
            to: input.email,
            subject: 'Your Project Quote from SitesBySayyad',
            html: `
                <h1>Here is your estimated project quote</h1>
                <p>Thank you for your interest in SitesBySayyad. Based on the details you provided, here is a tentative estimate for your project.</p>
                
                <h2>Estimated Budget: ${quote.estimatedCost}</h2>
                
                <h3>Proposed Project Flow:</h3>
                <div>${quote.breakdown}</div>
                
                <hr>
                
                <p><strong>Please Note:</strong> ${quote.notes}</p>
                
                <p>We'd love to discuss this further with you. Please feel free to reply to this email with any questions.</p>
                
                <p>Best regards,<br>The SitesBySayyad Team</p>
            `,
        });

        return quote;
    } catch (error) {
        console.error("Error generating quote and sending email:", error);
        // Re-throw the error to be caught by the client-side transition
        throw new Error('Failed to generate or email the quote.');
    }
}
    
