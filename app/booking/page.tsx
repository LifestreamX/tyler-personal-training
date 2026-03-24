'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { InlineWidget } from 'react-calendly';
import { SITE_CONFIG } from '@/lib/constants';

export default function BookingPage() {
  return (
    <>
      <Section className='pt-32 pb-16'>
        <Container size='md'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h1 className='mb-4'>Book Your Consultation</h1>
            <p className='text-xl text-text-secondary'>
              Schedule a free 30-minute call to discuss your goals and find the
              right training plan
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className='mb-8'>
              <h2 className='text-xl sm:text-2xl font-bold mb-4'>
                What to Expect
              </h2>
              <ul className='space-y-3 text-text-secondary'>
                <li className='flex items-start'>
                  <span className='text-accent mr-3'>✓</span>
                  <span>30-minute video or phone call at your convenience</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-accent mr-3'>✓</span>
                  <span>
                    In-depth discussion about your fitness goals and challenges
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-accent mr-3'>✓</span>
                  <span>
                    Overview of training options and which might work best for
                    you
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-accent mr-3'>✓</span>
                  <span>
                    Honest assessment of whether we&apos;re a good fit
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-accent mr-3'>✓</span>
                  <span>Next steps and pricing information</span>
                </li>
              </ul>
            </Card>

            <div style={{ minHeight: '800px' }}>
              <Card className='overflow-hidden h-full'>
                <InlineWidget
                  url={SITE_CONFIG.calendlyUrl}
                  styles={{ height: '100%', minHeight: '800px' }}
                />
              </Card>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
