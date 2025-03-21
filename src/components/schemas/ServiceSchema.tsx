
import React from 'react';

interface ServiceSchemaProps {
  title: string;
  description: string;
  path: string;
  includeAI?: boolean;
  lastModified?: string;
}

const ServiceSchema = ({ 
  title, 
  description, 
  path,
  includeAI = false,
  lastModified = new Date().toISOString().split('T')[0]
}: ServiceSchemaProps) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://wrappingchicago.com${path}#service`,
    "name": includeAI ? `AI-Powered ${title}` : title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Wrapping Chicago",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4711 N. Lamon Ave",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "postalCode": "60630",
        "addressCountry": "US"
      },
      "telephone": "(312) 597-1286",
      "priceRange": "$$",
      "slogan": "Transform Your Vehicle. Elevate Your Brand."
    },
    "description": includeAI 
      ? `${description} Designs created with our artificial intelligence design generator.` 
      : description,
    "serviceType": includeAI ? `AI-Enhanced ${title}` : title,
    "areaServed": [
      {
        "@type": "City",
        "name": "Chicago"
      },
      {
        "@type": "City",
        "name": "Evanston"
      },
      {
        "@type": "City",
        "name": "Naperville"
      },
      {
        "@type": "City",
        "name": "Oak Park"
      },
      {
        "@type": "City",
        "name": "Schaumburg"
      }
    ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "url": `https://wrappingchicago.com${path}`,
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://wrappingchicago.com${path}`,
      "lastReviewed": lastModified,
      "dateModified": lastModified,
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", ".speakable"]
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Wrap Services Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fleet Vehicle Wraps",
            "description": "Professional fleet vehicle wrapping services for businesses throughout Chicago and surrounding areas."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Color Change Wraps",
            "description": "Premium color change vehicle wraps with a variety of finishes including matte, gloss, satin, and custom."
          }
        }
      ]
    },
    "isRelatedTo": [
      {
        "@type": "Service",
        "name": "Truck Wraps",
        "url": "https://wrappingchicago.com/services/truck-wraps"
      },
      {
        "@type": "Service",
        "name": "Van Wraps",
        "url": "https://wrappingchicago.com/services/van-wraps"
      },
      {
        "@type": "Service",
        "name": "Color Change Wraps",
        "url": "https://wrappingchicago.com/services/color-change-wraps"
      }
    ]
  };

  // Add AI tool schema if AI is included
  if (includeAI) {
    serviceSchema["additionalProperty"] = [
      {
        "@type": "PropertyValue",
        "name": "AI Design Assistant",
        "value": "Included"
      },
      {
        "@type": "PropertyValue",
        "name": "Technology",
        "value": "Artificial Intelligence Image Generation"
      }
    ];
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
};

export default ServiceSchema;
