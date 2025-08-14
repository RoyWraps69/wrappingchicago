import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface Perfect10ComplianceProps {
  pageTitle: string;
  pageDescription: string;
  pageUrl: string;
  pageType?: 'home' | 'service' | 'location' | 'article' | 'faq';
  lastModified?: string;
  structuredData?: object[];
}

const Perfect10Compliance: React.FC<Perfect10ComplianceProps> = ({
  pageTitle,
  pageDescription,
  pageUrl,
  pageType = 'home',
  lastModified = new Date().toISOString(),
  structuredData = []
}) => {
  const [vitalsData, setVitalsData] = useState<any>({});
  
  useEffect(() => {
    // Core Web Vitals monitoring
    if ('web-vitals' in window) {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onINP, onTTFB }) => {
        onCLS((metric) => setVitalsData(prev => ({ ...prev, cls: metric.value })));
        onFCP((metric) => setVitalsData(prev => ({ ...prev, fcp: metric.value })));
        onLCP((metric) => setVitalsData(prev => ({ ...prev, lcp: metric.value })));
        onINP((metric) => setVitalsData(prev => ({ ...prev, inp: metric.value })));
        onTTFB((metric) => setVitalsData(prev => ({ ...prev, ttfb: metric.value })));
      });
    }

    // Performance monitoring
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          setVitalsData(prev => ({ ...prev, lcp: entry.startTime }));
        }
      });
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] });

    return () => observer.disconnect();
  }, []);

  // Generate robots content based on page type
  const getRobotsContent = () => {
    const baseRobots = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
    
    if (pageType === 'service' || pageType === 'location') {
      return `${baseRobots}, max-snippet:160`;
    }
    
    return baseRobots;
  };

  // Generate canonical URL ensuring www and https
  const getCanonicalUrl = () => {
    let canonical = pageUrl;
    if (!canonical.startsWith('https://www.')) {
      canonical = canonical.replace(/^https?:\/\/(www\.)?/, 'https://www.');
    }
    return canonical;
  };

  return (
    <Helmet>
      {/* Core SEO Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="robots" content={getRobotsContent()} />
      <link rel="canonical" href={getCanonicalUrl()} />
      
      {/* Performance & Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Strict-Transport-Security" content="max-age=63072000; includeSubDomains; preload" />
      
      {/* Mobile & Accessibility */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Core Web Vitals Optimization */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Critical Resource Hints */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Sitemap References */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      
      {/* Last Modified for Freshness */}
      <meta name="last-modified" content={lastModified} />
      <meta name="date" content={lastModified} />
      
      {/* E-E-A-T Signals */}
      <meta name="author" content="Wrapping Chicago - Roy Mendelson" />
      <meta name="expertise" content="Vehicle wrapping, commercial fleet graphics, automotive customization" />
      <meta name="experience" content="15+ years in Chicago vehicle wrap industry" />
      <meta name="authority" content="Certified 3M and Avery Dennison installer" />
      <meta name="trustworthiness" content="Google verified business, 4.9/5 stars, 150+ reviews" />
      
      {/* Local SEO Signals */}
      <meta name="geo.region" content="IL" />
      <meta name="geo.placename" content="Chicago" />
      <meta name="geo.position" content="41.8781;-87.6298" />
      <meta name="ICBM" content="41.8781, -87.6298" />
      
      {/* Business Information */}
      <meta name="contact:phone_number" content="+1-312-597-1286" />
      <meta name="contact:email" content="roy@chicagofleetwraps.com" />
      <meta name="contact:address" content="4711 N. Lamon Ave, Chicago, IL 60630" />
      
      {/* Structured Data */}
      {structuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
      
      {/* Critical Performance CSS */}
      <style>{`
        /* Critical CSS for LCP optimization */
        .hero-section { contain: layout style paint; }
        img[loading="lazy"] { content-visibility: auto; }
        
        /* Prevent CLS */
        .aspect-ratio-container { 
          aspect-ratio: var(--aspect-ratio);
          contain: layout style;
        }
        
        /* Focus visible for accessibility */
        :focus-visible {
          outline: 2px solid hsl(var(--primary));
          outline-offset: 2px;
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </Helmet>
  );
};

export default Perfect10Compliance;