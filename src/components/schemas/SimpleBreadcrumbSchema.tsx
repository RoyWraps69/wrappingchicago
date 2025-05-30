
import React from 'react';

interface BreadcrumbItem {
  position: number;
  name: string;
  item: string;
}

interface SimpleBreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

const SimpleBreadcrumbSchema: React.FC<SimpleBreadcrumbSchemaProps> = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map(item => ({
      "@type": "ListItem",
      "position": item.position,
      "name": item.name,
      "item": item.item
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SimpleBreadcrumbSchema;
