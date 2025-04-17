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
  // Ensure www subdomain is always used
  const domain = "https://www.wrappingchicago.com";
  const fullUrl = url.startsWith('http') 
    ? (url.includes('wrappingchicago.com') 
        ? (url.includes('www.') ? url : url.replace('https://wrappingchicago.com', domain))
        : url)
    : `${domain}${url}`;
  
  const fullImageUrl = mainImage.startsWith('http') 
    ? (mainImage.includes('wrappingchicago.com') 
        ? (mainImage.includes('www.') ? mainImage : mainImage.replace('https://wrappingchicago.com', domain))
        : mainImage)
    : `${domain}${mainImage}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${fullUrl}#webpage`,
    "url": fullUrl,
    "name": title,
    "description": description,
    "isPartOf": {
      "@id": `${domain}/#website`
    },
    "inLanguage": "en-US",
    "datePublished": "2020-01-01T00:00:00+00:00",
    "dateModified": lastModified,
    "potentialAction": [
      {
        "@type": "ReadAction",
        "target": [fullUrl]
      }
    ],
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": fullImageUrl,
      "width": "1200",
      "height": "630"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".speakable"]
    },
    ...(keywords && keywords.length > 0 && { "keywords": keywords.join(", ") }),
    "breadcrumb": {
      "@id": `${fullUrl}#breadcrumb`
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": [".page-content", "main"]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Wrapping Chicago",
      "logo": {
        "@type": "ImageObject",
        "url": `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
        "width": "180",
        "height": "60"
      }
    },
    "about": {
      "@type": "Thing",
      "name": "Vehicle Wraps Chicago",
      "description": "Professional vehicle wrapping services in Chicago, including car wraps, truck wraps, van wraps, and fleet wraps."
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default WebPageSchema;
