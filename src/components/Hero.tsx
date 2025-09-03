
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-background text-foreground">
      <div className="absolute inset-0">
        <Image
          src="/hero-illustration.png"
          alt="Digital illustration of a workspace with computers and code"
          fill
          className="object-cover object-center opacity-20"
          data-ai-hint="digital workspace illustration"
          priority
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center min-h-[calc(100vh-80px)] py-20 text-left">
          <div>
            <p className="text-primary font-semibold mb-4 text-lg">
              SitesBySayyad
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Crafting Digital Excellence, One Line of Code at a Time
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
              We build innovative and beautiful web experiences, leveraging a universe of platforms and technologies to bring your vision to life.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start justify-start gap-x-6 gap-y-4">
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg w-full sm:w-auto">
                <Link href="#contact">Get a Quote</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full px-8 py-6 text-lg w-full sm:w-auto">
                <Link href="#projects">
                  Our Work <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
