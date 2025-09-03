import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-28 sm:pt-32 sm:pb-36 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/1800/1000"
          alt="Illustration of a laptop with code on screen"
          fill
          className="object-cover opacity-10"
          data-ai-hint="programming laptop illustration"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-semibold mb-4">
            SitesBySayyad
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Crafting Digital Excellence, One Line of Code at a Time
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We build innovative and beautiful web experiences, leveraging a universe of platforms and technologies to bring your vision to life.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg">
              <Link href="#contact">Get a Quote</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="rounded-full px-8 py-6 text-lg">
              <Link href="#projects">
                Our Work <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
