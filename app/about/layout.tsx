import { Metadata } from 'next';
import { BASE_URL, SEO_KEYWORDS } from '@/lib/seo';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Tyler Allen - NASM Certified Personal Trainer Boston',
  description:
    'Meet Tyler Allen, NASM Certified Personal Trainer serving Boston, Cambridge, Somerville, Brookline, Newton, Quincy, and Greater Boston area. Evidence-based training approach specializing in strength training, fat loss, muscle building, and sustainable fitness habits. Experienced working with busy professionals, beginners, chronic conditions, and injury rehabilitation. Learn about my certifications, training philosophy, and commitment to your fitness success.',
  keywords: [
    ...SEO_KEYWORDS.primary,
    ...SEO_KEYWORDS.local,
    'certified personal trainer',
    'NASM certified trainer Boston',
    'Boston fitness coach',
    'professional trainer Boston',
    'qualified personal trainer Massachusetts',
    'experienced fitness trainer',
  ],
  openGraph: {
    title: `About Tyler Allen | ${SITE_CONFIG.name}`,
    description:
      'NASM Certified Personal Trainer in Boston with an evidence-based approach to fitness. Specializing in strength training, fat loss, muscle building, and building habits that last. Serving the Greater Boston area.',
    url: `${BASE_URL}/about`,
    type: 'profile',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Tyler Allen - NASM Certified Personal Trainer Boston',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `About Tyler Allen | ${SITE_CONFIG.name}`,
    description:
      'NASM Certified Personal Trainer in Boston with an evidence-based approach to fitness. Serving Greater Boston area.',
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
