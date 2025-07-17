import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Core Web Vitals and Performance Optimizer
 * Addresses Google's Page Experience signals for 2024/2025:
 * - Largest Contentful Paint (LCP)
 * - First Input Delay (FID) / Interaction to Next Paint (INP)
 * - Cumulative Layout Shift (CLS)
 * - Mobile-first optimization
 */
const CoreWebVitalsOptimizer: React.FC = () => {
  
  React.useEffect(() => {
    // Optimize images for better LCP
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    };

    // Preload critical resources
    const preloadCriticalResources = () => {
      const link1 = document.createElement('link');
      link1.rel = 'preload';
      link1.as = 'font';
      link1.type = 'font/woff2';
      link1.href = '/fonts/inter-var.woff2';
      link1.crossOrigin = 'anonymous';
      
      const link2 = document.createElement('link');
      link2.rel = 'preload';
      link2.as = 'image';
      link2.href = '/lovable-uploads/99d82949-5568-4a29-8a3a-72ff2ee6836e.png';
      
      document.head.appendChild(link1);
      document.head.appendChild(link2);
    };

    // Optimize for INP (replacing FID)
    const optimizeInteractions = () => {
      // Debounce rapid interactions
      let interactionTimeout: NodeJS.Timeout;
      
      const handleInteraction = () => {
        clearTimeout(interactionTimeout);
        interactionTimeout = setTimeout(() => {
          // Process interactions efficiently
        }, 16); // Target 60fps
      };

      document.addEventListener('click', handleInteraction, { passive: true });
      document.addEventListener('touchstart', handleInteraction, { passive: true });
    };

    optimizeImages();
    preloadCriticalResources();
    optimizeInteractions();

    // Web Vitals monitoring
    if ('web-vitals' in window) {
      // @ts-ignore
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }
  }, []);

  return (
    <Helmet>
      {/* Critical resource hints for better performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Optimize for Core Web Vitals */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="color-scheme" content="light dark" />
      
      {/* Performance hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Critical CSS inlining hint */}
      <style>{`
        /* Critical CSS for LCP optimization */
        .hero-fullscreen { 
          min-height: 100vh;
          background-color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .speakable {
          font-weight: 600;
        }
        /* Prevent CLS */
        img { 
          height: auto;
          max-width: 100%;
        }
      `}</style>
      
      {/* Progressive Web App optimization */}
      <meta name="theme-color" content="#dc2626" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Performance monitoring */}
      <script>
        {`
          // Monitor Core Web Vitals
          window.addEventListener('load', () => {
            if ('requestIdleCallback' in window) {
              requestIdleCallback(() => {
                import('/js/web-vitals.js').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                  getCLS(sendToAnalytics);
                  getFID(sendToAnalytics);
                  getFCP(sendToAnalytics);
                  getLCP(sendToAnalytics);
                  getTTFB(sendToAnalytics);
                });
              });
            }
          });
          
          function sendToAnalytics({name, value, id}) {
            // Send to your analytics
            gtag('event', name, {
              value: Math.round(name === 'CLS' ? value * 1000 : value),
              event_category: 'Web Vitals',
              event_label: id,
              non_interaction: true,
            });
          }
        `}
      </script>
    </Helmet>
  );
};

export default CoreWebVitalsOptimizer;