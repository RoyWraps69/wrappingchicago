
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
import BusinessLocationSchema from './schemas/BusinessLocationSchema';

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
    // Core Vehicle Wrap Keywords
    "vehicle wraps Chicago", "car wraps Chicago", "truck wraps Chicago", 
    "van wraps Chicago", "fleet wraps Chicago", "commercial vehicle wraps Chicago",
    "custom vehicle wraps Chicago", "vehicle graphics Chicago", "car graphics Chicago",
    "vinyl wraps Chicago", "automotive graphics Chicago", "vehicle wrap installation Chicago",
    
    // Business-Focused Keywords
    "business vehicle wraps Chicago", "fleet graphics Chicago", "car wrap advertising Chicago",
    "commercial fleet wraps Chicago", "mobile advertising wraps Chicago", "commercial wrap ROI Chicago",
    
    // Service-Specific Keywords
    "vehicle wrap design Chicago", "vehicle branding Chicago", "wrap advertising Chicago",
    "vehicle wrap companies Chicago", "best vehicle wraps Chicago", "long lasting vehicle wraps Chicago",
    "3M vehicle wraps Chicago", "wrap installation near me", "vehicle wrap near me Chicago",
    
    // Product Type Keywords
    "full vehicle wrap cost Chicago", "partial vehicle wraps Chicago", "vinyl lettering Chicago",
    "truck lettering Chicago", "van graphics installation Chicago", "window graphics Chicago",
    "color change wraps Chicago", "matte vehicle wraps Chicago", "gloss vehicle wraps Chicago",
    
    // Specialty Keywords
    "food truck wraps Chicago", "custom car wrap design Chicago", "reflective vehicle wraps Chicago",
    "vehicle wrap color change Chicago", "perforated window film Chicago", "wrap removal services Chicago",
    
    // Long-Tail Keywords
    "how much do car wraps cost in Chicago", "best place for vehicle wraps in Chicago",
    "affordable vehicle wraps Chicago", "high-quality car wraps Chicago",
    "vehicle wrap design and installation Chicago", "car wrap installation services Chicago"
  ]
}: SchemaProps) => {
  // Add city-specific keywords if we're on a city page
  const cityKeywords = city.name !== 'Chicago' ? [
    `vehicle wraps ${city.name}`, 
    `car wraps ${city.name}`, 
    `truck wraps ${city.name}`,
    `van wraps ${city.name}`, 
    `fleet wraps ${city.name}`, 
    `commercial vehicle wraps ${city.name}`,
    `custom vehicle wraps ${city.name}`, 
    `vehicle graphics ${city.name}`, 
    `car graphics ${city.name}`,
    `vinyl wraps ${city.name}`, 
    `automotive graphics ${city.name}`, 
    `vehicle wrap installation ${city.name}`,
    `business vehicle wraps ${city.name}`, 
    `fleet graphics ${city.name}`, 
    `car wrap advertising ${city.name}`,
    `commercial fleet wraps ${city.name}`, 
    `mobile advertising wraps ${city.name}`,
    `vehicle wrap companies ${city.name}`,
    `partial vehicle wraps ${city.name}`,
    `color change wraps ${city.name}`
  ] : [];
  
  // Combine core keywords with city-specific keywords if applicable
  const allKeywords = [...keywords, ...cityKeywords];

  return (
    <>
      <WebsiteSchema keywords={allKeywords} />
      <LocalBusinessSchema city={city} />
      <BusinessLocationSchema />
      <OfferCatalogSchema city={city} />
      <ReviewsSchema />
      <AIServiceSchema />
      <ActionSchema />
      <BreadcrumbSchema path={path} />
      <FAQSchema />
      <ServiceSchema 
        title="Vehicle Wrapping Services" 
        description={pageDescription || `Premium vehicle wraps for businesses and individuals in ${city.name}, Illinois with over 16,000 wraps completed in our 20 years of business. Transform your vehicle and elevate your brand with expert installation and premium 3M materials. Specializing in car wraps, truck wraps, van wraps, and fleet graphics throughout Chicago and suburbs.`}
        path={path}
      />
      <VehicleWrapServiceSchema city={city} />
    </>
  );
};

export default Schema;
