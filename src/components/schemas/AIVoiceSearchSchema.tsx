
import React from 'react';

const AIVoiceSearchSchema = () => {
  const domain = "https://www.wrappingchicago.com";
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["#ai-wrap-hero h1", "#ai-wrap-hero p", ".value-proposition h2", ".value-proposition p"]
    },
    "name": "AI Wrap Designer Tool | Custom Vehicle Wrap Visualizer",
    "description": "Create custom vehicle wrap designs instantly with our AI-powered design tool. Visualize your business vehicle wraps before production.",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "AI Vehicle Wrap Designer",
      "applicationCategory": "DesignApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    "potentialAction": {
      "@type": "UseAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${domain}/ai-wrap-ideas#generator-section`
      },
      "expectsAcceptanceOf": {
        "@type": "Offer",
        "description": "Generate custom AI vehicle wrap designs"
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

export default AIVoiceSearchSchema;
