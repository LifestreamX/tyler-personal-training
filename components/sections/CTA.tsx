'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

interface CTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export function CTA({
  title = 'Ready to Transform Your Fitness?',
  description = 'Stop second-guessing your training. Get a structured, science-backed plan designed specifically for you.',
  primaryButtonText = 'Start Your Assessment',
  primaryButtonHref = '/assessment',
  secondaryButtonText = 'Book a Call',
  secondaryButtonHref = '/booking',
}: CTAProps) {
  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='bg-linear-to-r from-accent to-accent-hover rounded-2xl p-6 sm:p-8 md:p-12 text-center'
        >
          <h2 className='mb-4 text-white'>{title}</h2>
          <p className='text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
            {description}
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button size='lg' variant='secondary' asChild>
              <Link href={primaryButtonHref}>{primaryButtonText}</Link>
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='bg-transparent text-white border-white hover:bg-white hover:text-accent'
              asChild
            >
              <Link href={secondaryButtonHref}>{secondaryButtonText}</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
