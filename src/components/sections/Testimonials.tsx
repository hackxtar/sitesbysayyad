
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    quote:
      "Working with SitesBySayyad was a game-changer for our business. Their expertise in Next.js and web development is unparalleled. The final product exceeded all our expectations.",
    name: 'John Doe',
    company: 'Tech Innovators Inc.',
    avatarSeed: 'john-doe',
  },
  {
    quote:
      'The team delivered a beautiful, high-performance e-commerce site on Shopify. Our sales have skyrocketed since the launch. Highly recommended!',
    name: 'Jane Smith',
    company: 'Fashion Forward',
    avatarSeed: 'jane-smith',
  },
  {
    quote:
      "I was impressed by their professionalism and communication throughout the project. They transformed our old WordPress site into a modern, fast, and user-friendly platform.",
    name: 'Sam Wilson',
    company: 'Creative Solutions',
    avatarSeed: 'sam-wilson',
  },
    {
    quote:
      "The custom web application they built for us has streamlined our internal processes and saved us countless hours. Their problem-solving skills are top-notch.",
    name: 'Emily White',
    company: 'Data Analytics Co.',
    avatarSeed: 'emily-white',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">What Our Clients Say</h2>
          <p className="mt-4 text-xl text-muted-foreground">Real stories from satisfied partners.</p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto fade-in-up" 
          style={{ animationDelay: '0.2s' }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="p-4 md:basis-1/2">
                  <Card className="h-full flex flex-col justify-between bg-card border">
                    <CardContent className="p-6 flex-grow">
                      <blockquote className="text-lg text-foreground italic">
                        "{testimonial.quote}"
                      </blockquote>
                    </CardContent>
                    <div className="p-6 pt-0 flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={`https://i.pravatar.cc/40?u=${testimonial.avatarSeed}`} alt={`Avatar of ${testimonial.name}`} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </div>
                  </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
