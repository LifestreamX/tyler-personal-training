import { SITE_CONFIG } from './constants';

export const BASE_URL = 'https://tyler-allen.com'; // Update this to your actual domain

export function generateStructuredData() {
  // LocalBusiness Schema for SEO
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#localbusiness`,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: BASE_URL,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Boston',
      addressRegion: 'MA',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.3601,
      longitude: -71.0589,
    },
    areaServed: [
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 42.3601,
          longitude: -71.0589,
        },
        geoRadius: '50000', // 50km service radius
      },
    ],
    priceRange: '$$',
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
  };

  // Person Schema for Tyler Allen
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BASE_URL}/#person`,
    name: SITE_CONFIG.name,
    jobTitle: 'Certified Personal Trainer',
    description:
      'NASM Certified Personal Trainer specializing in strength training, fat loss, and sustainable fitness habits in Boston, MA',
    url: BASE_URL,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Boston',
      addressRegion: 'MA',
      addressCountry: 'US',
    },
    worksFor: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: BASE_URL,
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
        'Professional one-on-one personal training sessions at your home in the Boston area. Custom workout programs, nutrition guidance, and flexible scheduling.',
      provider: {
        '@id': `${BASE_URL}/#person`,
      },
      areaServed: {
        '@type': 'City',
        name: 'Boston',
        containedInPlace: {
          '@type': 'State',
          name: 'Massachusetts',
        },
      },
      serviceType: 'Personal Training',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${BASE_URL}/services#online`,
      name: 'Online Remote Training',
      description:
        'Virtual personal training via video calls. Custom programming, live coaching sessions, form review, and nutrition guidance from anywhere.',
      provider: {
        '@id': `${BASE_URL}/#person`,
      },
      serviceType: 'Online Personal Training',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
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
  ],
  secondary: [
    'in-home personal training Boston',
    'online personal trainer',
    'strength training Boston',
    'fat loss coach Boston',
    'fitness coach Boston',
    'weight loss trainer Boston',
    'muscle building coach',
    'Boston fitness professional',
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
  ],
};
