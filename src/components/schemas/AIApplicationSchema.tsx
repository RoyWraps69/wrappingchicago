
import React from 'react';

const AIApplicationSchema = () => {
  const domain = "https://www.wrappingchicago.com";
  
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
      "name": "Wrapping Chicago",
      "url": domain
    },
    "potentialAction": {
      "@type": "UseAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${domain}/ai-wrap-ideas#generator-section`
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
      "@id": `${domain}/ai-wrap-ideas`
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default AIApplicationSchema;
