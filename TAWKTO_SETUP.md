# Tawk.to Live Chat Setup Guide

## Overview

Tawk.to provides free live chat functionality for your website. This allows visitors to chat with you in real-time from any page on your site.

## Step 1: Create a Tawk.to Account

1. Go to https://www.tawk.to/
2. Click "Sign Up Free" in the top right corner
3. Fill out the registration form with:
   - Your name
   - Your email address (tylerallen@live.com)
   - A password
4. Click "Sign Up"
5. Verify your email address by clicking the link sent to your inbox

## Step 2: Create a Property

1. After logging in, you'll be prompted to create a property
2. Enter your website details:
   - **Property Name**: Tyler Allen Personal Training
   - **Website URL**: Your actual domain (or placeholder for now)
3. Click "Add Property"

## Step 3: Get Your Widget Code IDs

1. In your Tawk.to dashboard, click on **"Administration"** in the left sidebar
2. Click on **"Chat Widget"**
3. You'll see a code snippet that looks like this:

```javascript
<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
```

4. From that code, extract:
   - **YOUR_PROPERTY_ID** (e.g., `5f8a3b2c1d2e3f4g5h6i7j8k`)
   - **YOUR_WIDGET_ID** (usually looks like `default` or `1abc2def3`)

## Step 4: Add IDs to Your Website

1. Open your `.env.local` file
2. Find the Tawk.to section and uncomment the lines:

```env
# Tawk.to Live Chat
NEXT_PUBLIC_TAWK_PROPERTY_ID="YOUR_PROPERTY_ID"
NEXT_PUBLIC_TAWK_WIDGET_ID="YOUR_WIDGET_ID"
```

3. Replace `YOUR_PROPERTY_ID` and `YOUR_WIDGET_ID` with the actual values from Step 3
4. Save the file
5. Restart your development server:

```bash
npm run dev
```

## Step 5: Customize Your Chat Widget (Optional)

1. In your Tawk.to dashboard, go to **Administration > Chat Widget**
2. Click **"Appearance"** to customize:
   - Widget color (recommend: #E63946 to match your site's accent color)
   - Widget position (already set to bottom-right)
   - Welcome message
   - Offline message
3. Click **"Channels"** to customize:
   - Pre-chat form fields
   - Offline form settings
   - Auto-responses

## Step 6: Install Mobile Apps

To receive and respond to chats from anywhere:

- **iOS**: Download "tawk.to" from the App Store
- **Android**: Download "tawk.to" from Google Play Store
- Log in with your account credentials
- Enable push notifications for instant alerts

## Step 7: Test Your Chat

1. Open your website in a browser
2. You should see a chat widget in the bottom-right corner
3. Click on it and send a test message
4. Check your Tawk.to dashboard or mobile app to see the message
5. Reply to test the full conversation flow

## Useful Features

### Set Your Availability

- Go to **Dashboard** and set your online/offline status
- Configure working hours under **Administration > Settings**

### Canned Responses

- Create quick responses for common questions
- Go to **Administration > Shortcuts**

### Chat Triggers

- Set up automatic messages based on visitor behavior
- Go to **Administration > Triggers**

### Analytics

- View chat statistics and visitor insights
- Go to **Monitoring > Dashboard**

## Troubleshooting

### Chat widget not appearing?

- Verify IDs are correct in `.env.local`
- Make sure you restarted the dev server after adding IDs
- Check browser console for errors (F12)

### Can't receive notifications?

- Install the mobile app
- Enable push notifications in app settings
- Make sure you're set to "Online" in the dashboard

### Widget color doesn't match site?

- Go to Tawk.to dashboard > Administration > Chat Widget > Appearance
- Set the primary color to: `#E63946` (your site's accent color)

## Support

- Tawk.to Help Center: https://help.tawk.to/
- Tawk.to Community: https://community.tawk.to/
- Live chat support: Available on tawk.to website

## Next Steps After Setup

1. Customize your welcome message
2. Set up automated responses for common questions
3. Configure offline hours and offline message
4. (Optional) Add additional users if you ever expand (Administration > Team)
5. Test on both desktop and mobile devices
