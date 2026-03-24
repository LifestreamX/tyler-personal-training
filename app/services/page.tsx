'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CTA } from '@/components/sections/CTA';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className='pt-32 pb-16'>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='max-w-3xl mx-auto text-center'
          >
            <h1 className='mb-6'>Training Services</h1>
            <p className='text-base sm:text-lg md:text-xl text-text-secondary'>
              Choose the coaching option that fits your lifestyle. All programs
              include personalized programming, ongoing support, and maximum
              accountability.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className='h-full'>
                  <div className='text-5xl mb-4'>{service.icon}</div>
                  <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4'>
                    {service.title}
                  </h2>
                  <p className='text-text-secondary text-lg mb-6'>
                    {service.description}
                  </p>

                  <div className='mb-6'>
                    <h3 className='font-semibold mb-3'>
                      What&apos;s Included:
                    </h3>
                    <ul className='space-y-3'>
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className='flex items-start'>
                          <span className='text-accent text-xl mr-3'>✓</span>
                          <span className='text-text-secondary'>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant='outline' className='w-full' asChild>
                    <Link href='/assessment'>Get Started</Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section className='bg-muted'>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='mb-4'>How It Works</h2>
            <p className='text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto'>
              A proven process designed to get you results from day one
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            {[
              {
                step: '01',
                title: 'Assessment',
                description:
                  'Complete intake form covering goals, experience, and limitations',
              },
              {
                step: '02',
                title: 'Consultation',
                description:
                  'Free 30-minute call to discuss your plan and answer questions',
              },
              {
                step: '03',
                title: 'Custom Program',
                description:
                  'Receive your personalized training program within 48 hours',
              },
              {
                step: '04',
                title: 'Ongoing Support',
                description:
                  'Regular check-ins, form reviews, and program adjustments',
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className='text-center h-full'>
                  <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-3'>
                    {process.step}
                  </div>
                  <h3 className='text-xl font-bold mb-2'>{process.title}</h3>
                  <p className='text-sm text-text-secondary'>
                    {process.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pricing Note */}
      <Section>
        <Container size='md'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className='text-center'>
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4'>
                Investment & Commitment
              </h2>
              <p className='text-text-secondary mb-4'>
                Pricing varies based on service type and commitment level. All
                packages include personalized programming, ongoing support, and
                accountability coaching.
              </p>
              <p className='text-text-secondary mb-6'>
                Book a free consultation to discuss which option is best for
                your goals and budget.
              </p>
              <Button size='lg' asChild>
                <Link href='/booking'>Schedule Free Consultation</Link>
              </Button>
            </Card>
          </motion.div>
        </Container>
      </Section>

      {/* CTA */}
      <CTA
        title='Not Sure Which Option Is Right?'
        description="Let's talk. I'll help you choose the best coaching package for your goals."
        primaryButtonText='Book a Call'
        primaryButtonHref='/booking'
      />
    </>
  );
}
