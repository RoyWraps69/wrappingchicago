
import React from 'react';

interface WebsiteSchemaProps {
  name: string;
  description: string;
  url: string;
  lastModified?: string;
  keywords?: string[]; // Add keywords property to the interface
}

const WebsiteSchema: React.FC<WebsiteSchemaProps> = ({ 
  name, 
  description, 
  url,
  lastModified = new Date().toISOString().split('T')[0],
  keywords = [] // Add default value for keywords
}) => {
  const baseDomain = "https://www.wrappingchicago.com";
  
  // Ensure URL uses www subdomain
  const fullUrl = url.startsWith('http') 
    ? (url.includes('wrappingchicago.com') 
        ? (url.includes('www.') ? url : url.replace('https://wrappingchicago.com', baseDomain))
        : url)
    : `${baseDomain}${url}`;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${fullUrl}/#website`,
    "url": fullUrl,
    "name": name,
    "description": description,
    "publisher": {
      "@type": "Organization",
      "name": "Wrapping Chicago",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseDomain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
        "width": "180",
        "height": "60"
      },
      "sameAs": [
        "https://www.facebook.com/wrappingchicago",
        "https://www.instagram.com/wrappingchicago",
        "https://twitter.com/wrappingchicago",
        "https://www.linkedin.com/company/wrappingchicago"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+13125971286",
        "contactType": "customer service",
        "areaServed": "Chicago",
        "availableLanguage": "English"
      }
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${baseDomain}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      },
      {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${baseDomain}/contact`
        },
        "result": {
          "@type": "Reservation",
          "name": "Vehicle Wrap Consultation"
        }
      }
    ],
    "copyrightYear": new Date().getFullYear(),
    "inLanguage": "en-US",
    "dateModified": lastModified,
    // Add keywords to the schema if they exist
    ...(keywords && keywords.length > 0 && { "keywords": keywords.join(", ") })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default WebsiteSchema;
