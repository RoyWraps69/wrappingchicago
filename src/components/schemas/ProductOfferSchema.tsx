
import React from 'react';

interface ProductOfferSchemaProps {
  productName: string;
  description: string;
  cityName?: string;
  minPrice?: number;
  maxPrice?: number;
}

const ProductOfferSchema: React.FC<ProductOfferSchemaProps> = ({
  productName,
  description,
  cityName = 'Chicago',
  minPrice = 1500,
  maxPrice = 5000
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${productName} in ${cityName}, IL`,
    "description": description,
    "brand": {
      "@type": "Brand",
      "name": "Wrapping Chicago"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Wrapping Chicago",
      "url": "https://www.wrappingchicago.com"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": minPrice,
      "highPrice": maxPrice,
      "offerCount": "50",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split('T')[0],
      "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      "seller": {
        "@type": "Organization",
        "name": "Wrapping Chicago",
        "url": "https://www.wrappingchicago.com"
      },
      "areaServed": {
        "@type": "City",
        "name": cityName,
        "addressRegion": "IL",
        "addressCountry": "US"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156",
      "bestRating": "5"
    },
    "category": "Vehicle Graphics & Wraps",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Service Area",
        "value": `${cityName}, IL and surrounding areas`
      },
      {
        "@type": "PropertyValue",
        "name": "Installation Time",
        "value": "3-5 business days"
      },
      {
        "@type": "PropertyValue",
        "name": "Warranty",
        "value": "2 years"
      },
      {
        "@type": "PropertyValue",
        "name": "Materials",
        "value": "Premium 3M and Avery Dennison vinyl"
      }
    ],
    "isRelatedTo": [
      {
        "@type": "Service",
        "name": "Vehicle Wrap Installation",
        "provider": {
          "@type": "Organization",
          "name": "Wrapping Chicago"
        }
      },
      {
        "@type": "Service",
        "name": "Graphic Design",
        "provider": {
          "@type": "Organization",
          "name": "Wrapping Chicago"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ProductOfferSchema;
