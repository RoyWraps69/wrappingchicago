
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import AreasServedSection from '@/components/home/AreasServedSection';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { cities } from '@/data/cities';
import Schema from '@/components/Schema';

const LocationsPage = () => {
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  
  return (
    <>
      <Helmet>
        <title>Service Areas - Vehicle Wraps Throughout Chicago | Wrapping Chicago</title>
        <meta name="description" content="Wrapping Chicago serves vehicle wrap customers throughout Chicago and surrounding areas. Find your location and get professional vehicle wrap services." />
        <link rel="canonical" href="https://www.wrappingchicago.com/locations" />
      </Helmet>
      
      <Schema 
        city={chicagoCity}
        path="/locations"
        pageTitle="Service Areas - Vehicle Wraps Throughout Chicago | Wrapping Chicago"
        pageDescription="Wrapping Chicago serves vehicle wrap customers throughout Chicago and surrounding areas. Find your location and get professional vehicle wrap services."
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            
            <header className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Vehicle Wrap Service Areas in Chicago
              </h1>
              <p className="text-lg text-black max-w-3xl mx-auto">
                We bring professional vehicle wrap services to businesses and individuals 
                throughout Chicago and surrounding communities. Find your area below to 
                learn more about our local services.
              </p>
            </header>
          </div>
          
          {/* Moved section from HomePage */}
          <AreasServedSection cities={cities} />
          
          <div className="container mx-auto py-12 px-4">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-black mb-4">
                Mobile Vehicle Wrap Services
              </h2>
              <p className="text-black mb-4">
                Can't come to us? We can come to you! We offer mobile vehicle wrap 
                services for fleet accounts and special circumstances throughout the 
                Chicago area. Contact us to discuss your needs.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Service Benefits</h3>
                  <ul className="text-black space-y-1">
                    <li>• On-site vehicle wrap installation</li>
                    <li>• Fleet services at your location</li>
                    <li>• Minimal business disruption</li>
                    <li>• Same quality materials and workmanship</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Coverage Area</h3>
                  <ul className="text-black space-y-1">
                    <li>• Downtown Chicago</li>
                    <li>• All Chicago neighborhoods</li>
                    <li>• Surrounding suburbs</li>
                    <li>• Special requests considered</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default LocationsPage;
