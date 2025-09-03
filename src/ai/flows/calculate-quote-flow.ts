
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
import { verifyEmail } from '@/services/email-verifier';


const CalculateQuoteInputSchema = z.object({
  email: z.string().email().describe('The potential client\'s email address.'),
  mobile: z.string().describe('The potential client\'s mobile number.'),
  projectType: z.string().describe('The type of project, e.g., "New Website", "Web Application".'),
  features: z.string().describe('A description of the key features and requirements.'),
  design: z.string().describe('The desired design style, e.g., "Simple & Clean", "Professional (Custom Design)".'),
});
export type CalculateQuoteInput = z.infer<typeof CalculateQuoteInputSchema>;

const CalculateQuoteOutputSchema = z.object({
  estimatedCost: z.string().describe('A tentative estimated cost for the project, formatted as "Up to ₹XX,XXX".'),
  breakdown: z.string().describe('A detailed, convincing breakdown of the project modules and flow.'),
  notes: z.string().describe('A concluding note stating that the quote is an initial estimate and is negotiable.'),
});
export type CalculateQuoteOutput = z.infer<typeof CalculateQuoteOutputSchema>;

export async function calculateQuote(input: CalculateQuoteInput): Promise<CalculateQuoteOutput> {
  return calculateQuoteFlow(input);
}

const emailVerifierTool = ai.defineTool(
  {
    name: 'emailVerifier',
    description: 'Verifies an email address to check if it is from a disposable or temporary email service. Returns true if the email is valid and not from a disposable service, false otherwise.',
    inputSchema: z.object({ email: z.string() }),
    outputSchema: z.boolean(),
  },
  async ({ email }) => {
    return await verifyEmail(email);
  }
);


const prompt = ai.definePrompt({
  name: 'calculateQuotePrompt',
  input: { schema: CalculateQuoteInputSchema },
  output: { schema: CalculateQuoteOutputSchema },
  tools: [emailVerifierTool],
  prompt: `You are an expert project manager at a web development agency called "SitesBySayyad". Your task is to provide a tentative, high-level, and non-binding budget estimate for a potential client based on their project description. You must use Indian Rupees (₹).

  First, you MUST verify the client's email address using the emailVerifier tool. Do not proceed if the email is invalid. If the email is from a temporary or disposable service, you must inform the user in the 'notes' field and stop.

  Analyze the following project details:
  - Project Type: {{{projectType}}}
  - Desired Design Style: {{{design}}}
  - Key Features: {{{features}}}

  Based on these details, provide a single estimated "up to" cost. The cost should be reasonable and friendly for a small-to-medium sized agency in the Indian market. For example, "Up to ₹75,000".

  Next, provide a convincing, detailed breakdown of the project modules and flow to instill confidence in the client. This should look like a mini-project-plan.

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

