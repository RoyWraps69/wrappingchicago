import React from 'react';
import { City } from '@/data/types/city';
import { cities } from '@/data/cities'; // Added missing import
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Schema from '@/components/Schema';
import LocationHero from '@/components/location/LocationHero';
import LocationContent from '@/components/location/LocationContent';
import LocationProjects from '@/components/location/LocationProjects';
import LocationTestimonials from '@/components/location/LocationTestimonials';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import LocationHeader from '@/components/location/LocationHeader';
import BusinessStatsBar from '@/components/location/BusinessStatsBar';
import ServiceTypesBar from '@/components/location/ServiceTypesBar';
import LocationFAQSection from '@/components/location/LocationFAQSection';
import FloatingContactButtons from '@/components/location/FloatingContactButtons';
import GoogleSearchConsole from '@/components/seo/GoogleSearchConsole';
import { Helmet } from 'react-helmet-async';
import ReviewsSchema from '@/components/schemas/ReviewsSchema';
import BusinessLocationSchema from '@/components/schemas/BusinessLocationSchema';
import PageFAQ from '@/components/common/PageFAQ';

interface LocationPageProps {
  city: City;
  allCities?: City[];
}

const LocationPage = ({ city, allCities = [] }: LocationPageProps) => {
  if (!city) {
    return <div>City not found</div>;
  }

  const cityKeywords = [
    `vehicle wraps ${city.name}`, 
    `car wraps ${city.name}`, 
    `truck wraps ${city.name}`,
    `van wraps ${city.name}`, 
    `fleet wraps ${city.name}`, 
    `commercial vehicle wraps ${city.name}`,
    `custom vehicle wraps ${city.name}`, 
    `vehicle graphics ${city.name}`, 
    `vehicle wrap installation ${city.name}`,
    `car wrap advertising ${city.name}`, 
    `business vehicle wraps ${city.name}`, 
    `mobile advertising ${city.name}`,
    `vinyl lettering ${city.name}`, 
    `partial vehicle wraps ${city.name}`,
    `wrap company near ${city.name}`,
    `best vehicle wraps in ${city.name}`,
    `3M authorized installer ${city.name}`,
    `vehicle branding ${city.name}`
  ];

  const domain = "https://www.wrappingchicago.com";
  const currentYear = new Date().getFullYear();
  const canonicalUrl = `/vehicle-wraps-${city.slug}-il`;
  const pageTitle = `Professional Vehicle Wraps in ${city.name}, IL | Car, Truck & Fleet Wraps`;
  const pageDescription = `Chicago's top-rated vehicle wrap provider serving ${city.name}, IL. Professional car wraps, truck wraps, van wraps & fleet wraps with over 16,000 completed projects in our 20 years of business. Free quotes available.`;

  const cityFAQs = [
    {
      question: `How much does a vehicle wrap cost in ${city.name}?`,
      answer: `Vehicle wrap costs in ${city.name} typically range from $2,500 to $5,000 for a full wrap depending on vehicle size and design complexity. Partial wraps start around $1,500. We offer free quotes and consultations for all ${city.name} businesses.`
    },
    {
      question: `Where can I get my vehicle wrapped in ${city.name}?`,
      answer: `Wrapping Chicago provides professional vehicle wrapping services to ${city.name} businesses and residents. Our installation facility is conveniently located at 4711 N. Lamon Ave, Chicago, IL 60630, just a short drive from ${city.name}.`
    },
    {
      question: `How long do vehicle wraps last in ${city.name}'s climate?`,
      answer: `With proper care and maintenance, our premium 3M vinyl vehicle wraps typically last 5-7 years in ${city.name}'s climate. We use UV-resistant materials that withstand Illinois weather conditions including hot summers and cold winters.`
    },
    {
      question: `Do you offer mobile vehicle wrap installation in ${city.name}?`,
      answer: `Yes, we provide mobile vehicle wrap installation services for fleet clients in ${city.name}. For individual vehicle wraps, we recommend installation at our professional facility to ensure optimal quality in a controlled environment.`
    }
  ];

  return (
    <>
      <LocationHeader city={city} cityKeywords={cityKeywords} />
      
      <GoogleSearchConsole verificationCode="gQnkHgsJ2bOPDWFClspUxA6EZsE-XWnLasqxsqSESvg" />
      
      <Helmet>
        <link rel="alternate" hrefLang="en-us" href={`${domain}${canonicalUrl}`} />
        <meta name="geo.position" content={`${city.coordinates?.lat || 41.8781};${city.coordinates?.lng || -87.6298}`} />
        <meta name="ICBM" content={`${city.coordinates?.lat || 41.8781}, ${city.coordinates?.lng || -87.6298}`} />
        <meta name="twitter:label1" content="Location" />
        <meta name="twitter:data1" content={`${city.name}, IL`} />
        <meta name="twitter:label2" content="Service Area" />
        <meta name="twitter:data2" content={`${city.name} and surrounding areas`} />
      </Helmet>
      
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
        allCities={allCities}
        skipFAQSchema={true}
      />
      
      <ReviewsSchema 
        businessName={`Wrapping Chicago - ${city.name} Vehicle Wraps`}
        reviewCount={42}
        ratingValue={4.9}
      />
      
      <BusinessLocationSchema 
        city={city}
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-4">
            <Breadcrumbs />
          </div>
          
          <BusinessStatsBar cityName={city.name} />
          
          <ServiceTypesBar cityName={city.name} />
          
          <LocationHero cityName={city.name} />
          <LocationContent city={city} />
          <LocationProjects cityName={city.name} />
          <LocationTestimonials city={city} />
          
          <PageFAQ
            faqs={cityFAQs}
            cityName={city.name}
          />
          
          <div className="container mx-auto px-4 py-8">
            <div className="bg-gray-50 p-5 md:p-6 rounded-lg mb-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Explore Our Vehicle Wrapping Services in {city.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                <a href="/services/car-wraps" className="text-gray-700 hover:text-brand-red transition-colors hover:underline text-sm md:text-base">Car Wraps</a>
                <a href="/services/truck-wraps" className="text-gray-700 hover:text-brand-red transition-colors hover:underline text-sm md:text-base">Truck Wraps</a>
                <a href="/services/van-wraps" className="text-gray-700 hover:text-brand-red transition-colors hover:underline text-sm md:text-base">Van Wraps</a>
                <a href="/services/fleet-wraps" className="text-gray-700 hover:text-brand-red transition-colors hover:underline text-sm md:text-base">Fleet Wraps</a>
                <a href="/services/color-change-wraps" className="text-gray-700 hover:text-brand-red transition-colors hover:underline text-sm md:text-base">Color Change Wraps</a>
                <a href="/services/commercial-graphics" className="text-gray-700 hover:text-brand-red transition-colors hover:underline text-sm md:text-base">Commercial Graphics</a>
                <a href="/services/vehicle-lettering" className="text-gray-700 hover:text-brand-red transition-colors hover:underline text-sm md:text-base">Vehicle Lettering</a>
                <a href="/services/protective-films" className="text-gray-700 hover:text-brand-red transition-colors hover:underline text-sm md:text-base">Protective Films</a>
                <a href="/services/partial-wraps" className="text-gray-700 hover:text-brand-red transition-colors hover:underline text-sm md:text-base">Partial Wraps</a>
                <a href="/services/specialty-wraps" className="text-gray-700 hover:text-brand-red transition-colors hover:underline text-sm md:text-base">Specialty Wraps</a>
                <a href="/services/designer-wraps" className="text-gray-700 hover:text-brand-red transition-colors hover:underline text-sm md:text-base">Designer Wraps</a>
                <a href="/ai-wrap-ideas" className="text-gray-700 hover:text-brand-red transition-colors hover:underline text-sm md:text-base">AI Wrap Designer</a>
              </div>
            </div>
          </div>
          
          <CallToAction city={city.name} />
          
          <FloatingContactButtons />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default LocationPage;
