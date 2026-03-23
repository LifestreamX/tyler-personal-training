'use client';

import { motion } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { CTA } from '@/components/sections/CTA';

export default function TestimonialsPage() {
  return (
    <>
      <Section className='pt-32 pb-16'>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h1 className='mb-4'>Client Success Stories</h1>
            <p className='text-xl text-text-secondary max-w-2xl mx-auto'>
              Real transformations from real people. No fake reviews, no
              exaggerated claims.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card hover className='h-full flex flex-col'>
                  <div className='flex items-center mb-3'>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className='text-accent text-xl'>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className='text-text-secondary mb-4 italic grow'>
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className='pt-4 border-t border-border'>
                    <div className='font-semibold text-lg'>
                      {testimonial.name}
                    </div>
                    <div className='text-accent font-medium mt-1'>
                      {testimonial.result}
                    </div>
                    <div className='text-sm text-text-secondary mt-1'>
                      Age {testimonial.age}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className='bg-muted'>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center'
          >
            <h2 className='mb-12'>My Commitment to You</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
              {[
                { number: '100%', label: 'Personalized Approach' },
                { number: '1-on-1', label: 'Individual Attention' },
                { number: '24/7', label: 'Support Available' },
                { number: 'All Levels', label: 'Welcome Here' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className='text-center'>
                    <div className='text-4xl md:text-5xl font-bold text-accent mb-2'>
                      {stat.number}
                    </div>
                    <div className='text-text-secondary'>{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      <CTA
        title='Ready to Write Your Success Story?'
        description='Join the growing list of clients who transformed their lives with structured, evidence-based training.'
        primaryButtonText='Start Your Assessment'
        primaryButtonHref='/assessment'
      />
    </>
  );
}
