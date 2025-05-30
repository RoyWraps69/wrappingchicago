
import React from 'react';
import { City } from '@/data/types/city';
import IndexingOptimizer from './schemas/IndexingOptimizer';
import CoreBusinessSchema from './schemas/CoreBusinessSchema';
import SimpleBreadcrumbSchema from './schemas/SimpleBreadcrumbSchema';
import CleanFAQSchema from './schemas/CleanFAQSchema';
import IndexingEnhancer from './seo/IndexingEnhancer';
import { generateBreadcrumbSchema } from '@/utils/schemaGenerators';

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
  allCities?: City[];
  skipFAQSchema?: boolean;
  isAIPage?: boolean;
  productName?: string;
  minPrice?: number;
  maxPrice?: number;
  noIndex?: boolean;
  priority?: 'critical' | 'high' | 'normal' | 'low';
}

interface FAQ {
  question: string;
  answer: string;
}

const Schema: React.FC<SchemaProps> = ({
  city,
  path,
  pageTitle,
  pageDescription,
  faqs = [],
  keywords = [],
  noIndex = false,
  priority = 'normal'
}) => {
  const domain = "https://www.wrappingchicago.com";
  const fullUrl = `${domain}${path}`;
  
  // Generate clean breadcrumb items
  const breadcrumbItems = generateBreadcrumbSchema(path);

  return (
    <>
      {/* Enhanced indexing optimization - addresses most common Google indexing issues */}
      <IndexingEnhancer 
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        keywords={keywords}
        priority={priority}
      />
      
      {/* Core indexing optimization */}
      <IndexingOptimizer 
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        canonicalUrl={fullUrl}
        noIndex={noIndex}
      />
      
      {/* Essential business schema */}
      <CoreBusinessSchema 
        city={city}
        pageUrl={fullUrl}
      />
      
      {/* Clean breadcrumb schema */}
      <SimpleBreadcrumbSchema items={breadcrumbItems} />
      
      {/* FAQ schema only if we have FAQs */}
      {faqs.length > 0 && (
        <CleanFAQSchema 
          faqs={faqs}
          pageUrl={fullUrl}
        />
      )}
    </>
  );
};

export default Schema;
