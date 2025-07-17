import { useCallback } from 'react';
import { 
  trackConversion, 
  trackQuoteRequest, 
  trackPhoneCall, 
  trackFormSubmission,
  trackGalleryView,
  trackServicePageView,
  trackAIWrapIdeaGeneration,
  trackEmailSignup
} from '@/components/analytics/ConversionTracking';

export const useAnalytics = () => {
  const trackEvent = useCallback((eventName: string, properties?: Record<string, any>) => {
    trackConversion(eventName, properties);
  }, []);

  const trackQuote = useCallback((service?: string, location?: string) => {
    trackQuoteRequest(service, location);
  }, []);

  const trackCall = useCallback((source?: string) => {
    trackPhoneCall(source);
  }, []);

  const trackForm = useCallback((formType: string, service?: string) => {
    trackFormSubmission(formType, service);
  }, []);

  const trackGallery = useCallback((category?: string) => {
    trackGalleryView(category);
  }, []);

  const trackService = useCallback((service: string, location?: string) => {
    trackServicePageView(service, location);
  }, []);

  const trackAIIdea = useCallback(() => {
    trackAIWrapIdeaGeneration();
  }, []);

  const trackEmail = useCallback((source?: string) => {
    trackEmailSignup(source);
  }, []);

  const trackPurchase = useCallback((value: number, items: string[]) => {
    if (typeof window !== 'undefined') {
      // Google Analytics Enhanced Ecommerce
      if (window.gtag) {
        window.gtag('event', 'purchase', {
          transaction_id: `txn_${Date.now()}`,
          value: value,
          currency: 'USD',
          items: items.map((item, index) => ({
            item_id: `item_${index}`,
            item_name: item,
            category: 'vehicle_wrap_service',
            quantity: 1,
            price: value / items.length
          }))
        });
      }

      // Facebook Pixel Purchase
      if (window.fbq) {
        window.fbq('track', 'Purchase', {
          value: value,
          currency: 'USD',
          content_type: 'service',
          content_ids: items,
          num_items: items.length
        });
      }
    }
  }, []);

  const trackLead = useCallback((leadValue: number = 150) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', 'generate_lead', {
          currency: 'USD',
          value: leadValue
        });
      }

      // Facebook Pixel
      if (window.fbq) {
        window.fbq('track', 'Lead', {
          value: leadValue,
          currency: 'USD'
        });
      }
    }
  }, []);

  const trackAddToCart = useCallback((service: string, value: number) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', 'add_to_cart', {
          currency: 'USD',
          value: value,
          items: [{
            item_id: service.toLowerCase().replace(/\s+/g, '_'),
            item_name: service,
            category: 'vehicle_wrap_service',
            quantity: 1,
            price: value
          }]
        });
      }

      // Facebook Pixel
      if (window.fbq) {
        window.fbq('track', 'AddToCart', {
          value: value,
          currency: 'USD',
          content_name: service,
          content_category: 'vehicle_wrap_service'
        });
      }
    }
  }, []);

  return {
    trackEvent,
    trackQuote,
    trackCall,
    trackForm,
    trackGallery,
    trackService,
    trackAIIdea,
    trackEmail,
    trackPurchase,
    trackLead,
    trackAddToCart
  };
};

export default useAnalytics;