
import React from 'react';
import { City } from '@/data/types/city';
import FAQSchema from './FAQSchema';
import AISchema from './AISchema';
import LocalBusinessSchema from './LocalBusinessSchema';
import ProductOfferSchema from './ProductOfferSchema';
import BreadcrumbSchema from './BreadcrumbSchema';
import ArticleSchema from './ArticleSchema';

interface FAQ {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  position: number;
  name: string;
  item: string;
}

interface UniversalSchemaProps {
  city: City;
  pageTitle: string;
  pageDescription: string;
  pageUrl: string;
  breadcrumbItems: BreadcrumbItem[];
  faqs?: FAQ[];
  productName?: string;
  serviceType?: string;
  isAIPage?: boolean;
  minPrice?: number;
  maxPrice?: number;
  datePublished?: string;
  dateModified?: string;
}

const UniversalSchema: React.FC<UniversalSchemaProps> = ({
  city,
  pageTitle,
  pageDescription,
  pageUrl,
  breadcrumbItems,
  faqs = [],
  productName = 'Vehicle Wraps',
  serviceType = 'Vehicle Wraps',
  isAIPage = false,
  minPrice = 1500,
  maxPrice = 5000,
  datePublished,
  dateModified
}) => {
  return (
    <>
      {/* FAQ Schema - only if FAQs are provided */}
      {faqs.length > 0 && (
        <FAQSchema 
          faqs={faqs}
          pageUrl={pageUrl}
        />
      )}

      {/* AI Schema - only for AI-related pages */}
      {isAIPage && (
        <AISchema 
          pageTitle={pageTitle}
          pageDescription={pageDescription}
          cityName={city.name}
          serviceType={serviceType}
        />
      )}

      {/* Local Business Schema - for all pages */}
      <LocalBusinessSchema city={city} />

      {/* Product & Offer Schema - for service pages */}
      <ProductOfferSchema 
        productName={productName}
        description={pageDescription}
        cityName={city.name}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />

      {/* Breadcrumb Schema - for all pages */}
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Article Schema - for content pages */}
      <ArticleSchema 
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        cityName={city.name}
        datePublished={datePublished}
        dateModified={dateModified}
      />
    </>
  );
};

export default UniversalSchema;
