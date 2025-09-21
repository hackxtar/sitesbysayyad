
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useTransition } from 'react';
import { Loader2 } from 'lucide-react';
import { submitContactForm } from '@/app/actions';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters long.'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    startTransition(async () => {
      const result = await submitContactForm(values);
      if (result.success) {
        toast({
          title: 'Message Sent!',
          description: result.message,
        });
        form.reset();
      } else {
        toast({
          title: 'Error',
          description: result.message || 'Something went wrong.',
          variant: 'destructive',
        });
      }
    });
  };

  return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} className="py-7 text-base" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your.email@example.com" {...field} className="py-7 text-base" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={6}
                    {...field}
                    className="text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" className="w-full text-lg py-7" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
            Send Message
          </Button>
        </form>
      </Form>
  );
}
