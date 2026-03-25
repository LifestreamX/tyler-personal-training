'use client';

import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { CTA } from '@/components/sections/CTA';

export default function AboutPage() {
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
            <img
              src='/assets/tyler.jpg'
              alt='Tyler profile photo'
              className='mx-auto mb-6 rounded-full w-32 h-32 object-cover border-4 border-primary shadow-lg'
            />
            <h1 className='mb-6 text-2xl sm:text-3xl md:text-4xl'>
              About Tyler
            </h1>
            <p className='text-base sm:text-lg md:text-xl text-text-secondary'>
              Certified trainer with 8+ years of experience. Evidence-based
              approach. Results that actually last.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Story Section */}
      <Section>
        <Container size='md'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='prose prose-lg prose-invert max-w-none'
          >
            <h2 className='text-2xl sm:text-3xl font-bold mb-6'>My Approach</h2>
            <p className='text-text-secondary mb-4'>
              With over 8 years of experience spanning commercial clubs like
              Town Sports International and years of independent coaching,
              I&apos;ve helped hundreds of clients reach their goals. I&apos;m
              passionate about helping people build sustainable fitness habits
              that actually fit into their lives. No cookie-cutter programs. No
              fad diets. Just structured, goal-oriented training that adapts to
              your schedule, goals, and limitations.
            </p>
            <p className='text-text-secondary mb-4'>
              What sets my coaching apart is genuine accountability and
              personalized attention. I don&apos;t just write programs. I&apos;m
              invested in your success. That means regular check-ins, form
              reviews, and honest feedback when you need it most.
            </p>
            <p className='text-text-secondary mb-4'>
              Whether you&apos;re dealing with injuries, medical conditions,
              busy schedules, or are completely new to training, I believe
              effective training isn&apos;t about pushing harder. It&apos;s
              about training smarter and building a foundation that lasts.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Experience Highlights */}
      <Section className='bg-muted'>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='mb-4'>Experience & Credentials</h2>
            <p className='text-text-secondary max-w-2xl mx-auto'>
              ACE Certified Personal Trainer with 8+ years of field experience
              and extensive nutrition knowledge.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <h3 className='text-2xl font-bold mb-3'>Specializations</h3>
                <ul className='space-y-2 text-text-secondary'>
                  <li className='flex items-start'>
                    <span className='text-accent mr-2'>•</span>
                    <span>
                      Longevity, Mobility & Cognitive Health
                      (Alzheimer&apos;s/Dementia)
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-accent mr-2'>•</span>
                    <span>Injury Rehabilitation & Pain Management</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-accent mr-2'>•</span>
                    <span>Fat Loss, Muscle Building & Recomposition</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-accent mr-2'>•</span>
                    <span>Strength Training & Powerlifting</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-accent mr-2'>•</span>
                    <span>Foundational Strength for Youth & Teens</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <h3 className='text-2xl font-bold mb-3'>Who I Work With</h3>
                <ul className='space-y-2 text-text-secondary'>
                  <li className='flex items-start'>
                    <span className='text-accent mr-2'>•</span>
                    <span>
                      Ages 14 to 80+: Training adapted for any stage of life
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-accent mr-2'>•</span>
                    <span>
                      Individuals managing chronic conditions or diseases
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-accent mr-2'>•</span>
                    <span>Beginners looking for a safe, structured start</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-accent mr-2'>•</span>
                    <span>
                      Experienced lifters who want to be pushed to the next
                      level
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-accent mr-2'>•</span>
                    <span>
                      Busy people needing efficient, result-driven sessions
                    </span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTA
        title="Let's Build Your Transformation"
        description='Ready to work with a coach who actually cares about your long-term success?'
        primaryButtonText='Start Your Assessment'
        primaryButtonHref='/assessment'
      />
    </>
  );
}
