'use client';

import { useEffect } from 'react';

export function TawkTo() {
  useEffect(() => {
    // Get Tawk.to Property ID from environment variables
    const tawkPropertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
    const tawkWidgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID;

    // Only load if both IDs are configured
    if (!tawkPropertyId || !tawkWidgetId) {
      console.log(
        'Tawk.to not configured. Add NEXT_PUBLIC_TAWK_PROPERTY_ID and NEXT_PUBLIC_TAWK_WIDGET_ID to .env.local',
      );
      return;
    }

    // Check if Tawk.to is already loaded
    if ((window as any).Tawk_API) {
      return;
    }

    // Tawk.to script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.tawk.to/${tawkPropertyId}/${tawkWidgetId}`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Append script to body
    document.body.appendChild(script);

    // Customize appearance to match site theme
    script.onload = () => {
      if ((window as any).Tawk_API) {
        (window as any).Tawk_API.customStyle = {
          visibility: {
            desktop: {
              position: 'br', // bottom-right
              xOffset: 20,
              yOffset: 20,
            },
            mobile: {
              position: 'br',
              xOffset: 10,
              yOffset: 10,
            },
          },
        };
      }
    };

    // Cleanup function
    return () => {
      // Remove script if component unmounts
      const existingScript = document.querySelector(`script[src*="tawk.to"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
}
