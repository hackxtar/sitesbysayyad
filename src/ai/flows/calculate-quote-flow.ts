
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
  projectType: z.string().describe('The type of project, e.g., "New Website", "Web Application", "WordPress", "Shopify".'),
  features: z.string().describe('A description of the key features and requirements.'),
  design: z.string().describe('The desired design style, e.g., "Simple & Clean", "Professional (Custom Design)", "World-Class".'),
});
export type CalculateQuoteInput = z.infer<typeof CalculateQuoteInputSchema>;

const CalculateQuoteOutputSchema = z.object({
  estimatedCost: z.string().describe('A tentative estimated cost for the project, formatted as "Up to ₹XX,XXX".'),
  breakdown: z.string().describe('A detailed, convincing breakdown of the project modules and flow, formatted as an HTML string.'),
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

  Follow these steps:
  1.  **Verify Email:** Use the 'emailVerifier' tool to check the provided email address: {{{email}}}.
  2.  **Analyze Verification Result:**
      - If the tool returns 'false', it means the email is from a disposable service. In this case, you MUST stop processing. Your entire response should be a JSON object where the 'notes' field explains that disposable emails are not allowed and the other fields are "N/A".
      - If the tool returns 'true', proceed to the next step.
  3.  **Calculate Quote:** If the email is valid, analyze the following project details:
      - Project Type: {{{projectType}}}
      - Desired Design Style: {{{design}}}
      - Key Features: {{{features}}}
  4.  **Provide Estimate:** Based on the project type and design style, provide a single estimated "up to" cost within the specified ranges.

      **Pricing Tiers (Indian Rupees):**
      *   **For "New Website", "Web Application", "Mobile App":**
          *   'Simple & Clean': ₹20,000 to ₹40,000
          *   'Professional (Custom Design)': ₹25,000 to ₹50,000
          *   'World-Class (Animations & Advanced UI)': From ₹60,000 onwards
      *   **For "WordPress", "Shopify", "E-commerce Store":**
          *   'Simple & Clean': ₹8,000 to ₹30,000
          *   'Professional (Custom Design)': ₹12,000 to ₹35,000
          *   'World-Class (Animations & Advanced UI)': From ₹15,000 onwards

      Use the feature description to decide where in the range the estimate should fall. The final estimate should be a single value, like "Up to ₹35,000".
  5.  **Create Breakdown:** Provide a convincing, detailed breakdown of the project modules and flow. **This breakdown must be formatted as an HTML string.** Use tags like <h4> for phase titles, <p> for descriptions, and <ul> with <li> for lists. For example: '<h4>Phase 1: Discovery</h4><p>We will start by...</p>'.
  6.  **Add Concluding Note:** Add a friendly note that this is a preliminary estimate and the price is negotiable after a more detailed discussion.

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
