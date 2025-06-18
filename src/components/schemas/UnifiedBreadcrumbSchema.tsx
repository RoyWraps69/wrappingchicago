
import React from 'react';
import { useLocation } from 'react-router-dom';
import { generateBreadcrumbs } from '@/utils/breadcrumbUtils';
import { City } from '@/data/cities';

interface UnifiedBreadcrumbSchemaProps {
  city?: City;
}

const UnifiedBreadcrumbSchema: React.FC<UnifiedBreadcrumbSchemaProps> = ({ city }) => {
  const location = useLocation();
  const breadcrumbs = generateBreadcrumbs(location.pathname, city);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map(crumb => ({
      "@type": "ListItem",
      "position": crumb.position,
      "name": crumb.name,
      "item": crumb.item
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default UnifiedBreadcrumbSchema;
