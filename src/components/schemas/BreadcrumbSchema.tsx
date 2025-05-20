
import React from 'react';

interface BreadcrumbItem {
  position: number;
  name: string;
  item: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  // Make sure items is an array and has at least one entry
  const validItems = Array.isArray(items) && items.length > 0 
    ? items 
    : [{ position: 1, name: 'Home', item: 'https://www.wrappingchicago.com/' }];
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": validItems.map(item => ({
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

export default BreadcrumbSchema;
