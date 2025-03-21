
import React from 'react';
import { City } from '../data/types/city';
import LocalBusinessSchema from './schemas/LocalBusinessSchema';
import WebsiteSchema from './schemas/WebsiteSchema';
import FAQSchema from './schemas/FAQSchema';
import BreadcrumbSchema from './schemas/BreadcrumbSchema';
import OfferCatalogSchema from './schemas/OfferCatalogSchema';

interface FAQ {
  question: string;
  answer: string;
}

interface SchemaProps {
  city: City;
  path: string;
  pageTitle: string;
  pageDescription: string;
  faqs?: FAQ[];
}

const Schema: React.FC<SchemaProps> = ({ 
  city, 
  path, 
  pageTitle, 
  pageDescription, 
  faqs = [] // Add default empty array to prevent undefined errors
}) => {
  const currentDate = new Date().toISOString();
  
  return (
    <>
      <LocalBusinessSchema 
        city={city}
        currentUrl={`https://wrappingchicago.com${path}`}
        dateModified={currentDate}
      />
      <WebsiteSchema 
        pageUrl={`https://wrappingchicago.com${path}`}
        dateModified={currentDate}
      />
      {faqs && faqs.length > 0 && (
        <FAQSchema 
          faqs={faqs}
          pageUrl={`https://wrappingchicago.com${path}`}
        />
      )}
      <BreadcrumbSchema 
        city={city}
        path={path}
        pageTitle={pageTitle}
      />
      <OfferCatalogSchema 
        city={city} 
      />
    </>
  );
};

export default Schema;
