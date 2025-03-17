
import React from 'react';
import { City } from '@/data/cities';

interface SchemaProps {
  city: City;
}

const Schema = ({ city }: SchemaProps) => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Chicago Fleet Wraps",
    "alternateName": "CFW Vehicle Wrapping Services",
    "description": `Premium vehicle wrapping service serving ${city.name}, IL with fleet wraps, color change wraps, and commercial graphics.`,
    "url": `https://chicagofleetwraps.com/vehicle-wraps-${city.slug}-il`,
    "telephone": "(312) 597-1286",
    "email": "roy@chicagofleetwraps.com",
    "foundingDate": "2015",
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
      "https://www.facebook.com/chicagofleetwraps",
      "https://www.instagram.com/chicagofleetwraps",
      "https://twitter.com/chifleetwraps",
      "https://www.linkedin.com/company/chicagofleetwraps"
    ],
    "image": [
      "https://chicagofleetwraps.com/images/vehicle-wrap-chicago.jpg",
      "https://chicagofleetwraps.com/images/fleet-wraps-chicago.jpg",
      "https://chicagofleetwraps.com/images/color-change-wraps.jpg"
    ],
    "logo": "https://chicagofleetwraps.com/logo.png",
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fleet Vehicle Wraps",
            "description": `Professional fleet vehicle wraps for ${city.name}, IL businesses. Transform your company vehicles into mobile billboards.`,
            "areaServed": city.name
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Color Change Wraps",
            "description": `High-quality color change vehicle wraps in ${city.name}, IL. Change the look of your vehicle without permanent paint.`,
            "areaServed": city.name
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Graphics",
            "description": `Eye-catching commercial graphics and vehicle lettering for ${city.name}, IL businesses.`,
            "areaServed": city.name
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Partial Wraps",
            "description": `Cost-effective partial vehicle wraps for ${city.name}, IL businesses that want to make an impact on a budget.`,
            "areaServed": city.name
          }
        }
      ]
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "John Smith"
        },
        "datePublished": "2022-11-15",
        "reviewBody": "Chicago Fleet Wraps did an amazing job on our delivery vans. The quality is outstanding and the service was professional from start to finish."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "datePublished": "2023-03-22",
        "reviewBody": "I couldn't be happier with the color change wrap they did on my Tesla. The attention to detail was impressive."
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "87",
      "bestRating": "5",
      "worstRating": "1"
    },
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://chicagofleetwraps.com/contact",
        "inLanguage": "en-US",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Request a Quote"
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

export default Schema;
