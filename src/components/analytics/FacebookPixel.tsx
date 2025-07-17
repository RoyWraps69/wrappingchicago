import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

const FacebookPixel: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Only initialize if we have a valid pixel ID
    const PIXEL_ID = process.env.REACT_APP_FB_PIXEL_ID || 'FB_PIXEL_ID';
    
    // Skip initialization if no valid pixel ID is provided
    if (!PIXEL_ID || PIXEL_ID === 'FB_PIXEL_ID') {
      console.log('Facebook Pixel not initialized - no valid pixel ID provided');
      return;
    }

    // Initialize Facebook Pixel
    const initFBPixel = () => {
      const script = document.createElement('script');
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${PIXEL_ID}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);

      // Add noscript fallback
      const noscript = document.createElement('noscript');
      noscript.innerHTML = `
        <img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1"/>
      `;
      document.head.appendChild(noscript);
    };

    // Initialize on first load
    if (!window.fbq) {
      initFBPixel();
    }
  }, []);

  useEffect(() => {
    // Track page views on route changes
    if (window.fbq) {
      window.fbq('track', 'PageView', {
        content_name: document.title,
        content_category: getContentCategory(location.pathname),
        content_ids: [location.pathname],
        value: getPageValue(location.pathname),
        currency: 'USD'
      });
    }
  }, [location]);

  const getContentCategory = (pathname: string): string => {
    if (pathname === '/') return 'homepage';
    if (pathname.includes('/car-wraps')) return 'car_wraps';
    if (pathname.includes('/truck-wraps')) return 'truck_wraps';
    if (pathname.includes('/van-wraps')) return 'van_wraps';
    if (pathname.includes('/fleet-wraps')) return 'fleet_wraps';
    if (pathname.includes('/contact')) return 'contact';
    if (pathname.includes('/pricing')) return 'pricing';
    return 'general';
  };

  const getPageValue = (pathname: string): number => {
    if (pathname === '/') return 10;
    if (pathname.includes('/contact')) return 100;
    if (pathname.includes('/pricing')) return 80;
    if (pathname.includes('-wraps')) return 50;
    if (pathname.includes('/gallery')) return 30;
    return 5;
  };

  return null;
};

export default FacebookPixel;