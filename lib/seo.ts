import { SITE_CONFIG } from './constants';

export const BASE_URL = 'https://tyler-allen.com'; // Update this to your actual domain

export function generateStructuredData() {
  // LocalBusiness Schema for SEO
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': [
      'LocalBusiness',
      'HealthAndBeautyBusiness',
      'SportsActivityLocation',
    ],
    '@id': `${BASE_URL}/#localbusiness`,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: BASE_URL,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    image: `${BASE_URL}/og-image.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Boston',
      addressRegion: 'MA',
      addressCountry: 'US',
      postalCode: '02108', // Update with actual postal code if you have one
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.3601,
      longitude: -71.0589,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Boston',
        containedIn: {
          '@type': 'State',
          name: 'Massachusetts',
        },
      },
      { '@type': 'City', name: 'Cambridge' },
      { '@type': 'City', name: 'Somerville' },
      { '@type': 'City', name: 'Brookline' },
      { '@type': 'City', name: 'Newton' },
      { '@type': 'City', name: 'Quincy' },
      { '@type': 'City', name: 'Medford' },
      { '@type': 'City', name: 'Waltham' },
      { '@type': 'City', name: 'Watertown' },
      { '@type': 'City', name: 'Arlington' },
      { '@type': 'City', name: 'Belmont' },
      { '@type': 'City', name: 'Malden' },
    ],
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Venmo, PayPal',
    hasMap: 'https://www.google.com/maps/place/Boston,+MA',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '06:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '16:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '1',
      bestRating: '5',
      worstRating: '1',
    },
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'In-Home Personal Training',
          description: 'One-on-one personal training at your home',
        },
        areaServed: 'Greater Boston Area',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Online Remote Training',
          description: 'Virtual personal training via video call',
        },
        areaServed: 'Worldwide',
        availability: 'https://schema.org/InStock',
      },
    ],
  };

  // Person Schema for Tyler Allen
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BASE_URL}/#person`,
    name: SITE_CONFIG.name,
    jobTitle: 'Certified Personal Trainer & Fitness Coach',
    description:
      'NASM Certified Personal Trainer specializing in strength training, fat loss, muscle building, and sustainable fitness habits in the Greater Boston area. Expert in working with busy professionals, beginners, and clients with chronic conditions.',
    url: BASE_URL,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Boston',
      addressRegion: 'MA',
      addressCountry: 'US',
    },
    knowsAbout: [
      'Personal Training',
      'Strength Training',
      'Fat Loss',
      'Muscle Building',
      'Nutrition Coaching',
      'Online Training',
      'Injury Rehabilitation',
      'Fitness Programming',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'NASM Certified Personal Trainer',
        recognizedBy: {
          '@type': 'Organization',
          name: 'National Academy of Sports Medicine',
        },
      },
    ],
    worksFor: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: BASE_URL,
    },
    makesOffer: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        serviceType: 'Personal Training Services',
      },
    },
  };

  // Service Schema for Personal Training
  const services = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${BASE_URL}/services#in-home`,
      name: 'In-Home Personal Training',
      description:
        'Professional one-on-one personal training sessions at your home in the Greater Boston area. Custom workout programs, nutrition guidance, form correction, and flexible scheduling. Perfect for busy professionals who want the convenience of training at home.',
      provider: {
        '@id': `${BASE_URL}/#person`,
      },
      areaServed: [
        'Boston',
        'Cambridge',
        'Somerville',
        'Brookline',
        'Newton',
        'Quincy',
        'Medford',
        'Waltham',
      ],
      serviceType: 'Personal Training',
      category: 'Fitness & Wellness',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
        },
      },
      audience: {
        '@type': 'Audience',
        audienceType: 'Individuals seeking in-person fitness training',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${BASE_URL}/services#online`,
      name: 'Online Remote Training',
      description:
        'Virtual personal training via live video calls. Custom programming, live coaching sessions, form review, nutrition guidance, and weekly check-ins from anywhere. Ideal for remote workers, travelers, or anyone who prefers training from home.',
      provider: {
        '@id': `${BASE_URL}/#person`,
      },
      serviceType: 'Online Personal Training',
      category: 'Virtual Fitness & Wellness',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
        },
      },
      audience: {
        '@type': 'Audience',
        audienceType: 'Individuals seeking remote fitness training',
      },
    },
  ];

  // Organization Schema
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: SITE_CONFIG.name,
    url: BASE_URL,
    logo: `${BASE_URL}/favicon.ico`,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Boston',
      addressRegion: 'MA',
      addressCountry: 'US',
    },
    sameAs: [
      // Add social media URLs here when available
      // 'https://www.facebook.com/tylerallen',
      // 'https://www.instagram.com/tylerallen',
      // 'https://www.linkedin.com/in/tylerallen',
    ],
  };

  // WebSite Schema with SearchAction
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return {
    localBusiness,
    person,
    services,
    organization,
    website,
  };
}

export function generateBreadcrumbStructuredData(
  items: { name: string; url: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export const SEO_KEYWORDS = {
  primary: [
    'personal trainer Boston',
    'Boston personal trainer',
    'personal training Boston MA',
    'certified personal trainer Boston',
    'NASM certified trainer Boston',
  ],
  secondary: [
    'in-home personal training Boston',
    'online personal trainer',
    'strength training Boston',
    'fat loss coach Boston',
    'fitness coach Boston',
    'weight loss trainer Boston',
    'muscle building coach Boston',
    'Boston fitness professional',
    'private personal trainer Boston',
    'mobile personal trainer Boston',
  ],
  local: [
    // Greater Boston area cities/neighborhoods for local SEO
    'personal trainer Cambridge MA',
    'personal trainer Somerville MA',
    'personal trainer Brookline MA',
    'personal trainer Newton MA',
    'personal trainer Quincy MA',
    'personal trainer Medford MA',
    'personal trainer Waltham MA',
    'fitness trainer Back Bay',
    'fitness trainer South End',
    'fitness trainer North End Boston',
    'personal trainer Downtown Boston',
    'personal trainer Beacon Hill',
  ],
  services: [
    'one on one personal training',
    'private training sessions',
    'home gym training',
    'virtual fitness coaching',
    'remote workout coaching',
    'nutrition and fitness coach',
    'weight training coach',
    'bodybuilding coach Boston',
    'functional fitness training',
    'injury rehabilitation training',
  ],
  specializations: [
    'personal trainer for busy professionals',
    'personal trainer for beginners',
    'personal trainer for weight loss',
    'personal trainer for muscle gain',
    'personal trainer for seniors',
    'personal trainer chronic conditions',
    'personal trainer injury recovery',
    'personal trainer accountability coach',
  ],
  general: [
    'personal training',
    'fitness coaching',
    'strength training',
    'fat loss',
    'muscle building',
    'nutrition coaching',
    'online training',
    'virtual personal trainer',
    'home personal training',
    'Massachusetts personal trainer',
  ],
};
