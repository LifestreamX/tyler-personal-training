import { Metadata } from 'next';
import { BASE_URL, SEO_KEYWORDS } from '@/lib/seo';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Free Fitness Assessment - Quincy & South Shore MA Personal Training',
  description:
    "Complete your free fitness assessment with Tyler Allen, ACE Certified Personal Trainer in Quincy and South Shore MA. Share your fitness goals, training experience, health history, and training preferences to receive a personalized training plan. Whether you're in Quincy, Braintree, Weymouth, Milton, Canton, Hingham, Plymouth, Brockton, or prefer online training, start your fitness journey with a customized approach. Get your free fitness evaluation today for South Shore Massachusetts.",
  keywords: [
    ...SEO_KEYWORDS.primary,
    ...SEO_KEYWORDS.local,
    'fitness assessment Quincy MA',
    'fitness assessment South Shore',
    'free fitness evaluation South Shore MA',
    'personal training consultation Quincy',
    'fitness goal assessment Quincy',
    'fitness evaluation South Shore',
    'trainer assessment form Massachusetts',
  ],
  openGraph: {
    title: `Free Fitness Assessment | ${SITE_CONFIG.name}`,
    description:
      'Complete your free fitness assessment and get a personalized training plan tailored to your goals.',
    url: `${BASE_URL}/assessment`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Fitness Assessment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Free Fitness Assessment | ${SITE_CONFIG.name}`,
    description:
      'Complete your free fitness assessment and get a personalized training plan.',
  },
  alternates: {
    canonical: `${BASE_URL}/assessment`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
