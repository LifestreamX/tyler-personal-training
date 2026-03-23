'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION, SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent',
      )}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <Link
            href='/'
            className='text-2xl font-bold hover:text-accent transition-colors'
          >
            {SITE_CONFIG.name}
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'font-medium transition-colors hover:text-accent',
                  pathname === item.href ? 'text-accent' : 'text-foreground',
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button size='sm' asChild>
              <Link href='/booking'>Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-foreground'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label='Toggle menu'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {isMobileMenuOpen ? (
                <path d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden py-4 border-t border-border'>
            <div className='flex flex-col space-y-4'>
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'font-medium transition-colors hover:text-accent',
                    pathname === item.href ? 'text-accent' : 'text-foreground',
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button size='sm' className='w-full' asChild>
                <Link href='/booking'>Book Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
