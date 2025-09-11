import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/sections/Portfolio';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
      </main>
    </>
  );
}
