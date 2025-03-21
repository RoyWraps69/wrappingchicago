
import React from 'react';
import { City } from '@/data/cities';
import LocalBusinessSchema from './schemas/LocalBusinessSchema';
import ReviewsSchema from './schemas/ReviewsSchema';
import OfferCatalogSchema from './schemas/OfferCatalogSchema';
import ActionSchema from './schemas/ActionSchema';
import AIServiceSchema from './schemas/AIServiceSchema';
import ServiceSchema from './schemas/ServiceSchema';
import WebsiteSchema from './schemas/WebsiteSchema';
import BreadcrumbSchema from './schemas/BreadcrumbSchema';
import FAQSchema from './schemas/FAQSchema';

interface SchemaProps {
  city: City;
  path?: string;
  pageTitle?: string;
  pageDescription?: string;
}

const Schema = ({ city, path = '/', pageTitle, pageDescription }: SchemaProps) => {
  return (
    <>
      <WebsiteSchema />
      <LocalBusinessSchema city={city} />
      <OfferCatalogSchema city={city} />
      <ReviewsSchema />
      <AIServiceSchema />
      <ActionSchema />
      <BreadcrumbSchema path={path} />
      <FAQSchema />
      <ServiceSchema 
        title="Vehicle Wrapping Services" 
        description={pageDescription || "Premium vehicle wraps for businesses and individuals. Transform your vehicle and elevate your brand with expert installation and premium materials."}
        path={path}
      />
    </>
  );
};

export default Schema;
