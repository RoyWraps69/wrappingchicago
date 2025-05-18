
import React from 'react';

interface LocalSearchSchemaProps {
  cityName?: string;
}

const LocalSearchSchema: React.FC<LocalSearchSchemaProps> = ({ cityName = "Chicago" }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.wrappingchicago.com/#localbusiness",
    "name": "Wrapping Chicago",
    "image": "https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png",
    "priceRange": "$$$",
    "telephone": "+13125971286",
    "email": "roy@chicagofleetwraps.com",
    "url": "https://www.wrappingchicago.com",
    "sameAs": [
      "https://www.facebook.com/wrappingchicago",
      "https://www.instagram.com/wrappingchicago",
      "https://twitter.com/wrappingchicago",
      "https://www.linkedin.com/company/wrappingchicago",
      "https://www.yelp.com/biz/wrapping-chicago"
    ],
    "description": `Professional vehicle wrapping services in ${cityName} with over 16,000 completed projects. Expert installation of car wraps, truck wraps, van wraps and fleet wraps with premium 3M materials.`,
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
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "10:00",
        "closes": "14:00"
      }
    ],
    "areaServed": {
      "@type": "State",
      "name": "Illinois",
      "containsPlace": [
        {
          "@type": "City",
          "name": "Chicago"
        },
        {
          "@type": "City",
          "name": cityName
        }
      ]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fleet Vehicle Wraps"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Car Wraps"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Truck Wraps"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Van Wraps"
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

export default LocalSearchSchema;
