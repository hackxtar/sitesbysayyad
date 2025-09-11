
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-background text-white min-h-[calc(100vh-80px)] flex items-center">
      <Image
        src="/hero-illustration.png"
        alt="Digital illustration of a person working on a laptop with code elements."
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl text-center md:text-left">
          <p className="text-primary font-semibold mb-4 text-lg">
            SitesBySayyad
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Crafting Digital Excellence, One Line of Code at a Time
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            We build innovative and beautiful web experiences, leveraging a universe of platforms and technologies to bring your vision to life.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-x-6 gap-y-4">
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg w-full sm:w-auto">
              <Link href="/#contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="rounded-full px-8 py-6 text-lg hover:bg-white/10 hover:text-white w-full sm:w-auto">
              <Link href="#portfolio">
                Our Work <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
