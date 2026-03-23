import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'personal trainer',
    'Boston',
    'fitness',
    'fat loss',
    'muscle building',
    'strength training',
    'online coaching',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full antialiased'>
      <body className='min-h-full flex flex-col'>
        <Navbar />
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
