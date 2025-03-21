
import React from 'react';

const ActionSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://wrappingchicago.com/contact",
      "inLanguage": "en-US",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    },
    "result": {
      "@type": "Reservation",
      "name": "Request a Quote"
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Wrapping Chicago",
      "url": "https://wrappingchicago.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ActionSchema;
