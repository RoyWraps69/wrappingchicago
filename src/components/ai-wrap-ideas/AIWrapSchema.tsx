import React from 'react';

const AIWrapSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Vehicle Wrap Design Generator",
    "applicationCategory": "DesignApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "operatingSystem": "Web-based",
    "description": "An AI-powered tool that generates custom vehicle wrap designs for businesses in Chicago. Create professional vehicle wrap concepts in seconds using artificial intelligence.",
    "featureList": [
      "AI-powered design generation",
      "Custom vehicle wrap visualization",
      "Multiple design concept generation",
      "Business-specific branding incorporation",
      "Instant visual feedback"
    ],
    "creator": {
      "@type": "Organization",
      "name": "Chicago Fleet Wraps",
      "url": "https://chicagofleetwraps.com"
    },
    "potentialAction": {
      "@type": "UseAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://chicagofleetwraps.com/ai-wrap-ideas#generator-section"
      },
      "expectsAcceptanceOf": {
        "@type": "Offer",
        "description": "Generate custom AI vehicle wrap designs"
      }
    },
    "about": {
      "@type": "Thing",
      "name": "Vehicle Wrap Design",
      "description": "Professional vehicle wrapping services enhanced with artificial intelligence design capabilities"
    },
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "businesses seeking vehicle wraps"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "74",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Michael Thompson"
        },
        "datePublished": "2023-09-12",
        "reviewBody": "The AI design tool generated amazing wrap concepts for our delivery fleet. It saved us weeks of back-and-forth with designers."
      }
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "name": "AI Vehicle Wrap Design Generator",
      "@id": "https://chicagofleetwraps.com/ai-wrap-ideas"
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How AI is Revolutionizing Vehicle Wrap Design in Chicago",
    "description": "Learn how artificial intelligence is transforming the vehicle wrap industry by enabling instant custom design generation and visualization.",
    "image": "/lovable-uploads/efc6c586-8651-43ad-811a-b896a91a1b69.png",
    "datePublished": "2023-08-15T08:00:00+08:00",
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Chicago Fleet Wraps",
      "url": "https://chicagofleetwraps.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Chicago Fleet Wraps",
      "logo": {
        "@type": "ImageObject",
        "url": "https://chicagofleetwraps.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://chicagofleetwraps.com/ai-wrap-ideas"
    },
    "keywords": "AI vehicle wrap design, artificial intelligence wrap generator, vehicle wrap AI, Chicago fleet wraps"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
};

export default AIWrapSchema;
