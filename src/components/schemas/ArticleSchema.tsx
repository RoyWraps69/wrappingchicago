
import React from 'react';

interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  cityName?: string;
}

const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  headline,
  description,
  url,
  imageUrl = '/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png',
  datePublished = '2022-01-01T00:00:00+00:00',
  dateModified = new Date().toISOString(),
  authorName = 'Wrapping Chicago',
  cityName = 'Chicago'
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": imageUrl,
    "author": {
      "@type": "Organization",
      "name": authorName,
      "url": "https://www.wrappingchicago.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Wrapping Chicago",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
    "url": url,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "about": {
      "@type": "Thing",
      "name": `Vehicle Wraps in ${cityName}`,
      "description": `Professional vehicle wrapping services in ${cityName}, IL`
    },
    "mentions": [
      {
        "@type": "Service",
        "name": "Car Wraps",
        "description": `Car wrapping services in ${cityName}`
      },
      {
        "@type": "Service",
        "name": "Truck Wraps",
        "description": `Truck wrapping services in ${cityName}`
      },
      {
        "@type": "Service",
        "name": "Fleet Wraps",
        "description": `Fleet wrapping services in ${cityName}`
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

export default ArticleSchema;
