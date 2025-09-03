
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="py-20 md:py-32">
      <div className="container mx-auto text-center max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
          Crafting Digital Excellence
        </h1>
        <p className="mt-6 text-lg leading-8 text-foreground/80">
          From sleek websites to powerful mobile and web applications, I bring your digital vision to life with precision, passion, and professionalism.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
