
import React from 'react';
import { City } from '@/data/cities';
import LocalBusinessSchema from './schemas/LocalBusinessSchema';
import ReviewsSchema from './schemas/ReviewsSchema';
import OfferCatalogSchema from './schemas/OfferCatalogSchema';
import ActionSchema from './schemas/ActionSchema';
import AIServiceSchema from './schemas/AIServiceSchema';
import ServiceSchema from './schemas/ServiceSchema';

interface SchemaProps {
  city: City;
}

const Schema = ({ city }: SchemaProps) => {
  return (
    <>
      <LocalBusinessSchema city={city} />
      <OfferCatalogSchema city={city} />
      <ReviewsSchema />
      <AIServiceSchema />
      <ActionSchema />
      <ServiceSchema 
        title="Vehicle Wrapping Services" 
        description="Premium vehicle wraps for businesses and individuals. Transform your vehicle and elevate your brand with expert installation and premium materials."
        path="/"
      />
    </>
  );
};

export default Schema;
