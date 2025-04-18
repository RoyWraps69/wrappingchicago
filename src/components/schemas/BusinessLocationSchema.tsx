
import React from 'react';
import { City } from '@/data/types/city';

export interface BusinessLocationSchemaProps {
  city: City;
}

const BusinessLocationSchema: React.FC<BusinessLocationSchemaProps> = ({ city }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Wrapping Chicago - ${city.name} Vehicle Wraps`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.coordinates?.lat || 41.8781,
      "longitude": city.coordinates?.lng || -87.6298
    },
    "url": `https://www.wrappingchicago.com/vehicle-wraps-${city.slug}-il`,
    "telephone": "(312) 597-1286",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
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

export default BusinessLocationSchema;
