import React from 'react';
import { Helmet } from 'react-helmet-async';

interface RichSnippetsManagerProps {
  pageType: 'service' | 'location' | 'blog' | 'home' | 'about' | 'contact';
  title: string;
  description: string;
  url: string;
  keywords?: string[];
  faqData?: Array<{ question: string; answer: string; }>;
  howToSteps?: Array<{ name: string; text: string; }>;
  reviews?: {
    averageRating: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  };
  services?: Array<{
    name: string;
    description: string;
    price?: string;
    duration?: string;
  }>;
  location?: {
    name: string;
    latitude: number;
    longitude: number;
  };
  articleData?: {
    author: string;
    datePublished: string;
    dateModified: string;
    wordCount: number;
  };
}

const RichSnippetsManager: React.FC<RichSnippetsManagerProps> = ({
  pageType,
  title,
  description,
  url,
  keywords = [],
  faqData = [],
  howToSteps = [],
  reviews,
  services = [],
  location,
  articleData
}) => {
  const domain = "https://www.wrappingchicago.com";
  
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${domain}/#organization`,
    "name": "Wrapping Chicago",
    "alternateName": "Chicago Vehicle Wrapping Services",
    "url": domain,
    "logo": {
      "@type": "ImageObject",
      "url": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
      "width": 1200,
      "height": 630
    },
    "description": "Premier vehicle wrapping service in Chicago with over 16,000 wraps completed in 20 years of business.",
    "telephone": "(312) 597-1286",
    "email": "roy@chicagofleetwraps.com",
    "foundingDate": "2003",
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
    "sameAs": [
      "https://www.facebook.com/wrappingchicago",
      "https://www.instagram.com/wrappingchicago",
      "https://www.linkedin.com/company/wrappingchicago"
    ],
    "priceRange": "$2500-$6500",
    "paymentAccepted": "Cash, Credit Card, Check",
    "currenciesAccepted": "USD",
    ...(reviews && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": reviews.averageRating,
        "reviewCount": reviews.reviewCount,
        "bestRating": reviews.bestRating || 5,
        "worstRating": reviews.worstRating || 1
      }
    })
  };

  // FAQ Schema
  const faqSchema = faqData.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // How-to Schema
  const howToSchema = howToSteps.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Get ${title}`,
    "description": description,
    "step": howToSteps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  } : null;

  // Service Schema
  const serviceSchema = pageType === 'service' && services.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "provider": {
      "@type": "Organization",
      "@id": `${domain}/#organization`
    },
    "serviceType": "Vehicle Wrapping",
    "areaServed": {
      "@type": "City",
      "name": "Chicago",
      "addressRegion": "IL"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Wrap Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description,
          ...(service.price && { "priceRange": service.price })
        }
      }))
    },
    ...(reviews && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": reviews.averageRating,
        "reviewCount": reviews.reviewCount,
        "bestRating": reviews.bestRating || 5,
        "worstRating": reviews.worstRating || 1
      }
    })
  } : null;

  // LocalBusiness Schema for location pages
  const localBusinessSchema = pageType === 'location' && location ? {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}#localbusiness`,
    "name": `Wrapping Chicago - ${location.name}`,
    "description": description,
    "url": url,
    "telephone": "(312) 597-1286",
    "email": "roy@chicagofleetwraps.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.name,
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": location.latitude,
      "longitude": location.longitude
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": location.latitude,
        "longitude": location.longitude
      },
      "geoRadius": "25 miles"
    },
    "parentOrganization": {
      "@type": "Organization",
      "@id": `${domain}/#organization`
    }
  } : null;

  // Article Schema for blog posts
  const articleSchema = pageType === 'blog' && articleData ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "author": {
      "@type": "Person",
      "name": articleData.author
    },
    "publisher": {
      "@type": "Organization",
      "@id": `${domain}/#organization`
    },
    "datePublished": articleData.datePublished,
    "dateModified": articleData.dateModified,
    "wordCount": articleData.wordCount,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "image": {
      "@type": "ImageObject",
      "url": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
      "width": 1200,
      "height": 630
    }
  } : null;

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    "url": url,
    "name": title,
    "description": description,
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${domain}/#website`
    },
    "about": {
      "@type": "Organization",
      "@id": `${domain}/#organization`
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
      "width": 1200,
      "height": 630
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
    ...(keywords.length > 0 && { "keywords": keywords.join(", ") })
  };

  // BreadcrumbList Schema
  const pathSegments = new URL(url).pathname.split('/').filter(Boolean);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": domain
      },
      ...pathSegments.map((segment, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": segment.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ').replace('Il', 'IL'),
        "item": `${domain}/${pathSegments.slice(0, index + 1).join('/')}`
      }))
    ]
  };

  return (
    <Helmet>
      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* WebPage Schema */}
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>

      {/* BreadcrumbList Schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* FAQ Schema */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}

      {/* How-to Schema */}
      {howToSchema && (
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
      )}

      {/* Service Schema */}
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}

      {/* LocalBusiness Schema */}
      {localBusinessSchema && (
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      )}

      {/* Article Schema */}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}

      {/* Enhanced SERP Features */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="google-site-verification" content="" />
      <meta name="msvalidate.01" content="" />
      
      {/* Mobile and Performance */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=yes, email=yes, address=yes" />
      
      {/* Social Media Optimization */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      <meta name="twitter:creator" content="@wrappingchicago" />
      <meta name="twitter:site" content="@wrappingchicago" />
      
      {/* Additional SERP Enhancements */}
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      <meta name="rating" content="General" />
      
      {/* Geo-targeting */}
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />
      <meta name="geo.position" content="41.8781;-87.6298" />
      <meta name="ICBM" content="41.8781, -87.6298" />
    </Helmet>
  );
};

export default RichSnippetsManager;