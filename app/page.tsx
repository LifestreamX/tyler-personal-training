import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhoIWorkWith } from '@/components/sections/WhoIWorkWith';
import { FAQ } from '@/components/sections/FAQ';
// import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { BASE_URL, SEO_KEYWORDS } from '@/lib/seo';
import { SITE_CONFIG } from '@/lib/constants';
import { generateFAQStructuredData } from '@/lib/faq';

export const metadata: Metadata = {
  title: `${SITE_CONFIG.tagline}`,
  description:
    'Transform your fitness with Tyler Allen, a certified personal trainer in Boston, MA. Specializing in strength training, fat loss, and building sustainable habits. In-home and online training available.',
  keywords: [
    ...SEO_KEYWORDS.primary,
    'Boston fitness',
    'Massachusetts personal trainer',
    'certified trainer Boston',
  ],
  openGraph: {
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description:
      'Transform your fitness with professional personal training in Boston. In-home and online coaching for strength, fat loss, and sustainable results.',
    url: BASE_URL,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Tyler Allen Personal Training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description:
      'Transform your fitness with professional personal training in Boston. In-home and online coaching.',
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const faqStructuredData = generateFAQStructuredData();

export default function Home() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <Hero />
      <WhoIWorkWith />
      <Services />
      <FAQ />
      {/* <Testimonials /> */}
      <CTA />
    </>
  );
}
