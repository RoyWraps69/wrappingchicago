
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface FullSEOOptimizationProps {
  pageTitle: string;
  pageDescription: string;
  keywords?: string[];
  h1Text?: string;
  canonicalUrl?: string;
  structuredData?: object[];
  breadcrumbs?: Array<{position: number; name: string; url: string}>;
  images?: Array<{url: string; alt: string; caption?: string}>;
  lastModified?: string;
  priority?: 'critical' | 'high' | 'normal' | 'low';
}

/**
 * Full SEO Optimization Component
 * Comprehensive implementation of all SEO best practices for maximum visibility
 */
const FullSEOOptimization: React.FC<FullSEOOptimizationProps> = ({
  pageTitle,
  pageDescription,
  keywords = [],
  h1Text,
  canonicalUrl,
  structuredData = [],
  breadcrumbs = [],
  images = [],
  lastModified,
  priority = 'normal'
}) => {
  const location = useLocation();
  const domain = "https://www.wrappingchicago.com";
  const currentYear = new Date().getFullYear();
  
  // Generate clean canonical URL
  const cleanCanonicalUrl = () => {
    if (canonicalUrl) return canonicalUrl;
    let cleanPath = location.pathname;
    if (cleanPath !== '/' && cleanPath.endsWith('/')) {
      cleanPath = cleanPath.slice(0, -1);
    }
    return `${domain}${cleanPath}`;
  };

  const finalCanonicalUrl = cleanCanonicalUrl();
  const currentDate = lastModified || new Date().toISOString();
  
  // Enhanced title with year and branding
  const optimizedTitle = pageTitle.includes(currentYear.toString()) 
    ? pageTitle 
    : `${pageTitle} | ${currentYear} | Wrapping Chicago`;

  // Comprehensive keyword set for Chicago vehicle wraps
  const coreKeywords = [
    "vehicle wraps Chicago", "car wraps Chicago", "truck wraps Chicago", 
    "van wraps Chicago", "fleet wraps Chicago", "commercial graphics Chicago",
    "3M vehicle wraps", "vinyl wrap installation", "custom vehicle graphics",
    "color change wraps", "luxury vehicle wraps", "wrap design Chicago",
    "fleet branding solutions", "mobile advertising", "vehicle decals",
    "wrap consultation", "professional installation", "premium vinyl"
  ];

  const allKeywords = [...coreKeywords, ...keywords];

  // Generate robots directive based on priority
  const getRobotsDirective = () => {
    const baseDirective = "index, follow";
    const snippetLimits = {
      critical: "max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      high: "max-snippet:-1, max-image-preview:large, max-video-preview:0",
      normal: "max-snippet:200, max-image-preview:large, max-video-preview:0",
      low: "max-snippet:150, max-image-preview:standard, max-video-preview:0"
    };
    return `${baseDirective}, ${snippetLimits[priority]}`;
  };

  // Enhanced LocalBusiness schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${domain}/#organization`,
    "name": "Wrapping Chicago",
    "alternateName": ["Chicago Fleet Wraps", "Chicago Vehicle Wraps"],
    "description": "Professional vehicle wrap services in Chicago IL. Specializing in car wraps, truck wraps, van wraps, fleet graphics, and commercial branding with premium 3M vinyl materials.",
    "url": domain,
    "logo": {
      "@type": "ImageObject",
      "url": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
      "width": 180,
      "height": 60
    },
    "image": images.map(img => ({
      "@type": "ImageObject",
      "url": img.url,
      "caption": img.caption || img.alt
    })),
    "telephone": "+13125971286",
    "email": "roy@chicagofleetwraps.com",
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "PayPal"],
    "areaServed": [
      "Chicago", "Evanston", "Naperville", "Schaumburg", "Oak Park", 
      "Cicero", "Berwyn", "Des Plaines", "Mount Prospect", "Arlington Heights"
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Car Wraps",
            "description": "Custom car wrap installation with premium vinyl materials"
          },
          "priceCurrency": "USD",
          "priceRange": "$2500-$5000"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Truck Wraps",
            "description": "Professional truck wrap services for commercial vehicles"
          },
          "priceCurrency": "USD",
          "priceRange": "$3500-$7000"
        }
      ]
    },
    "keywords": allKeywords.join(", "),
    "sameAs": [
      "https://www.facebook.com/wrappingchicago",
      "https://www.instagram.com/wrappingchicago",
      "https://www.linkedin.com/company/wrappingchicago"
    ]
  };

  // WebPage schema with speakable content
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${finalCanonicalUrl}#webpage`,
    "url": finalCanonicalUrl,
    "name": optimizedTitle,
    "description": pageDescription,
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${domain}/#website`,
      "url": `${domain}/`,
      "name": "Wrapping Chicago",
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${domain}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    "dateModified": currentDate,
    "datePublished": currentDate,
    "keywords": allKeywords.join(", "),
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2.speakable", ".speakable", ".highlight"]
    },
    "mainEntity": localBusinessSchema,
    "potentialAction": [
      {
        "@type": "ReadAction",
        "target": finalCanonicalUrl
      },
      {
        "@type": "ShareAction",
        "target": finalCanonicalUrl
      }
    ]
  };

  // Breadcrumb schema
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map(crumb => ({
      "@type": "ListItem",
      "position": crumb.position,
      "name": crumb.name,
      "item": crumb.url
    }))
  } : null;

  return (
    <Helmet>
      {/* Critical SEO Meta Tags */}
      <title>{optimizedTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      
      {/* Canonical and Alternate URLs */}
      <link rel="canonical" href={finalCanonicalUrl} />
      <link rel="alternate" href={finalCanonicalUrl} hrefLang="en-us" />
      <link rel="alternate" href={finalCanonicalUrl} hrefLang="en" />
      
      {/* Enhanced Robots Directives */}
      <meta name="robots" content={getRobotsDirective()} />
      <meta name="googlebot" content={getRobotsDirective()} />
      <meta name="bingbot" content={getRobotsDirective()} />
      
      {/* Page Freshness and Authority */}
      <meta name="last-modified" content={currentDate} />
      <meta name="revisit-after" content="3 days" />
      <meta name="author" content="Roy - Master Vehicle Wrap Installer" />
      <meta name="publisher" content="Wrapping Chicago" />
      
      {/* Geographic and Local SEO */}
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />
      <meta name="geo.position" content="41.8781;-87.6298" />
      <meta name="ICBM" content="41.8781, -87.6298" />
      
      {/* Mobile and Device Optimization */}
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Enhanced Open Graph */}
      <meta property="og:title" content={optimizedTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Professional vehicle wraps in Chicago - Wrapping Chicago" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      <meta property="og:locale" content="en_US" />
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={optimizedTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      <meta name="twitter:image:alt" content="Professional vehicle wraps in Chicago" />
      <meta name="twitter:site" content="@wrappingchicago" />
      <meta name="twitter:creator" content="@wrappingchicago" />
      
      {/* Performance and Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* Sitemap and Discovery */}
      <link rel="sitemap" type="application/xml" href={`${domain}/sitemap.xml`} />
      
      {/* Structured Data Schemas */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
      
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      
      {/* Additional Custom Structured Data */}
      {structuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default FullSEOOptimization;
