
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';
import Schema from '@/components/Schema';
import VanWrapsSEO from '@/components/services/VanWrapsSEO';
import { cities } from '@/data/cities';

const VanWrapsPage = () => {
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <>
      <VanWrapsSEO />
      
      <Schema 
        city={chicagoCity}
        path="/van-wraps"
        pageTitle="Van Wraps in Chicago IL | Wrapping Chicago"
        pageDescription="Get van wraps in Chicago IL services to turn your van into a mobile billboard. Custom graphics printed and installed with precision for maximum exposure."
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            
            <div className="mb-8 p-5 bg-gray-50 rounded-lg border border-gray-200 flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-brand-navy mb-2">Transform your van into a mobile billboard</h2>
                <p className="text-gray-700 mb-4 sm:mb-0">Contact us today for professional van wrap installation</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-brand-red hover:bg-red-700 text-white">
                  <Link to="/contact" className="inline-flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Request a Quote
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                  <a href="tel:3125971286" className="inline-flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    (312) 597-1286
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Van Wraps Chicago</h1>
              <p className="text-lg text-gray-700 mb-2">Turn your van into a mobile advertising powerhouse</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Mobile Billboard</h3>
                <p className="text-gray-600 mb-4">Reach thousands of potential customers as you drive</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Professional Image</h3>
                <p className="text-gray-600 mb-4">Establish credibility with professional graphics</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Paint Protection</h3>
                <p className="text-gray-600 mb-4">Shield your van's paint from damage and wear</p>
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

export default VanWrapsPage;
