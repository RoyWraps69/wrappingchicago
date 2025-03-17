
import React from 'react';

interface ServiceSchemaProps {
  title: string;
  description: string;
  path: string;
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({ title, description, path }) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Chicago Fleet Wraps",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4711 N. Lamon Ave",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "postalCode": "60630",
        "addressCountry": "US"
      },
      "telephone": "(312) 597-1286",
      "priceRange": "$$"
    },
    "description": description,
    "serviceType": title,
    "areaServed": {
      "@type": "City",
      "name": "Chicago"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "url": `https://chicagofleetwraps.com${path}`,
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD"
      }
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(serviceSchema)}
    </script>
  );
};

export default ServiceSchema;
