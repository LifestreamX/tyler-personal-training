import { Metadata } from 'next';
import { BASE_URL, SEO_KEYWORDS } from '@/lib/seo';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Tyler Allen',
  description:
    'Meet Tyler Allen, NASM Certified Personal Trainer in Boston, MA. Evidence-based training approach specializing in strength, fat loss, and sustainable fitness habits. Learn about my certifications, philosophy, and commitment to your success.',
  keywords: [
    ...SEO_KEYWORDS.primary,
    'certified personal trainer',
    'NASM certified',
    'Boston fitness coach',
    'professional trainer Boston',
  ],
  openGraph: {
    title: `About Tyler Allen | ${SITE_CONFIG.name}`,
    description:
      'NASM Certified Personal Trainer in Boston with an evidence-based approach to fitness. Specializing in strength training, fat loss, and building habits that last.',
    url: `${BASE_URL}/about`,
    type: 'profile',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Tyler Allen - Personal Trainer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `About Tyler Allen | ${SITE_CONFIG.name}`,
    description:
      'NASM Certified Personal Trainer in Boston with an evidence-based approach to fitness.',
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
