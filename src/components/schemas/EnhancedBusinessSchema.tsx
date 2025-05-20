
import React from 'react';
import { City } from '@/data/types/city';

interface EnhancedBusinessSchemaProps {
  city: City;
}

const EnhancedBusinessSchema: React.FC<EnhancedBusinessSchemaProps> = ({ city }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    "@id": "https://www.wrappingchicago.com/#business",
    "name": "Wrapping Chicago",
    "alternateName": "Chicago Fleet Wraps",
    "description": `Professional vehicle wraps and graphics provider in ${city.name}, IL. Specializing in car wraps, truck wraps, van wraps, fleet wraps, and commercial graphics with over 16,000 completed projects.`,
    "url": "https://www.wrappingchicago.com/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png",
      "width": "180",
      "height": "60"
    },
    "image": [
      "https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png"
    ],
    "telephone": "+13125971286",
    "email": "roy@chicagofleetwraps.com",
    "foundingDate": "2003",
    "founder": {
      "@type": "Person",
      "name": "Roy"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Chicago",
        "sameAs": "https://en.wikipedia.org/wiki/Chicago"
      },
      {
        "@type": "City",
        "name": city.name,
        "sameAs": `https://en.wikipedia.org/wiki/${city.name},_Illinois`
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.8781",
      "longitude": "-87.6298"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4711 N. Lamon Ave",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60630",
      "addressCountry": "US"
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
    "priceRange": "$$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Debit Card, Invoice",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "41.8781",
        "longitude": "-87.6298"
      },
      "geoRadius": "80000"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+13125971286",
        "contactType": "customer service",
        "email": "roy@chicagofleetwraps.com",
        "areaServed": "Chicago Metropolitan Area",
        "availableLanguage": ["English", "Spanish"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+13125971286",
        "contactType": "sales",
        "email": "roy@chicagofleetwraps.com",
        "areaServed": "Chicago Metropolitan Area",
        "availableLanguage": ["English", "Spanish"]
      }
    ],
    "sameAs": [
      "https://www.facebook.com/wrappingchicago",
      "https://www.instagram.com/wrappingchicago",
      "https://twitter.com/wrappingchicago",
      "https://www.linkedin.com/company/wrappingchicago",
      "https://www.yelp.com/biz/wrapping-chicago"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fleet Vehicle Wraps",
            "description": `Professional fleet vehicle wrapping services in ${city.name} with premium 3M materials and expert installation.`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Car Wraps",
            "description": `High-quality car wraps in ${city.name} using premium 3M materials with expert installation.`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Truck Wraps",
            "description": `Professional truck wraps in ${city.name} for box trucks, pickup trucks, and delivery trucks.`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Color Change Wraps",
            "description": `Premium color change vehicle wraps in ${city.name} with various finishes including matte, gloss, and satin.`
          }
        }
      ]
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "John D."
      },
      "datePublished": "2023-06-15",
      "reviewBody": "Best vehicle wrap service in Chicago! The team at Wrapping Chicago did an amazing job on my fleet of delivery vans. Professional service and great attention to detail."
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156",
      "bestRating": "5"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.wrappingchicago.com/"
    },
    "isAccessibleForFree": "True",
    "knowsLanguage": ["en-US", "es-US"],
    "availableService": [
      {
        "@type": "Service",
        "name": "Vehicle Wrapping",
        "description": "Professional vehicle wrap services using premium materials"
      },
      {
        "@type": "Service",
        "name": "Graphic Design",
        "description": "Custom graphic design services for vehicle wraps and fleet branding"
      },
      {
        "@type": "Service",
        "name": "Vehicle Lettering",
        "description": "Custom vinyl lettering and decals for business vehicles"
      }
    ],
    "potentialAction": [
      {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.wrappingchicago.com/contact",
          "inLanguage": "en-US",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform"
          ]
        },
        "result": {
          "@type": "Reservation",
          "name": "Vehicle Wrap Consultation"
        }
      },
      {
        "@type": "ViewAction",
        "target": "https://www.wrappingchicago.com/gallery",
        "name": "View Our Work"
      }
    ],
    "slogan": "Transform Your Vehicle. Elevate Your Brand.",
    "additionalType": [
      "https://schema.org/AutoRepair",
      "https://schema.org/HomeAndConstructionBusiness"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default EnhancedBusinessSchema;
