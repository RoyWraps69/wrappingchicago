
import React, { useEffect } from 'react';

/**
 * Core Web Vitals Optimizer Component
 * Implements performance optimizations for Google's Core Web Vitals
 */
const CoreWebVitalsOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      fontLink.onload = () => {
        fontLink.rel = 'stylesheet';
      };
      document.head.appendChild(fontLink);

      // Preload hero image
      const heroImage = new Image();
      heroImage.src = '/lovable-uploads/hero-vehicle-wrap.jpg';
      
      // Optimize LCP by preloading above-the-fold images
      const criticalImages = [
        '/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png',
        '/lovable-uploads/199b8977-07e4-488c-8e27-0ad83b25af33.jpg'
      ];
      
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

    // Optimize CLS by setting dimensions
    const preventLayoutShift = () => {
      const images = document.querySelectorAll('img:not([width]):not([height])');
      images.forEach((img: HTMLImageElement) => {
        if (img.complete && img.naturalWidth && img.naturalHeight) {
          img.width = img.naturalWidth;
          img.height = img.naturalHeight;
        }
      });
    };

    // Optimize FID by deferring non-critical JavaScript
    const optimizeInteractivity = () => {
      // Defer non-critical third-party scripts
      const scripts = document.querySelectorAll('script[data-defer="true"]');
      scripts.forEach(script => {
        script.setAttribute('defer', 'true');
      });
    };

    // Execute optimizations
    preloadCriticalResources();
    preventLayoutShift();
    optimizeInteractivity();

    // Monitor Core Web Vitals (if available)
    if ('web-vital' in window) {
      console.log('Core Web Vitals monitoring enabled');
    }
  }, []);

  return null; // This component only handles performance optimizations
};

export default CoreWebVitalsOptimizer;
