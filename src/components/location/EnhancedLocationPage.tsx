
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { City } from '@/data/cities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UnifiedBreadcrumbs from '@/components/navigation/UnifiedBreadcrumbs';
import UnifiedBreadcrumbSchema from '@/components/schemas/UnifiedBreadcrumbSchema';
import EnhancedLocationHero from './EnhancedLocationHero';
import ComprehensiveLocationContent from './ComprehensiveLocationContent';
import PageFAQ from '@/components/common/PageFAQ';
import CallToAction from '@/components/CallToAction';
import Schema from '@/components/Schema';
import GoogleSearchConsole from '@/components/seo/GoogleSearchConsole';
import LocationFAQSchema from '@/components/schemas/LocationFAQSchema';
import LocationReviewSchema from '@/components/schemas/LocationReviewSchema';
import BusinessLocationSchema from '@/components/schemas/BusinessLocationSchema';
import PerfectLocationSEO from './PerfectLocationSEO';

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

  const cityFAQs = [
    {
      question: `How much do vehicle wraps cost in ${city.name}?`,
      answer: `Vehicle wrap costs in ${city.name} typically range from $2,500 to $5,000 per vehicle for full wraps, depending on vehicle size and design complexity. Partial wraps start around $1,500, while commercial truck wraps range from $3,500-$6,500. We offer volume discounts for fleet projects and provide free detailed quotes for all ${city.name} businesses.`
    },
    {
      question: `Where can I get my vehicle wrapped in ${city.name}?`,
      answer: `Wrapping Chicago provides professional vehicle wrapping services to ${city.name} residents and businesses from our state-of-the-art facility at 4711 N. Lamon Ave, Chicago, IL. We're approximately ${city.distance} from ${city.name} and offer mobile consultation services for fleet projects throughout ${city.county} County.`
    },
    {
      question: `How long do vehicle wraps last in ${city.name}'s climate?`,
      answer: `With proper care and maintenance, our premium 3M vinyl vehicle wraps typically last 5-7 years in ${city.name}'s climate. We use UV-resistant materials specifically designed to withstand Illinois weather conditions including harsh winters, hot summers, and varying humidity levels throughout the year.`
    },
    {
      question: `What types of businesses in ${city.name} benefit most from vehicle wraps?`,
      answer: `Vehicle wraps are highly effective for ${city.name} service businesses, delivery companies, contractors, food trucks, healthcare providers, and any business with mobile operations. Companies that frequently travel throughout ${city.county} County see the highest ROI from vehicle wraps due to increased brand exposure and lead generation.`
    }
  ];

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
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-4">
            <UnifiedBreadcrumbs city={city} />
          </div>
          
          <EnhancedLocationHero city={city} />
          <ComprehensiveLocationContent city={city} />
          
          <PageFAQ
            faqs={cityFAQs}
            cityName={city.name}
            serviceName="Vehicle Wraps"
          />
          
          <CallToAction city={city.name} />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default EnhancedLocationPage;
