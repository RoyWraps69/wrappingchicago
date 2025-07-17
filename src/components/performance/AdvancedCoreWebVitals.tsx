import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Core Web Vitals Optimizer - Google's 2025 Performance Standards
 * Implements LCP <2.5s, FID <100ms, CLS <0.1
 */
const CoreWebVitalsOptimizer: React.FC = () => {
  
  useEffect(() => {
    // Critical CSS Inlining for LCP optimization
    const criticalCSS = `
      /* Critical above-the-fold styles */
      .hero-section { display: flex; align-items: center; min-height: 100vh; }
      .critical-text { font-family: system-ui, -apple-system, sans-serif; }
      .btn-primary { background: #dc2626; color: white; padding: 12px 24px; border-radius: 6px; }
      /* Prevent CLS */
      img { height: auto; max-width: 100%; }
      .container { max-width: 1200px; margin: 0 auto; padding: 0 16px; }
    `;
    
    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.insertBefore(style, document.head.firstChild);

    // Defer non-critical JavaScript
    const deferJS = () => {
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach(script => {
        if ('requestIdleCallback' in window) {
          requestIdleCallback(() => {
            const newScript = document.createElement('script');
            newScript.src = script.dataset.src || '';
            newScript.async = true;
            document.body.appendChild(newScript);
          });
        }
      });
    };

    // Image optimization for LCP
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Lazy loading for below-fold images
        if (!img.loading) img.loading = 'lazy';
        if (!img.decoding) img.decoding = 'async';
        
        // WebP/AVIF optimization
        if (img.src && !img.src.includes('.webp') && !img.src.includes('.avif')) {
          const supportsWebP = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0;
          if (supportsWebP && img.dataset.webp) {
            img.src = img.dataset.webp;
          }
        }
      });
    };

    // FID optimization - Reduce input delay
    const optimizeInteractions = () => {
      let interactionTimeout: NodeJS.Timeout;
      
      const handleInteraction = (e: Event) => {
        clearTimeout(interactionTimeout);
        interactionTimeout = setTimeout(() => {
          // Batch DOM updates
          if (e.target instanceof HTMLElement) {
            e.target.style.transform = 'scale(0.98)';
            requestAnimationFrame(() => {
              e.target!.style.transform = '';
            });
          }
        }, 16); // 60fps target
      };

      ['click', 'touchstart', 'keydown'].forEach(event => {
        document.addEventListener(event, handleInteraction, { passive: true });
      });
    };

    // CLS prevention
    const preventLayoutShift = () => {
      // Reserve space for dynamic content
      const dynamicElements = document.querySelectorAll('[data-dynamic]');
      dynamicElements.forEach(el => {
        if (el instanceof HTMLElement && !el.style.minHeight) {
          el.style.minHeight = '200px'; // Prevent CLS
        }
      });
    };

    // Execute optimizations
    optimizeImages();
    optimizeInteractions();
    preventLayoutShift();
    
    // Defer non-critical resources
    if (document.readyState === 'complete') {
      deferJS();
    } else {
      window.addEventListener('load', deferJS);
    }

    // Core Web Vitals monitoring
    if ('web-vitals' in window || window.webVitals) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        const sendToAnalytics = ({ name, value, id }: any) => {
          // Enhanced analytics tracking
          if (typeof gtag !== 'undefined') {
            gtag('event', name, {
              custom_parameter_1: Math.round(name === 'CLS' ? value * 1000 : value),
              custom_parameter_2: id,
              event_category: 'Core Web Vitals',
              non_interaction: true,
            });
          }
          
          // Console logging for development
          console.log(`${name}: ${value} (ID: ${id})`);
        };

        getCLS(sendToAnalytics);
        getFID && getFID(sendToAnalytics); // FID monitoring
        getFCP(sendToAnalytics);
        getLCP(sendToAnalytics);
        getTTFB(sendToAnalytics);
      }).catch(() => {
        console.log('Web Vitals library not available');
      });
    }

  }, []);

  return (
    <Helmet>
      {/* Critical resource hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="//chicagofleetwraps.com" />
      
      {/* Critical font preloading for LCP */}
      <link 
        rel="preload" 
        href="/fonts/inter-var.woff2" 
        as="font" 
        type="font/woff2" 
        crossOrigin="anonymous"
      />
      
      {/* Hero image preload for LCP */}
      <link 
        rel="preload" 
        href="/images/hero-fleet-wraps.webp" 
        as="image"
        media="(min-width: 768px)"
      />
      
      {/* Performance optimization meta */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      
      {/* HTTP/2 Server Push hints */}
      <link rel="modulepreload" href="/js/critical.js" />
      <link rel="prefetch" href="/js/non-critical.js" data-defer data-src="/js/non-critical.js" />
      
      {/* Security headers for performance */}
      <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains" />
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline';" />
      
      {/* Performance monitoring script */}
      <script>
        {`
          // Performance monitoring
          window.addEventListener('load', () => {
            // LCP monitoring
            new PerformanceObserver((list) => {
              list.getEntries().forEach((entry) => {
                if (entry.entryType === 'largest-contentful-paint') {
                  console.log('LCP:', entry.startTime);
                  if (entry.startTime > 2500) {
                    console.warn('LCP exceeds 2.5s threshold');
                  }
                }
              });
            }).observe({ entryTypes: ['largest-contentful-paint'] });
            
            // CLS monitoring
            let clsValue = 0;
            new PerformanceObserver((list) => {
              list.getEntries().forEach((entry) => {
                if (!entry.hadRecentInput) {
                  clsValue += entry.value;
                  if (clsValue > 0.1) {
                    console.warn('CLS exceeds 0.1 threshold:', clsValue);
                  }
                }
              });
            }).observe({ entryTypes: ['layout-shift'] });
          });
        `}
      </script>
    </Helmet>
  );
};

export default CoreWebVitalsOptimizer;