
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillsByCategory = {
  'Languages': ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3/Sass', 'PHP', 'Swift', 'Kotlin'],
  'Frameworks & Libraries': ['React', 'Next.js', 'Node.js', 'Express', 'React Native', 'Tailwind CSS'],
  'Platforms & Tools': ['WordPress', 'Shopify', 'Firebase', 'Vercel', 'Git & GitHub', 'Figma'],
  'Databases': ['PostgreSQL', 'MongoDB', 'GraphQL'],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-headline font-bold text-foreground sm:text-5xl">Our Arsenal of Skills</h2>
          <p className="mt-4 text-xl text-muted-foreground">The tools and technologies we use to build amazing things.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillsByCategory).map(([category, skills], index) => (
            <Card key={category} className="bg-card border fade-in-up" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm font-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
