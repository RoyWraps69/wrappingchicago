
import React from 'react';

interface WebsiteSchemaProps {
  keywords?: string[];
}

const WebsiteSchema = ({ 
  keywords = [
    "vehicle wraps Chicago", "car wraps Chicago", "truck wraps Chicago", 
    "van wraps Chicago", "fleet wraps Chicago", "commercial vehicle wraps Chicago",
    "custom vehicle wraps Chicago", "vehicle graphics Chicago", "car graphics Chicago",
    "vinyl wraps Chicago", "vehicle wrap installation Chicago", "car wrap installation Chicago",
    "best vehicle wraps Chicago", "vehicle wrap companies Chicago", "3M vehicle wraps",
    "automotive graphics", "car wrap prices", "full vehicle wrap cost Chicago",
    "custom vehicle wrap design Chicago", "long lasting vehicle wraps Chicago",
    "business vehicle wraps Chicago", "partial vehicle wraps Chicago", "vinyl lettering Chicago",
    "truck lettering Chicago", "van graphics installation Chicago", "vehicle wrap design Chicago",
    "vehicle branding Chicago", "mobile advertising wraps Chicago", "commercial wrap ROI Chicago",
    "wrap advertising Chicago", "vehicle wrap color change Chicago"
  ] 
}: WebsiteSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Wrapping Chicago - Premium Vehicle Wraps & Graphics",
    "url": "https://wrappingchicago.com",
    "description": "Chicago's leading vehicle wrap company with over 16,000 wraps completed and 20 years in business. Offering professional car wraps, truck wraps, van wraps, fleet wraps, and commercial graphics with expert installation and premium 3M materials.",
    "keywords": keywords.join(", "),
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
