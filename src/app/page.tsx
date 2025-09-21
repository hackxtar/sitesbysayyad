import { type Metadata } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/sections/Contact';
import Portfolio from '@/components/sections/Portfolio';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Custom Web & Mobile App Development | SitesBySayyad',
  description: 'Your trusted partner for creating high-performance custom websites, mobile apps, and e-commerce solutions. We specialize in Next.js, Shopify, and WordPress development to help your business grow.',
};

export default function Home() {

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SitesBySayyad",
    "image": "https://sitesbysayyad.com/hero-illustration.png",
    "@id": "https://sitesbysayyad.com",
    "url": "https://sitesbysayyad.com",
    "telephone": "+91 9172008681",
    "email": "info@sitesbysayyad.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "At SitesBySayyad office, Jyotibaphule Ward Madheliroad",
      "addressLocality": "Warora",
      "addressRegion": "MH",
      "postalCode": "442907",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 20.2289,
      "longitude": 79.0025
    },
    "description": "SitesBySayyad is a premier web and mobile development agency offering custom digital solutions. We specialize in building high-performance websites, scalable web applications, and robust e-commerce platforms using modern technologies like Next.js, Shopify, and WordPress.",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://github.com/sitesbysayyad",
      "https://www.linkedin.com/in/sayyad-saqlain-3b2763171/",
      "https://twitter.com/Sayyad_Saqlain"
    ]
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
