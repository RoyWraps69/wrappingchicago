
import React from 'react';
import { City } from '@/data/cities';

interface LocalBusinessSchemaProps {
  city: City;
}

const LocalBusinessSchema = ({ city }: LocalBusinessSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wrapping Chicago",
    "alternateName": "Chicago Vehicle Wrapping Services",
    "description": `Premium vehicle wrapping service serving ${city.name}, IL with AI-powered design for fleet wraps, color change wraps, and commercial graphics. With over 16,000 vehicle wraps completed in our 20 years of business, we've transformed vehicles into eye-catching mobile advertisements throughout Chicago and suburbs.`,
    "url": `https://wrappingchicago.com/vehicle-wraps-${city.slug}-il`,
    "telephone": "(312) 597-1286",
    "email": "roy@wrappingchicago.com",
    "foundingDate": "2003",
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
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card",
    "currenciesAccepted": "USD",
    "sameAs": [
      "https://www.facebook.com/wrappingchicago",
      "https://www.instagram.com/wrappingchicago",
      "https://twitter.com/wrappingchicago",
      "https://www.linkedin.com/company/wrappingchicago"
    ],
    "image": [
      "https://wrappingchicago.com/lovable-uploads/5539b79e-ab54-428d-82a0-e4735ee97a95.png",
      "https://wrappingchicago.com/lovable-uploads/199c2a21-e0b0-4c29-972f-f32d72698382.png",
      "https://wrappingchicago.com/lovable-uploads/efdbc4bf-1f04-42bb-a904-f52dae7bef6c.png"
    ],
    "logo": "https://wrappingchicago.com/logo.png",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "15"
    },
    "award": [
      "Best Vehicle Wrap Company in Chicago 2023",
      "3M Certified Installers",
      "16,000+ Vehicle Wraps Completed"
    ],
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
      "geoRadius": "50000"
    },
    "slogan": "Transform Your Vehicle. Elevate Your Brand."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
