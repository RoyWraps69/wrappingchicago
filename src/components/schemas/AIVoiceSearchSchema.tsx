
import React from 'react';

interface AIVoiceSearchSchemaProps {
  title: string;
  description: string;
  cityName?: string;
}

const AIVoiceSearchSchema: React.FC<AIVoiceSearchSchemaProps> = ({ 
  title, 
  description, 
  cityName = "Chicago" 
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2.speakable", ".speakable", "[data-speakable='true']"]
    },
    "name": title,
    "description": description,
    "specialty": `Vehicle wraps and graphics in ${cityName}, IL`,
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": ["main", ".page-content", "article"]
    },
    "significantLink": [
      "https://www.wrappingchicago.com/contact",
      "https://www.wrappingchicago.com/gallery",
      "https://www.wrappingchicago.com/services"
    ],
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2.speakable", ".speakable"]
    },
    "mainEntity": {
      "@type": "Service",
      "name": `Vehicle Wraps in ${cityName}`,
      "description": description
    },
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Business Owners"
    },
    "contentRating": "G",
    "accessMode": ["textual", "visual"],
    "accessModeSufficient": ["textual,visual"],
    "accessibilityHazard": ["noFlashingHazard", "noMotionSimulationHazard", "noSoundHazard"],
    "accessibilityControl": ["fullKeyboardControl", "fullMouseControl", "fullTouchControl"],
    "accessibilityAPI": ["ARIA"]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default AIVoiceSearchSchema;
