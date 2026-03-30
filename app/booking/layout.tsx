import { Metadata } from 'next';
import { BASE_URL, SEO_KEYWORDS } from '@/lib/seo';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title:
    'Book Your Free Consultation - Personal Trainer Quincy & South Shore MA',
  description:
    'Schedule a free 30-minute consultation with Tyler Allen, ACE Certified Personal Trainer in Quincy and South Shore MA. Discuss your fitness goals, training preferences, and get started with mobile in-home training in Quincy, Braintree, Weymouth, Milton, Canton, Hingham, Plymouth, Brockton, or online remote coaching. Book your complimentary fitness consultation today and start your transformation in South Shore Massachusetts.',
  keywords: [
    ...SEO_KEYWORDS.primary,
    ...SEO_KEYWORDS.local,
    'book personal trainer Quincy',
    'schedule fitness consultation South Shore',
    'free training consultation Quincy MA',
    'personal trainer appointment South Shore',
    'fitness consultation Quincy',
    'book trainer online Massachusetts',
  ],
  openGraph: {
    title: `Book Your Free Consultation | ${SITE_CONFIG.name}`,
    description:
      'Schedule a free 30-minute consultation with Tyler Allen to discuss your fitness goals and find the perfect training plan. Serving Quincy and South Shore MA with mobile in-home training.',
    url: `${BASE_URL}/booking`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Book Free Fitness Consultation - Quincy and South Shore MA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Book Your Free Consultation | ${SITE_CONFIG.name}`,
    description:
      'Schedule a free 30-minute consultation to discuss your fitness goals with ACE certified trainer in Quincy and South Shore MA.',
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
