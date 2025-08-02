import React from 'react';
import { useSchemaDeduplicator } from '@/components/seo/SchemaDeduplicator';

interface RichResultsSchemaProps {
  pageType?: 'home' | 'services' | 'pricing' | 'location';
  businessName?: string;
  businessUrl?: string;
}

const RichResultsSchema: React.FC<RichResultsSchemaProps> = ({
  pageType = 'home',
  businessName = "Wrapping Chicago",
  businessUrl = "https://www.wrappingchicago.com"
}) => {
  const { canRenderSchema, registerSchema } = useSchemaDeduplicator();
  
  if (!canRenderSchema('RichResults', 'DedupRichResultsSchema')) {
    return null;
  }
  
  registerSchema('RichResults', 'DedupRichResultsSchema');

  const schemas = [];

  // Product/Service offering with rich results
  schemas.push({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${businessUrl}/#services-list`,
    "name": "Vehicle Wrap Services Chicago",
    "description": "Complete vehicle wrap services with transparent pricing and professional installation",
    "numberOfItems": 8,
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "Car Wraps",
        "description": "Premium car wrap installation with 3M and Avery Dennison materials",
        "provider": { "@type": "Organization", "name": businessName },
        "offers": {
          "@type": "Offer",
          "price": "2500-4000",
          "priceCurrency": "USD",
          "availability": "InStock",
          "validFrom": "2024-01-01",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "2500-4000",
            "priceCurrency": "USD"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "89",
          "bestRating": "5"
        }
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "Truck Wraps",
        "description": "Commercial truck wrapping for businesses and fleet vehicles",
        "provider": { "@type": "Organization", "name": businessName },
        "offers": {
          "@type": "Offer",
          "price": "3500-6000",
          "priceCurrency": "USD",
          "availability": "InStock",
          "validFrom": "2024-01-01"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "67",
          "bestRating": "5"
        }
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "Van Wraps",
        "description": "Professional van wrapping for commercial and personal vehicles",
        "provider": { "@type": "Organization", "name": businessName },
        "offers": {
          "@type": "Offer",
          "price": "2800-4500",
          "priceCurrency": "USD",
          "availability": "InStock",
          "validFrom": "2024-01-01"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "45",
          "bestRating": "5"
        }
      },
      {
        "@type": "Service",
        "position": 4,
        "name": "Fleet Wraps",
        "description": "Complete fleet vehicle wrapping with volume discounts",
        "provider": { "@type": "Organization", "name": businessName },
        "offers": {
          "@type": "Offer",
          "price": "1500-4000",
          "priceCurrency": "USD",
          "availability": "InStock",
          "validFrom": "2024-01-01"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "23",
          "bestRating": "5"
        }
      }
    ]
  });

  // Star rating schema for search results
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${businessUrl}/#vehicle-wrap-service`,
    "name": "Vehicle Wrap Installation Services",
    "description": "Professional vehicle wrap installation in Chicago with premium materials and expert craftsmanship",
    "brand": {
      "@type": "Brand",
      "name": businessName
    },
    "manufacturer": {
      "@type": "Organization",
      "name": businessName
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "1200",
      "highPrice": "6000",
      "priceCurrency": "USD",
      "availability": "InStock",
      "offerCount": "8"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "247",
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
          "name": "Mike Thompson"
        },
        "reviewBody": "Outstanding vehicle wrap installation! The team wrapped our delivery truck with precision and the graphics look amazing. We've already gotten 3 new customers who said they found us because of our truck."
      }
    ]
  });

  // Business hours for rich results
  schemas.push({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${businessUrl}/#business-hours`,
    "name": businessName,
    "url": businessUrl,
    "telephone": "+13125971286",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "00:00",
        "closes": "00:00",
        "validFrom": "2024-01-01",
        "validThrough": "2024-12-31"
      }
    ],
    "specialOpeningHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "opens": "00:00",
        "closes": "23:59",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "description": "24/7 Emergency Vehicle Wrap Services Available"
      }
    ]
  });

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default RichResultsSchema;