import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

// Global type declarations
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    clarity?: (...args: any[]) => void;
  }
}

// Event tracking functions
export const trackQuoteRequest = (service?: string, location?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'quote_request', {
      event_category: 'conversion',
      event_label: service || 'general',
      service_type: service || 'general',
      location: location || 'chicago',
      value: 150
    });
  }
  
  // Microsoft Clarity custom events
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('event', 'quote_request', {
      service: service || 'general',
      location: location || 'chicago'
    });
  }
};

export const trackAppointmentScheduled = (service?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'appointment_scheduled', {
      event_category: 'conversion',
      event_label: service || 'consultation',
      service_type: service || 'consultation',
      value: 200
    });
  }
  
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('event', 'appointment_scheduled', {
      service: service || 'consultation'
    });
  }
};

export const trackPhoneCall = (source?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_call', {
      event_category: 'conversion',
      event_label: source || 'website',
      source: source || 'website',
      value: 250
    });
  }
  
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('event', 'phone_call', {
      source: source || 'website'
    });
  }
};

export const trackChatInteraction = (action: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'chat_interaction', {
      event_category: 'engagement',
      event_label: action,
      action: action,
      value: 50
    });
  }
  
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('event', 'chat_interaction', {
      action: action
    });
  }
};

export const trackGalleryView = (category?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'gallery_view', {
      event_category: 'engagement',
      event_label: category || 'all',
      category: category || 'all',
      value: 25
    });
  }
};

export const trackServicePageView = (service: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'service_page_view', {
      event_category: 'engagement',
      event_label: service,
      service_type: service,
      value: 30
    });
  }
};

interface EnhancedGoogleAnalyticsProps {
  measurementId?: string;
  clarityId?: string;
}

const EnhancedGoogleAnalytics: React.FC<EnhancedGoogleAnalyticsProps> = ({ 
  measurementId = 'G-XXXXXXXXXX', // Replace with actual GA4 ID
  clarityId = 'XXXXXXXXX' // Replace with actual Clarity ID
}) => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics 4
    if (typeof window !== 'undefined') {
      // Create dataLayer if it doesn't exist
      window.dataLayer = window.dataLayer || [];
      
      // Define gtag function
      window.gtag = function() {
        window.dataLayer?.push(arguments);
      };
      
      // Initialize with timestamp
      window.gtag('js', new Date());
      
      // Configure GA4
      window.gtag('config', measurementId, {
        page_path: location.pathname + location.search,
        page_title: document.title,
        send_page_view: true,
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure',
        custom_map: {
          'custom_parameter_1': 'service_type',
          'custom_parameter_2': 'location_area'
        }
      });

      // Enhanced ecommerce settings
      window.gtag('config', measurementId, {
        enhanced_ecommerce: true,
        send_page_view: false // We'll send manually
      });
    }
  }, [measurementId]);

  // Track page views on route changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', measurementId, {
        page_path: location.pathname + location.search,
        page_title: document.title
      });
      
      // Custom page view event with additional data
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname,
        content_group1: getContentGroup(location.pathname)
      });
    }
    
    // Microsoft Clarity page view
    if (typeof window !== 'undefined' && window.clarity) {
      window.clarity('set', 'page', location.pathname);
    }
  }, [location, measurementId]);

  const getContentGroup = (pathname: string): string => {
    if (pathname.includes('/services')) return 'Services';
    if (pathname.includes('/gallery')) return 'Gallery';
    if (pathname.includes('/contact')) return 'Contact';
    if (pathname.includes('/blog')) return 'Blog';
    if (pathname.includes('/locations')) return 'Locations';
    if (pathname === '/') return 'Homepage';
    return 'Other';
  };

  return (
    <Helmet>
      {/* Google Analytics 4 */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              send_page_view: true,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure',
              enhanced_ecommerce: true,
              custom_map: {
                'custom_parameter_1': 'service_type',
                'custom_parameter_2': 'location_area'
              }
            });
            
            // Enhanced conversion tracking
            gtag('config', '${measurementId}', {
              conversion_linker: true,
              enhanced_conversions: true
            });
          `,
        }}
      />

      {/* Microsoft Clarity */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
            
            // Enhanced Clarity tracking
            clarity('set', 'page_type', '${getContentGroup(location.pathname)}');
            clarity('set', 'user_type', 'visitor');
          `,
        }}
      />

      {/* Facebook Pixel (optional) */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_FACEBOOK_PIXEL_ID');
            fbq('track', 'PageView');
          `,
        }}
      />
    </Helmet>
  );
};

export default EnhancedGoogleAnalytics;