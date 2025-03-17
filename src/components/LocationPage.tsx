
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
          content={`Professional vehicle wraps, fleet wraps & color change wraps in ${city.name}, IL. Chicago Fleet Wraps provides high-quality vehicle wrapping services with free quotes.`} 
        />
        <link rel="canonical" href={`https://chicagofleetwraps.com/vehicle-wraps-${city.slug}-il`} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`Vehicle Wraps in ${city.name}, IL | Chicago Fleet Wraps`} />
        <meta property="og:description" content={`Professional vehicle wrapping services in ${city.name}, IL. Specializing in fleet wraps, color change wraps, and commercial graphics.`} />
        <meta property="og:url" content={`https://chicagofleetwraps.com/vehicle-wraps-${city.slug}-il`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Vehicle Wraps in ${city.name}, IL | Chicago Fleet Wraps`} />
        <meta name="twitter:description" content={`Professional vehicle wrapping services in ${city.name}, IL. Specializing in fleet wraps, color change wraps, and commercial graphics.`} />
        <meta name="twitter:image" content="/og-image.png" />
      </Helmet>
      
      <Schema city={city} />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <LocationHero cityName={city.name} />
          <LocationContent city={city} />
          <LocationProjects cityName={city.name} />
          <LocationTestimonials city={city} />
          <CallToAction city={city.name} />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default LocationPage;
