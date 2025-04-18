
import React from 'react';
import { City } from '@/data/types/city';

interface BusinessLocationSchemaProps {
  city: City;
}

const BusinessLocationSchema: React.FC<BusinessLocationSchemaProps> = ({ city }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wrapping Chicago",
    "image": "https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png",
    "telephone": "(312) 597-1286",
    "email": "roy@wrappingchicago.com",
    "url": "https://www.wrappingchicago.com",
    "description": `Professional vehicle wraps and graphics services in ${city.name}, IL. Expert installation of car wraps, truck wraps, van wraps, and fleet wraps.`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4711 N. Lamon Ave",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60630",
      "addressCountry": "US"
    },
    "geo": city.coordinates ? {
      "@type": "GeoCoordinates",
      "latitude": city.coordinates.lat,
      "longitude": city.coordinates.lng
    } : undefined,
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "description": city.description
    },
    "priceRange": "$$$",
    "sameAs": [
      "https://www.facebook.com/wrappingchicago",
      "https://www.instagram.com/wrappingchicago",
      "https://twitter.com/wrappingchicago",
      "https://www.linkedin.com/company/wrappingchicago"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default BusinessLocationSchema;
