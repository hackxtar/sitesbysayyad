
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-24 md:py-32 bg-secondary">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <p className="font-headline text-primary mb-4 text-lg fade-in-up" style={{ animationDelay: '0.1s' }}>
            SitesBySayyad
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl fade-in-up" style={{ animationDelay: '0.2s' }}>
            Building Your Digital Future.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl fade-in-up" style={{ animationDelay: '0.3s' }}>
            We are a software company specializing in building high-quality, custom websites and applications. We focus on creating accessible, human-centered products that solve real-world problems.
          </p>
          <div className="mt-10 flex items-center gap-x-4 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-lg px-8 py-6">
              <Link href="#projects">
                Our Work <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:block fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Image 
              src="https://picsum.photos/800/600"
              alt="Digital Agency"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
              data-ai-hint="digital agency"
            />
        </div>
      </div>
    </section>
  );
}
