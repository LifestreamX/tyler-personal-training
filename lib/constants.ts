export const SITE_CONFIG = {
  name: 'Tyler Allen Personal Training',
  tagline: 'Your Partner in Fitness Excellence',
  description:
    'Professional personal training in the Boston area. Specializing in strength training, fat loss, and building sustainable fitness habits that last.',
  location: 'Boston, MA',
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
      'I travel to your home in the Boston area for personalized one-on-one training sessions. Bring the gym experience to your space with professional coaching, custom programs, and nutrition guidance.',
    benefits: [
      'Training at your home on your schedule',
      'Direct coaching and real-time form correction',
      'Custom workout programs tailored to your goals',
      'Nutrition guidance and meal planning support',
      'Flexible scheduling (30 or 60-minute sessions)',
      'No gym membership required',
    ],
  },
  {
    id: 'online',
    title: 'Online Remote Training',
    description:
      'Get the same personalized coaching as in-home training, but delivered live via video call. Perfect for busy professionals, remote workers, or anyone who prefers the flexibility of training from home or while traveling.',
    benefits: [
      'Custom workout programs designed for you',
      'Live video training sessions (just like in-person, but online)',
      'Weekly check-ins and progress tracking',
      'Live form review and technique feedback during video call',
      'Nutrition guidance and macro calculations',
      'Flexible session times (30 or 60-minute sessions)',
    ],
  },
] as const;

export const WHO_I_WORK_WITH = [
  {
    title: 'Busy Professionals',
    description:
      'Maximize results with efficient, time-optimized training that fits your schedule.',
  },
  {
    title: 'Beginners',
    description:
      'Build a strong foundation with proper technique and sustainable habits.',
  },
  {
    title: 'Adults 40+',
    description:
      'Age-appropriate training focused on longevity, mobility, and strength retention.',
  },
  {
    title: 'Strength Focused',
    description:
      'Advanced programming for serious lifters looking to break plateaus.',
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
