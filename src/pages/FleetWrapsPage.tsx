
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
import { cities } from '@/data/cities';

const FleetWrapsPage = () => {
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  const domain = "https://www.wrappingchicago.com";

  return (
    <>
      <Helmet>
        <title>Fleet Wraps in Chicago IL | Wrapping Chicago</title>
        <meta 
          name="description" 
          content="Get fleet wraps in Chicago IL services for consistent company branding. Uniform graphics across all vehicles, installed quickly by experienced pros." 
        />
        <meta name="keywords" content="fleet wraps Chicago, commercial fleet graphics, business vehicle wraps, fleet branding Chicago, company vehicle wraps" />
        <link rel="canonical" href={`${domain}/services/fleet-wraps`} />
        <meta property="og:title" content="Fleet Wraps in Chicago IL | Wrapping Chicago" />
        <meta property="og:description" content="Get fleet wraps in Chicago IL services for consistent company branding. Uniform graphics across all vehicles, installed quickly by experienced pros." />
        <meta property="og:url" content={`${domain}/services/fleet-wraps`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/5539b79e-ab54-428d-82a0-e4735ee97a95.png" />
      </Helmet>

      <Schema 
        city={chicagoCity}
        path="/services/fleet-wraps"
        pageTitle="Fleet Wraps in Chicago IL | Wrapping Chicago"
        pageDescription="Get fleet wraps in Chicago IL services for consistent company branding. Uniform graphics across all vehicles, installed quickly by experienced pros."
      />

      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            
            <div className="mb-8 p-5 bg-gray-50 rounded-lg border border-gray-200 flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-brand-navy mb-2">Interested in fleet wraps?</h2>
                <p className="text-gray-700 mb-4 sm:mb-0">Contact us today for volume pricing and scheduling</p>
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
              <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Fleet Wraps Chicago</h1>
              <p className="text-lg text-gray-700 mb-2">Professional fleet wrapping services for consistent company branding</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Consistent Branding</h3>
                <p className="text-gray-600 mb-4">Uniform graphics across your entire fleet</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Volume Pricing</h3>
                <p className="text-gray-600 mb-4">Competitive rates for multiple vehicle projects</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Quick Installation</h3>
                <p className="text-gray-600 mb-4">Minimize downtime with efficient scheduling</p>
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

export default FleetWrapsPage;
