
import React from 'react';
import { City } from '@/data/cities';

interface SchemaProps {
  city: City;
}

const Schema = ({ city }: SchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Chicago Fleet Wraps",
    "description": `Premium vehicle wrapping service serving ${city.name}, IL with fleet wraps, color change wraps, and commercial graphics.`,
    "url": `https://chicagofleetwraps.com/vehicle-wraps-${city.slug}-il`,
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
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/chicagofleetwraps",
      "https://www.instagram.com/chicagofleetwraps",
      "https://twitter.com/chifleetwraps"
    ],
    "image": "https://chicagofleetwraps.com/images/vehicle-wrap-chicago.jpg",
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "sameAs": `https://en.wikipedia.org/wiki/${city.name},_Illinois`
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 41.8781,
        "longitude": -87.6298
      },
      "geoRadius": "30000"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fleet Vehicle Wraps",
          "description": `Professional fleet vehicle wraps for ${city.name}, IL businesses. Transform your company vehicles into mobile billboards.`
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Color Change Wraps",
          "description": `High-quality color change vehicle wraps in ${city.name}, IL. Change the look of your vehicle without permanent paint.`
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Graphics",
          "description": `Eye-catching commercial graphics and vehicle lettering for ${city.name}, IL businesses.`
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

export default Schema;
