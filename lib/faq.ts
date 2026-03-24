export const FAQ_DATA = [
  {
    question: 'How much does personal training cost?',
    answer:
      'Pricing varies based on session length (30 or 60 minutes) and training format (in-home or online). Contact me for current rates and package options tailored to your goals and schedule.',
  },
  {
    question: 'Do you offer in-home training in Boston?',
    answer:
      'Yes! I provide in-home personal training throughout the Boston area. I bring all necessary equipment and create custom workouts for your space.',
  },
  {
    question: 'What is online personal training like?',
    answer:
      'Online training includes live video sessions where I guide you through workouts in real-time, plus custom programming, weekly check-ins, form reviews, and nutrition guidance.',
  },
  {
    question: 'How often should I train per week?',
    answer:
      'Most clients see great results training 2-4 times per week. The right frequency depends on your goals, schedule, and recovery capacity. We will create a plan that works for you.',
  },
  {
    question: 'Do you provide nutrition coaching?',
    answer:
      'Yes, all training programs include nutrition guidance and meal planning support to help you reach your goals faster.',
  },
  {
    question: 'Can beginners work with you?',
    answer:
      'Absolutely! I work with clients at all fitness levels, from complete beginners to advanced athletes. Every program is customized to your experience level.',
  },
  {
    question: 'What areas do you serve in Boston?',
    answer:
      'I provide in-home training throughout Boston and surrounding areas within a reasonable travel distance. Contact me to confirm service availability in your specific location.',
  },
  {
    question: 'What certifications do you have?',
    answer:
      'I am a NASM Certified Personal Trainer, CPR & First Aid Certified, and a Nutrition Coaching Specialist.',
  },
  {
    question: 'How long are training sessions?',
    answer:
      'Sessions are available in 30-minute or 60-minute formats for both in-home and online training, depending on your schedule and goals.',
  },
  {
    question: 'Do I need equipment for online training?',
    answer:
      'It depends on your goals. I can design effective programs with minimal equipment or bodyweight only. For best results, basic equipment like dumbbells or resistance bands is helpful.',
  },
] as const;

export function generateFAQStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_DATA.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
