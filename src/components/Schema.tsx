
import React from 'react';
import { City } from '../data/types/city';
import LocalBusinessSchema from './schemas/LocalBusinessSchema';
import WebsiteSchema from './schemas/WebsiteSchema';
import FAQSchema from './schemas/FAQSchema';
import BreadcrumbSchema from './schemas/BreadcrumbSchema';
import OfferCatalogSchema from './schemas/OfferCatalogSchema';
import WebPageSchema from './schemas/WebPageSchema';
import ActionSchema from './schemas/ActionSchema';
import VehicleWrapServiceSchema from './schemas/VehicleWrapServiceSchema';
import AIVoiceSearchSchema from './schemas/AIVoiceSearchSchema';

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
  keywords?: string[];
  isServicePage?: boolean;
  serviceType?: string;
  includeSpeakable?: boolean;
  mainImage?: string;
  datePublished?: string;
  dateModified?: string;
}

const Schema: React.FC<SchemaProps> = ({ 
  city, 
  path, 
  pageTitle, 
  pageDescription, 
  faqs = [], 
  keywords = [],
  isServicePage = false,
  serviceType = '',
  includeSpeakable = true,
  mainImage = '/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png',
  datePublished = '2022-01-01T00:00:00+00:00',
  dateModified = new Date().toISOString()
}) => {
  const domain = "https://www.wrappingchicago.com";
  const fullUrl = `${domain}${path}`;
  
  // Extract breadcrumb items from path
  const pathSegments = path.split('/').filter(Boolean);
  const breadcrumbItems = [
    {
      position: 1,
      name: "Home",
      item: domain
    }
  ];
  
  // Build breadcrumb path
  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    breadcrumbItems.push({
      position: index + 2,
      name: segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .replace('Il', 'IL'),
      item: `${domain}${currentPath}`
    });
  });
  
  return (
    <>
      <LocalBusinessSchema 
        city={city}
      />
      
      <WebsiteSchema 
        name={pageTitle}
        description={pageDescription}
        url={fullUrl}
        lastModified={dateModified}
        keywords={keywords}
      />
      
      {faqs && faqs.length > 0 && (
        <FAQSchema 
          faqs={faqs}
          pageUrl={fullUrl}
        />
      )}
      
      <BreadcrumbSchema 
        items={breadcrumbItems}
      />
      
      <OfferCatalogSchema 
        city={city} 
      />
      
      <WebPageSchema
        title={pageTitle}
        description={pageDescription}
        url={fullUrl}
        lastModified={dateModified}
        keywords={keywords}
        mainImage={mainImage}
      />
      
      {/* Add service schema if it's a service page */}
      {isServicePage && serviceType && (
        <VehicleWrapServiceSchema
          serviceType={serviceType}
          city={city.name}
          url={fullUrl}
        />
      )}
      
      {/* Add AI voice search schema for better voice assistant results */}
      {includeSpeakable && (
        <AIVoiceSearchSchema
          title={pageTitle}
          description={pageDescription}
          cityName={city.name}
        />
      )}
      
      <ActionSchema />
    </>
  );
};

export default Schema;
