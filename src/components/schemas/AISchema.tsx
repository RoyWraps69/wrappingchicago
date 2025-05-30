
import React from 'react';

interface AISchemaProps {
  pageTitle: string;
  pageDescription: string;
  cityName?: string;
  serviceType?: string;
}

const AISchema: React.FC<AISchemaProps> = ({
  pageTitle,
  pageDescription,
  cityName = 'Chicago',
  serviceType = 'Vehicle Wraps'
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": `AI ${serviceType} Designer`,
    "description": `AI-powered ${serviceType.toLowerCase()} design tool for ${cityName}, IL. Generate custom vehicle wrap concepts using artificial intelligence.`,
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "provider": {
      "@type": "Organization",
      "name": "Wrapping Chicago",
      "url": "https://www.wrappingchicago.com"
    },
    "featureList": [
      "AI-powered vehicle wrap design generation",
      "Custom color combinations",
      "Pattern and texture suggestions",
      "Brand integration capabilities",
      "Multiple vehicle type support"
    ],
    "potentialAction": {
      "@type": "UseAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.wrappingchicago.com/ai-wrap-ideas",
        "inLanguage": "en-US"
      }
    },
    "isAccessibleForFree": true,
    "mainEntity": {
      "@type": "CreativeWork",
      "name": pageTitle,
      "description": pageDescription,
      "creator": {
        "@type": "Organization",
        "name": "Wrapping Chicago"
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

export default AISchema;
