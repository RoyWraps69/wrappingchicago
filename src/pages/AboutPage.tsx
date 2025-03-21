
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';

const AboutPage = () => {
  const companySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wrapping Chicago",
    "description": "Chicago's premier vehicle wrapping company specializing in fleet wraps, color change wraps, and commercial graphics.",
    "url": "https://wrappingchicago.com/about",
    "telephone": "(312) 597-1286",
    "email": "roy@wrappingchicago.com",
    "foundingDate": "2015",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4711 N. Lamon Ave",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60630",
      "addressCountry": "US"
    },
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/wrappingchicago",
      "https://www.instagram.com/wrappingchicago",
      "https://twitter.com/wrappingchicago"
    ],
  };

  return (
    <>
      <Helmet>
        <title>About Wrapping Chicago | Premier Vehicle Wrapping Company</title>
        <meta 
          name="description" 
          content="Established in 2015, Wrapping Chicago is the leading vehicle wrapping company in the Chicago area with certified 3M installers and premium quality materials."
        />
        <meta name="keywords" content="vehicle wraps Chicago, car wrapping services, fleet wraps, 3M certified installers, commercial vehicle graphics" />
        <link rel="canonical" href="https://wrappingchicago.com/about" />
        <script type="application/ld+json">
          {JSON.stringify(companySchema)}
        </script>
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            <h1 className="text-4xl font-bold text-brand-navy mb-6">About Wrapping Chicago</h1>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <p className="text-lg mb-6">
                  Wrapping Chicago is the premier vehicle wrapping company in the Chicago area, 
                  serving businesses and individuals throughout the region with high-quality wrapping 
                  services that make vehicles stand out on the road.
                </p>
                <p className="mb-6">
                  Founded in 2015, our company has wrapped thousands of vehicles from small cars to 
                  large fleet trucks. Our mission is to provide exceptional quality vehicle wraps 
                  with outstanding customer service at competitive prices.
                </p>
                <p>
                  We take pride in our work and stand behind every wrap we install. Our team of 
                  certified installers has years of experience and undergoes regular training to 
                  stay current with the latest techniques and materials.
                </p>
              </div>
              <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <p className="text-gray-500">Company Image Placeholder</p>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-brand-navy mb-4">Why Choose Us?</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Certified 3M Preferred Installers</strong> - Our technicians are trained and certified by 3M</li>
                <li><strong>Premium quality materials</strong> - We use only genuine 3M and Avery vinyl that lasts</li>
                <li><strong>5-year warranty</strong> - All our installations are backed by a comprehensive warranty</li>
                <li><strong>Convenient Chicago location</strong> - Centrally located for all Chicagoland customers</li>
                <li><strong>Fast turnaround times</strong> - We respect your time and business needs</li>
                <li><strong>Competitive pricing</strong> - Quality work at fair market rates</li>
                <li><strong>Expert design services available</strong> - Full graphic design team for custom projects</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-brand-navy mb-4">Our Process</h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <h3 className="font-semibold">Consultation</h3>
                  <p>We begin with a detailed consultation to understand your business needs and goals for your vehicle wrap.</p>
                </li>
                <li>
                  <h3 className="font-semibold">Design</h3>
                  <p>Our design team creates custom graphics that perfectly represent your brand and maximize visibility.</p>
                </li>
                <li>
                  <h3 className="font-semibold">Production</h3>
                  <p>Using state-of-the-art printing equipment, we produce high-resolution graphics on premium vinyl materials.</p>
                </li>
                <li>
                  <h3 className="font-semibold">Installation</h3>
                  <p>Our certified installers carefully apply your wrap, ensuring perfect alignment and a bubble-free finish.</p>
                </li>
                <li>
                  <h3 className="font-semibold">Quality Check</h3>
                  <p>Before delivery, we inspect every vehicle wrap to ensure it meets our rigorous quality standards.</p>
                </li>
              </ol>
            </div>
          </div>
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
