import { Metadata } from 'next';
import { BASE_URL, SEO_KEYWORDS } from '@/lib/seo';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Free Fitness Assessment',
  description:
    'Complete your free fitness assessment with Tyler Allen. Share your goals, experience, and training preferences to receive a personalized training plan. Start your fitness journey in Boston today.',
  keywords: [
    ...SEO_KEYWORDS.primary,
    'fitness assessment Boston',
    'free fitness evaluation',
    'personal training consultation',
    'fitness goal assessment',
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
