
import React from 'react';

interface AISearchSchemaProps {
  pageTitle: string;
  pageDescription: string;
  cityName?: string;
}

const AISearchSchema: React.FC<AISearchSchemaProps> = ({ 
  pageTitle, 
  pageDescription,
  cityName = "Chicago"
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.wrappingchicago.com/#webpage",
    "url": "https://www.wrappingchicago.com/",
    "name": pageTitle,
    "description": pageDescription,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "h1", 
        "h2.speakable", 
        ".speakable", 
        "[data-speakable='true']", 
        ".summary", 
        ".page-description"
      ]
    },
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How much do vehicle wraps cost in ${cityName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Vehicle wrap costs in ${cityName} typically range from $2,500 to $5,000 for full car wraps depending on vehicle size and design complexity. Partial wraps start around $1,500. All our wraps use premium 3M and Avery materials with professional installation and a 2-year warranty.`
        }
      },
      {
        "@type": "Question",
        "name": `What services do you offer for vehicle wrapping in ${cityName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `We offer comprehensive vehicle wrapping services in ${cityName} including car wraps, truck wraps, van wraps, fleet wraps, color change wraps, commercial graphics, partial wraps, vehicle lettering, protective films, specialty wraps, retail graphics, designer wraps, and luxury exotic wraps. Our services include design, production, and professional installation with 20 years of experience.`
        }
      }
    ],
    "significantLink": [
      "https://www.wrappingchicago.com/services",
      "https://www.wrappingchicago.com/gallery",
      "https://www.wrappingchicago.com/contact",
      "https://www.wrappingchicago.com/about"
    ],
    "specialty": [
      "Vehicle Wraps",
      "Car Wraps",
      "Truck Wraps",
      "Fleet Wrapping Services",
      "Commercial Graphics"
    ],
    "keywords": [
      `vehicle wraps ${cityName}`,
      `car wraps ${cityName}`,
      `truck wraps ${cityName}`,
      `fleet wraps ${cityName}`,
      `commercial vehicle graphics ${cityName}`,
      `van wraps ${cityName}`,
      `business vehicle branding`,
      `3M authorized vehicle wrap installer ${cityName}`,
      `color change wraps ${cityName}`,
      `partial vehicle wraps ${cityName}`
    ],
    "about": {
      "@type": "Thing",
      "name": `Vehicle Wraps in ${cityName}, IL`,
      "description": `Professional vehicle wrapping services in ${cityName}, including car wraps, truck wraps, van wraps, and commercial graphics using premium 3M materials with expert installation.`,
      "sameAs": [
        "https://en.wikipedia.org/wiki/Vehicle_wrap",
        "https://en.wikipedia.org/wiki/Vinyl_wrap"
      ]
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": ["main", "article", ".main-content", "#main-content"]
    },
    "lastReviewed": new Date().toISOString().split('T')[0],
    "audience": {
      "@type": "Audience",
      "audienceType": "Business Owners",
      "geographicArea": {
        "@type": "City",
        "name": cityName
      }
    },
    "discusses": {
      "@type": "CreativeWork",
      "headline": `Professional Vehicle Wraps in ${cityName}`,
      "description": `Learn about professional vehicle wrap services in ${cityName}, including design, materials, installation process, and pricing. Transform your business vehicles into mobile billboards with high-quality vinyl wraps.`,
      "keywords": [
        `vehicle wraps ${cityName}`,
        `car wraps ${cityName}`,
        `commercial vehicle graphics`,
        `business vehicle branding`,
        `3M vinyl wraps`,
        `mobile advertising`
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default AISearchSchema;
