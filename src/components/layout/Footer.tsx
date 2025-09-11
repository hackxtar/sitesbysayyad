import { Code, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Code className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl text-foreground">SitesBySayyad</span>
            </div>
            <p className="text-muted-foreground">
              Crafting Digital Excellence, One Line of Code at a Time. We build innovative and beautiful web experiences.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground tracking-wider uppercase">Navigate</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/#services" className="text-muted-foreground hover:text-primary">Services</Link></li>
                <li><Link href="/#portfolio" className="text-muted-foreground hover:text-primary">Portfolio</Link></li>
                <li><Link href="/#contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
                <li><Link href="/quote" className="text-muted-foreground hover:text-primary">Get Quote</Link></li>
              </ul>
            </div>
             <div>
              <h3 className="font-semibold text-foreground tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
                 <h3 className="font-semibold text-foreground tracking-wider uppercase">Connect</h3>
                <div className="mt-4 flex justify-center md:justify-start space-x-6">
                    <a href="#" className="text-muted-foreground hover:text-primary">
                        <span className="sr-only">Twitter</span>
                        <Twitter className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                        <span className="sr-only">GitHub</span>
                        <Github className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin className="h-6 w-6" />
                    </a>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SitesBySayyad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
