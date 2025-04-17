
import React from 'react';
import { City } from '@/data/cities';
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

interface LocationPageProps {
  city: City;
}

const LocationPage = ({ city }: LocationPageProps) => {
  if (!city) {
    return <div>City not found</div>;
  }

  // Generate additional keywords specific to this city
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
    `partial vehicle wraps ${city.name}`
  ];

  const domain = "https://www.wrappingchicago.com";

  return (
    <>
      <LocationHeader city={city} cityKeywords={cityKeywords} />
      
      <GoogleSearchConsole verificationCode="gQnkHgsJ2bOPDWFClspUxA6EZsE-XWnLasqxsqSESvg" />
      
      <Schema 
        city={city} 
        path={`/vehicle-wraps-${city.slug}-il`}
        pageTitle={`Professional Vehicle Wraps in ${city.name}, IL | Car, Truck & Fleet Wraps`}
        pageDescription={`Chicago's top-rated vehicle wrap provider serving ${city.name}, IL. Professional car wraps, truck wraps, van wraps & fleet wraps with over 16,000 completed projects in our 20 years of business. Free quotes available.`}
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-4">
            <Breadcrumbs />
          </div>
          
          {/* Business Statistics Banner */}
          <BusinessStatsBar cityName={city.name} />
          
          {/* Service Types Bar */}
          <ServiceTypesBar cityName={city.name} />
          
          <LocationHero cityName={city.name} />
          <LocationContent city={city} />
          <LocationProjects cityName={city.name} />
          <LocationTestimonials city={city} />
          
          {/* Vehicle Wrap FAQ Section */}
          <LocationFAQSection cityName={city.name} />
          
          {/* Internal links to services */}
          <div className="container mx-auto px-4 py-8">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Explore Our Vehicle Wrapping Services in {city.name}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a href="/services/car-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Car Wraps</a>
                <a href="/services/truck-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Truck Wraps</a>
                <a href="/services/van-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Van Wraps</a>
                <a href="/services/fleet-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Fleet Wraps</a>
                <a href="/services/color-change-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Color Change Wraps</a>
                <a href="/services/commercial-graphics" className="text-brand-navy hover:text-brand-red transition-colors">Commercial Graphics</a>
                <a href="/services/vehicle-lettering" className="text-brand-navy hover:text-brand-red transition-colors">Vehicle Lettering</a>
                <a href="/ai-wrap-ideas" className="text-brand-navy hover:text-brand-red transition-colors">AI Wrap Designer</a>
              </div>
            </div>
          </div>
          
          <CallToAction city={city.name} />
          
          {/* Floating Contact Buttons */}
          <FloatingContactButtons />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default LocationPage;
