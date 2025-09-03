
import { Badge } from '@/components/ui/badge';

const skillsByCategory = {
  'Languages': ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3/Sass', 'PHP', 'Swift', 'Kotlin'],
  'Frameworks & Libraries': ['React', 'Next.js', 'Node.js', 'Express', 'React Native', 'Tailwind CSS'],
  'Platforms & Tools': ['WordPress', 'Shopify', 'Firebase', 'Vercel', 'Git & GitHub', 'Figma'],
  'Databases': ['PostgreSQL', 'MongoDB', 'GraphQL'],
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold text-primary sm:text-4xl">My Arsenal of Skills</h2>
          <p className="mt-4 text-lg text-muted-foreground">The tools and technologies I use to build amazing things.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <div key={category} className="bg-secondary/50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm px-3 py-1 font-medium">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
