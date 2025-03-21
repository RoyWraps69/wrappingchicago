
import React from 'react';

const AIServiceSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "AI Wrap Designer",
      "url": "https://wrappingchicago.com/ai-wrap-ideas"
    },
    "additionalProperty": {
      "@type": "PropertyValue",
      "name": "Technology",
      "value": "AI-powered design"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default AIServiceSchema;
