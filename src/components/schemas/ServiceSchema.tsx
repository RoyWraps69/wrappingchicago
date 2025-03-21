
import React from 'react';

interface ServiceSchemaProps {
  title: string;
  description: string;
  path: string;
  includeAI?: boolean;
}

const ServiceSchema = ({ 
  title, 
  description, 
  path,
  includeAI = false 
}: ServiceSchemaProps) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
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
    "areaServed": {
      "@type": "City",
      "name": "Chicago"
    },
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
      "lastReviewed": new Date().toISOString().split('T')[0]
    }
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
