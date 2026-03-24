'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TESTIMONIALS } from '@/lib/constants';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export function Testimonials() {
  const featuredTestimonials = TESTIMONIALS.slice(0, 3);

  return (
    <Section className='bg-muted'>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='mb-4'>Client Results</h2>
          <p className='text-xl text-text-secondary max-w-2xl mx-auto'>
            Real people. Real results. No gimmicks.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12'>
          {featuredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className='h-full'>
                <div className='flex items-center mb-2'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className='text-accent text-xl'>
                      ★
                    </span>
                  ))}
                </div>
                <p className='text-text-secondary mb-4 italic'>
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className='pt-4 border-t border-border'>
                  <div className='font-semibold'>{testimonial.name}</div>
                  <div className='text-sm text-accent font-medium'>
                    {testimonial.result}
                  </div>
                  <div className='text-sm text-text-secondary'>
                    Age {testimonial.age}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center'
        >
          <Button variant='outline' asChild>
            <Link href='/testimonials'>Read More Success Stories</Link>
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
