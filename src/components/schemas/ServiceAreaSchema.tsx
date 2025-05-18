
import React from 'react';
import { City } from '@/data/cities';

interface ServiceAreaSchemaProps {
  cities: City[];
}

const ServiceAreaSchema: React.FC<ServiceAreaSchemaProps> = ({ cities }) => {
  // Create service areas from cities
  const serviceAreas = cities.map(city => ({
    "@type": "AdministrativeArea",
    "name": city.name,
    "sameAs": `https://en.wikipedia.org/wiki/${city.name},_Illinois`
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "ServiceArea",
    "name": "Wrapping Chicago Service Area",
    "description": "Areas served by Wrapping Chicago for professional vehicle wrap services",
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
      }
    },
    "areaServed": serviceAreas
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ServiceAreaSchema;
