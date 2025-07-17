import React, { useEffect } from 'react';

// Type declarations for global analytics functions
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Image optimization utilities
export const optimizeImage = (src: string, width?: number, height?: number): string => {
  // If it's already a Lovable upload, return as is
  if (src.includes('/lovable-uploads/')) {
    return src;
  }
  
  // For external images, add optimization parameters
  const url = new URL(src);
  if (width) url.searchParams.set('w', width.toString());
  if (height) url.searchParams.set('h', height.toString());
  url.searchParams.set('q', '85'); // Quality
  url.searchParams.set('format', 'webp'); // Modern format
  
  return url.toString();
};

// Lazy loading component for images
export const LazyImage: React.FC<{
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}> = ({ src, alt, width, height, className, priority = false }) => {
  const optimizedSrc = optimizeImage(src, width, height);
  
  return (
    <img
      src={optimizedSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      onError={(e) => {
        console.warn('Image failed to load:', src);
        // Fallback to original src if optimized version fails
        if (e.currentTarget.src !== src) {
          e.currentTarget.src = src;
        }
      }}
    />
  );
};

// Hero image optimization component
export const OptimizedHeroImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className }) => {
  return (
    <picture>
      {/* WebP format for modern browsers */}
      <source
        srcSet={`${optimizeImage(src, 1920, 1080)} 1920w, ${optimizeImage(src, 1200, 675)} 1200w, ${optimizeImage(src, 800, 450)} 800w`}
        sizes="100vw"
        type="image/webp"
      />
      {/* Fallback for older browsers */}
      <LazyImage
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        className={className}
        priority={true}
      />
    </picture>
  );
};

// Core Web Vitals optimization
const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload hero images
      const heroImages = [
        '/lovable-uploads/99d82949-5568-4a29-8a3a-72ff2ee6836e.png',
        '/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png'
      ];
      
      heroImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize font loading
    const optimizeFontLoading = () => {
      const fontPreloads = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
      ];
      
      fontPreloads.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
      });
    };

    // Remove unused CSS (in production)
    const optimizeCSS = () => {
      if (process.env.NODE_ENV === 'production') {
        // Remove unused Tailwind classes (handled by build process)
        // This is a placeholder for production optimizations
      }
    };

    // Optimize third-party scripts - simplified to prevent performance issues
    const optimizeThirdPartyScripts = () => {
      // Reduced script loading that was causing white screen
      // Only load essential scripts with longer delay
      setTimeout(() => {
        // Minimal script loading to prevent browser freeze
      }, 5000); // Increased delay
    };

    // Execute optimizations
    preloadCriticalResources();
    optimizeFontLoading();
    optimizeCSS();
    optimizeThirdPartyScripts();

    // Web Vitals monitoring - disabled to prevent performance issues
    // The dynamic import was causing white screen issues
    /*
    if (typeof window !== 'undefined') {
      import('web-vitals').then((webVitals) => {
        // Web vitals tracking code...
      }).catch(error => {
        console.warn('Web Vitals not available:', error);
      });
    }
    */

    // Resource hints for better performance
    const addResourceHints = () => {
      const hints = [
        { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
      ];
      
      hints.forEach(hint => {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.crossOrigin) link.crossOrigin = hint.crossOrigin;
        document.head.appendChild(link);
      });
    };

    addResourceHints();
  }, []);

  return null;
};

export default PerformanceOptimizer;