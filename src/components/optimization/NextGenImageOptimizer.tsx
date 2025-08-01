import React, { useState, useRef, useEffect } from 'react';

interface NextGenImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

const NextGenImageOptimizer: React.FC<NextGenImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes = "100vw"
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate optimized image URLs for different formats
  const generateOptimizedUrls = (originalSrc: string) => {
    if (originalSrc.includes('unsplash.com')) {
      const baseUrl = originalSrc.split('?')[0];
      return {
        webp: `${baseUrl}?w=${width || 800}&h=${height || 600}&auto=format&fmt=webp&q=80`,
        avif: `${baseUrl}?w=${width || 800}&h=${height || 600}&auto=format&fmt=avif&q=80`,
        jpg: `${baseUrl}?w=${width || 800}&h=${height || 600}&auto=format&q=80`,
        placeholder: `${baseUrl}?w=20&h=15&auto=format&q=1&blur=50`
      };
    }
    
    // For local images, return as-is (would need server-side optimization)
    return {
      webp: originalSrc,
      avif: originalSrc,
      jpg: originalSrc,
      placeholder: originalSrc
    };
  };

  const urls = generateOptimizedUrls(src);

  useEffect(() => {
    if (!imgRef.current || priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Low quality placeholder */}
      {!isLoaded && !error && (
        <img
          src={urls.placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110 opacity-50"
          aria-hidden="true"
        />
      )}
      
      {/* Main optimized image */}
      {(isLoaded || priority) && !error && (
        <picture>
          <source srcSet={urls.avif} type="image/avif" />
          <source srcSet={urls.webp} type="image/webp" />
          <img
            src={urls.jpg}
            alt={alt}
            width={width}
            height={height}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading={priority ? 'eager' : 'lazy'}
            onLoad={handleLoad}
            onError={handleError}
            sizes={sizes}
          />
        </picture>
      )}
      
      {/* Fallback for errors */}
      {error && (
        <div className="w-full h-full bg-muted flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Image unavailable</span>
        </div>
      )}

      {/* Loading skeleton */}
      {!isLoaded && !error && !priority && (
        <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted animate-pulse" />
      )}
    </div>
  );
};

export default NextGenImageOptimizer;