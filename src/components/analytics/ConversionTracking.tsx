import React, { useEffect } from 'react';

// Type declarations for global analytics functions
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Conversion tracking events
export const trackConversion = (event: string, data?: Record<string, any>) => {
  // Google Analytics 4 event tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, {
      event_category: 'conversion',
      event_label: data?.label || event,
      value: data?.value || 0,
      currency: 'USD',
      ...data
    });
  }

  // Facebook Pixel tracking
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', event, data);
  }

  // Console logging for development
  console.log('Conversion tracked:', { event, data });
};

// Specific conversion functions
export const trackQuoteRequest = (service?: string, location?: string) => {
  trackConversion('quote_request', {
    service_type: service || 'general',
    location: location || 'chicago',
    value: 150 // Average quote value
  });
};

export const trackPhoneCall = (source?: string) => {
  trackConversion('phone_call', {
    source: source || 'website',
    value: 200 // Average call value
  });
};

export const trackFormSubmission = (formType: string, service?: string) => {
  trackConversion('form_submission', {
    form_type: formType,
    service_type: service || 'general',
    value: 100
  });
};

export const trackGalleryView = (category?: string) => {
  trackConversion('gallery_view', {
    category: category || 'all',
    value: 50
  });
};

export const trackServicePageView = (service: string, location?: string) => {
  trackConversion('service_page_view', {
    service_type: service,
    location: location || 'chicago',
    value: 25
  });
};

export const trackAIWrapIdeaGeneration = () => {
  trackConversion('ai_wrap_idea_generated', {
    value: 75
  });
};

export const trackEmailSignup = (source?: string) => {
  trackConversion('email_signup', {
    source: source || 'newsletter',
    value: 80
  });
};

// Component for automatic page view tracking
const ConversionTracking: React.FC = () => {
  useEffect(() => {
    // Track page view
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: currentPath + currentSearch,
        page_title: document.title,
        custom_map: {
          'custom_parameter_1': 'service_type',
          'custom_parameter_2': 'location'
        }
      });
    }
  }, []);

  return null;
};

export default ConversionTracking;