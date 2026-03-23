export const SITE_CONFIG = {
  name: 'Tyler Allen',
  tagline: 'Your Partner in Fitness Excellence',
  description:
    'Professional personal training in the Boston area. Specializing in strength training, fat loss, and building sustainable fitness habits that last.',
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
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
] as const;

export const SERVICES = [
  {
    id: 'in-person',
    title: 'In-Person Training',
    description:
      'One-on-one training sessions at premium facilities in the Boston area. Personalized attention, real-time feedback, and maximum accountability.',
    benefits: [
      'Direct coaching and form correction',
      'Access to premium equipment',
      'Flexible scheduling',
      'Results-driven programming',
    ],
    icon: '🏋️',
  },
  {
    id: 'online',
    title: 'Online Coaching',
    description:
      'Train anywhere with custom programs, video check-ins, and continuous support. Perfect for busy professionals and remote clients.',
    benefits: [
      'Custom workout programs',
      'Weekly check-ins',
      'Form review via video',
      '24/7 messaging support',
    ],
    icon: '💻',
  },
  {
    id: 'custom-programs',
    title: 'Custom Programs',
    description:
      'Tailored training programs designed specifically for your goals, schedule, and equipment availability.',
    benefits: [
      'Goal-specific programming',
      'Equipment-based customization',
      'Progressive overload tracking',
      'Monthly program updates',
    ],
    icon: '📋',
  },
  {
    id: 'nutrition',
    title: 'Nutrition Guidance',
    description:
      'Evidence-based nutrition coaching to complement your training. Sustainable strategies, no crash diets.',
    benefits: [
      'Macro calculations',
      'Meal planning guidance',
      'Supplement recommendations',
      'Lifestyle-based approach',
    ],
    icon: '🥗',
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
  'Certified Personal Trainer',
  'CPR & First Aid Certified',
  // Add your actual certifications here
] as const;
