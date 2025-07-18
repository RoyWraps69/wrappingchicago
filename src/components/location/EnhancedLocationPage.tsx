
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { City } from '@/data/cities';
import UnifiedBreadcrumbs from '@/components/navigation/UnifiedBreadcrumbs';
import UnifiedBreadcrumbSchema from '@/components/schemas/UnifiedBreadcrumbSchema';
import EnhancedLocationHero from './EnhancedLocationHero';
import UniqueLocationContent from './UniqueLocationContent';
import { getLocationSpecificFAQs } from './UniqueLocationFAQs';
import PageFAQ from '@/components/common/PageFAQ';
import CallToAction from '@/components/CallToAction';
import Schema from '@/components/Schema';
import GoogleSearchConsole from '@/components/seo/GoogleSearchConsole';
import LocationFAQSchema from '@/components/schemas/LocationFAQSchema';
import LocationReviewSchema from '@/components/schemas/LocationReviewSchema';
import BusinessLocationSchema from '@/components/schemas/BusinessLocationSchema';
import PerfectLocationSEO from './PerfectLocationSEO';
import SearchableGlossary from '@/components/glossary/SearchableGlossary';

interface EnhancedLocationPageProps {
  city: City;
}

const EnhancedLocationPage = ({ city }: EnhancedLocationPageProps) => {
  const domain = "https://www.wrappingchicago.com";
  const canonicalUrl = `/vehicle-wraps-${city.slug}-il`;
  const pageTitle = `${city.name} Vehicle Wraps | Professional Car & Truck Wrapping Services ${city.name}, IL`;
  const pageDescription = `Professional vehicle wraps in ${city.name}, IL with over 16,000 vehicles wrapped. Expert car wraps, truck wraps, van wraps and fleet graphics for ${city.name} businesses. Free quotes available.`;

  const cityKeywords = [
    `vehicle wraps ${city.name}`,
    `car wraps ${city.name}`,
    `truck wraps ${city.name}`,
    `van wraps ${city.name}`,
    `fleet wraps ${city.name}`,
    `commercial vehicle wraps ${city.name}, IL`,
    `vehicle graphics ${city.name}`,
    `fleet branding ${city.name}`,
    `mobile advertising ${city.name}`,
    `wrap installation ${city.name}`
  ];

  const cityFAQs = getLocationSpecificFAQs(city.name, city.county, city.distance);

  return (
    <>
      {/* Perfect SEO Optimization */}
      <PerfectLocationSEO city={city} serviceType="Vehicle Wraps" />
      
      <GoogleSearchConsole verificationCode="gQnkHgsJ2bOPDWFClspUxA6EZsE-XWnLasqxsqSESvg" />
      
      {/* Enhanced Schema Integration */}
      <UnifiedBreadcrumbSchema city={city} />
      <LocationFAQSchema city={city} faqs={cityFAQs} />
      <LocationReviewSchema city={city} />
      <BusinessLocationSchema city={city} />
      
      <Schema 
        city={city}
        path={canonicalUrl}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        faqs={cityFAQs}
        keywords={cityKeywords}
        isServicePage={true}
        serviceType="VehicleWrapService"
        includeSpeakable={true}
        mainImage="/lovable-uploads/199c2a21-e0b0-4c29-972f-f32d72698382.png"
        skipFAQSchema={true}
      />
      
      <div className="flex flex-col min-h-screen">
        
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-4">
            <UnifiedBreadcrumbs city={city} />
          </div>
          
          <EnhancedLocationHero city={city} />
          <UniqueLocationContent city={city} />
          
          {/* Add Glossary Component */}
          <section className="py-8 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <SearchableGlossary compact={true} />
              </div>
            </div>
          </section>
          
          <PageFAQ
            faqs={cityFAQs}
            cityName={city.name}
            serviceName="Vehicle Wraps"
          />
          
          <CallToAction city={city.name} />
        </main>
        
        </div>
    </>
  );
};

export default EnhancedLocationPage;
