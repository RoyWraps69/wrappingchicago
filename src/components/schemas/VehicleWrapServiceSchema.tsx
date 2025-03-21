
import React from 'react';
import { City } from '@/data/cities';

interface VehicleWrapServiceSchemaProps {
  city: City;
}

const VehicleWrapServiceSchema = ({ city }: VehicleWrapServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `Vehicle Wrapping Services in ${city.name}, IL`,
    "description": `Premium vehicle wraps for businesses and individuals in ${city.name}, IL. Transform your vehicle with eye-catching graphics and protect your paint with our professional vehicle wrapping services. Specializing in car wraps, truck wraps, van wraps, and fleet graphics throughout Chicago and suburbs.`,
    "url": `https://wrappingchicago.com/vehicle-wraps-${city.slug}-il`,
    "logo": "https://wrappingchicago.com/logo.png",
    "telephone": "(312) 597-1286",
    "email": "roy@chicagofleetwraps.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60630",
      "streetAddress": "4711 N. Lamon Ave",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.8781,
      "longitude": -87.6298
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "sameAs": `https://en.wikipedia.org/wiki/${city.name.replace(/ /g, '_')},_Illinois`
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Vehicle Wrap Services in ${city.name}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Car Wraps in ${city.name}`,
            "description": `Professional car wrapping services in ${city.name} using premium 3M vinyl materials with expert installation and a 2-year warranty.`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Truck Wraps in ${city.name}`,
            "description": `Custom truck wraps for businesses in ${city.name} that transform your commercial vehicles into mobile billboards.`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Van Wraps in ${city.name}`,
            "description": `Professional van wraps that maximize your brand visibility throughout ${city.name} and surrounding areas.`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Fleet Wraps in ${city.name}`,
            "description": `Consistent fleet branding solutions for ${city.name} businesses with multiple vehicles. Enhance your company image and gain thousands of daily impressions.`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Color Change Wraps in ${city.name}`,
            "description": `Transform your vehicle's appearance with premium color change wraps available in matte, gloss, satin, and custom finishes throughout ${city.name}.`
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "156"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Michael Johnson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "datePublished": "2023-08-15",
        "reviewBody": "Our fleet of delivery vans looks absolutely amazing with the new wraps. Great attention to detail and excellent customer service throughout the process."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Rodriguez"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "datePublished": "2023-07-22",
        "reviewBody": "I got a color change wrap on my Tesla and the results are stunning. The installation was flawless and the matte finish looks better than I imagined."
      }
    ],
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

export default VehicleWrapServiceSchema;
