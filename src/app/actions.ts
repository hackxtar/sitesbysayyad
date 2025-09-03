
'use server';

import { parseResumeAndDisplay } from '@/ai/flows/parse-resume-and-display';
import { z } from 'zod';

export async function handleResumeUpload(resumeText: string) {
  try {
    const result = await parseResumeAndDisplay({ resumeText });
    return { success: true, data: result.parsedResume };
  } catch (error) {
    console.error('Error parsing resume:', error);
    return { success: false, error: 'Failed to parse resume. Please try again.' };
  }
}

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors below and try again.',
    };
  }

  // In a real application, you would send an email or save to a database.
  // For this demonstration, we are logging the data to the server console.
  console.log('New contact form submission:', validatedFields.data);

  return {
    message: 'Thank you for your message! I will get back to you soon.',
    errors: null,
  };
}
