
import React from 'react';

interface GoogleBusinessProfileSchemaProps {
  cityName: string;
}

const GoogleBusinessProfileSchema: React.FC<GoogleBusinessProfileSchemaProps> = ({ cityName }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    "@id": "https://www.wrappingchicago.com/#business",
    "name": "Wrapping Chicago",
    "image": "https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png",
    "priceRange": "$$",
    "telephone": "+13125971286",
    "email": "roy@chicagofleetwraps.com",
    "url": "https://www.wrappingchicago.com",
    "description": `Chicago's premier vehicle wrap company serving ${cityName} and surrounding areas. We provide professional car wraps, truck wraps, van wraps, and fleet wraps with premium 3M materials and expert installation.`,
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
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "00:00",
        "closes": "00:00"
      }
    ],
    "hasMap": "https://www.google.com/maps?cid=your_google_business_profile_id",
    "areaServed": [
      {
        "@type": "City",
        "name": "Chicago",
        "sameAs": "https://en.wikipedia.org/wiki/Chicago"
      },
      {
        "@type": "City",
        "name": cityName,
        "sameAs": `https://en.wikipedia.org/wiki/${cityName},_Illinois`
      }
    ],
    "potentialAction": [
      {
        "@type": "ReserveBusiness",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.wrappingchicago.com/contact",
          "inLanguage": "en-US"
        },
        "result": {
          "@type": "Reservation",
          "name": "Vehicle Wrap Consultation"
        }
      },
      {
        "@type": "OrderAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.wrappingchicago.com/contact"
        },
        "result": {
          "@type": "Order"
        },
        "deliveryMethod": ["http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"]
      }
    ],
    "sameAs": [
      "https://www.facebook.com/wrappingchicago",
      "https://www.instagram.com/wrappingchicago",
      "https://www.twitter.com/wrappingchicago",
      "https://www.linkedin.com/company/wrappingchicago",
      "https://www.yelp.com/biz/wrapping-chicago",
      "https://www.google.com/maps?cid=your_google_business_profile_id"
    ],
    "department": [
      {
        "@type": "AutoBodyShop",
        "name": "Car Wrap Installation",
        "description": "Professional car wrap installation services with premium 3M vinyl materials."
      },
      {
        "@type": "AutoBodyShop",
        "name": "Commercial Fleet Wrapping",
        "description": "Complete fleet vehicle branding solutions for businesses of all sizes."
      },
      {
        "@type": "AutoBodyShop",
        "name": "Design Studio",
        "description": "Professional graphic design services for vehicle wraps and commercial graphics."
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 41.8781,
        "longitude": -87.6298
      },
      "geoRadius": "50000"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Michael R."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "datePublished": "2023-08-15",
        "reviewBody": `Best vehicle wrap company in the Chicago area! They wrapped my entire fleet of delivery vans and the quality is outstanding. Highly recommended to any business in ${cityName} looking for vehicle branding.`
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156",
      "bestRating": "5"
    },
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png",
      "width": "180",
      "height": "60"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.wrappingchicago.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default GoogleBusinessProfileSchema;
