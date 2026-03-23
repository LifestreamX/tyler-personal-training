# Setup Guide for Tyler Personal Training Website

## Quick Start Checklist

### 1. ✅ Environment Setup

- [x] Node.js 18.17+ installed
- [x] Project initialized with Next.js
- [ ] `.env.local` configured with your values

### 2. 📝 Content Customization

#### Update Site Information

Edit `/lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'Your Name Fitness', // Change this
  tagline: 'Your tagline', // Change this
  description: 'Your description', // Change this
  location: 'Your City, State', // Change this
  email: 'your@email.com', // Change this
  phone: '(123) 456-7890', // Change this
  calendlyUrl: 'your-calendly-url', // Change this
};
```

#### Update Services

Modify the `SERVICES` array in `/lib/constants.ts` to match your offerings.

#### Update Testimonials

Replace placeholder testimonials in `/lib/constants.ts` with real client testimonials.

#### Update Certifications

Edit the `CERTIFICATIONS` array in `/lib/constants.ts`.

### 3. 🎨 Design Customization

#### Brand Colors

Edit `/app/globals.css`:

```css
:root {
  --accent: #e63946; /* Primary color - currently red */
  --accent-hover: #d62839; /* Darker shade for hover */
  --background: #0a0a0a; /* Dark background */
  --foreground: #f5f5f5; /* Light text color */
}
```

**Suggested color schemes:**

**Blue Fitness:**

```css
--accent: #3b82f6;
--accent-hover: #2563eb;
```

**Green Health:**

```css
--accent: #10b981;
--accent-hover: #059669;
```

**Orange Energy:**

```css
--accent: #f97316;
--accent-hover: #ea580c;
```

**Purple Premium:**

```css
--accent: #8b5cf6;
--accent-hover: #7c3aed;
```

### 4. 📧 Email Service Setup

Choose ONE email service and configure:

#### Option A: SendGrid (Recommended for beginners)

1. Sign up at https://sendgrid.com/
2. Create API key
3. Install: `npm install @sendgrid/mail`
4. Add to `.env.local`:

```env
SENDGRID_API_KEY="your_api_key"
SENDGRID_FROM_EMAIL="noreply@yoursite.com"
```

5. Update `/app/api/contact/route.ts`:

```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

await sgMail.send({
  to: process.env.CONTACT_EMAIL!,
  from: process.env.SENDGRID_FROM_EMAIL!,
  subject: `Contact from ${name}`,
  text: message,
  html: `<p>${message}</p>`,
});
```

#### Option B: Resend (Modern, developer-friendly)

1. Sign up at https://resend.com/
2. Get API key
3. Install: `npm install resend`
4. Add to `.env.local`:

```env
RESEND_API_KEY="your_api_key"
```

5. Update `/app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: process.env.CONTACT_EMAIL!,
  subject: `Contact from ${name}`,
  html: `<p>${message}</p>`,
});
```

### 5. 📅 Calendly Integration

1. Get your Calendly link: https://calendly.com/
2. Update `.env.local`:

```env
NEXT_PUBLIC_CALENDLY_URL="https://calendly.com/your-link"
```

3. Install package: `npm install react-calendly`

4. Update `/app/booking/page.tsx`:

```typescript
import { InlineWidget } from 'react-calendly';

// Replace the placeholder div with:
<InlineWidget url={process.env.NEXT_PUBLIC_CALENDLY_URL!} />
```

### 6. 🚀 Deployment

#### Deploy to Vercel (Easiest)

1. Push code to GitHub
2. Go to https://vercel.com/
3. Click "Import Project"
4. Select your GitHub repository
5. Add environment variables in Vercel dashboard
6. Deploy!

#### Deploy to Netlify

1. Push code to GitHub
2. Go to https://netlify.com/
3. Click "Add new site"
4. Connect to GitHub
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Add environment variables
8. Deploy!

### 7. 🔧 Testing Before Launch

- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Test assessment form (all steps)
- [ ] Test Calendly booking widget
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify all content is updated
- [ ] Check page load speeds
- [ ] Test all CTAs work correctly
- [ ] Verify email notifications work

### 8. 📱 Social Media & SEO

#### Add Social Media Links

Update Footer component in `/components/layout/Footer.tsx` to add social links.

#### Google Analytics Setup

1. Create GA4 property
2. Add to `.env.local`:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
```

3. Create `/lib/analytics.ts`:

```typescript
export const pageview = (url: string) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
    page_path: url,
  });
};
```

### 9. 🎯 Future Enhancements

#### Add Blog Section

Create `/app/blog` directory with dynamic routes for articles.

#### Add Client Portal

1. Set up authentication (NextAuth.js)
2. Create protected routes
3. Add client dashboard

#### Add Payment Processing

1. Set up Stripe account
2. Create pricing plans
3. Implement checkout flow

#### Add CMS

1. Set up Sanity or Contentful
2. Create schemas for services, testimonials, blog posts
3. Make content editable through CMS

### 10. 🆘 Common Issues

**Issue: Styles not applying**

- Solution: Restart dev server (`Ctrl+C`, then `npm run dev`)

**Issue: Environment variables not working**

- Solution: Restart dev server after changing `.env.local`

**Issue: Build fails**

- Solution: Check for TypeScript errors with `npm run build`

**Issue: Forms not submitting**

- Solution: Check browser console for errors, verify API route is working

**Issue: Animations not working**

- Solution: Ensure Framer Motion is installed: `npm install framer-motion`

### 11. 📞 Need Help?

- Check documentation: `/README.md`
- Review code comments in files
- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs
- Framer Motion docs: https://www.framer.com/motion/

## Launch Day Checklist

- [ ] All content updated with real information
- [ ] Email service configured and tested
- [ ] Calendly integration working
- [ ] Analytics tracking set up
- [ ] All forms tested and working
- [ ] Mobile responsiveness verified
- [ ] Images optimized (if added)
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Social media profiles linked
- [ ] Contact information verified
- [ ] Privacy policy added (if collecting data)
- [ ] Terms of service added (if applicable)

## Post-Launch

- Monitor form submissions
- Track analytics
- Collect client testimonials
- Update services as needed
- Add blog content regularly
- Optimize for speed
- Monitor uptime
- Backup regularly

---

**Ready to launch?** Make sure you've completed all items in the checklist above!
