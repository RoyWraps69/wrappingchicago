
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { City } from '@/data/cities';
import LocalBusinessSchema from './schemas/LocalBusinessSchema';
import BusinessLocationSchema from './schemas/BusinessLocationSchema';
import BreadcrumbSchema from './schemas/BreadcrumbSchema';
import WebsiteSchema from './schemas/WebsiteSchema';
import ServiceSchema from './schemas/ServiceSchema';
import VehicleWrapServiceSchema from './schemas/VehicleWrapServiceSchema';
import ReviewsSchema from './schemas/ReviewsSchema';

interface SchemaProps {
  city: City;
  path: string;
  pageTitle: string;
  pageDescription: string;
}

const Schema: React.FC<SchemaProps> = ({ city, path, pageTitle, pageDescription }) => {
  // Base URL for the website
  const baseUrl = 'https://wrappingchicago.com';
  
  // Create the URL for the current page
  const pageUrl = `${baseUrl}${path}`;
  
  // Business information
  const businessName = `Wrapping Chicago - Vehicle Wraps in ${city.name}, IL`;
  const businessDescription = `Professional vehicle wraps in ${city.name}, IL. Truck wraps, van wraps, color change wraps, commercial fleet graphics, and more.`;
  
  // Create breadcrumb list items
  const breadcrumbItems = [
    {
      position: 1,
      name: 'Home',
      item: baseUrl
    }
  ];
  
  // Add city page to breadcrumbs if not home page
  if (path !== '/') {
    breadcrumbItems.push({
      position: 2,
      name: `Vehicle Wraps ${city.name}`,
      item: pageUrl
    });
  }
  
  // Services offered
  const services = [
    {
      name: 'Car Wraps',
      description: `Professional car wrapping services in ${city.name}, IL.`,
      url: `${baseUrl}/services/car-wraps`
    },
    {
      name: 'Truck Wraps',
      description: `Custom truck wraps and graphics for businesses in ${city.name}, IL.`,
      url: `${baseUrl}/services/truck-wraps`
    },
    {
      name: 'Van Wraps',
      description: `Commercial van wraps and fleet graphics in ${city.name}, IL.`,
      url: `${baseUrl}/services/van-wraps`
    },
    {
      name: 'Fleet Wraps',
      description: `Fleet vehicle wrapping services for businesses in ${city.name}, IL.`,
      url: `${baseUrl}/services/fleet-wraps`
    },
    {
      name: 'Color Change Wraps',
      description: `Vehicle color change wraps in ${city.name}, IL.`,
      url: `${baseUrl}/services/color-change-wraps`
    }
  ];
  
  // Reviews
  const reviews = [
    {
      author: 'Chicago Business Owner',
      reviewBody: 'Excellent job on our fleet wraps. The attention to detail was impressive.',
      reviewRating: {
        ratingValue: '5'
      }
    },
    {
      author: 'John D.',
      reviewBody: 'My color change wrap looks amazing! Professional service from start to finish.',
      reviewRating: {
        ratingValue: '5'
      }
    },
    {
      author: 'Sarah M.',
      reviewBody: 'Wrapping Chicago transformed our delivery vans into eye-catching mobile billboards.',
      reviewRating: {
        ratingValue: '5'
      }
    }
  ];

  return (
    <Helmet>
      {/* LocalBusiness Schema */}
      <LocalBusinessSchema city={city} />
      
      {/* Business Location Schema */}
      <BusinessLocationSchema />
      
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      
      {/* Website Schema */}
      <WebsiteSchema
        name={businessName}
        description={businessDescription}
        url={baseUrl}
      />
      
      {/* Service Schema */}
      <ServiceSchema
        title={pageTitle}
        description={pageDescription}
        path={path}
      />
      
      {/* Vehicle Wrap Service Schema */}
      <VehicleWrapServiceSchema city={city} />
      
      {/* Reviews Schema */}
      <ReviewsSchema reviews={reviews} />
    </Helmet>
  );
};

export default Schema;
