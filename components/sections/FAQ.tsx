'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FAQ_DATA } from '@/lib/faq';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section>
      <Container size='md'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Frequently Asked Questions
          </h2>
          <p className='text-lg text-text-secondary'>
            Everything you need to know about personal training in Quincy and
            South Shore MA
          </p>
        </motion.div>

        <div className='space-y-4'>
          {FAQ_DATA.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className='cursor-pointer'
            >
              <Card className='transition-all hover:border-accent'>
                <div className='flex justify-between items-start gap-4'>
                  <h3 className='text-lg font-semibold flex-1'>
                    {faq.question}
                  </h3>
                  <span className='text-2xl text-accent shrink-0'>
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className='mt-4 pt-4 border-t border-border'
                  >
                    <p className='text-text-secondary'>{faq.answer}</p>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
