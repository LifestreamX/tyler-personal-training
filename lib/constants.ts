export const SITE_CONFIG = {
  name: 'Tyler Allen Personal Training',
  tagline: 'Your Partner in Fitness Excellence',
  description:
    'Professional personal training in Quincy and South Shore MA. Mobile in-home training serving Quincy, Braintree, Weymouth, Milton, Hingham, Plymouth, and surrounding communities. Specializing in strength training, fat loss, and building sustainable fitness habits that last.',
  location: 'Quincy, MA',
  email: 'tylerallen@live.com',
  phone: '(774) 279-1607',
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    'https://calendly.com/your-calendly-link',
} as const;

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Assessment', href: '/assessment' },
  { name: 'Booking', href: '/booking' },
  // { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
] as const;

export const SERVICES = [
  {
    id: 'in-person',
    title: 'In-Home Personal Training',
    description:
      'I travel to your home in Quincy, South Shore MA, and Greater Boston for personalized one-on-one training sessions. Serving Quincy, Braintree, Weymouth, Milton, Canton, Hingham, Plymouth, and surrounding communities. Bring the gym experience to your space with professional mobile coaching, custom programs, and nutrition guidance.',
    benefits: [
      'Training at your home on your schedule',
      'Direct coaching and real-time form correction',
      'Custom workout programs tailored to your goals',
      'Nutrition guidance and meal planning support',
      'Flexible scheduling (30 or 60-minute sessions)',
      'No gym membership required',
      'Mobile service covering South Shore MA and Greater Boston',
    ],
  },
  {
    id: 'online',
    title: 'Online Remote Training',
    description:
      'Get the same personalized coaching as in-home training, but delivered live via video call. Perfect for busy professionals, remote workers, or anyone in South Shore MA and beyond who prefers the flexibility of training from home or while traveling.',
    benefits: [
      'Custom workout programs designed for you',
      'Live video training sessions (just like in-person, but online)',
      'Weekly check-ins and progress tracking',
      'Live form review and technique feedback during video call',
      'Nutrition guidance and macro calculations',
      'Flexible session times (30 or 60-minute sessions)',
      'Train from anywhere in Massachusetts or beyond',
    ],
  },
] as const;

export const WHO_I_WORK_WITH = [
  {
    title: 'Busy Schedules',
    description:
      'Flexible, efficient training for professionals, parents, and anyone short on time.',
  },
  {
    title: 'Chronic Conditions',
    description:
      'Experience working with various conditions and diseases, including cognitive health (Alzheimer’s/Dementia).',
  },
  {
    title: 'Injury Rehab',
    description:
      'Focus on safe, effective rehabilitation and long-term injury prevention through smart movement.',
  },
  {
    title: 'Beginners & Pros',
    description:
      'From absolute beginners building foundations to experienced lifters wanting to be pushed.',
  },
] as const;

// TODO: Add real client testimonials when available
// Uncomment and update with actual client success stories
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Client Name',
    age: 30,
    result: 'Achieved fitness goal',
    quote:
      'Working with Tyler has been transformative. The personalized approach and consistent support made all the difference.',
    rating: 5,
  },
  // Add more testimonials as you collect them from clients
] as const;

/* 
// Example testimonials - replace with real ones:
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah M.',
    age: 42,
    result: 'Lost 35 lbs in 6 months',
    quote:
      'Tyler completely changed my relationship with fitness. His structured approach and accountability kept me on track even when life got busy.',
    rating: 5,
  },
  // ... more testimonials
] as const;
*/

export const CERTIFICATIONS = [
  'ACE Certified Personal Trainer',
  'Nutrition Knowledge',
  // Add additional certifications as you earn them
] as const;
