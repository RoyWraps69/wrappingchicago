
import React from 'react';

interface VehicleWrapServiceSchemaProps {
  serviceType: string;
  cityName: string;
  url: string;
}

const VehicleWrapServiceSchema: React.FC<VehicleWrapServiceSchemaProps> = ({ 
  serviceType, 
  cityName, 
  url 
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${serviceType} in ${cityName}`,
    "description": `Professional ${serviceType.toLowerCase()} services in ${cityName} and surrounding areas.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Wrapping Chicago",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4711 N. Lamon Ave",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "postalCode": "60630",
        "addressCountry": "US"
      },
      "telephone": "(312) 597-1286",
      "url": "https://www.wrappingchicago.com"
    },
    "areaServed": {
      "@type": "City",
      "name": cityName
    },
    "url": url
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default VehicleWrapServiceSchema;
