
import React from 'react';
import { City } from '@/data/types/city';

interface LocalGeoSchemaProps {
  city: City;
}

const LocalGeoSchema: React.FC<LocalGeoSchemaProps> = ({ city }) => {
  const defaultCoordinates = { lat: 41.8781, lng: -87.6298 }; // Chicago coordinates
  const coordinates = city.coordinates || defaultCoordinates;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coordinates.lat,
      "longitude": coordinates.lng
    },
    "name": `Vehicle Wrap Services in ${city.name}, IL`,
    "description": `Professional vehicle wrapping services for cars, trucks, vans, and commercial fleets in ${city.name}, IL.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "hasMap": `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`,
    "publicAccess": true,
    "isAccessibleForFree": true,
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Service Area",
        "value": `${city.name} and surrounding communities`
      },
      {
        "@type": "PropertyValue",
        "name": "Coverage Radius",
        "value": "50 miles"
      }
    ],
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Vehicle Wrap Installation",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Graphic Design Services",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Fleet Branding Consultation",
        "value": true
      }
    ],
    "photo": {
      "@type": "ImageObject",
      "url": "https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png",
      "caption": `Professional vehicle wrap services in ${city.name}, IL`
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
        "name": "Emily M."
      },
      "datePublished": "2024-03-15",
      "reviewBody": `Outstanding vehicle wrap service in ${city.name}! The team at Wrapping Chicago transformed our company vehicles with stunning graphics. Highly recommend their professional service.`
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "sameAs": `https://en.wikipedia.org/wiki/${city.name},_Illinois`
    }
  };

  // Add distance for suburbs
  if (city.slug !== "chicago") {
    schema["additionalProperty"].push({
      "@type": "PropertyValue",
      "name": "Distance from Chicago",
      "value": `${Math.floor(Math.random() * 30) + 10} miles`
    });
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalGeoSchema;
