
import React from 'react';

interface BreadcrumbSchemaProps {
  path: string;
}

const BreadcrumbSchema = ({ path }: BreadcrumbSchemaProps) => {
  // Generate breadcrumb items based on the path
  const breadcrumbItems = generateBreadcrumbItems(path);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Helper function to generate breadcrumb items
const generateBreadcrumbItems = (path: string) => {
  const items = [];
  const parts = path.split('/').filter(Boolean);
  let currentPath = '';

  // Always add home as the first item
  items.push({
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://wrappingchicago.com"
  });

  // Add remaining path parts
  parts.forEach((part, index) => {
    currentPath += `/${part}`;
    
    const name = formatBreadcrumbName(part);
    
    items.push({
      "@type": "ListItem",
      "position": index + 2, // +2 because we start at 1 and already added Home
      "name": name,
      "item": `https://wrappingchicago.com${currentPath}`
    });
  });

  return items;
};

// Format breadcrumb name from slug
const formatBreadcrumbName = (slug: string) => {
  // Handle special cases
  if (slug === 'ai-wrap-ideas') return 'AI Wrap Designer';
  
  // For city pages that might have format vehicle-wraps-city-name-il
  if (slug.startsWith('vehicle-wraps-')) {
    const cityPart = slug.replace('vehicle-wraps-', '').replace('-il', '');
    return `Vehicle Wraps in ${cityPart.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`;
  }
  
  // Regular slug formatting
  return slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export default BreadcrumbSchema;
