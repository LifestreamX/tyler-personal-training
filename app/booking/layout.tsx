import { Metadata } from 'next';
import { BASE_URL, SEO_KEYWORDS } from '@/lib/seo';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Book Your Free Consultation - Personal Trainer Boston',
  description:
    'Schedule a free 30-minute consultation with Tyler Allen, NASM Certified Personal Trainer in Boston, MA. Discuss your fitness goals, training preferences, and get started with in-home training in Boston, Cambridge, Somerville, Brookline, Newton, Quincy, or online remote coaching. Book your complimentary fitness consultation today and start your transformation.',
  keywords: [
    ...SEO_KEYWORDS.primary,
    ...SEO_KEYWORDS.local,
    'book personal trainer Boston',
    'schedule fitness consultation',
    'free training consultation Boston',
    'personal trainer appointment',
    'fitness consultation Boston',
    'book trainer online',
  ],
  openGraph: {
    title: `Book Your Free Consultation | ${SITE_CONFIG.name}`,
    description:
      'Schedule a free 30-minute consultation with Tyler Allen to discuss your fitness goals and find the perfect training plan. Serving Boston and Greater Boston area.',
    url: `${BASE_URL}/booking`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Book Free Fitness Consultation - Boston MA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Book Your Free Consultation | ${SITE_CONFIG.name}`,
    description:
      'Schedule a free 30-minute consultation to discuss your fitness goals with NASM certified trainer in Boston.',
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
