import { Metadata } from 'next';
import { BASE_URL, SEO_KEYWORDS } from '@/lib/seo';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Personal Training Services',
  description:
    'Professional personal training services in Boston, MA. Choose in-home personal training or online remote coaching. Custom programs, nutrition guidance, flexible scheduling. 30 and 60-minute sessions available.',
  keywords: [
    ...SEO_KEYWORDS.primary,
    ...SEO_KEYWORDS.secondary,
    'in-home training Boston',
    'online personal training',
    'remote fitness coaching',
    'virtual personal trainer',
    'Boston home training',
  ],
  openGraph: {
    title: `Personal Training Services | ${SITE_CONFIG.name}`,
    description:
      'In-home and online personal training in Boston. Custom programs, nutrition guidance, and flexible scheduling to fit your lifestyle.',
    url: `${BASE_URL}/services`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Personal Training Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Personal Training Services | ${SITE_CONFIG.name}`,
    description:
      'In-home and online personal training in Boston. Custom programs and nutrition guidance.',
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
