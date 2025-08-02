import React from 'react';
import { useSchemaDeduplicator } from '@/components/seo/SchemaDeduplicator';

interface LocalBusinessSchemaProps {
  businessName?: string;
  description?: string;
  url?: string;
  telephone?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  priceRange?: string;
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  businessName = "Wrapping Chicago",
  description = "Professional vehicle wrap services in Chicago",
  url = "https://www.wrappingchicago.com",
  telephone = "+1-773-999-WRAP",
  address = {
    streetAddress: "123 Wrap Street", 
    addressLocality: "Chicago",
    addressRegion: "IL",
    postalCode: "60601",
    addressCountry: "US"
  },
  geo = {
    latitude: 41.8781,
    longitude: -87.6298
  },
  openingHours = [
    "Mo-Fr 08:00-18:00",
    "Sa 09:00-16:00"
  ],
  priceRange = "$$"
}) => {
  const { canRenderSchema, registerSchema } = useSchemaDeduplicator();
  
  if (!canRenderSchema('LocalBusiness', 'DedupLocalBusinessSchema')) {
    return null;
  }
  
  registerSchema('LocalBusiness', 'DedupLocalBusinessSchema');

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#localbusiness`,
    "name": businessName,
    "description": description,
    "url": url,
    "telephone": telephone,
    "priceRange": priceRange,
    "address": {
      "@type": "PostalAddress",
      ...address
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": geo.latitude,
      "longitude": geo.longitude
    },
    "openingHoursSpecification": openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.split(' ')[0],
      "opens": hours.split(' ')[1]?.split('-')[0],
      "closes": hours.split(' ')[1]?.split('-')[1]
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "247",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;