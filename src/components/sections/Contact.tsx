
import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from './ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl fade-in-up">
              Let's Build Something Amazing
            </h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 fade-in-up" style={{ animationDelay: '0.1s' }}>
              Have a project in mind or just want to say hello? We'd love to hear from you.
            </p>
            <div className="mt-8 space-y-6 max-w-sm mx-auto lg:mx-0 fade-in-up" style={{ animationDelay: '0.2s' }}>
                <a href="tel:+919172008681" className="flex items-center p-4 rounded-lg hover:bg-card/50 transition-colors group">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4 text-left">
                        <h3 className="text-lg font-semibold text-foreground">Call Us</h3>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors">+91 9172008681</p>
                    </div>
                </a>
                <a href="mailto:info@sitesbysayyad.com" className="flex items-center p-4 rounded-lg hover:bg-card/50 transition-colors group">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4 text-left">
                        <h3 className="text-lg font-semibold text-foreground">Email Us</h3>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors">info@sitesbysayyad.com</p>
                    </div>
                </a>
            </div>
          </div>
          <Card className="bg-card shadow-lg fade-in-up" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-8 md:p-12">
                <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
