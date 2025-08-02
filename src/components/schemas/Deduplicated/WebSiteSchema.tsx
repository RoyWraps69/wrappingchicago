import React from 'react';
import { useSchemaDeduplicator } from '@/components/seo/SchemaDeduplicator';

interface WebSiteSchemaProps {
  name?: string;
  url?: string;
  description?: string;
}

const WebSiteSchema: React.FC<WebSiteSchemaProps> = ({
  name = "Wrapping Chicago",
  url = "https://www.wrappingchicago.com",
  description = "Professional vehicle wrap services in Chicago and surrounding areas"
}) => {
  const { canRenderSchema, registerSchema } = useSchemaDeduplicator();
  
  if (!canRenderSchema('WebSite', 'DedupWebSiteSchema')) {
    return null;
  }
  
  registerSchema('WebSite', 'DedupWebSiteSchema');

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    "name": name,
    "url": url,
    "description": description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@id": `${url}/#organization`
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default WebSiteSchema;