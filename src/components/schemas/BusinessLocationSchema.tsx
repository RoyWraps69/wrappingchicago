
import React from 'react';

interface BusinessLocationSchemaProps {
  businessName?: string;
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  telephone?: string;
  email?: string;
  websiteUrl?: string;
  imageUrl?: string;
  priceRange?: string;
  openingHours?: {
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }[];
}

const BusinessLocationSchema: React.FC<BusinessLocationSchemaProps> = ({
  businessName = "Wrapping Chicago",
  streetAddress = "4711 N. Lamon Ave",
  addressLocality = "Chicago",
  addressRegion = "IL",
  postalCode = "60630",
  telephone = "(312) 597-1286",
  email = "roy@chicagofleetwraps.com",
  websiteUrl = "https://wrappingchicago.com",
  imageUrl = "https://wrappingchicago.com/lovable-uploads/5539b79e-ab54-428d-82a0-e4735ee97a95.png",
  priceRange = "$$",
  openingHours = [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00"
    },
    {
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "14:00"
    }
  ]
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService", // More appropriate type for vehicle wrapping
    "serviceType": "Vehicle Wrapping Service",
    "name": businessName,
    "image": imageUrl,
    "logo": "https://wrappingchicago.com/logo.png",
    "url": websiteUrl,
    "telephone": telephone,
    "email": email,
    "priceRange": priceRange,
    "description": "Premium vehicle wrapping services in Chicago and surrounding areas. Specializing in fleet wraps, commercial graphics, and color change wraps with over 16,000 wraps completed.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": streetAddress,
      "addressLocality": addressLocality,
      "addressRegion": addressRegion,
      "postalCode": postalCode,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.8781,
      "longitude": -87.6298
    },
    "openingHoursSpecification": openingHours,
    "sameAs": [
      "https://www.facebook.com/wrappingchicago",
      "https://www.instagram.com/wrappingchicago",
      "https://twitter.com/wrappingchicago",
      "https://www.linkedin.com/company/wrappingchicago",
      "https://www.google.com/search?q=Wrapping+Chicago&stick=H4sIAAAAAAAA_-NgU1I1qLCwMEhLTkkzMTEyNbQwSzK2MqhISktJSzM3N080MbA0TjFMXMQqEF6UWFCQmZeu4JyRmZyYng8AeQqmsTwAAAA"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Wrapping Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fleet Vehicle Wraps",
            "description": "Complete fleet branding solutions with premium 3M vinyl materials."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Color Change Wraps",
            "description": "Transform your vehicle with premium color change wraps available in matte, gloss, satin, and custom finishes."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Graphics",
            "description": "Eye-catching graphics for commercial vehicles to increase brand visibility and generate leads."
          }
        }
      ]
    },
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Vehicle Wrapping Services",
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 41.8781,
            "longitude": -87.6298
          },
          "geoRadius": "50000"
        }
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

export default BusinessLocationSchema;
