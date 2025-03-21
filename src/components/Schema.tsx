
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
  keywords?: string[]; // Add keywords as an optional prop
}

const Schema: React.FC<SchemaProps> = ({ 
  city, 
  path, 
  pageTitle, 
  pageDescription, 
  faqs = [], // Add default empty array to prevent undefined errors
  keywords = [] // Default empty array for keywords
}) => {
  const currentDate = new Date().toISOString();
  
  return (
    <>
      <LocalBusinessSchema 
        city={city}
      />
      <WebsiteSchema 
        name={pageTitle}
        description={pageDescription}
        url={`https://wrappingchicago.com${path}`}
        lastModified={currentDate}
      />
      {faqs && faqs.length > 0 && (
        <FAQSchema 
          faqs={faqs}
          pageUrl={`https://wrappingchicago.com${path}`}
        />
      )}
      <BreadcrumbSchema 
        items={[
          {
            position: 1,
            name: "Home",
            item: "https://wrappingchicago.com/"
          },
          {
            position: 2,
            name: pageTitle,
            item: `https://wrappingchicago.com${path}`
          }
        ]}
      />
      <OfferCatalogSchema 
        city={city} 
      />
    </>
  );
};

export default Schema;
