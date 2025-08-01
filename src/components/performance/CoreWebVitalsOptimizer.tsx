import React, { useEffect, useState } from 'react';

interface Metric {
  name: string;
  value: number;
  id: string;
}

interface WebVitalsData {
  cls: number | null;
  fid: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

const CoreWebVitalsOptimizer: React.FC = () => {
  const [vitals, setVitals] = useState<WebVitalsData>({
    cls: null,
    fid: null,
    fcp: null,
    lcp: null,
    ttfb: null
  });

  useEffect(() => {
    // Measure Core Web Vitals using Performance Observer
    const measureVitals = () => {
      if ('PerformanceObserver' in window) {
        // Large Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setVitals(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setVitals(prev => ({ ...prev, fcp: fcpEntry.startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          setVitals(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    };

    measureVitals();
    optimizePerformance();
  }, []);

  const optimizePerformance = () => {
    // Preload critical resources
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png',
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.includes('.woff') ? 'font' : 'image';
      if (resource.includes('.woff')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });

    // Optimize images with lazy loading
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
      (img as HTMLImageElement).loading = 'lazy';
    });

    // Defer non-critical JavaScript
    const scripts = document.querySelectorAll('script:not([async]):not([defer])');
    scripts.forEach(script => {
      const scriptElement = script as HTMLScriptElement;
      if (!scriptElement.src.includes('gtag') && !scriptElement.src.includes('analytics')) {
        scriptElement.setAttribute('defer', 'true');
      }
    });
  };

  // Performance monitoring component
  return (
    <>
      {/* Resource hints for better performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {/* Critical CSS inlining */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Critical above-the-fold styles */
          .hero-section { min-height: 100vh; }
          .nav-header { position: fixed; z-index: 50; }
          .btn-primary { 
            background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-glow)));
            transition: all 0.2s ease;
          }
        `
      }} />
      
      {process.env.NODE_ENV === 'development' && vitals.lcp && (
        <div style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          background: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '12px',
          zIndex: 9999
        }}>
          <div>LCP: {Math.round(vitals.lcp || 0)}ms</div>
          <div>FCP: {Math.round(vitals.fcp || 0)}ms</div>
          <div>CLS: {(vitals.cls || 0).toFixed(3)}</div>
          <div>TTFB: {Math.round(vitals.ttfb || 0)}ms</div>
        </div>
      )}
    </>
  );
};

export default CoreWebVitalsOptimizer;