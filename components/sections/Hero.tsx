'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { trackGAEvent, GA_EVENT_NAMES } from '@/lib/analytics';

export function Hero() {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-linear-to-br from-background via-background to-muted'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(230,57,70,0.1),transparent_50%)]' />
      </div>

      <Container className='relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center max-w-4xl mx-auto'
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className='mb-6'
          >
            Build The <span className='text-accent'>Strongest</span> Version of
            Yourself
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto'
          >
            Data-driven programming. Expert coaching. Real accountability.
            <br />
            Stop guessing. Start achieving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='flex flex-col sm:flex-row gap-4 justify-center'
          >
            <Button
              size='lg'
              asChild
              onClick={() =>
                trackGAEvent(GA_EVENT_NAMES.CLICK_CTA, {
                  location: 'hero',
                  cta: 'start_fitness_plan',
                })
              }
            >
              <Link href='/assessment'>Start Your Fitness Plan</Link>
            </Button>
            <Button
              size='lg'
              variant='outline'
              asChild
              onClick={() =>
                trackGAEvent(GA_EVENT_NAMES.CLICK_CTA, {
                  location: 'hero',
                  cta: 'book_consultation',
                })
              }
            >
              <Link href='/booking'>Book Consultation</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto'
          >
            <div>
              <div className='text-3xl md:text-4xl font-bold text-accent'>
                100%
              </div>
              <div className='text-sm text-text-secondary mt-1'>
                Personalized Plans
              </div>
            </div>
            <div>
              <div className='text-3xl md:text-4xl font-bold text-accent'>
                1-on-1
              </div>
              <div className='text-sm text-text-secondary mt-1'>
                Dedicated Coaching
              </div>
            </div>
            <div>
              <div className='text-3xl md:text-4xl font-bold text-accent'>
                24/7
              </div>
              <div className='text-sm text-text-secondary mt-1'>
                Support Available
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
      >
        <div className='w-6 h-10 border-2 border-accent rounded-full flex justify-center'>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className='w-1.5 h-1.5 bg-accent rounded-full mt-2'
          />
        </div>
      </motion.div>
    </section>
  );
}
