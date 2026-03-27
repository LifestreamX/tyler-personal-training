'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { formatPhoneNumber } from '@/lib/formatPhoneNumber';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { trackGAEvent, GA_EVENT_NAMES } from '@/lib/analytics';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error ||
            errorData.details?.message ||
            'Failed to send message',
        );
      }

      // Track successful contact form submission
      trackGAEvent(GA_EVENT_NAMES.FORM_SUBMIT_CONTACT, {
        method: 'contact_page',
      });

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        'Failed to send message. Please try again or email directly.',
      );
      console.error('Contact form error:', error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (e.target.name === 'phone') {
      setFormData({ ...formData, phone: formatPhoneNumber(e.target.value) });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

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
            <h1 className='mb-4 text-2xl sm:text-3xl md:text-4xl'>
              Get In Touch
            </h1>
            <p className='text-base sm:text-lg text-text-secondary'>
              Have questions? Ready to start your fitness journey? Let&apos;s
              talk.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <h2 className='text-xl sm:text-2xl font-bold mb-6'>
                  Send a Message
                </h2>

                {status === 'success' && (
                  <div className='mb-6 p-4 bg-green-100 border border-green-400 rounded-lg'>
                    <p className='text-green-700 font-medium'>
                      ✓ Message sent successfully! I&apos;ll respond as soon as
                      possible.
                    </p>
                  </div>
                )}

                {status === 'error' && (
                  <div className='mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg'>
                    <p className='text-red-500 font-medium'>{errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium mb-2'
                    >
                      Name *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent'
                      placeholder='John Doe'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium mb-2'
                    >
                      Email *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent'
                      placeholder='john@example.com'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium mb-2'
                    >
                      Phone (Optional)
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      className='w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent'
                      placeholder='(617) 555-0123'
                      maxLength={14}
                      pattern='\(\d{3}\) \d{3}-\d{4}'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium mb-2'
                    >
                      Message *
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className='w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent'
                      placeholder='Tell me about your fitness goals, questions, or anything else...'
                    />
                  </div>

                  <Button
                    type='submit'
                    size='lg'
                    className='w-full'
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='space-y-6'
            >
              <Card>
                <h3 className='text-xl font-bold mb-4'>Contact Information</h3>
                <div className='space-y-4'>
                  <div>
                    <div className='text-sm text-text-secondary mb-1'>
                      Email
                    </div>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className='text-accent hover:underline'
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                  <div>
                    <div className='text-sm text-text-secondary mb-1'>
                      Phone
                    </div>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className='text-accent hover:underline'
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                  <div>
                    <div className='text-sm text-text-secondary mb-1'>
                      Location
                    </div>
                    <p>{SITE_CONFIG.location}</p>
                  </div>
                </div>
              </Card>

              <Card>
                <h3 className='text-xl font-bold mb-4'>Response Time</h3>
                <p className='text-text-secondary mb-4'>
                  I&apos;ll respond as soon as possible.
                </p>
                <div className='text-sm text-text-secondary'>
                  <p className='mb-1'>Monday - Sunday: 9am - 5pm</p>
                </div>
              </Card>

              <Card className='bg-linear-to-br from-accent/10 to-accent/5 border-accent/20'>
                <h3 className='text-xl font-bold mb-3'>
                  Prefer to Book Directly?
                </h3>
                <p className='text-text-secondary mb-4'>
                  Skip the form and schedule your free consultation now.
                </p>
                <Button variant='outline' className='w-full' asChild>
                  <a href='/booking'>Schedule Consultation</a>
                </Button>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
}
