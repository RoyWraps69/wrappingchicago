
import React from 'react';
import { City } from '@/data/cities';

interface LocalGeoSchemaProps {
  city: City;
}

const LocalGeoSchema: React.FC<LocalGeoSchemaProps> = ({ city }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": `Vehicle Wrap Services in ${city.name}, Illinois`,
    "description": `Professional vehicle wrapping services available in ${city.name}, IL. We provide expert installation of car wraps, truck wraps, and commercial fleet graphics throughout the Chicago area.`,
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
      "latitude": city.coordinates ? city.coordinates.lat : 41.8781,
      "longitude": city.coordinates ? city.coordinates.lng : -87.6298
    },
    "hasMap": `https://www.google.com/maps?q=${city.coordinates ? city.coordinates.lat : 41.8781},${city.coordinates ? city.coordinates.lng : -87.6298}`,
    "publicAccess": true,
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "sameAs": `https://en.wikipedia.org/wiki/${city.name},_Illinois`
    },
    "isAccessibleForFree": true
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalGeoSchema;
