
import React from 'react';

interface WebsiteSchemaProps {
  keywords?: string[];
}

const WebsiteSchema = ({ 
  keywords = [
    // Core Vehicle Wrap Keywords
    "vehicle wraps Chicago", "car wraps Chicago", "truck wraps Chicago", 
    "van wraps Chicago", "fleet wraps Chicago", "commercial vehicle wraps Chicago",
    "custom vehicle wraps Chicago", "vehicle graphics Chicago", "car graphics Chicago",
    "vinyl wraps Chicago", "automotive graphics Chicago", "vehicle wrap installation Chicago",
    
    // Business-Focused Keywords
    "business vehicle wraps Chicago", "fleet graphics Chicago", "car wrap advertising Chicago",
    "commercial fleet wraps Chicago", "mobile advertising wraps Chicago", "commercial wrap ROI Chicago",
    
    // Service-Specific Keywords
    "vehicle wrap design Chicago", "vehicle branding Chicago", "wrap advertising Chicago",
    "vehicle wrap companies Chicago", "best vehicle wraps Chicago", "long lasting vehicle wraps Chicago",
    "3M vehicle wraps Chicago", "wrap installation near me", "vehicle wrap near me Chicago",
    
    // Product Type Keywords
    "full vehicle wrap cost Chicago", "partial vehicle wraps Chicago", "vinyl lettering Chicago",
    "truck lettering Chicago", "van graphics installation Chicago", "window graphics Chicago",
    "color change wraps Chicago", "matte vehicle wraps Chicago", "gloss vehicle wraps Chicago",
    
    // Specialty Keywords
    "food truck wraps Chicago", "custom car wrap design Chicago", "reflective vehicle wraps Chicago",
    "vehicle wrap color change Chicago", "perforated window film Chicago", "wrap removal services Chicago",
    
    // Long-Tail Keywords
    "how much do car wraps cost in Chicago", "best place for vehicle wraps in Chicago",
    "affordable vehicle wraps Chicago", "high-quality car wraps Chicago",
    "vehicle wrap design and installation Chicago", "car wrap installation services Chicago"
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
        "url": "https://wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png",
        "width": 600,
        "height": 600
      }
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "yearsInBusiness",
        "value": "20"
      },
      {
        "@type": "PropertyValue",
        "name": "projectsCompleted",
        "value": "16000+"
      },
      {
        "@type": "PropertyValue",
        "name": "serviceArea",
        "value": "Chicago and surrounding suburbs"
      },
      {
        "@type": "PropertyValue",
        "name": "specializations",
        "value": "Vehicle Wraps, Car Wraps, Truck Wraps, Van Wraps, Fleet Wraps, Commercial Graphics"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default WebsiteSchema;
