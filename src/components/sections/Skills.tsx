
import { Badge } from '@/components/ui/badge';

const skills = [
  'WordPress', 'PHP', 'JavaScript', 'TypeScript',
  'React', 'Next.js', 'Node.js', 'Express',
  'Shopify', 'Liquid', 'GraphQL',
  'iOS & Android', 'React Native', 'Swift', 'Kotlin',
  'HTML5 & CSS3', 'Tailwind CSS', 'Sass',
  'UI/UX Design', 'Figma', 'Adobe XD'
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold text-primary sm:text-4xl">My Arsenal of Skills</h2>
          <p className="mt-4 text-lg text-muted-foreground">The tools and technologies I use to build amazing things.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <Badge key={skill} className="text-sm px-4 py-2 bg-primary/90 hover:bg-primary transition-colors cursor-default">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
