
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sitesbysayyad.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SitesBySayyad | Custom Web & Mobile App Development',
    template: '%s | SitesBySayyad',
  },
  description: 'Top-rated web and mobile app development agency. We build custom websites, e-commerce solutions, and high-performance applications with Next.js, Shopify, and WordPress.',
  keywords: ['web development', 'mobile app development', 'custom websites', 'ecommerce solutions', 'Shopify developer', 'WordPress developer', 'Next.js developer', 'React developer'],
  openGraph: {
    title: 'SitesBySayyad | Custom Web & Mobile App Development',
    description: 'Top-rated web and mobile app development agency. We build custom websites, e-commerce solutions, and high-performance applications with Next.js, Shopify, and WordPress.',
    url: siteUrl,
    siteName: 'SitesBySayyad',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SitesBySayyad | Custom Web & Mobile App Development',
    description: 'Top-rated web and mobile app development agency. We build custom websites, e-commerce solutions, and high-performance applications with Next.js, Shopify, and WordPress.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          {children}
          <Toaster />
      </body>
    </html>
  );
}
