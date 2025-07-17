import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const GoogleAnalytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    const initGA = () => {
      // Google Analytics 4 Global Site Tag
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
          custom_map: {
            'dimension1': 'service_type',
            'dimension2': 'location',
            'dimension3': 'business_type'
          }
        });
      `;
      document.head.appendChild(script2);

      // Set up gtag function
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer!.push(arguments);
      };
    };

    // Initialize on first load
    if (!window.gtag) {
      initGA();
    }
  }, []);

  useEffect(() => {
    // Track page views on route changes
    if (window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: location.pathname + location.search,
        page_title: document.title,
        page_location: window.location.href
      });

      // Track enhanced ecommerce page view
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search,
        content_group1: getContentGroup(location.pathname),
        custom_parameter: {
          page_type: getPageType(location.pathname),
          business_category: 'vehicle_wraps'
        }
      });
    }
  }, [location]);

  const getContentGroup = (pathname: string): string => {
    if (pathname === '/') return 'homepage';
    if (pathname.includes('/services') || pathname.includes('-wraps')) return 'services';
    if (pathname.includes('/locations') || pathname.includes('/chicago')) return 'locations';
    if (pathname.includes('/blog')) return 'content';
    if (pathname.includes('/contact') || pathname.includes('/pricing')) return 'conversion';
    return 'other';
  };

  const getPageType = (pathname: string): string => {
    if (pathname === '/') return 'landing';
    if (pathname.includes('/services')) return 'service_category';
    if (pathname.includes('-wraps')) return 'service_detail';
    if (pathname.includes('/locations')) return 'location';
    if (pathname.includes('/contact')) return 'contact';
    if (pathname.includes('/pricing')) return 'pricing';
    if (pathname.includes('/blog')) return 'blog';
    return 'informational';
  };

  return null;
};

export default GoogleAnalytics;