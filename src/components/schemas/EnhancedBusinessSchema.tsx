
import React from 'react';
import { City } from '@/data/cities';

interface EnhancedBusinessSchemaProps {
  city: City;
}

const EnhancedBusinessSchema: React.FC<EnhancedBusinessSchemaProps> = ({ city }) => {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toISOString();
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    "@id": "https://www.wrappingchicago.com/#business",
    "name": "Wrapping Chicago",
    "alternateName": [
      "Chicago Vehicle Wraps",
      "Chicago Fleet Wraps",
      "Chicago Car Wraps",
      "Chicago Truck Wraps"
    ],
    "description": `Premium vehicle wrapping service in ${city.name}, IL with over 16,000 completed projects. Specializing in car wraps, truck wraps, van wraps and fleet vehicle graphics throughout Chicago and surrounding suburbs.`,
    "url": "https://www.wrappingchicago.com",
    "telephone": "(312) 597-1286",
    "email": "roy@chicagofleetwraps.com",
    "foundingDate": "2003",
    "founder": {
      "@type": "Person",
      "name": "Roy"
    },
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
      "https://www.linkedin.com/company/wrappingchicago",
      "https://www.google.com/search?q=Wrapping+Chicago"
    ],
    "image": [
      "https://www.wrappingchicago.com/lovable-uploads/5539b79e-ab54-428d-82a0-e4735ee97a95.png",
      "https://www.wrappingchicago.com/lovable-uploads/199c2a21-e0b0-4c29-972f-f32d72698382.png",
      "https://www.wrappingchicago.com/lovable-uploads/efdbc4bf-1f04-42bb-a904-f52dae7bef6c.png"
    ],
    "logo": "https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "15"
    },
    "award": [
      `Best Vehicle Wrap Company in Chicago ${currentYear}`,
      "Premium 3M Materials Provider",
      "16,000+ Vehicle Wraps Completed"
    ],
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
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 41.8781,
        "longitude": -87.6298
      },
      "geoRadius": "50000"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Car Wraps",
          "description": "Professional car wrapping services with premium 3M vinyl materials"
        },
        "areaServed": {
          "@type": "City",
          "name": city.name
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Truck Wraps",
          "description": "Expert truck wrap installation for commercial and personal vehicles"
        },
        "areaServed": {
          "@type": "City",
          "name": city.name
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fleet Wraps",
          "description": "Complete fleet vehicle branding solutions for businesses"
        },
        "areaServed": {
          "@type": "City",
          "name": city.name
        }
      }
    ],
    "hasCredential": [
      {
        "@type": "Credential",
        "name": "3M Preferred Installer",
        "recognizedBy": {
          "@type": "Organization",
          "name": "3M"
        }
      },
      {
        "@type": "Credential",
        "name": "Vehicle Wrap Association Member",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Vehicle Wrap Industry Association"
        }
      }
    ],
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "John D."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "datePublished": currentDate,
        "reviewBody": `Exceptional work from Wrapping Chicago. They transformed our fleet vehicles into eye-catching mobile advertisements. The quality of materials and installation in ${city.name} is top-notch.`
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "datePublished": currentDate,
        "reviewBody": `Best vehicle wrap service in the Chicago area! My business van looks amazing and I've been getting new customers because of it. Highly recommend their service to anyone in ${city.name}.`
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156",
      "bestRating": "5"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default EnhancedBusinessSchema;
