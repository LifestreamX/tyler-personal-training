import { Metadata } from 'next';
import { BASE_URL, SEO_KEYWORDS } from '@/lib/seo';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title:
    'About Tyler Allen - ACE Certified Personal Trainer Quincy & South Shore MA',
  description:
    'Meet Tyler Allen, ACE Certified Personal Trainer serving Quincy, South Shore MA, and Greater Boston. Mobile in-home training throughout Quincy, Braintree, Weymouth, Milton, Canton, Hingham, Plymouth, Brockton, and all South Shore communities. Evidence-based training approach specializing in strength training, fat loss, muscle building, and sustainable fitness habits. Experienced working with busy professionals, beginners, chronic conditions, and injury rehabilitation. Learn about my certifications, training philosophy, and commitment to your fitness success.',
  keywords: [
    ...SEO_KEYWORDS.primary,
    ...SEO_KEYWORDS.local,
    'certified personal trainer Quincy',
    'ACE certified trainer South Shore MA',
    'Quincy fitness coach',
    'professional trainer South Shore',
    'qualified personal trainer Massachusetts',
    'experienced fitness trainer Quincy',
    'mobile personal trainer South Shore',
  ],
  openGraph: {
    title: `About Tyler Allen | ${SITE_CONFIG.name}`,
    description:
      'ACE Certified Personal Trainer in Quincy and South Shore MA with an evidence-based approach to fitness. Specializing in strength training, fat loss, muscle building, and building habits that last. Serving Quincy and South Shore Massachusetts with mobile in-home training.',
    url: `${BASE_URL}/about`,
    type: 'profile',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Tyler Allen - ACE Certified Personal Trainer Quincy and South Shore MA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `About Tyler Allen | ${SITE_CONFIG.name}`,
    description:
      'ACE Certified Personal Trainer in Quincy and South Shore MA with an evidence-based approach to fitness. Serving South Shore Massachusetts.',
  },
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
