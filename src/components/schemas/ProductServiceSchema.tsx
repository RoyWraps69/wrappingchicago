
import React from 'react';

interface ProductServiceSchemaProps {
  productName?: string;
  serviceName?: string;
  description: string;
  cityName?: string;
}

const ProductServiceSchema: React.FC<ProductServiceSchemaProps> = ({ 
  productName = "Vehicle Wraps", 
  serviceName = "Vehicle Wrapping Service",
  description,
  cityName = "Chicago"
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${productName} in ${cityName}`,
    "description": description,
    "brand": {
      "@type": "Brand",
      "name": "Wrapping Chicago"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "highPrice": "5000",
      "lowPrice": "1500",
      "offerCount": "10",
      "offers": [
        {
          "@type": "Offer",
          "name": "Fleet Wraps",
          "description": `Professional fleet vehicle wraps in ${cityName}`
        },
        {
          "@type": "Offer",
          "name": "Car Wraps", 
          "description": `Professional car wraps in ${cityName}`
        }
      ]
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "John D."
      },
      "reviewBody": `Excellent vehicle wrapping service in ${cityName}. Professional installation and great customer service.`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156",
      "bestRating": "5"
    },
    "isRelatedTo": {
      "@type": "Service",
      "name": serviceName,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Wrapping Chicago"
      },
      "areaServed": {
        "@type": "City",
        "name": cityName
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ProductServiceSchema;
