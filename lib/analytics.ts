export const GA_EVENT_NAMES = {
  FORM_SUBMIT_ASSESSMENT: 'form_submit_assessment',
  FORM_SUBMIT_CONTACT: 'form_submit_contact',
  CLICK_BOOKING: 'click_booking',
  CLICK_SOCIAL: 'click_social',
  CLICK_CTA: 'click_cta',
};

/**
 * Log a custom event to Google Analytics
 */
export const trackGAEvent = (eventName: string, eventParams: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }
};
