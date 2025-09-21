
'use server';
/**
 * @fileOverview A project quote calculation AI agent.
 *
 * - calculateQuote - A function that handles the project quote calculation process.
 * - QuoteInput - The input type for the calculateQuote function.
 * - QuoteOutput - The return type for the calculateQuote function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const QuoteInputSchema = z.object({
    name: z.string().describe('The full name of the potential client.'),
    email: z.string().email().describe('The email address of the potential client.'),
    company: z.string().optional().describe('The company name of the potential client, if provided.'),
    services: z.array(z.string()).describe('A list of services the client is interested in. Possible values: custom_website, web_application, wordpress, mobile_app, ecommerce, shopify.'),
    projectDescription: z.string().describe('A detailed description of the project provided by the client.'),
    features: z.array(z.string()).optional().describe('A list of specific features the client has requested. Possible values: authentication, user_profiles, dashboard, payments, cms, blog, social_integration, api_integration.'),
    design: z.enum(['no_idea', 'have_design', 'need_design']).describe("The client's preference regarding the project design."),
    budget: z.string().optional().describe('The client\'s estimated budget, if provided.'),
    timeline: z.string().optional().describe('The client\'s desired timeline for the project, if provided.'),
});
export type QuoteInput = z.infer<typeof QuoteInputSchema>;

const QuoteOutputSchema = z.object({
    projectName: z.string().describe('A short, descriptive name for the project based on the user\'s input.'),
    projectDescription: z.string().describe('A concise, one-paragraph summary of the project understanding.'),
    estimatedCost: z.object({
        min: z.number().describe('The minimum estimated cost for the project in USD.'),
        max: z.number().describe('The maximum estimated cost for the project in USD.'),
    }).describe('The estimated cost range for the project.'),
    estimatedTimeline: z.object({
        minWeeks: z.number().describe('The minimum estimated number of weeks to complete the project.'),
        maxWeeks: z.number().describe('The maximum estimated number of weeks to complete the project.'),
    }).describe('The estimated timeline range for the project.'),
    featureBreakdown: z.array(z.object({
        feature: z.string().describe('The name of the feature.'),
        description: z.string().describe('A brief description of what this feature entails.'),
    })).describe('A breakdown of the key features included in the estimate.'),
});
export type QuoteOutput = z.infer<typeof QuoteOutputSchema>;

export async function calculateQuote(input: QuoteInput): Promise<QuoteOutput> {
    return calculateQuoteFlow(input);
}

const prompt = ai.definePrompt({
    name: 'calculateQuotePrompt',
    input: { schema: QuoteInputSchema },
    output: { schema: QuoteOutputSchema },
    prompt: `
        You are a project quote calculator for a web development agency called "SitesBySayyad".
        Your task is to generate a preliminary project quote based on the user's input.

        Here is some context on our pricing and timelines:
        - Custom Website (Brochure-style): $2,000 - $7,000, 4-8 weeks.
        - Web Application (SaaS, custom logic): $10,000 - $50,000+, 12-24 weeks.
        - WordPress Development: $3,000 - $15,000, 6-12 weeks.
        - Mobile App (React Native): $15,000 - $60,000+, 16-32 weeks.
        - E-commerce (Custom): $8,000 - $40,000, 10-20 weeks.
        - Shopify Development: $4,000 - $25,000, 4-10 weeks.

        Additional feature costs:
        - Authentication: +$1,000, +1 week
        - User Profiles: +$1,500, +1 week
        - Admin Dashboard: +$3,000, +3 weeks
        - Payment Integration: +$2,500, +2 weeks
        - CMS Integration: +$2,000, +2 weeks
        - Blog Setup: +$1,000, +1 week
        - API Integration (per integration): +$2,000, +2 weeks

        Design:
        - If the user has a design ('have_design'), use the lower end of the cost/time estimates.
        - If the user needs a design ('need_design'), add $2,000 - $8,000 and 2-4 weeks to the estimate.
        - If 'no_idea', use a mid-to-high range for cost/time.

        Analyze the user's request below and generate a quote.
        - The project name and description should be inferred from the user's project description.
        - The cost and timeline should be a reasonable range based on the services and features requested.
        - The feature breakdown should list the key components you've identified and priced.
        - Be realistic. A simple brochure site with a blog isn't a $50,000 project. A complex SaaS web app is not a $2,000 project.
        - If the user provides a budget or timeline, you can consider it, but your estimate should be based on the work required.

        User Request:
        - Name: {{name}}
        - Email: {{email}}
        - Company: {{#if company}}{{company}}{{else}}N/A{{/if}}
        - Services: {{#each services}}{{this}}{{#unless @last}}, {{/unless}}{{/each}}
        - Project Description: {{{projectDescription}}}
        - Features: {{#if features}}{{#each features}}{{this}}{{#unless @last}}, {{/unless}}{{/each}}{{else}}None specified{{/if}}
        - Design Preference: {{design}}
        - Budget: {{#if budget}}{{budget}}{{else}}N/A{{/if}}
        - Timeline: {{#if timeline}}{{timeline}}{{else}}N/A{{/if}}
    `,
});

const calculateQuoteFlow = ai.defineFlow(
    {
        name: 'calculateQuoteFlow',
        inputSchema: QuoteInputSchema,
        outputSchema: QuoteOutputSchema,
    },
    async (input) => {
        const { output } = await prompt(input);
        return output!;
    }
);
