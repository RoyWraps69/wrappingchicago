
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { cities } from '@/data/cities';
import Schema from '@/components/Schema';
import ServicesSEO from '@/components/services/ServicesSEO';

const ServicesPage = () => {
  const { serviceType } = useParams();
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  
  return (
    <>
      <ServicesSEO />
      <Schema 
        city={chicagoCity}
        path="/services"
        pageTitle="Vehicle Wrap Services in Chicago IL | Wrapping Chicago"
        pageDescription="Get vehicle wrap services in Chicago IL for complete design, print, and installation. Transform any vehicle with durable vinyl and eye-catching branding."
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Vehicle Wrap Services Chicago</h1>
              <p className="text-lg text-gray-700 mb-2">Complete design, print, and installation services for all vehicle types</p>
            </div>
            
            {/* Service content would go here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Car Wraps</h3>
                <p className="text-gray-600 mb-4">Transform your personal vehicle with premium vinyl wraps</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Truck Wraps</h3>
                <p className="text-gray-600 mb-4">Professional truck wrapping for commercial use</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Van Wraps</h3>
                <p className="text-gray-600 mb-4">Turn your van into a mobile billboard</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Fleet Wraps</h3>
                <p className="text-gray-600 mb-4">Consistent branding across your entire fleet</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Color Change Wraps</h3>
                <p className="text-gray-600 mb-4">Completely change your vehicle's appearance</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Commercial Graphics</h3>
                <p className="text-gray-600 mb-4">Professional graphics for business vehicles</p>
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

export default ServicesPage;
