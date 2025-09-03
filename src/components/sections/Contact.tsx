
import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-4xl font-headline font-bold text-foreground sm:text-5xl">Let's Build Something Together</h2>
          <p className="mt-4 text-xl text-muted-foreground">Have a project in mind? We'd love to hear about it.</p>
        </div>
        <Card className="bg-card border shadow-lg fade-in-up" style={{ animationDelay: '0.2s' }}>
          <CardContent className="p-8 md:p-12">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
