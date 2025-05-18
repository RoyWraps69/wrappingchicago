import React from 'react';
import { City } from '@/data/types/city';
import { testSchema } from '@/utils/validateSchema';
import {
  generateLocalBusinessSchema,
  generateWebsiteSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema
} from '@/utils/schemaGenerators';
import LocalBusinessSchema from './schemas/LocalBusinessSchema';
import WebsiteSchema from './schemas/WebsiteSchema';
import FAQSchema from './schemas/FAQSchema';
import BreadcrumbSchema from './schemas/BreadcrumbSchema';
import OfferCatalogSchema from './schemas/OfferCatalogSchema';
import WebPageSchema from './schemas/WebPageSchema';
import ActionSchema from './schemas/ActionSchema';
import VehicleWrapServiceSchema from './schemas/VehicleWrapServiceSchema';
import AIVoiceSearchSchema from './schemas/AIVoiceSearchSchema';
import LocalGeoSchema from './schemas/LocalGeoSchema';
import EnhancedBusinessSchema from './schemas/EnhancedBusinessSchema';
import EventSchema from './schemas/EventSchema';
import OrganizationSchema from './schemas/OrganizationSchema';
import ServiceAreaSchema from './schemas/ServiceAreaSchema';
import GoogleBusinessProfileSchema from './schemas/GoogleBusinessProfileSchema';
import AISearchSchema from './schemas/AISearchSchema';
import LocalSearchSchema from './schemas/LocalSearchSchema';
import EnhancedFAQSchema from './schemas/EnhancedFAQSchema';
import ProductServiceSchema from './schemas/ProductServiceSchema';
import RichResultSchema from './schemas/RichResultSchema';

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
  isServicePage = false,
  serviceType = '',
  includeSpeakable = true,
  mainImage = '/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png',
  datePublished = '2022-01-01T00:00:00+00:00',
  dateModified = new Date().toISOString(),
  allCities = []
}) => {
  const domain = "https://www.wrappingchicago.com";
  const fullUrl = `${domain}${path}`;

  // Run schema validation in development
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const schemas = [
        { schema: generateLocalBusinessSchema(city), name: 'LocalBusiness' },
        { schema: generateWebsiteSchema(pageTitle, pageDescription, fullUrl, dateModified), name: 'Website' },
        { schema: generateWebPageSchema(pageTitle, pageDescription, fullUrl, dateModified, keywords, mainImage), name: 'WebPage' },
        ...(faqs.length > 0 ? [{ schema: { "@type": "FAQPage", mainEntity: faqs }, name: 'FAQ' }] : []),
        { schema: { "@type": "BreadcrumbList", itemListElement: generateBreadcrumbSchema(path) }, name: 'Breadcrumb' }
      ];

      console.group('Testing Current Page Schemas');
      schemas.forEach(({ schema, name }) => {
        testSchema(schema, name);
      });
      console.groupEnd();
    }
  }, [city, path, pageTitle, pageDescription, faqs]);

  return (
    <>
      {/* Original schemas */}
      <LocalBusinessSchema city={city} />
      
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
        items={generateBreadcrumbSchema(path)}
      />
      
      <OfferCatalogSchema city={city} />
      
      <WebPageSchema
        title={pageTitle}
        description={pageDescription}
        url={fullUrl}
        lastModified={dateModified}
        keywords={keywords}
        mainImage={mainImage}
      />
      
      {isServicePage && serviceType && (
        <VehicleWrapServiceSchema
          serviceType={serviceType}
          cityName={city.name}
          url={fullUrl}
        />
      )}
      
      {includeSpeakable && (
        <AIVoiceSearchSchema
          title={pageTitle}
          description={pageDescription}
          cityName={city.name}
        />
      )}
      
      <ActionSchema />
      
      {/* Enhanced schemas for local SEO */}
      <LocalGeoSchema city={city} />
      
      <EnhancedBusinessSchema city={city} />
      
      <EventSchema city={city.name} />
      
      <OrganizationSchema />
      
      {/* Google Business Profile Schema optimized for local SEO */}
      <GoogleBusinessProfileSchema cityName={city.name} />
      
      {allCities && allCities.length > 0 && (
        <ServiceAreaSchema cities={allCities} />
      )}
      
      {/* New schemas for AI and local search optimization */}
      <AISearchSchema 
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        cityName={city.name}
      />
      
      <LocalSearchSchema 
        cityName={city.name}
      />
      
      {faqs && faqs.length > 0 && (
        <EnhancedFAQSchema 
          faqs={faqs}
          cityName={city.name}
        />
      )}
      
      <ProductServiceSchema
        description={pageDescription}
        cityName={city.name}
      />
      
      {/* Rich results schema */}
      <RichResultSchema 
        city={city}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
      />
    </>
  );
};

export default Schema;
