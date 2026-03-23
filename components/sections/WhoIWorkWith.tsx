'use client';

import { motion } from 'framer-motion';
import { WHO_I_WORK_WITH } from '@/lib/constants';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export function WhoIWorkWith() {
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
          <h2 className='mb-4'>Who I Work With</h2>
          <p className='text-xl text-text-secondary max-w-2xl mx-auto'>
            From complete beginners to experienced lifters, I tailor my approach
            to meet you where you are
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {WHO_I_WORK_WITH.map((client, index) => (
            <motion.div
              key={client.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className='h-full text-center'>
                <h3 className='text-xl font-bold mb-3'>{client.title}</h3>
                <p className='text-text-secondary text-sm'>
                  {client.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
