# SEO Quick Start - Post-Deployment Actions

## 🚨 CRITICAL: Do This IMMEDIATELY After Deployment

### 1. Update the BASE_URL (5 minutes)

Open `/lib/seo.ts` and change:

```typescript
export const BASE_URL = 'https://tyler-allen.com'; // Update this to your actual domain
```

to your actual domain URL (without trailing slash):

```typescript
export const BASE_URL = 'https://your-actual-domain.com';
```

### 2. Create OG Image (15 minutes)

Create a social sharing image at `/public/og-image.png`:

- Dimensions: **1200x630 pixels**
- Content suggestions:
  - Your name: "Tyler Allen"
  - Tagline: "Personal Training in Boston"
  - Your photo (optional but recommended)
  - Clean, professional design
  - High contrast text

**Tools**: Canva (free), Figma (free), or Photoshop

### 3. Google Search Console Setup (10 minutes)

1. Go to: https://search.google.com/search-console
2. Click "Add Property"
3. Enter your domain URL
4. Verify ownership (choose DNS or HTML file method)
5. Once verified, submit your sitemap:
   - Click "Sitemaps" in left sidebar
   - Enter: `sitemap.xml`
   - Click "Submit"

### 4. Google Business Profile (20 minutes) ⭐ MOST IMPORTANT FOR LOCAL SEO

1. Go to: https://www.google.com/business/
2. Search for your business name
3. If it exists, claim it. If not, create new profile:
   - Business name: Tyler Allen Personal Training
   - Category: Personal Trainer
   - Service area: Add Boston and surrounding cities
   - Phone: (774) 279-1607
   - Website: your domain URL
   - Description: Copy from your homepage
4. Upload photos (yourself, training sessions, etc.)
5. Add business hours (if applicable)
6. Add services:
   - In-Home Personal Training
   - Online Remote Training

**This is THE most important thing for local SEO!**

### 5. Bing Webmaster Tools (5 minutes)

1. Go to: https://www.bing.com/webmasters
2. Sign in with Microsoft account
3. Add your site
4. Verify ownership
5. Submit sitemap: `https://your-domain.com/sitemap.xml`

---

## 📅 Within First Week

### 6. Analytics Setup

**Option A: Google Analytics 4 (Recommended)**

1. Go to: https://analytics.google.com
2. Create new property
3. Set up data stream for your website
4. Get your Measurement ID (looks like: G-XXXXXXXXXX)
5. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
   ```
6. Implement tracking (create `/lib/analytics.ts` - ask for help if needed)

**Option B: Microsoft Clarity (Free, Easy Alternative)**

1. Go to: https://clarity.microsoft.com
2. Add new project
3. Get tracking code
4. Add to your site (in `layout.tsx` `<head>` section)

### 7. Social Media Setup

Create business profiles on:

- Instagram (recommended for fitness)
- Facebook Business Page
- LinkedIn (professional networking)

Then update `/lib/seo.ts` to include these URLs in the `sameAs` array:

```typescript
sameAs: [
  'https://www.instagram.com/yourusername',
  'https://www.facebook.com/yourpage',
  'https://www.linkedin.com/in/yourprofile',
],
```

### 8. Create 1-2 Pieces of Content

Start a blog (future feature) or create content pages:

- "Best Strength Training Exercises for Beginners in Boston"
- "How to Choose a Personal Trainer in Boston"
- "In-Home vs. Online Personal Training: Which is Right for You?"

---

## 🎯 Within First Month

### 9. Local Directory Listings

Get listed on (free):

- Yelp for Business
- Yellow Pages
- Thumbtack
- Bark
- Local Chamber of Commerce
- Boston.com local directory (if available)

**IMPORTANT**: Ensure NAP (Name, Address, Phone) is EXACTLY the same across all listings.

### 10. Ask for Reviews

After successful client sessions:

1. Send follow-up email
2. Request Google review (link to your Google Business Profile)
3. Offer to help if they have any issues
4. Respond to ALL reviews (even negative ones professionally)

**Review Schema** will be automatically added once you have testimonials on your site.

### 11. Monitor & Adjust

Check weekly:

- Google Search Console for any errors
- Google Business Profile insights
- Analytics traffic sources
- Keyword rankings (use free tools like Google Search Console)

---

## 🔧 Technical Verification Checklist

Before launching, verify:

- [ ] All pages load without errors
- [ ] Mobile version works perfectly
- [ ] Forms submit successfully (test contact form)
- [ ] Calendly booking works
- [ ] Email notifications arrive
- [ ] All links work (no 404s)
- [ ] HTTPS is enabled (SSL certificate)
- [ ] robots.txt is accessible: `your-domain.com/robots.txt`
- [ ] Sitemap is accessible: `your-domain.com/sitemap.xml`
- [ ] Favicon displays in browser tab
- [ ] OG image shows when sharing on social media (test on Facebook/LinkedIn)

---

## 📱 Social Media Preview Test

Test how your site looks when shared:

1. Facebook: https://developers.facebook.com/tools/debug/
2. LinkedIn: https://www.linkedin.com/post-inspector/
3. Twitter: https://cards-dev.twitter.com/validator

Paste your homepage URL to see preview.

---

## ⚡ Quick Wins for Immediate SEO Impact

1. **Get 5-10 Google Reviews ASAP** (most important!)
2. **Post consistently on Google Business Profile** (weekly updates)
3. **Add location-specific content** everywhere
4. **Internal linking** - link between your pages naturally
5. **Answer common questions** in your FAQ (already done!)

---

## 🆘 Need Help?

Post-deployment issues? Check:

1. SEO_GUIDE.md (comprehensive guide)
2. SETUP.md (technical setup)
3. Google Search Console (error reports)
4. Browser console (F12) for JavaScript errors

---

**Estimated Time Investment**:

- Day 1: 1 hour (critical tasks 1-5)
- Week 1: 2-3 hours (setup and content)
- Monthly: 2-4 hours (maintenance and monitoring)

**Expected Results**:

- Weeks 1-4: Site appears in Google search for your brand name
- Months 2-3: Local pack appearances for "personal trainer Boston"
- Months 3-6: Organic traffic growth
- Months 6-12: Established rankings for target keywords

---

Last updated: March 2026
