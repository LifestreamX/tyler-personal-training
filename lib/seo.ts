import { SITE_CONFIG } from './constants';

export const BASE_URL = 'https://personal-training.tyler-allen.com'; // Production domain

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
      addressLocality: 'Quincy',
      addressRegion: 'MA',
      addressCountry: 'US',
      postalCode: '02169',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.2529,
      longitude: -71.0023,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Quincy',
        containedIn: {
          '@type': 'State',
          name: 'Massachusetts',
        },
      },
      // South Shore MA Cities
      { '@type': 'City', name: 'Braintree' },
      { '@type': 'City', name: 'Weymouth' },
      { '@type': 'City', name: 'Milton' },
      { '@type': 'City', name: 'Canton' },
      { '@type': 'City', name: 'Stoughton' },
      { '@type': 'City', name: 'Randolph' },
      { '@type': 'City', name: 'Brockton' },
      { '@type': 'City', name: 'Plymouth' },
      { '@type': 'City', name: 'Hingham' },
      { '@type': 'City', name: 'Scituate' },
      { '@type': 'City', name: 'Marshfield' },
      { '@type': 'City', name: 'Duxbury' },
      { '@type': 'City', name: 'Taunton' },
      { '@type': 'City', name: 'Easton' },
      { '@type': 'City', name: 'Bridgewater' },
      // Greater Boston Cities
      { '@type': 'City', name: 'Waltham' },
      { '@type': 'City', name: 'Newton' },
      { '@type': 'City', name: 'Medford' },
      { '@type': 'City', name: 'Cambridge' },
      { '@type': 'City', name: 'Somerville' },
      { '@type': 'City', name: 'Boston' },
    ],
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Venmo, PayPal',
    hasMap: 'https://www.google.com/maps/place/Quincy,+MA',
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
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'In-Home Personal Training',
          description:
            'One-on-one personal training at your home in Quincy and South Shore MA',
        },
        areaServed: 'South Shore MA and Greater Boston',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Online Remote Training',
          description: 'Virtual personal training via video call from anywhere',
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
      'ACE Certified Personal Trainer specializing in strength training, fat loss, muscle building, and sustainable fitness habits in Quincy and the South Shore MA area. Expert in working with busy professionals, beginners, and clients with chronic conditions throughout South Shore Massachusetts and Greater Boston.',
    url: BASE_URL,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Quincy',
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
        name: 'ACE Certified Personal Trainer',
        recognizedBy: {
          '@type': 'Organization',
          name: 'American Council on Exercise',
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
        'Professional one-on-one personal training sessions at your home in Quincy, South Shore MA, and Greater Boston area. Custom workout programs, nutrition guidance, form correction, and flexible scheduling. Perfect for busy professionals in Quincy, Braintree, Weymouth, Milton, Canton, Hingham, Plymouth, and surrounding South Shore communities who want the convenience of training at home.',
      provider: {
        '@id': `${BASE_URL}/#person`,
      },
      areaServed: [
        'Quincy',
        'Braintree',
        'Weymouth',
        'Milton',
        'Canton',
        'Stoughton',
        'Randolph',
        'Brockton',
        'Plymouth',
        'Hingham',
        'Scituate',
        'Marshfield',
        'Duxbury',
        'Taunton',
        'Easton',
        'Bridgewater',
        'Waltham',
        'Newton',
        'Medford',
        'Cambridge',
        'Somerville',
        'Boston',
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
      addressLocality: 'Quincy',
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
    'personal trainer Quincy MA',
    'Quincy personal trainer',
    'personal training Quincy Massachusetts',
    'certified personal trainer Quincy',
    'ACE certified trainer Quincy MA',
    'personal trainer South Shore MA',
    'South Shore personal trainer',
    'South Shore Massachusetts personal training',
  ],
  secondary: [
    'in-home personal training Quincy MA',
    'in-home personal training South Shore MA',
    'mobile personal trainer South Shore',
    'traveling personal trainer Massachusetts',
    'online personal trainer Massachusetts',
    'strength training Quincy MA',
    'fat loss coach South Shore MA',
    'fitness coach Quincy',
    'weight loss trainer South Shore',
    'muscle building coach Quincy MA',
    'South Shore fitness professional',
    'private personal trainer Quincy',
    'mobile personal trainer Quincy',
    'home personal trainer South Shore',
  ],
  local: [
    // Primary South Shore Cities - High Priority
    'personal trainer Quincy MA',
    'personal trainer Braintree MA',
    'personal trainer Weymouth MA',
    'personal trainer Milton MA',
    'personal trainer Canton MA',
    'personal trainer Hingham MA',
    'personal trainer Plymouth MA',
    'personal trainer Brockton MA',
    'personal trainer Stoughton MA',
    'personal trainer Randolph MA',
    // South Shore Coastal Communities
    'personal trainer Scituate MA',
    'personal trainer Marshfield MA',
    'personal trainer Duxbury MA',
    'fitness trainer South Shore',
    'fitness trainer Quincy',
    // Extended South Shore
    'personal trainer Taunton MA',
    'personal trainer Easton MA',
    'personal trainer Bridgewater MA',
    // Greater Boston (Secondary Market)
    'personal trainer Waltham MA',
    'personal trainer Newton MA',
    'personal trainer Medford MA',
    'personal trainer Cambridge MA',
    'personal trainer Somerville MA',
    'personal trainer Boston MA',
    // Regional Terms
    'personal trainer South Shore Massachusetts',
    'personal trainer southeast Massachusetts',
    'in home personal trainer South Shore',
    'mobile trainer Quincy area',
  ],
  services: [
    'one on one personal training Quincy',
    'private training sessions South Shore',
    'home gym training Quincy MA',
    'virtual fitness coaching Massachusetts',
    'remote workout coaching South Shore',
    'nutrition and fitness coach Quincy',
    'weight training coach South Shore',
    'bodybuilding coach Quincy MA',
    'functional fitness training South Shore',
    'injury rehabilitation training Quincy',
    'in-home training South Shore MA',
    'mobile personal training service',
    'traveling fitness coach Massachusetts',
    'at-home personal training Quincy',
  ],
  specializations: [
    'personal trainer for busy professionals Quincy',
    'personal trainer for busy professionals South Shore',
    'personal trainer for beginners Quincy MA',
    'personal trainer for weight loss South Shore',
    'personal trainer for muscle gain Quincy',
    'personal trainer for seniors South Shore MA',
    'personal trainer chronic conditions Quincy',
    'personal trainer injury recovery South Shore',
    'personal trainer accountability coach Quincy',
    'fitness trainer for women South Shore',
    'strength coach for men Quincy MA',
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
    'South Shore fitness',
    'Quincy fitness',
    'mobile fitness training',
    'traveling personal trainer',
    'in-home fitness coaching',
  ],
};
