'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface FormData {
  name: string;
  email: string;
  phone: string;
  goals: string[];
  experience: string;
  ageRange: string;
  injuries: string;
  trainingPreference: string;
  availability: string;
  additionalInfo: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  goals: [],
  experience: '',
  ageRange: '',
  injuries: '',
  trainingPreference: '',
  availability: '',
  additionalInfo: '',
};

export default function AssessmentPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 5;

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleGoal = (goal: string) => {
    const currentGoals = formData.goals;
    if (currentGoals.includes(goal)) {
      updateFormData(
        'goals',
        currentGoals.filter((g) => g !== goal),
      );
    } else {
      updateFormData('goals', [...currentGoals, goal]);
    }
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Section className='pt-32 min-h-screen flex items-center'>
        <Container size='md'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className='text-center py-12'>
              <div className='text-6xl mb-6'>✓</div>
              <h1 className='text-3xl font-bold mb-4'>Assessment Submitted!</h1>
              <p className='text-text-secondary text-lg mb-8'>
                Thank you for completing your fitness assessment. I&apos;ll
                review your information and reach out as soon as possible to
                discuss next steps.
              </p>
              <p className='text-text-secondary mb-8'>
                Check your email for a confirmation and additional information.
              </p>
              <Button size='lg' onClick={() => (window.location.href = '/')}>
                Return to Home
              </Button>
            </Card>
          </motion.div>
        </Container>
      </Section>
    );
  }

  return (
    <Section className='pt-32 pb-16'>
      <Container size='md'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='mb-12 text-center'
        >
          <h1 className='mb-4 text-2xl sm:text-3xl md:text-4xl'>
            Fitness Assessment
          </h1>
          <p className='text-base sm:text-lg text-text-secondary'>
            Help me understand your goals so I can create the perfect plan for
            you
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className='mb-8'>
          <div className='flex justify-between items-center mb-2'>
            <span className='text-sm text-text-secondary'>
              Step {step} of {totalSteps}
            </span>
            <span className='text-sm text-text-secondary'>
              {Math.round((step / totalSteps) * 100)}%
            </span>
          </div>
          <div className='w-full bg-border rounded-full h-2'>
            <motion.div
              className='bg-accent h-2 rounded-full'
              initial={{ width: 0 }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <Card>
          <AnimatePresence mode='wait'>
            {step === 1 && (
              <motion.div
                key='step1'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className='text-xl sm:text-2xl font-bold mb-6'>
                  Basic Information
                </h2>
                <div className='space-y-4'>
                  <div>
                    <label className='block text-sm font-medium mb-2'>
                      Full Name *
                    </label>
                    <input
                      type='text'
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      className='w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent'
                      placeholder='John Doe'
                      required
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium mb-2'>
                      Email Address *
                    </label>
                    <input
                      type='email'
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className='w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent'
                      placeholder='john@example.com'
                      required
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium mb-2'>
                      Phone Number *
                    </label>
                    <input
                      type='tel'
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      className='w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent'
                      placeholder='(617) 555-0123'
                      required
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key='step2'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className='text-xl sm:text-2xl font-bold mb-6'>
                  Your Goals
                </h2>
                <p className='text-text-secondary mb-4'>
                  Select all that apply:
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {[
                    'Fat Loss',
                    'Muscle Building',
                    'Strength Gain',
                    'General Health',
                    'Athletic Performance',
                    'Injury Recovery',
                  ].map((goal) => (
                    <button
                      key={goal}
                      onClick={() => toggleGoal(goal)}
                      className={`p-4 border-2 rounded-lg text-left transition-all ${
                        formData.goals.includes(goal)
                          ? 'border-accent bg-accent/10'
                          : 'border-border hover:border-accent/50'
                      }`}
                    >
                      <div className='flex items-center justify-between'>
                        <span className='font-medium'>{goal}</span>
                        {formData.goals.includes(goal) && (
                          <span className='text-accent'>✓</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key='step3'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className='text-xl sm:text-2xl font-bold mb-6'>
                  Experience & Background
                </h2>
                <div className='space-y-6'>
                  <div>
                    <label className='block text-sm font-medium mb-3'>
                      Training Experience *
                    </label>
                    <div className='space-y-2'>
                      {[
                        { value: 'beginner', label: 'Beginner (0-1 year)' },
                        {
                          value: 'intermediate',
                          label: 'Intermediate (1-3 years)',
                        },
                        { value: 'advanced', label: 'Advanced (3+ years)' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() =>
                            updateFormData('experience', option.value)
                          }
                          className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                            formData.experience === option.value
                              ? 'border-accent bg-accent/10'
                              : 'border-border hover:border-accent/50'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-medium mb-3'>
                      Age Range *
                    </label>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                      {['14-25', '26-40', '41-55', '56+'].map((range) => (
                        <button
                          key={range}
                          onClick={() => updateFormData('ageRange', range)}
                          className={`p-4 border-2 rounded-lg transition-all ${
                            formData.ageRange === range
                              ? 'border-accent bg-accent/10'
                              : 'border-border hover:border-accent/50'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key='step4'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className='text-xl sm:text-2xl font-bold mb-6'>
                  Training Preferences
                </h2>
                <div className='space-y-6'>
                  <div>
                    <label className='block text-sm font-medium mb-3'>
                      Preferred Training Style *
                    </label>
                    <div className='space-y-2'>
                      {[
                        {
                          value: 'in-person',
                          label: 'In-Person (Boston Area)',
                        },
                        { value: 'online', label: 'Online Coaching' },
                        { value: 'hybrid', label: 'Hybrid (Mix of Both)' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() =>
                            updateFormData('trainingPreference', option.value)
                          }
                          className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                            formData.trainingPreference === option.value
                              ? 'border-accent bg-accent/10'
                              : 'border-border hover:border-accent/50'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-medium mb-2'>
                      Any Injuries or Limitations? *
                    </label>
                    <textarea
                      value={formData.injuries}
                      onChange={(e) =>
                        updateFormData('injuries', e.target.value)
                      }
                      className='w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent min-h-[100px]'
                      placeholder='List any injuries, medical conditions, or physical limitations I should know about...'
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div
                key='step5'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className='text-xl sm:text-2xl font-bold mb-6'>
                  Final Details
                </h2>
                <div className='space-y-6'>
                  <div>
                    <label className='block text-sm font-medium mb-2'>
                      Weekly Availability *
                    </label>
                    <input
                      type='text'
                      value={formData.availability}
                      onChange={(e) =>
                        updateFormData('availability', e.target.value)
                      }
                      className='w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent'
                      placeholder='e.g., Monday/Wednesday/Friday mornings'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium mb-2'>
                      Anything Else I Should Know?
                    </label>
                    <textarea
                      value={formData.additionalInfo}
                      onChange={(e) =>
                        updateFormData('additionalInfo', e.target.value)
                      }
                      className='w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent min-h-[120px]'
                      placeholder='Tell me about your schedule, past training experiences, specific concerns, or anything else that might help me create the perfect program for you...'
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className='flex justify-between mt-8 pt-6 border-t border-border'>
            <Button
              variant='outline'
              onClick={prevStep}
              disabled={step === 1}
              className='disabled:opacity-30'
            >
              Previous
            </Button>

            {step < totalSteps ? (
              <Button onClick={nextStep}>Continue</Button>
            ) : (
              <Button onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Assessment'}
              </Button>
            )}
          </div>
        </Card>
      </Container>
    </Section>
  );
}
