
import React from 'react';
import { City } from '@/data/types/city';

interface BusinessLocationSchemaProps {
  city: City;
}

const BusinessLocationSchema: React.FC<BusinessLocationSchemaProps> = ({ city }) => {
  // Default coordinates for Chicago
  const defaultCoordinates = { lat: 41.8781, lng: -87.6298 };
  
  // Use city coordinates if available, otherwise default to Chicago
  const coordinates = city.coordinates || defaultCoordinates;
  
  // Create aggregate rating instead of single review
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.wrappingchicago.com/${city.slug}#business`,
    "name": `Wrapping Chicago - ${city.name} Vehicle Wraps`,
    "description": `Professional vehicle wrapping services in ${city.name}, IL. Specializing in car wraps, truck wraps, van wraps, and commercial fleet wraps with over 16,000 completed projects and 20 years of experience.`,
    "url": `https://www.wrappingchicago.com/vehicle-wraps-${city.slug}-il`,
    "telephone": "+13125971286",
    "priceRange": "$$$",
    "image": [
      "https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png"
    ],
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png",
      "width": "180",
      "height": "60"
    },
    "sameAs": [
      "https://www.facebook.com/wrappingchicago",
      "https://www.instagram.com/wrappingchicago",
      "https://twitter.com/wrappingchicago",
      "https://www.linkedin.com/company/wrappingchicago",
      "https://www.yelp.com/biz/wrapping-chicago"
    ],
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
      "latitude": coordinates.lat,
      "longitude": coordinates.lng
    },
    "areaServed": [
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
        "latitude": coordinates.lat,
        "longitude": coordinates.lng
      },
      "geoRadius": "25"
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
    "potentialAction": [
      {
        "@type": "OrderAction",
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
        "@type": "ViewAction",
        "target": `https://www.google.com/maps/search/vehicle+wraps+${city.name}+IL/@${coordinates.lat},${coordinates.lng},12z`,
        "name": "Get Directions"
      }
    ],
    "hasMap": `https://www.google.com/maps/search/vehicle+wraps+${city.name}+IL/@${coordinates.lat},${coordinates.lng},12z`,
    "publicAccess": true,
    "servesCuisine": ["Vehicle Wraps", "Fleet Graphics", "Commercial Vehicle Branding"],
    "keywords": [
      `vehicle wraps ${city.name}`, 
      `car wraps ${city.name}`, 
      `truck wraps ${city.name}`, 
      `van wraps ${city.name}`, 
      `fleet wraps ${city.name}`, 
      `commercial vehicle wraps ${city.name}`, 
      `business vehicle branding ${city.name}`
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": `Car Wraps in ${city.name}`,
          "description": `Professional car wrapping services in ${city.name} with premium 3M materials and expert installation.`
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": `Truck Wraps in ${city.name}`,
          "description": `Custom truck wraps in ${city.name} for box trucks, pickup trucks, and delivery trucks.`
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": `Fleet Wraps in ${city.name}`,
          "description": `Professional fleet vehicle wraps in ${city.name} for businesses of all sizes.`
        }
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

export default BusinessLocationSchema;
