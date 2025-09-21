
'use client';

import type { Metadata } from 'next';
import { useState, useTransition } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Sparkles } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { generateQuote } from '@/app/actions';
import type { QuoteOutput, QuoteInput } from '@/ai/flows/calculate-quote-flow';

// This is client-side metadata, which is not ideal for SEO but works.
// For server components, you can export a `metadata` object directly.
export const metadata: Metadata = {
    title: 'Free Project Quote Calculator',
    description: 'Get an instant, AI-powered cost and timeline estimate for your web or mobile project. Fill out our detailed form to receive a personalized quote for your business needs.',
};

const services = [
    { id: 'custom_website', label: 'Custom Website Development' },
    { id: 'web_application', label: 'Web Application Development' },
    { id: 'wordpress', label: 'WordPress Development' },
    { id: 'mobile_app', label: 'Mobile App Development' },
    { id: 'ecommerce', label: 'E-commerce Solution' },
    { id: 'shopify', label: 'Shopify Development' },
] as const;

const features = [
    { id: 'authentication', label: 'User Authentication (Sign up / Sign in)' },
    { id: 'user_profiles', label: 'User Profiles' },
    { id: 'dashboard', label: 'Admin Dashboard' },
    { id: 'payments', label: 'Payment Integration (Stripe, PayPal, etc.)' },
    { id: 'cms', label: 'Content Management System (CMS)' },
    { id: 'blog', label: 'Blog / Articles Section' },
    { id: 'social_integration', label: 'Social Media Integration' },
    { id: 'api_integration', label: 'Third-party API Integration' },
] as const;

const quoteSchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  email: z.string().email('A valid email is required.'),
  company: z.string().optional(),
  services: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one service.',
  }),
  projectDescription: z.string().min(30, 'Please describe your project in at least 30 characters.'),
  features: z.array(z.string()).optional(),
  design: z.enum(['no_idea', 'have_design', 'need_design'], {
    required_error: 'Please select a design preference.',
  }),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

export default function QuotePage() {
    const { toast } = useToast();
    const [isPending, startTransition] = useTransition();
    const [quoteResult, setQuoteResult] = useState<QuoteOutput | null>(null);

    const form = useForm<QuoteFormValues>({
        resolver: zodResolver(quoteSchema),
        defaultValues: {
            name: '',
            email: '',
            company: '',
            services: [],
            projectDescription: '',
            features: [],
            budget: '',
            timeline: '',
        },
    });

    function onSubmit(values: QuoteFormValues) {
        setQuoteResult(null);
        startTransition(async () => {
            const result = await generateQuote(values as QuoteInput);
            if (result.success && result.data) {
                toast({
                    title: 'Quote Sent!',
                    description: 'Your personalized quote has been sent to your email.',
                });
                setQuoteResult(result.data);
            } else {
                toast({
                    title: 'Error',
                    description: result.message || 'Something went wrong.',
                    variant: 'destructive',
                });
            }
        });
    }

    return (
        <>
            <Header />
            <main className="py-20 md:py-28 bg-secondary">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-foreground sm:text-5xl">Project Quote Calculator</h1>
                        <p className="mt-4 text-xl text-muted-foreground">Fill out the form below to get an AI-powered estimate for your project.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <Card className="bg-card shadow-lg">
                            <CardContent className="p-8">
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <FormField control={form.control} name="name" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Full Name</FormLabel>
                                                    <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={form.control} name="email" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email</FormLabel>
                                                    <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </div>
                                        <FormField control={form.control} name="company" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Company (Optional)</FormLabel>
                                                <FormControl><Input placeholder="Your Company, Inc." {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />

                                        <FormField control={form.control} name="services" render={() => (
                                            <FormItem>
                                                <FormLabel>What services are you interested in?</FormLabel>
                                                <FormDescription>Select all that apply.</FormDescription>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {services.map((item) => (
                                                    <FormField key={item.id} control={form.control} name="services" render={({ field }) => (
                                                        <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4 has-[[data-state=checked]]:bg-primary/10">
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value?.includes(item.id)}
                                                                    onCheckedChange={(checked) => {
                                                                        return checked
                                                                            ? field.onChange([...field.value, item.id])
                                                                            : field.onChange(field.value?.filter((value) => value !== item.id));
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">{item.label}</FormLabel>
                                                        </FormItem>
                                                    )} />
                                                ))}
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )} />

                                        <FormField control={form.control} name="projectDescription" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Project Description</FormLabel>
                                                <FormControl><Textarea placeholder="Describe your project, its goals, and target audience." rows={5} {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />

                                        <FormField control={form.control} name="features" render={() => (
                                            <FormItem>
                                                <FormLabel>What features do you need?</FormLabel>
                                                <FormDescription>Select any features you know you'll need.</FormDescription>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {features.map((item) => (
                                                    <FormField key={item.id} control={form.control} name="features" render={({ field }) => (
                                                        <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4 has-[[data-state=checked]]:bg-primary/10">
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value?.includes(item.id)}
                                                                    onCheckedChange={(checked) => {
                                                                        return checked
                                                                            ? field.onChange([...(field.value || []), item.id])
                                                                            : field.onChange(field.value?.filter((value) => value !== item.id));
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">{item.label}</FormLabel>
                                                        </FormItem>
                                                    )} />
                                                ))}
                                                 </div>
                                                <FormMessage />
                                            </FormItem>
                                        )} />

                                        <FormField control={form.control} name="design" render={({ field }) => (
                                            <FormItem className="space-y-3">
                                                <FormLabel>Do you have a design for the project?</FormLabel>
                                                <FormControl>
                                                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                                            <FormControl><RadioGroupItem value="have_design" /></FormControl>
                                                            <FormLabel className="font-normal">Yes, I have a complete design (e.g., Figma, Adobe XD).</FormLabel>
                                                        </FormItem>
                                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                                            <FormControl><RadioGroupItem value="need_design" /></FormControl>
                                                            <FormLabel className="font-normal">No, I need a design created.</FormLabel>
                                                        </FormItem>
                                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                                            <FormControl><RadioGroupItem value="no_idea" /></FormControl>
                                                            <FormLabel className="font-normal">I'm not sure, I need guidance.</FormLabel>
                                                        </FormItem>
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <FormField control={form.control} name="budget" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Estimated Budget (Optional)</FormLabel>
                                                    <FormControl><Input placeholder="e.g., $5,000 - $10,000" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={form.control} name="timeline" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Desired Timeline (Optional)</FormLabel>
                                                    <FormControl><Input placeholder="e.g., 3-6 months" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </div>

                                        <Button type="submit" size="lg" className="w-full text-lg py-7" disabled={isPending}>
                                            {isPending ? (
                                                <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Generating Quote...</>
                                            ) : (
                                                <><Sparkles className="mr-2 h-5 w-5" /> Get AI-Powered Quote</>
                                            )}
                                        </Button>
                                    </form>
                                </Form>
                            </CardContent>
                        </Card>
                        <div className="sticky top-28">
                            <Card className="shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center"><Sparkles className="mr-2 h-5 w-5 text-primary" /> Your Estimated Quote</CardTitle>
                                    <CardDescription>
                                        This is an AI-generated estimate. A formal quote will be provided after a consultation.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {isPending && (
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center">
                                                <span className="h-6 w-1/3 bg-muted rounded animate-pulse"></span>
                                                <span className="h-6 w-1/4 bg-muted rounded animate-pulse"></span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="h-6 w-1/4 bg-muted rounded animate-pulse"></span>
                                                <span className="h-6 w-1/3 bg-muted rounded animate-pulse"></span>
                                            </div>
                                            <div className="pt-4 space-y-2">
                                                <span className="h-5 w-full bg-muted rounded animate-pulse"></span>
                                                <span className="h-5 w-full bg-muted rounded animate-pulse"></span>
                                                <span className="h-5 w-3/4 bg-muted rounded animate-pulse"></span>
                                            </div>
                                        </div>

                                    )}
                                    {!isPending && !quoteResult && (
                                         <div className="text-center text-muted-foreground py-12">
                                            <p>Your quote will appear here once you submit the form.</p>
                                        </div>
                                    )}
                                    {quoteResult && (
                                        <div className="space-y-6">
                                            <div>
                                                <h3 className="font-semibold text-foreground">Estimated Cost</h3>
                                                <p className="text-2xl font-bold text-primary">${quoteResult.estimatedCost.min} - ${quoteResult.estimatedCost.max}</p>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-foreground">Estimated Timeline</h3>
                                                <p className="text-xl font-semibold text-muted-foreground">{quoteResult.estimatedTimeline.minWeeks} - {quoteResult.estimatedTimeline.maxWeeks} weeks</p>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-foreground">Feature Breakdown</h3>
                                                <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                                                    {quoteResult.featureBreakdown.map(f => <li key={f.feature}><strong>{f.feature}:</strong> {f.description}</li>)}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
