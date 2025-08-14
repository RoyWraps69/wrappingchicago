import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

interface VisualSearchImage {
  src: string;
  alt: string;
  title?: string;
  category?: string;
  keywords?: string[];
  schema?: any;
}

interface VisualSearchOptimizerProps {
  images: VisualSearchImage[];
  enableGoogleLens?: boolean;
  enableImageSitemap?: boolean;
}

const VisualSearchOptimizer: React.FC<VisualSearchOptimizerProps> = ({
  images,
  enableGoogleLens = true,
  enableImageSitemap = true
}) => {
  const optimizedImagesRef = useRef<Set<string>>(new Set());

  // Generate Google Lens optimized alt text
  const generateLensOptimizedAlt = (image: VisualSearchImage): string => {
    const baseAlt = image.alt;
    const keywords = image.keywords?.join(' ') || '';
    const category = image.category || 'vehicle wrap';
    
    // Create descriptive alt text for Google Lens
    return `${baseAlt} ${category} ${keywords} Chicago professional installation`.trim();
  };

  // Generate image schema markup
  const generateImageSchema = (image: VisualSearchImage) => {
    return {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "contentUrl": image.src,
      "url": image.src,
      "name": image.title || image.alt,
      "description": generateLensOptimizedAlt(image),
      "keywords": image.keywords?.join(', '),
      "creator": {
        "@type": "Organization",
        "name": "Wrapping Chicago"
      },
      "creditText": "Wrapping Chicago Professional Vehicle Wraps",
      "copyrightNotice": "© Wrapping Chicago",
      "license": "https://www.wrappingchicago.com/terms",
      "acquireLicensePage": "https://www.wrappingchicago.com/contact",
      "width": "1920",
      "height": "1080",
      "encodingFormat": "image/jpeg",
      "thumbnailUrl": image.src,
      "representativeOfPage": true,
      "isPartOf": {
        "@type": "WebPage",
        "name": "Chicago Vehicle Wraps Gallery",
        "url": "https://www.wrappingchicago.com/gallery"
      },
      "about": {
        "@type": "Service",
        "name": "Vehicle Wrap Installation",
        "provider": {
          "@type": "Organization", 
          "name": "Wrapping Chicago"
        }
      }
    };
  };

  // Generate image sitemap
  const generateImageSitemap = () => {
    const sitemapEntries = images.map(image => ({
      loc: image.src,
      caption: generateLensOptimizedAlt(image),
      title: image.title || image.alt,
      license: "https://www.wrappingchicago.com/terms",
      lastmod: new Date().toISOString().split('T')[0]
    }));

    return {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "name": "Wrapping Chicago Vehicle Wrap Gallery",
      "description": "Professional vehicle wrap installation examples in Chicago",
      "url": "https://www.wrappingchicago.com/gallery",
      "image": sitemapEntries.map(entry => ({
        "@type": "ImageObject",
        "contentUrl": entry.loc,
        "caption": entry.caption,
        "name": entry.title
      }))
    };
  };

  // Optimize images for visual search
  useEffect(() => {
    if (!enableGoogleLens) return;

    const optimizeImagesForLens = () => {
      // Add visual search metadata to images
      const imageElements = document.querySelectorAll('img[data-visual-search="true"]');
      
      imageElements.forEach((img: Element) => {
        const imgElement = img as HTMLImageElement;
        const src = imgElement.src;
        
        if (!optimizedImagesRef.current.has(src)) {
          // Add Google Lens optimization attributes
          imgElement.setAttribute('itemscope', '');
          imgElement.setAttribute('itemtype', 'https://schema.org/ImageObject');
          imgElement.setAttribute('data-nosnippet', 'false');
          imgElement.setAttribute('data-visual-search-optimized', 'true');
          
          // Add loading optimization
          if (!imgElement.hasAttribute('loading')) {
            imgElement.setAttribute('loading', 'lazy');
          }
          
          // Add decoding optimization
          imgElement.setAttribute('decoding', 'async');
          
          // Mark as optimized
          optimizedImagesRef.current.add(src);
        }
      });
    };

    // Optimize immediately and on DOM changes
    optimizeImagesForLens();
    
    const observer = new MutationObserver(optimizeImagesForLens);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });

    return () => observer.disconnect();
  }, [enableGoogleLens]);

  // Product schema for Google Lens shopping
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Professional Vehicle Wrap Installation",
    "description": "Premium vehicle wrap installation services in Chicago area",
    "image": images.map(img => img.src),
    "brand": {
      "@type": "Brand",
      "name": "Wrapping Chicago"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "1500",
      "highPrice": "8500",
      "offerCount": "12",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString(),
      "validThrough": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
      "seller": {
        "@type": "Organization",
        "name": "Wrapping Chicago"
      }
    },
    "category": "Automotive Services",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 41.8781,
        "longitude": -87.6298
      },
      "geoRadius": "50 miles"
    }
  };

  return (
    <>
      <Helmet>
        {/* Visual search optimization meta tags */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        
        {/* Google Lens optimization */}
        {enableGoogleLens && (
          <>
            <meta name="google-lens" content="searchable" />
            <meta name="image-search" content="enabled" />
            <link rel="alternate" type="application/json" href="/api/visual-search" />
          </>
        )}

        {/* Product schema for Google Lens shopping */}
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>

        {/* Image gallery schema */}
        {enableImageSitemap && (
          <script type="application/ld+json">
            {JSON.stringify(generateImageSitemap())}
          </script>
        )}

        {/* Individual image schemas */}
        {images.map((image, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(generateImageSchema(image))}
          </script>
        ))}
      </Helmet>

      {/* Hidden elements for image optimization */}
      <div style={{ display: 'none' }}>
        {images.map((image, index) => (
          <div
            key={index}
            itemScope
            itemType="https://schema.org/ImageObject"
          >
            <img
              itemProp="contentUrl"
              src={image.src}
              alt={generateLensOptimizedAlt(image)}
              data-visual-search="true"
              data-category={image.category}
              data-keywords={image.keywords?.join(',')}
            />
            <meta itemProp="name" content={image.title || image.alt} />
            <meta itemProp="description" content={generateLensOptimizedAlt(image)} />
            <meta itemProp="keywords" content={image.keywords?.join(', ')} />
            <meta itemProp="creator" content="Wrapping Chicago" />
          </div>
        ))}
      </div>
    </>
  );
};

export default VisualSearchOptimizer;