# Tyler Personal Training Website

A premium personal trainer website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Next.js 16 (App Router), TypeScript, Tailwind CSS
- **Premium Design**: High-end fitness brand aesthetic with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper metadata and semantic HTML
- **Multi-Step Forms**: Interactive assessment form with progress tracking
- **Contact System**: Form with API route (ready for email integration)
- **Testimonials**: Client success stories with rating system
- **Booking Integration**: Calendly embed placeholder
- **Accessibility**: ARIA labels and semantic markup
- **Type Safety**: Full TypeScript coverage

## 📁 Project Structure

```
/app
  - layout.tsx          # Root layout with Navbar & Footer
  - page.tsx            # Home page
  /about               # About page
  /services            # Services page
  /assessment          # Multi-step assessment form
  /booking             # Calendly booking page
  /testimonials        # Client success stories
  /contact             # Contact form
  /api/contact         # Contact form API route

/components
  /ui                  # Reusable UI components
    - Button.tsx
    - Card.tsx
    - Section.tsx
    - Container.tsx
  /layout             # Layout components
    - Navbar.tsx
    - Footer.tsx
  /sections           # Page sections
    - Hero.tsx
    - Services.tsx
    - WhoIWorkWith.tsx
    - Testimonials.tsx
    - CTA.tsx

/lib
  - constants.ts      # Site config, services, testimonials
  - utils.ts          # Helper functions

/styles
  - globals.css       # Global styles & design system
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.local.example` to `.env.local` and update with your values:

```bash
cp .env.local.example .env.local
```

**Required:**

- `NEXT_PUBLIC_CALENDLY_URL` - Your Calendly scheduling link
- `CONTACT_EMAIL` - Email address to receive contact form submissions

**Optional (for production):**

- Email service API keys (SendGrid, Resend, or AWS SES)
- Stripe keys (for future payment integration)
- Analytics IDs

### 3. Update Site Content

Edit `/lib/constants.ts` to customize:

- Site name and contact information
- Services and descriptions
- Testimonials
- Certifications
- Navigation items

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## 📧 Email Integration

The contact form is ready to integrate with your preferred email service. Uncomment and configure one option in `.env.local`:

### Option 1: SendGrid

```bash
npm install @sendgrid/mail
```

### Option 2: Resend

```bash
npm install resend
```

### Option 3: Nodemailer (SMTP)

```bash
npm install nodemailer
```

Update `/app/api/contact/route.ts` with your chosen service integration.

## 📅 Calendly Integration

To integrate Calendly scheduling:

1. Install the package:

```bash
npm install react-calendly
```

2. Update `/app/booking/page.tsx`:

```tsx
import { InlineWidget } from 'react-calendly';

// Replace the placeholder with:
<InlineWidget url={process.env.NEXT_PUBLIC_CALENDLY_URL} />;
```

## 🎨 Customization

### Colors

Edit the CSS variables in `/app/globals.css`:

- `--accent` - Primary brand color (currently red)
- `--background` - Background color
- `--foreground` - Text color

### Typography

Update heading styles in `/app/globals.css` under the `h1, h2, h3` rules.

### Content

All content is centralized in `/lib/constants.ts` for easy updates.

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the production version:

```bash
npm run build
npm start
```

## 🔮 Future Enhancements

The codebase includes placeholder structure for:

- **Stripe Payments**: Ready for pricing plans and checkout
- **CMS Integration**: Sanity/Contentful for editable content
- **Client Dashboard**: Protected routes for client portal
- **Analytics**: Google Analytics and Facebook Pixel ready

## 📝 To-Do Before Launch

- [ ] Update `.env.local` with real values
- [ ] Customize content in `/lib/constants.ts`
- [ ] Add your Calendly URL
- [ ] Configure email service for contact form
- [ ] Add real client testimonials
- [ ] Replace placeholder images (if any)
- [ ] Set up analytics tracking
- [ ] Test all forms and links
- [ ] Configure domain and SSL
- [ ] Set up email forwarding

## 🐛 Troubleshooting

**Build errors?**

- Run `npm install` to ensure all dependencies are installed
- Check that Node.js version is 18.17 or higher

**Styles not loading?**

- Clear `.next` folder: `rm -rf .next`
- Restart dev server

**Forms not working?**

- Check API routes in `/app/api/`
- Verify environment variables are set

## 📄 License

Private project - All rights reserved

## 💬 Support

For questions or issues, contact: tyler@tylerfit.com

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
