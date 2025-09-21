import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CodeXml, LayoutTemplate, Palette, ShoppingCart, Smartphone, PenTool } from 'lucide-react';

const services = [
  {
    icon: <CodeXml className="h-8 w-8 text-primary" />,
    title: 'Custom Websites',
    description: 'Building responsive and high-performance websites from the ground up, with a focus on modern web standards.',
  },
  {
    icon: <LayoutTemplate className="h-8 w-8 text-primary" />,
    title: 'Web Applications',
    description: 'Bespoke web applications built with modern, scalable technologies to solve complex business problems.',
  },
  {
    icon: <PenTool className="h-8 w-8 text-primary" />,
    title: 'WordPress Development',
    description: 'Custom themes, plugins, and full-site builds on the world\'s most popular content management system.',
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android, delivering a rich and engaging mobile experience.',
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    title: 'E-commerce Solutions',
    description: 'Custom e-commerce platforms to help you sell online and grow your business.',
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: 'Shopify Development',
    description: 'Custom Shopify themes and apps to create a unique and powerful online store for your brand.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">What We Offer</h2>
          <p className="mt-4 text-xl text-muted-foreground">A comprehensive suite of development services.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="text-left bg-card border transition-all duration-300 hover:border-primary/80 hover:shadow-lg hover:-translate-y-1 fade-in-up" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  {service.icon}
                  <CardTitle as="h3" className="text-xl">{service.title}</CardTitle>
                </div>
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
