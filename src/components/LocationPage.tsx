
import React from 'react';
import { Helmet } from 'react-helmet-async';
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
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';

interface LocationPageProps {
  city: City;
}

const LocationPage = ({ city }: LocationPageProps) => {
  if (!city) {
    return <div>City not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>Vehicle Wraps in {city.name}, IL | Fleet & Color Change Wraps</title>
        <meta 
          name="description" 
          content={`Professional vehicle wraps, fleet wraps & color change wraps in ${city.name}, IL. Wrapping Chicago provides high-quality vehicle wrapping services with free quotes.`} 
        />
        <link rel="canonical" href={`https://wrappingchicago.com/vehicle-wraps-${city.slug}-il`} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`Vehicle Wraps in ${city.name}, IL | Wrapping Chicago`} />
        <meta property="og:description" content={`Professional vehicle wrapping services in ${city.name}, IL. Specializing in fleet wraps, color change wraps, and commercial graphics.`} />
        <meta property="og:url" content={`https://wrappingchicago.com/vehicle-wraps-${city.slug}-il`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Vehicle Wraps in ${city.name}, IL | Wrapping Chicago`} />
        <meta name="twitter:description" content={`Professional vehicle wrapping services in ${city.name}, IL. Specializing in fleet wraps, color change wraps, and commercial graphics.`} />
        <meta name="twitter:image" content="/og-image.png" />
        <meta name="geo.region" content="US-IL" />
        <meta name="geo.placename" content={city.name} />
      </Helmet>
      
      <Schema 
        city={city} 
        path={`/vehicle-wraps-${city.slug}-il`}
        pageTitle={`Vehicle Wraps in ${city.name}, IL | Fleet & Color Change Wraps`}
        pageDescription={`Professional vehicle wraps, fleet wraps & color change wraps in ${city.name}, IL. Wrapping Chicago provides high-quality vehicle wrapping services with free quotes.`}
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-4">
            <Breadcrumbs />
          </div>
          <LocationHero cityName={city.name} />
          <LocationContent city={city} />
          <LocationProjects cityName={city.name} />
          <LocationTestimonials city={city} />
          <CallToAction city={city.name} />
          
          {/* Floating Contact Buttons */}
          <div className="fixed bottom-6 right-6 z-50">
            <div className="flex flex-col gap-3">
              <Button
                asChild
                size="lg"
                className="bg-brand-red hover:bg-red-700 text-white font-medium rounded-full shadow-lg"
              >
                <Link to="/contact" className="inline-flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Get a Quote
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/90 backdrop-blur-sm border-gray-300 text-gray-800 hover:bg-gray-100 font-medium rounded-full shadow-lg"
              >
                <a href="tel:3125971286" className="inline-flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default LocationPage;
