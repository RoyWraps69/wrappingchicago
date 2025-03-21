
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
import VehicleWrapServiceSchema from './schemas/VehicleWrapServiceSchema';

interface SchemaProps {
  city: City;
  path?: string;
  pageTitle?: string;
  pageDescription?: string;
  keywords?: string[];
}

const Schema = ({ 
  city, 
  path = '/', 
  pageTitle, 
  pageDescription,
  keywords = [
    "vehicle wraps Chicago", "car wraps Chicago", "truck wraps Chicago", 
    "van wraps Chicago", "fleet wraps Chicago", "custom vehicle wraps", 
    "commercial vehicle wraps", "vinyl wraps Chicago"
  ]
}: SchemaProps) => {
  return (
    <>
      <WebsiteSchema keywords={keywords} />
      <LocalBusinessSchema city={city} />
      <OfferCatalogSchema city={city} />
      <ReviewsSchema />
      <AIServiceSchema />
      <ActionSchema />
      <BreadcrumbSchema path={path} />
      <FAQSchema />
      <ServiceSchema 
        title="Vehicle Wrapping Services" 
        description={pageDescription || "Premium vehicle wraps for businesses and individuals in Chicago. Transform your vehicle and elevate your brand with expert installation and premium materials. Specializing in car wraps, truck wraps, van wraps, and fleet graphics."}
        path={path}
      />
      <VehicleWrapServiceSchema city={city} />
    </>
  );
};

export default Schema;
