
'use server';

import { parseResumeAndDisplay, ParseResumeAndDisplayInput } from "@/ai/flows/parse-resume-and-display";
import { calculateQuote, CalculateQuoteInput, CalculateQuoteOutput } from '@/ai/flows/calculate-quote-flow';


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
  // This is a mock function. In a real app, you would send this data to a server.
  console.log('Form submitted:');
  console.log('Name:', formData.get('name'));
  console.log('Email:', formData.get('email'));
  console.log('Message:', formData.get('message'));

  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a successful submission
  return { message: "Thank you for your message! We'll get back to you soon.", errors: null };

  // Simulate an error
  // return { message: "An error occurred. Please try again.", errors: { email: "Invalid email" } };
}

export async function generateQuote(input: CalculateQuoteInput): Promise<CalculateQuoteOutput> {
  return await calculateQuote(input);
}
