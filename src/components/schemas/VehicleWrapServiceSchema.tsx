
import React from 'react';
import { City } from '@/data/cities';

interface VehicleWrapServiceSchemaProps {
  city: City;
}

const VehicleWrapServiceSchema = ({ city }: VehicleWrapServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Vehicle Wraps in ${city.name}, Illinois`,
    "serviceType": "Vehicle Wrapping",
    "description": `Professional vehicle wraps, car wraps, truck wraps, van wraps, and fleet graphics in ${city.name}, IL. Premium 3M vinyl wraps with expert installation and long-lasting durability. Serving all of ${city.county} and the greater Chicago area.`,
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
      },
      "telephone": "(312) 597-1286",
      "priceRange": "$$"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": city.name,
        "sameAs": `https://en.wikipedia.org/wiki/${city.name},_Illinois`
      },
      {
        "@type": "City",
        "name": "Chicago",
        "sameAs": "https://en.wikipedia.org/wiki/Chicago"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Car Wraps",
            "description": `High-quality car wraps in ${city.name}, IL with premium 3M vinyl materials and expert installation.`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Truck Wraps",
            "description": `Custom truck wraps for businesses in ${city.name}, IL. Transform your commercial vehicles into mobile billboards.`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Van Wraps",
            "description": `Professional van wraps for ${city.name} businesses. Maximize your advertising with high-quality van graphics.`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fleet Wraps",
            "description": `Comprehensive fleet wrapping services for ${city.name} companies. Consistent branding across your entire vehicle fleet.`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Color Change Wraps",
            "description": `Vehicle color change wraps in ${city.name}. Transform your car's appearance without permanent paint.`
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default VehicleWrapServiceSchema;
