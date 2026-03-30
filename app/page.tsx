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
  title: 'Tyler Allen | Personal Trainer Quincy, South Shore MA & Online',
  description:
    'Transform your fitness with Tyler Allen, an ACE certified personal trainer in Quincy and South Shore MA. Specializing in strength training, fat loss, muscle building, and sustainable habits. Mobile in-home training serving Quincy, Braintree, Weymouth, Milton, Canton, Hingham, Plymouth, Brockton, and South Shore Massachusetts. In-home and online training available. Get results with personalized programming and expert coaching.',
  keywords: [
    ...SEO_KEYWORDS.primary,
    ...SEO_KEYWORDS.local,
    'Quincy fitness',
    'South Shore fitness',
    'Massachusetts personal trainer',
    'certified trainer Quincy MA',
    'ACE trainer South Shore',
    'South Shore personal training',
    'mobile personal trainer Massachusetts',
  ],
  openGraph: {
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description:
      'Transform your fitness with professional personal training in Quincy and South Shore MA. ACE certified trainer offering mobile in-home and online coaching for strength, fat loss, muscle building, and sustainable results throughout South Shore Massachusetts.',
    url: BASE_URL,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Tyler Allen Personal Training - Quincy and South Shore MA',
      },
    ],
    locale: 'en_US',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description:
      'Transform your fitness with professional personal training in Quincy and South Shore MA. Mobile in-home and online coaching for strength, fat loss, and sustainable results.',
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
