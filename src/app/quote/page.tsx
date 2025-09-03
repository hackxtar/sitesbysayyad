
'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { generateQuote } from '@/app/actions';
import Header from '@/components/Header';
import Footer from '@/components/layout/Footer';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const quoteSchema = z.object({
  projectType: z.string({ required_error: 'Please select a project type.' }),
  features: z.string().min(20, 'Please describe your key features in at least 20 characters.'),
  design: z.string({ required_error: 'Please select a design style.' }),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

interface QuoteResponse {
  estimatedCost: string;
  breakdown: string;
  notes: string;
}

export default function QuotePage() {
  const [isPending, startTransition] = useTransition();
  const [quoteResponse, setQuoteResponse] = useState<QuoteResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      features: '',
    },
  });

  const onSubmit = (values: QuoteFormValues) => {
    setError(null);
    setQuoteResponse(null);
    startTransition(async () => {
      try {
        const response = await generateQuote(values);
        setQuoteResponse(response);
      } catch (err) {
        setError('An unexpected error occurred. Please try again.');
      }
    });
  };

  return (
    <>
      <Header />
      <main className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl">Get a Project Estimate</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Fill out the form below and our AI will generate a tentative, negotiable quote for your project.
            </p>
          </div>
          <Card className="bg-card border shadow-lg">
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>The more detail you provide, the more accurate the estimate will be.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a project type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="new-website">New Website</SelectItem>
                            <SelectItem value="web-application">Web Application</SelectItem>
                            <SelectItem value="mobile-app">Mobile App (iOS & Android)</SelectItem>
                            <SelectItem value="ecommerce-store">E-commerce Store</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="design"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Design Style</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a design style" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="simple-template">Simple & Clean (Template-based)</SelectItem>
                            <SelectItem value="professional-custom">Professional (Custom Design)</SelectItem>
                            <SelectItem value="world-class-animation">World-Class (Animations & Advanced UI)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="features"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Key Features & Requirements</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe the main features, e.g., user accounts, blog, payment integration, admin dashboard..."
                            rows={6}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full" disabled={isPending}>
                    {isPending && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                    Calculate My Quote
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {isPending && (
            <div className="text-center p-8 mt-8 rounded-md bg-card">
              <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
              <p className="mt-4 text-muted-foreground">Our AI is crunching the numbers...</p>
            </div>
          )}

          {error && (
            <Alert variant="destructive" className="mt-8">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {quoteResponse && !isPending && (
            <Card className="mt-8 bg-card border shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Your Estimated Quote</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg">Estimated Budget</h3>
                  <p className="text-3xl font-bold text-foreground">{quoteResponse.estimatedCost}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Estimated Breakdown</h3>
                  <p className="whitespace-pre-wrap text-muted-foreground">{quoteResponse.breakdown}</p>
                </div>
                <Alert>
                  <AlertTitle>Please Note</AlertTitle>
                  <AlertDescription className="whitespace-pre-wrap">{quoteResponse.notes}</AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}
