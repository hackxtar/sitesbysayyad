
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown, Code } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-24 md:py-40">
      <div className="container mx-auto text-center max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="font-headline text-primary mb-6 text-lg fade-in-up" style={{ animationDelay: '0.1s' }}>
          Welcome to SitesBySayyad.
        </p>
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl text-glow fade-in-up" style={{ animationDelay: '0.2s' }}>
          Exceptional Digital Experiences.
        </h1>
        <p className="mt-8 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.3s' }}>
          We are a software company specializing in building high-quality, custom websites and applications. We focus on creating accessible, human-centered products that solve real-world problems.
        </p>
        <div className="mt-12 flex items-center justify-center gap-x-6 fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button asChild size="lg" className="text-lg px-10 py-7">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-10 py-7">
            <Link href="#projects">
              View Our Work <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute top-0 left-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--primary)/0.15),transparent)]"></div>
    </section>
  );
}
