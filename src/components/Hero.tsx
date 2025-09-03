import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)] py-20">
          <div className="lg:hidden text-center">
            <Image
              src="https://storage.googleapis.com/aai-web-samples/hero-illustration.png"
              alt="Illustration of a laptop and mobile phone with code and UI elements"
              width={800}
              height={600}
              className="rounded-lg mx-auto"
              data-ai-hint="programming laptop illustration"
              priority
            />
          </div>
          <div className="text-center lg:text-left">
            <p className="text-primary font-semibold mb-4 text-lg">
              SitesBySayyad
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Crafting Digital Excellence, One Line of Code at a Time
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We build innovative and beautiful web experiences, leveraging a universe of platforms and technologies to bring your vision to life.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-x-6 gap-y-4">
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
          <div className="hidden lg:block">
            <Image
              src="https://storage.googleapis.com/aai-web-samples/hero-illustration.png"
              alt="Illustration of a laptop and mobile phone with code and UI elements"
              width={1200}
              height={900}
              className="rounded-lg"
              data-ai-hint="programming laptop illustration"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
