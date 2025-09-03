
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter, Source_Code_Pro } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
});

export const metadata: Metadata = {
  title: 'SitesBySayyad | Custom Web Solutions',
  description: 'High-quality, custom websites and applications built by SitesBySayyad.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <body className={`${inter.variable} ${sourceCodePro.variable} font-body antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
