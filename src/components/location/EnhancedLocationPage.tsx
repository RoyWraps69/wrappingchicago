
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
import ReviewsSchema from '@/components/schemas/ReviewsSchema';
import BusinessLocationSchema from '@/components/schemas/BusinessLocationSchema';
import PerfectLocationSEO from './PerfectLocationSEO';

interface EnhancedLocationPageProps {
  city: City;
}

const EnhancedLocationPage = ({ city }: EnhancedLocationPageProps) => {
  const domain = "https://www.wrappingchicago.com";
  const canonicalUrl = `/vehicle-wraps-${city.slug}-il`;
  const pageTitle = `${city.name} Fleet Wraps & Vehicle Graphics | Commercial Vehicle Wraps ${city.name}, IL`;
  const pageDescription = `Professional fleet wraps in ${city.name}, IL with over 16,000 vehicles wrapped. Expert commercial vehicle wraps, box truck wraps, and van wrapping services for ${city.name} businesses. Free quotes available.`;

  const cityKeywords = [
    `fleet wraps in ${city.name}`,
    `commercial vehicle wraps ${city.name}, IL`,
    `van wrap company near ${city.name}`,
    `box truck wraps in ${city.name}`,
    `vehicle branding services ${city.name}, Illinois`,
    `car wrap installers ${city.name}`,
    `${city.name} vinyl wraps for businesses`,
    `vehicle graphics ${city.name}`,
    `fleet branding ${city.name}`,
    `mobile advertising ${city.name}`
  ];

  const cityFAQs = [
    {
      question: `How much do fleet wraps cost in ${city.name}?`,
      answer: `Fleet wrap costs in ${city.name} typically range from $2,500 to $5,000 per vehicle for full wraps, depending on vehicle size and design complexity. Box truck wraps generally cost $3,500-$6,500, while van wraps range from $2,800-$4,500. We offer volume discounts for fleet projects and provide free detailed quotes for all ${city.name} businesses.`
    },
    {
      question: `Where can I get my commercial vehicles wrapped in ${city.name}?`,
      answer: `Wrapping Chicago provides professional vehicle wrapping services to ${city.name} businesses from our state-of-the-art facility at 4711 N. Lamon Ave, Chicago, IL. We're approximately ${city.distance} from ${city.name} and offer mobile consultation services for fleet projects throughout ${city.county} County.`
    },
    {
      question: `How long do vehicle wraps last in ${city.name}'s climate?`,
      answer: `With proper care and maintenance, our premium 3M vinyl vehicle wraps typically last 5-7 years in ${city.name}'s climate. We use UV-resistant materials specifically designed to withstand Illinois weather conditions including harsh winters, hot summers, and varying humidity levels throughout the year.`
    },
    {
      question: `Do you offer mobile vehicle wrap installation in ${city.name}?`,
      answer: `Yes, we provide mobile vehicle wrap installation services for large fleet clients in ${city.name}. For individual vehicle wraps and smaller projects, we recommend installation at our professional facility to ensure optimal quality in a controlled environment. We offer pickup and delivery services for ${city.name} customers.`
    },
    {
      question: `What types of businesses in ${city.name} benefit most from vehicle wraps?`,
      answer: `Vehicle wraps are highly effective for ${city.name} service businesses, delivery companies, contractors, food trucks, healthcare providers, and any business with mobile operations. Companies that frequently travel throughout ${city.county} County see the highest ROI from fleet wraps due to increased brand exposure and lead generation.`
    }
  ];

  return (
    <>
      {/* Perfect SEO Optimization */}
      <PerfectLocationSEO city={city} serviceType="Fleet Wraps" />
      
      <GoogleSearchConsole verificationCode="gQnkHgsJ2bOPDWFClspUxA6EZsE-XWnLasqxsqSESvg" />
      
      <UnifiedBreadcrumbSchema city={city} />
      
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
      
      <ReviewsSchema 
        businessName={`Wrapping Chicago - ${city.name} Vehicle Wraps`}
        reviewCount={42}
        ratingValue={4.9}
      />
      
      <BusinessLocationSchema city={city} />
      
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
            serviceName="Fleet Wraps"
          />
          
          <CallToAction city={city.name} />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default EnhancedLocationPage;
