
import React from 'react';
import { City } from '@/data/types/city';

interface LocalBusinessSchemaProps {
  city: City;
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({ city }) => {
  // Build the schema with dynamic city data
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Chicago Fleet Wraps",
    "url": "https://www.chicagofleetwraps.com",
    "logo": "https://www.chicagofleetwraps.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png",
    "image": "https://www.chicagofleetwraps.com/lovable-uploads/199b8977-07e4-488c-8e27-0ad83b25af33.jpg",
    "description": "Chicago Fleet Wraps offers high-impact vehicle wraps, fleet branding, and color change services that turn vehicles into rolling billboards.",
    "telephone": "+1-312-597-1286",
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
      "latitude": "41.8781",
      "longitude": "-87.6298"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/ChicagoFleetWraps",
      "https://www.instagram.com/chicagofleetwraps",
      "https://www.tiktok.com/@chicagofleetwraps"
    ],
    "serviceType": [
      "Commercial Fleet Vehicle Wraps",
      "Color Change Vehicle Wraps",
      "Ceramic Coatings",
      "Window Tinting",
      "Custom Graphics",
      "Boat Wraps",
      "Trailer Wraps"
    ],
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "sameAs": `https://en.wikipedia.org/wiki/${city.name},_Illinois`
    },
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": `Vehicle Wraps in ${city.name}, IL`,
        "description": `Professional vehicle wrapping services in ${city.name}, including commercial fleet wraps, car wraps, and color change wraps.`
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

export default LocalBusinessSchema;
