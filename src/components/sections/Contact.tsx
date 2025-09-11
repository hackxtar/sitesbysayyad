import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from './ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">Get In Touch</h2>
          <p className="mt-4 text-xl text-muted-foreground">Have a project in mind? We'd love to hear about it.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
            <Card className="bg-card border shadow-lg fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8 md:p-12">
                <ContactForm />
            </CardContent>
            </Card>
            <div className="space-y-8 fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-foreground">Mobile Number</h3>
                        <a href="tel:+919172008681" className="text-muted-foreground hover:text-primary transition-colors">
                        +91 9172008681
                        </a>
                    </div>
                </div>
                 <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-foreground">Email</h3>
                        <a href="mailto:info@sitesbysayyad.com" className="text-muted-foreground hover:text-primary transition-colors">
                        info@sitesbysayyad.com
                        </a>
                    </div>
                </div>
                 <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-foreground">Address</h3>
                        <p className="text-muted-foreground">
                        At SitesBySayyad office, Jyotibaphule Ward Madheliroad Warora, Maharashtra 442907
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
