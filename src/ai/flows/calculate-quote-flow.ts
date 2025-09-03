
'use server';

/**
 * @fileOverview Calculates a tentative project quote using AI.
 *
 * - calculateQuote - A function that handles the quote calculation process.
 * - CalculateQuoteInput - The input type for the calculateQuote function.
 * - CalculateQuoteOutput - The return type for the calculateQuote function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const CalculateQuoteInputSchema = z.object({
  projectType: z.string().describe('The type of project, e.g., "New Website", "Web Application".'),
  features: z.string().describe('A description of the key features and requirements.'),
  design: z.string().describe('The desired design style, e.g., "Simple & Clean", "Professional (Custom Design)".'),
});
export type CalculateQuoteInput = z.infer<typeof CalculateQuoteInputSchema>;

const CalculateQuoteOutputSchema = z.object({
  estimatedCost: z.string().describe('A tentative estimated cost range for the project, e.g., "$5,000 - $8,000".'),
  breakdown: z.string().describe('A brief, high-level breakdown of the estimated work involved.'),
  notes: z.string().describe('A concluding note stating that the quote is an initial estimate and is negotiable.'),
});
export type CalculateQuoteOutput = z.infer<typeof CalculateQuoteOutputSchema>;

export async function calculateQuote(input: CalculateQuoteInput): Promise<CalculateQuoteOutput> {
  return calculateQuoteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'calculateQuotePrompt',
  input: { schema: CalculateQuoteInputSchema },
  output: { schema: CalculateQuoteOutputSchema },
  prompt: `You are an expert project manager at a web development agency called "SitesBySayyad". Your task is to provide a tentative, high-level, and non-binding budget estimate for a potential client based on their project description.

  Analyze the following project details:
  - Project Type: {{{projectType}}}
  - Desired Design Style: {{{design}}}
  - Key Features: {{{features}}}

  Based on these details, provide an estimated cost range. The cost should be reasonable for a small-to-medium sized agency.

  Provide a very brief, high-level breakdown of the work. Do not promise specific technologies or hours. Keep it general.

  Finally, and most importantly, add a friendly note that this is a preliminary estimate and the price is negotiable after a more detailed discussion. Frame it as a starting point for a conversation.

  Do not output any introductory text like "Here is the quote". Just provide the JSON object directly.
  `,
});

const calculateQuoteFlow = ai.defineFlow(
  {
    name: 'calculateQuoteFlow',
    inputSchema: CalculateQuoteInputSchema,
    outputSchema: CalculateQuoteOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
