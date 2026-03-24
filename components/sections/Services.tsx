'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export function Services() {
  return (
    <Section id='services'>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='mb-4'>Services</h2>
          <p className='text-xl text-text-secondary max-w-2xl mx-auto'>
            Custom solutions designed for your specific goals, schedule, and
            lifestyle
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className='h-full'>
                <h3 className='text-2xl font-bold mb-3'>{service.title}</h3>
                <p className='text-text-secondary mb-4'>
                  {service.description}
                </p>
                <ul className='space-y-2 mb-6'>
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className='flex items-start'>
                      <span className='text-accent mr-2'>✓</span>
                      <span className='text-sm text-text-secondary'>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
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
          <Button size='lg' asChild>
            <Link href='/services'>View All Services</Link>
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
