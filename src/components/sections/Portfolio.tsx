import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import projectsData from '@/lib/placeholder-images.json';

const projects = projectsData.projects;

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">Our Portfolio</h2>
          <p className="mt-4 text-xl text-muted-foreground">A selection of our recent projects.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={project.title} className="overflow-hidden flex flex-col bg-card border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 fade-in-up" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
              <div className="aspect-video relative w-full">
                 <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                 <p className="text-muted-foreground text-sm">{project.description}</p>
                 <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                 </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="p-0 h-auto text-primary">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    Visit Site <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground">...and many more!</p>
        </div>
      </div>
    </section>
  );
}
