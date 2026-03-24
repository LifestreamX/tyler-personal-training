import { Metadata } from 'next';
import { BASE_URL, SEO_KEYWORDS } from '@/lib/seo';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Tyler Allen',
  description:
    'Get in touch with Tyler Allen, certified personal trainer in Boston, MA. Questions about training programs, pricing, or availability? Call (774) 279-1607 or email tylerallen@live.com.',
  keywords: [
    ...SEO_KEYWORDS.primary,
    'contact personal trainer Boston',
    'Boston trainer contact',
    'personal training inquiry',
  ],
  openGraph: {
    title: `Contact | ${SITE_CONFIG.name}`,
    description:
      'Get in touch to learn more about personal training services in Boston. Available for in-home and online training.',
    url: `${BASE_URL}/contact`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Contact Tyler Allen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact | ${SITE_CONFIG.name}`,
    description:
      'Get in touch to learn more about personal training services in Boston.',
  },
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
