
import React from 'react';
import { City } from '@/data/types/city';

interface RichResultSchemaProps {
  city: City;
  pageTitle: string;
  pageDescription: string;
}

const RichResultSchema: React.FC<RichResultSchemaProps> = ({ 
  city, 
  pageTitle, 
  pageDescription 
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Fleet Vehicle Wraps",
          "description": `Professional fleet vehicle wrapping services for businesses in ${city.name} and surrounding areas.`,
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
          "areaServed": {
            "@type": "City",
            "name": city.name
          },
          "serviceType": "Fleet Vehicle Wrapping"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Car Wraps",
          "description": `Expert car wrapping services in ${city.name} with premium 3M materials and professional installation.`,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Wrapping Chicago"
          },
          "areaServed": {
            "@type": "City",
            "name": city.name
          },
          "serviceType": "Car Wrapping"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Commercial Graphics",
          "description": `Professional commercial graphics and vehicle lettering services for businesses in ${city.name}.`,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Wrapping Chicago"
          },
          "areaServed": {
            "@type": "City",
            "name": city.name
          },
          "serviceType": "Commercial Graphics"
        }
      }
    ],
    "name": pageTitle,
    "description": pageDescription,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "lastReviewed": new Date().toISOString().split('T')[0]
    }
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default RichResultSchema;
