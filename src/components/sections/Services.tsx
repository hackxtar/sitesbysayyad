
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CodeXml, LayoutTemplate, Palette, ShoppingCart, Smartphone, PenTool } from 'lucide-react';

const services = [
  {
    icon: <CodeXml className="h-10 w-10 text-primary" />,
    title: 'Web Development',
    description: 'Building responsive and high-performance websites from the ground up, with a focus on modern web standards.',
  },
  {
    icon: <LayoutTemplate className="h-10 w-10 text-primary" />,
    title: 'Application Development',
    description: 'Bespoke web and mobile applications built with modern, scalable technologies to solve complex problems.',
  },
  {
    icon: <PenTool className="h-10 w-10 text-primary" />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces that provide a seamless user experience across all devices.',
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android, delivering a rich and engaging mobile experience.',
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    title: 'E-commerce Solutions',
    description: 'Custom e-commerce platforms and Shopify apps to help you sell online and grow your business.',
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: 'WordPress & CMS',
    description: 'Custom themes, plugins, and full-site builds on popular CMS platforms like WordPress and Sanity.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-headline font-bold text-primary sm:text-5xl">What We Offer</h2>
          <p className="mt-4 text-xl text-muted-foreground">A comprehensive suite of development services.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="text-left bg-background/50 border-border/50 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 fade-in-up" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
              <CardHeader>
                {service.icon}
                <CardTitle className="mt-6 text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
