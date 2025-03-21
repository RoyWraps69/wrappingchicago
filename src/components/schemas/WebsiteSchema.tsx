
import React from 'react';

const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Wrapping Chicago",
    "url": "https://wrappingchicago.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://wrappingchicago.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://www.facebook.com/wrappingchicago",
      "https://www.instagram.com/wrappingchicago",
      "https://twitter.com/wrappingchicago",
      "https://www.linkedin.com/company/wrappingchicago"
    ],
    "publisher": {
      "@type": "Organization",
      "name": "Wrapping Chicago",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wrappingchicago.com/logo.png",
        "width": 600,
        "height": 60
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

export default WebsiteSchema;
