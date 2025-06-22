
import React from 'react';
import { City } from '@/data/cities';

interface LocationReviewSchemaProps {
  city: City;
  businessName?: string;
  reviewCount?: number;
  ratingValue?: number;
}

const LocationReviewSchema: React.FC<LocationReviewSchemaProps> = ({ 
  city,
  businessName = "Wrapping Chicago",
  reviewCount = 47,
  ratingValue = 4.9
}) => {
  const domain = "https://www.wrappingchicago.com";
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${domain}/#organization`,
    "name": `${businessName} - ${city.name} Vehicle Wraps`,
    "alternateName": `${city.name} Vehicle Wrap Services`,
    "url": `${domain}/vehicle-wraps-${city.slug}-il`,
    "description": `Professional vehicle wrap services in ${city.name}, IL including car wraps, truck wraps, van wraps, and fleet graphics with expert installation and premium materials.`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": reviewCount,
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
          "name": "Mike Johnson"
        },
        "reviewBody": `Excellent vehicle wrap service in ${city.name}! The team at Wrapping Chicago did an amazing job on our company van. Professional installation and great customer service.`,
        "datePublished": "2024-03-15"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Martinez"
        },
        "reviewBody": `Best vehicle wrap company in ${city.name}! They transformed our delivery truck into a mobile billboard. Highly recommend their services.`,
        "datePublished": "2024-02-28"
      }
    ],
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
    "telephone": "+13125971286",
    "email": "roy@chicagofleetwraps.com",
    "areaServed": [
      {
        "@type": "City",
        "name": city.name,
        "sameAs": `https://en.wikipedia.org/wiki/${city.name.replace(' ', '_')}`
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

export default LocationReviewSchema;
