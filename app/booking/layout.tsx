import { Metadata } from 'next';
import { BASE_URL, SEO_KEYWORDS } from '@/lib/seo';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Book Your Free Consultation',
  description:
    'Schedule a free 30-minute consultation with Tyler Allen to discuss your fitness goals. Available for in-home training in Boston or online remote coaching. Book your call today.',
  keywords: [
    ...SEO_KEYWORDS.primary,
    'book personal trainer Boston',
    'schedule fitness consultation',
    'free training consultation',
    'personal trainer appointment',
  ],
  openGraph: {
    title: `Book Your Free Consultation | ${SITE_CONFIG.name}`,
    description:
      'Schedule a free 30-minute consultation to discuss your fitness goals and find the perfect training plan.',
    url: `${BASE_URL}/booking`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Book Consultation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Book Your Free Consultation | ${SITE_CONFIG.name}`,
    description:
      'Schedule a free 30-minute consultation to discuss your fitness goals.',
  },
  alternates: {
    canonical: `${BASE_URL}/booking`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
