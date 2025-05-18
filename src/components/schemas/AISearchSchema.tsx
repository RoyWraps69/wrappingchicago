
import React from 'react';

interface AISearchSchemaProps {
  pageTitle: string;
  pageDescription: string;
  cityName?: string;
}

const AISearchSchema: React.FC<AISearchSchemaProps> = ({ 
  pageTitle, 
  pageDescription, 
  cityName 
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2.speakable", ".ai-content", ".voice-searchable"]
    },
    "name": pageTitle,
    "description": cityName ? `${pageDescription} in ${cityName}, IL` : pageDescription,
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": ["main", "article", ".main-content"]
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.wrappingchicago.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "specialty": cityName ? 
      ["Vehicle Wraps", "Car Wraps", "Fleet Wraps", `${cityName} Vehicle Wrapping`] : 
      ["Vehicle Wraps", "Car Wraps", "Fleet Wraps", "Commercial Graphics"]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default AISearchSchema;
