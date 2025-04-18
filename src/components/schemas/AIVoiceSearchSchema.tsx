
import React from 'react';

interface AIVoiceSearchSchemaProps {
  title: string;
  description: string;
  cityName?: string;
}

const AIVoiceSearchSchema: React.FC<AIVoiceSearchSchemaProps> = ({ 
  title, 
  description, 
  cityName 
}) => {
  const speakableText = cityName ? 
    `${title}. Vehicle wraps and graphics in ${cityName}. ${description}` : 
    `${title}. ${description}`;
    
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".speakable"]
    },
    "name": title,
    "description": description
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default AIVoiceSearchSchema;
