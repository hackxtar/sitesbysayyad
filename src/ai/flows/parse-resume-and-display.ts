'use server';

/**
 * @fileOverview Parses text content from an uploaded resume document and dynamically displays the information.
 *
 * - parseResumeAndDisplay - A function that handles the resume parsing process.
 * - ParseResumeAndDisplayInput - The input type for the parseResumeAndDisplay function.
 * - ParseResumeAndDisplayOutput - The return type for the parseResumeAndDisplay function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ParseResumeAndDisplayInputSchema = z.object({
  resumeText: z
    .string()
    .describe('The text content of the uploaded resume document.'),
});
export type ParseResumeAndDisplayInput = z.infer<typeof ParseResumeAndDisplayInputSchema>;

const ParseResumeAndDisplayOutputSchema = z.object({
  parsedResume: z
    .string()
    .describe('The parsed and formatted resume information for display.'),
});
export type ParseResumeAndDisplayOutput = z.infer<typeof ParseResumeAndDisplayOutputSchema>;

export async function parseResumeAndDisplay(input: ParseResumeAndDisplayInput): Promise<ParseResumeAndDisplayOutput> {
  return parseResumeAndDisplayFlow(input);
}

const prompt = ai.definePrompt({
  name: 'parseResumeAndDisplayPrompt',
  input: {schema: ParseResumeAndDisplayInputSchema},
  output: {schema: ParseResumeAndDisplayOutputSchema},
  prompt: `You are a resume parsing expert. You will take the text from a resume and format it in a way that is easy to read and display on a website.

Resume Text: {{{resumeText}}} `,
});

const parseResumeAndDisplayFlow = ai.defineFlow(
  {
    name: 'parseResumeAndDisplayFlow',
    inputSchema: ParseResumeAndDisplayInputSchema,
    outputSchema: ParseResumeAndDisplayOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
