
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface UltimateSEOOptimizerProps {
  pageTitle: string;
  pageDescription: string;
  keywords?: string[];
  canonicalUrl?: string;
  cityName?: string;
  serviceName?: string;
  businessType?: 'LocalBusiness' | 'Service' | 'Organization';
  priority?: 'critical' | 'high' | 'normal' | 'low';
  lastModified?: string;
  publishDate?: string;
  authorName?: string;
  images?: Array<{
    url: string;
    alt: string;
    width?: number;
    height?: number;
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  breadcrumbs?: Array<{
    name: string;
    url: string;
    position: number;
  }>;
  services?: Array<{
    name: string;
    description: string;
    price?: string;
  }>;
}

/**
 * Ultimate SEO Optimizer - Perfect for AI and Google dominance
 * Implements 2025 SEO best practices for maximum visibility
 */
const UltimateSEOOptimizer: React.FC<UltimateSEOOptimizerProps> = ({
  pageTitle,
  pageDescription,
  keywords = [],
  canonicalUrl,
  cityName = "Chicago",
  serviceName = "Vehicle Wraps",
  businessType = 'LocalBusiness',
  priority = 'normal',
  lastModified,
  publishDate,
  authorName = "Wrapping Chicago Expert Team",
  images = [],
  faqs = [],
  breadcrumbs = [],
  services = []
}) => {
  const location = useLocation();
  const domain = "https://www.wrappingchicago.com";
  const currentUrl = canonicalUrl || `${domain}${location.pathname}`;
  const cleanCanonical = currentUrl.replace(/\/$/, '') || `${domain}/`;
  
  // Enhanced keyword optimization
  const coreKeywords = [
    "vehicle wraps", "car wraps", "truck wraps", "van wraps", "fleet wraps",
    "vinyl wrap", "custom graphics", "commercial graphics", "wrap installation",
    "3M vinyl", "Avery wraps", "color change wraps", "luxury wraps"
  ];
  
  const locationKeywords = [
    `vehicle wraps ${cityName}`,
    `car wraps ${cityName}`,
    `truck wraps ${cityName}`,
    `van wraps ${cityName}`,
    `fleet wraps ${cityName}`,
    `wrap installation ${cityName}`,
    `custom graphics ${cityName}`,
    `commercial vehicle wraps ${cityName}`
  ];
  
  const longTailKeywords = [
    `professional vehicle wrap installation ${cityName}`,
    `custom car wrap designs ${cityName}`,
    `commercial fleet branding ${cityName}`,
    `premium vinyl wraps ${cityName}`,
    `vehicle wrap cost ${cityName}`,
    `best vehicle wrap company ${cityName}`
  ];
  
  const allKeywords = [...coreKeywords, ...locationKeywords, ...longTailKeywords, ...keywords];
  
  // Enhanced structured data
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": businessType,
    "@id": `${domain}/#organization`,
    "name": "Wrapping Chicago",
    "alternateName": "Chicago Vehicle Wraps",
    "description": `Professional vehicle wrap services in ${cityName}, IL. Specializing in car wraps, truck wraps, van wraps, fleet graphics, and commercial vehicle branding using premium 3M and Avery materials.`,
    "url": domain,
    "logo": {
      "@type": "ImageObject",
      "url": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
      "width": 180,
      "height": 60,
      "caption": "Wrapping Chicago - Professional Vehicle Wrap Services"
    },
    "image": images.length > 0 ? images.map(img => ({
      "@type": "ImageObject",
      "url": img.url.startsWith('http') ? img.url : `${domain}${img.url}`,
      "caption": img.alt,
      "width": img.width || 1200,
      "height": img.height || 630
    })) : `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
    "telephone": "+13125971286",
    "email": "info@wrappingchicago.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4711 N. Lamon Ave",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60630",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.8781,
      "longitude": -87.6298
    },
    "areaServed": [
      {
        "@type": "City",
        "name": cityName,
        "sameAs": `https://en.wikipedia.org/wiki/${cityName.replace(' ', '_')}`
      },
      {
        "@type": "State",
        "name": "Illinois",
        "sameAs": "https://en.wikipedia.org/wiki/Illinois"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 41.8781,
        "longitude": -87.6298
      },
      "geoRadius": 50000
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    "priceRange": "$$",
    "keywords": allKeywords.join(", "),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${serviceName} Services in ${cityName}`,
      "itemListElement": services.length > 0 ? services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        },
        "price": service.price || "Call for Quote",
        "priceCurrency": "USD"
      })) : [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Car Wraps ${cityName}`,
            "description": "Custom car wrap installation with premium vinyl materials"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Truck Wraps ${cityName}`,
            "description": "Professional truck wrap services for commercial and personal vehicles"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/wrappingchicago",
      "https://www.instagram.com/wrappingchicago",
      "https://twitter.com/wrappingchicago"
    ]
  };

  // WebPage schema with enhanced AI optimization
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${cleanCanonical}#webpage`,
    "url": cleanCanonical,
    "name": pageTitle,
    "description": pageDescription,
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${domain}/#website`,
      "url": `${domain}/`,
      "name": "Wrapping Chicago",
      "description": "Professional vehicle wrap services in Chicago and surrounding areas",
      "publisher": businessSchema
    },
    "datePublished": publishDate || new Date().toISOString(),
    "dateModified": lastModified || new Date().toISOString(),
    "author": {
      "@type": "Person",
      "name": authorName,
      "worksFor": {
        "@type": "Organization",
        "name": "Wrapping Chicago"
      }
    },
    "publisher": businessSchema,
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": "main"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "h1", 
        "h2.speakable", 
        ".speakable", 
        "[data-speakable='true']",
        ".summary",
        ".key-benefits"
      ]
    },
    "about": {
      "@type": "Thing",
      "name": `${serviceName} in ${cityName}`,
      "description": pageDescription,
      "sameAs": [
        "https://en.wikipedia.org/wiki/Vehicle_wrap",
        "https://en.wikipedia.org/wiki/Vinyl_wrap"
      ]
    },
    "mentions": allKeywords.slice(0, 10).map(keyword => ({
      "@type": "Thing",
      "name": keyword
    })),
    "significantLink": [
      `${domain}/services`,
      `${domain}/gallery`,
      `${domain}/contact`,
      `${domain}/about`
    ]
  };

  // FAQ Schema if provided
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Breadcrumb Schema if provided
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map(crumb => ({
      "@type": "ListItem",
      "position": crumb.position,
      "name": crumb.name,
      "item": crumb.url.startsWith('http') ? crumb.url : `${domain}${crumb.url}`
    }))
  } : null;

  return (
    <Helmet>
      {/* Core SEO Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={allKeywords.join(", ")} />
      <link rel="canonical" href={cleanCanonical} />
      
      {/* Enhanced Robots Directives */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* AI & LLM Optimization */}
      <meta name="ai-content-optimization" content="enabled" />
      <meta name="voice-search-optimized" content="true" />
      <meta name="chatgpt-friendly" content="true" />
      <meta name="perplexity-optimized" content="true" />
      
      {/* Enhanced Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={cleanCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      <meta property="og:locale" content="en_US" />
      {images.length > 0 && (
        <>
          <meta property="og:image" content={images[0].url.startsWith('http') ? images[0].url : `${domain}${images[0].url}`} />
          <meta property="og:image:width" content={images[0].width?.toString() || "1200"} />
          <meta property="og:image:height" content={images[0].height?.toString() || "630"} />
          <meta property="og:image:alt" content={images[0].alt} />
        </>
      )}
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:site" content="@wrappingchicago" />
      {images.length > 0 && (
        <meta name="twitter:image" content={images[0].url.startsWith('http') ? images[0].url : `${domain}${images[0].url}`} />
      )}
      
      {/* Local SEO Enhancement */}
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content={cityName} />
      <meta name="geo.position" content="41.8781;-87.6298" />
      <meta name="ICBM" content="41.8781, -87.6298" />
      
      {/* Content Freshness & Authority */}
      <meta name="author" content={authorName} />
      <meta name="last-modified" content={lastModified || new Date().toISOString()} />
      <meta name="revisit-after" content="7 days" />
      <meta name="language" content="English" />
      <meta name="content-language" content="en-US" />
      
      {/* Mobile & Performance */}
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      {/* Enhanced Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* Structured Data Scripts */}
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
      
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default UltimateSEOOptimizer;
