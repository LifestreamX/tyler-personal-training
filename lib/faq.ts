export const FAQ_DATA = [
  {
    question: 'How much does personal training cost?',
    answer:
      'Pricing varies based on session length (30 or 60 minutes) and training format (in-home or online). Contact me for current rates and package options tailored to your goals and schedule.',
  },
  {
    question: 'Do you offer in-home training in Quincy and South Shore MA?',
    answer:
      'Yes! I provide mobile in-home personal training throughout Quincy, South Shore MA, and Greater Boston. I travel to your home in Quincy, Braintree, Weymouth, Milton, Canton, Hingham, Plymouth, Brockton, and surrounding South Shore communities. I create custom workouts for your space and can advise on any equipment you might need.',
  },
  {
    question: 'What is online personal training like?',
    answer:
      'Online personal training is 1-on-1 video coaching. We meet live to go through each exercise in your personalized program, with real-time feedback and form correction. You get custom programming, weekly check-ins, and ongoing support for nutrition and progress.',
  },
  {
    question: 'How often should I train per week?',
    answer:
      'How often you should train depends on your goals, current fitness level, schedule, and recovery needs. Some clients train once a week, others 3-4 times, and it can change over time. I’ll help you find a routine that fits your life and gets results.',
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
    question: 'What areas do you serve in South Shore MA?',
    answer:
      'I provide mobile in-home training throughout Quincy and South Shore Massachusetts, including Braintree, Weymouth, Milton, Canton, Stoughton, Randolph, Hingham, Plymouth, Scituate, Marshfield, Duxbury, Brockton, Taunton, Easton, Bridgewater, and surrounding communities. I also serve Greater Boston including Waltham, Newton, Medford, Cambridge, Somerville, and Boston. Contact me to confirm service availability in your specific location.',
  },
  {
    question: 'How long are training sessions?',
    answer:
      'Sessions are available in 30-minute or 60-minute formats for both in-home and online training, depending on your schedule and goals.',
  },
  {
    question: 'Do I need equipment for home or online training?',
    answer:
      "You don't need a full gym. Many clients start with just bands, a pair of dumbbells and a physio ball. I'll review what you have and recommend only what's truly helpful for your goals, so you never have to guess or buy unnecessary gear.",
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
