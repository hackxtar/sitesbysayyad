
import { Card } from '@/components/ui/card';
import { ContactForm } from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold text-primary sm:text-4xl">Let's Build Something Together</h2>
          <p className="mt-4 text-lg text-muted-foreground">Have a project in mind? I'd love to hear about it.</p>
        </div>
        <Card>
          <ContactForm />
        </Card>
      </div>
    </section>
  );
}
