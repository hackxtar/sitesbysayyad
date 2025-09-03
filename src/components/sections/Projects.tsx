
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with a custom CMS and payment gateway integration.',
    imageUrl: 'https://picsum.photos/600/400',
    hint: 'online store',
    link: '#',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Mobile Banking App',
    description: 'A secure and intuitive mobile app for iOS and Android for managing personal finances.',
    imageUrl: 'https://picsum.photos/600/400',
    hint: 'finance app',
    link: '#',
    tags: ['React Native', 'Firebase', 'GraphQL'],
  },
  {
    title: 'Corporate Website',
    description: 'A professional and responsive marketing website for a leading tech company.',
    imageUrl: 'https://picsum.photos/600/400',
    hint: 'corporate website',
    link: '#',
    tags: ['Next.js', 'Tailwind CSS', 'Sanity'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold text-primary sm:text-4xl">My Work</h2>
          <p className="mt-4 text-lg text-muted-foreground">A selection of my recent projects.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="aspect-video relative w-full">
                 <Image src={project.imageUrl} alt={project.title} fill className="object-cover" data-ai-hint={project.hint} />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                 <p className="text-muted-foreground text-sm">{project.description}</p>
                 <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                 </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    Visit Site <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
