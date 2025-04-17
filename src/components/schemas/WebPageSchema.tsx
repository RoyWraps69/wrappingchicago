
import React from 'react';

interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  lastModified?: string;
  keywords?: string[];
  mainImage?: string;
}

const WebPageSchema: React.FC<WebPageSchemaProps> = ({
  title,
  description,
  url,
  lastModified = new Date().toISOString(),
  keywords = [],
  mainImage = "https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png"
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    "url": url,
    "name": title,
    "description": description,
    "isPartOf": {
      "@id": "https://www.wrappingchicago.com/#website"
    },
    "inLanguage": "en-US",
    "datePublished": "2020-01-01T00:00:00+00:00",
    "dateModified": lastModified,
    "potentialAction": [
      {
        "@type": "ReadAction",
        "target": [url]
      }
    ],
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": mainImage,
      "width": "1200",
      "height": "630"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".speakable"]
    },
    ...(keywords && keywords.length > 0 && { "keywords": keywords.join(", ") })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default WebPageSchema;
