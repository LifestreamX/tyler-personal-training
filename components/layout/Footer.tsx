import Link from 'next/link';
import { SITE_CONFIG, NAVIGATION } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-muted border-t border-border'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Brand */}
          <div>
            <h3 className='text-xl font-bold mb-4'>{SITE_CONFIG.name}</h3>
            <p className='text-text-secondary mb-4'>{SITE_CONFIG.tagline}</p>
            <p className='text-sm text-text-secondary'>
              {SITE_CONFIG.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className='text-text-secondary hover:text-accent transition-colors'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='font-semibold mb-4'>Contact</h4>
            <ul className='space-y-2 text-text-secondary'>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className='hover:text-accent transition-colors'
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className='hover:text-accent transition-colors'
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-border mt-8 pt-8 text-center text-sm text-text-secondary'>
          <p>
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
