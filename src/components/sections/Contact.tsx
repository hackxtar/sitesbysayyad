
import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold text-primary sm:text-5xl">Let's Build Something Together</h2>
          <p className="mt-4 text-xl text-muted-foreground">Have a project in mind? I'd love to hear about it.</p>
        </div>
        <Card className="bg-background/50 border-border/50 shadow-lg">
          <CardContent className="p-8 md:p-12">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
