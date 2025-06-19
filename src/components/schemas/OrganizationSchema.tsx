
import React from 'react';

const OrganizationSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.wrappingchicago.com/#organization",
    "name": "Wrapping Chicago",
    "url": "https://www.wrappingchicago.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png",
      "width": "180",
      "height": "60"
    },
    "description": "Chicago's leading vehicle wrap company providing premium car wraps, truck wraps, van wraps and commercial fleet graphics throughout Chicago and surrounding suburbs.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4711 N. Lamon Ave",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60630",
      "addressCountry": "US"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+13125971286",
        "contactType": "customer service",
        "areaServed": "Chicago Metropolitan Area",
        "availableLanguage": ["English", "Spanish"],
        "email": "roy@chicagofleetwraps.com"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+13125971286",
        "contactType": "sales",
        "areaServed": "Chicago Metropolitan Area",
        "availableLanguage": ["English", "Spanish"],
        "email": "roy@chicagofleetwraps.com"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/wrappingchicago",
      "https://www.instagram.com/wrappingchicago",
      "https://twitter.com/wrappingchicago",
      "https://www.linkedin.com/company/wrappingchicago"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default OrganizationSchema;
