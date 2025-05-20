
import React from 'react';

interface GoogleBusinessProfileSchemaProps {
  cityName?: string;
}

const GoogleBusinessProfileSchema: React.FC<GoogleBusinessProfileSchemaProps> = ({ cityName = "Chicago" }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.wrappingchicago.com/#localbusiness",
    "name": "Wrapping Chicago",
    "alternateName": "Chicago Fleet Wraps",
    "description": `Professional vehicle wrap company serving ${cityName}, IL and surrounding areas. Specializing in car wraps, truck wraps, van wraps, fleet wraps, and commercial graphics with over 16,000 completed projects.`,
    "url": "https://www.wrappingchicago.com",
    "telephone": "+13125971286",
    "email": "roy@chicagofleetwraps.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png",
      "width": "180",
      "height": "60"
    },
    "image": [
      "https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png"
    ],
    "priceRange": "$$$",
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
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "41.8781",
        "longitude": "-87.6298"
      },
      "geoRadius": "80000"
    },
    "sameAs": [
      "https://www.facebook.com/wrappingchicago",
      "https://www.instagram.com/wrappingchicago",
      "https://twitter.com/wrappingchicago",
      "https://www.linkedin.com/company/wrappingchicago",
      "https://www.yelp.com/biz/wrapping-chicago"
    ],
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
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "closes": "00:00",
        "opens": "00:00"
      }
    ],
    "hasMap": "https://www.google.com/maps?cid=YOUR_GOOGLE_BUSINESS_ID",
    "foundingDate": "2003",
    "foundingLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "addressCountry": "US"
      }
    },
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "10-20"
    },
    "paymentAccepted": ["Credit Card", "Debit Card", "Cash", "Check", "Invoice"],
    "currenciesAccepted": "USD",
    "slogan": "Transform Your Vehicle. Elevate Your Brand.",
    "brand": {
      "@type": "Brand",
      "name": "Wrapping Chicago",
      "logo": "https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+13125971286",
        "contactType": "customer service",
        "areaServed": ["Chicago", cityName],
        "availableLanguage": ["English", "Spanish"],
        "contactOption": ["TollFree", "HearingImpairedSupported"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+13125971286",
        "contactType": "sales",
        "areaServed": ["Chicago", cityName],
        "availableLanguage": ["English", "Spanish"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+13125971286",
        "contactType": "billing",
        "areaServed": ["Chicago", cityName],
        "availableLanguage": ["English"]
      }
    ],
    "knowsLanguage": ["en", "es"],
    "knowsAbout": ["Vehicle Wraps", "Fleet Branding", "Commercial Graphics", "Car Wraps", "Truck Wraps", "Van Wraps"],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "41.8781",
        "longitude": "-87.6298"
      },
      "geoRadius": "80"
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
            "description": "Professional fleet vehicle wrapping services for businesses throughout Chicago and surrounding areas."
          },
          "areaServed": {
            "@type": "City",
            "name": cityName
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
        "name": "Michael K."
      },
      "datePublished": "2023-04-22",
      "reviewBody": "Chicago Fleet Wraps transformed our delivery trucks with eye-catching graphics. Professional service from start to finish."
    },
    "potentialAction": {
      "@type": "OrderAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.wrappingchicago.com/contact",
        "inLanguage": "en-US",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Vehicle Wrap Consultation"
      }
    },
    "faxNumber": "+13125971287",
    "availableLanguage": ["en", "es"],
    "actionableFeedbackPolicy": "https://www.wrappingchicago.com/feedback",
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

export default GoogleBusinessProfileSchema;
