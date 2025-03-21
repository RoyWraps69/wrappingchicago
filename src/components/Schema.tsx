
import React from 'react';
import { City } from '@/data/cities';
import LocalBusinessSchema from './schemas/LocalBusinessSchema';
import ReviewsSchema from './schemas/ReviewsSchema';
import OfferCatalogSchema from './schemas/OfferCatalogSchema';
import ActionSchema from './schemas/ActionSchema';
import AIServiceSchema from './schemas/AIServiceSchema';

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
    </>
  );
};

export default Schema;
