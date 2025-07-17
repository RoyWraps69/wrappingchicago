
import React from 'react';
import ServiceContentRouter from './ServiceContentRouter';
import SearchableGlossary from '@/components/glossary/SearchableGlossary';

interface ServiceContentSelectorProps {
  path: string;
}

const ServiceContentSelector: React.FC<ServiceContentSelectorProps> = ({ path }) => {
  
  
  // Normalize path by removing /services/ prefix if present and removing trailing slashes
  const normalizedPath = path.replace(/^\/services\//, '').replace(/\/$/, '');
  
  // Handle direct routes without the /services/ prefix
  const servicePath = normalizedPath || 'services';
  
  
  
  const shouldShowCompactGlossary = servicePath !== 'services';
  const glossaryMaxResults = servicePath === 'services' ? 8 : undefined;
  
  return (
    <>
      <ServiceContentRouter servicePath={servicePath} />
      <div className="container mx-auto px-4 py-8">
        <SearchableGlossary 
          compact={shouldShowCompactGlossary} 
          maxResults={glossaryMaxResults}
        />
      </div>
    </>
  );
};

export default ServiceContentSelector;
