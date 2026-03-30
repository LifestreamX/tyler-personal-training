import { Metadata } from 'next';
import { BASE_URL, SEO_KEYWORDS } from '@/lib/seo';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Personal Training Services - Mobile In-Home & Online Training',
  description:
    'Professional personal training services in Quincy, South Shore MA, and Greater Boston. NASM certified trainer offering mobile in-home personal training and online remote coaching. Serving Quincy, Braintree, Weymouth, Milton, Canton, Hingham, Plymouth, Brockton, and all South Shore communities. Custom strength training programs, fat loss coaching, nutrition guidance, and flexible scheduling. 30 and 60-minute sessions available. Transform your fitness with expert one-on-one coaching.',
  keywords: [
    ...SEO_KEYWORDS.primary,
    ...SEO_KEYWORDS.secondary,
    ...SEO_KEYWORDS.local,
    ...SEO_KEYWORDS.services,
    'in-home training Quincy',
    'in-home training South Shore MA',
    'online personal training Massachusetts',
    'remote fitness coaching South Shore',
    'virtual personal trainer Quincy',
    'mobile personal trainer South Shore',
    'traveling personal trainer Massachusetts',
  ],
  openGraph: {
    title: `Personal Training Services | ${SITE_CONFIG.name}`,
    description:
      'Mobile in-home and online personal training in Quincy and South Shore MA. NASM certified trainer offering custom programs, nutrition guidance, and flexible scheduling to fit your lifestyle throughout South Shore Massachusetts.',
    url: `${BASE_URL}/services`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Personal Training Services - Quincy and South Shore MA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Personal Training Services | ${SITE_CONFIG.name}`,
    description:
      'Mobile in-home and online personal training in Quincy and South Shore MA. Custom programs, strength training, fat loss coaching, and nutrition guidance.',
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
