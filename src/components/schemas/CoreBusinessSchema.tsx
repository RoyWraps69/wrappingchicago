
import React from 'react';
import { City } from '@/data/types/city';

interface CoreBusinessSchemaProps {
  city: City;
  pageUrl: string;
}

const CoreBusinessSchema: React.FC<CoreBusinessSchemaProps> = ({ city, pageUrl }) => {
  const domain = "https://www.wrappingchicago.com";
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${domain}/#organization`,
    "name": "Wrapping Chicago",
    "url": domain,
    "telephone": "(312) 597-1286",
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
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Check",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156",
      "bestRating": "5"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default CoreBusinessSchema;
