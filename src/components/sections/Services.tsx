
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeXml, LayoutTemplate, Palette, ShoppingCart, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <LayoutTemplate className="h-8 w-8 text-accent" />,
    title: 'WordPress Development',
    description: 'Custom themes, plugins, and full-site builds on the world\'s most popular CMS.',
  },
  {
    icon: <Palette className="h-8 w-8 text-accent" />,
    title: 'Website Design',
    description: 'Beautiful, responsive, and user-friendly designs that capture your brand\'s essence.',
  },
  {
    icon: <Smartphone className="h-8 w-8 text-accent" />,
    title: 'iOS & Android Apps',
    description: 'Native and cross-platform mobile applications for a seamless user experience.',
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-accent" />,
    title: 'Shopify App Development',
    description: 'Extend your e-commerce capabilities with custom Shopify apps and integrations.',
  },
  {
    icon: <CodeXml className="h-8 w-8 text-accent" />,
    title: 'Application Development',
    description: 'Bespoke web and desktop applications built with modern, scalable technologies.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold text-primary sm:text-4xl">What I Offer</h2>
          <p className="mt-4 text-lg text-muted-foreground">A comprehensive suite of development services.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader>
                {service.icon}
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
