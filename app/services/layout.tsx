import { Metadata } from 'next';
import { BASE_URL, SEO_KEYWORDS } from '@/lib/seo';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Personal Training Services - In-Home & Online Training',
  description:
    'Professional personal training services in Boston, Cambridge, Somerville, Brookline & Greater Boston area. NASM certified trainer offering in-home personal training and online remote coaching. Custom strength training programs, fat loss coaching, nutrition guidance, and flexible scheduling. 30 and 60-minute sessions available. Transform your fitness with expert one-on-one coaching.',
  keywords: [
    ...SEO_KEYWORDS.primary,
    ...SEO_KEYWORDS.secondary,
    ...SEO_KEYWORDS.local,
    ...SEO_KEYWORDS.services,
    'in-home training Boston',
    'online personal training',
    'remote fitness coaching',
    'virtual personal trainer',
    'Boston home training',
    'mobile personal trainer',
  ],
  openGraph: {
    title: `Personal Training Services | ${SITE_CONFIG.name}`,
    description:
      'In-home and online personal training in Boston and Greater Boston area. NASM certified trainer offering custom programs, nutrition guidance, and flexible scheduling to fit your lifestyle.',
    url: `${BASE_URL}/services`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Personal Training Services - Boston MA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Personal Training Services | ${SITE_CONFIG.name}`,
    description:
      'In-home and online personal training in Boston. Custom programs, strength training, fat loss coaching, and nutrition guidance.',
  },
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
