
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative py-20 md:py-32">
      <div className="container mx-auto text-center max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="font-headline text-primary mb-4">Welcome to SitesBySayyad.</p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          We Build Exceptional Digital Experiences.
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          We are a software company specializing in building high-quality, custom websites and applications. We focus on creating accessible, human-centered products that solve real-world problems.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#projects">
              View Our Work <ArrowDown className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
