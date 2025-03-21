
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone, CheckSquare, Clock, Award } from 'lucide-react';
import Schema from '@/components/Schema';
import { cities } from '@/data/cities';

const AboutPage = () => {
  // For Schema component
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Wrapping Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fleet Wraps"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Color Change Wraps"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Graphics"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>About Wrapping Chicago | Premier Vehicle Wrapping Company</title>
        <meta 
          name="description" 
          content="Established in 2015, Wrapping Chicago is the leading vehicle wrapping company in the Chicago area with in-house trained installers and premium quality materials. Learn about our 2-year warranty and commitment to excellence."
        />
        <meta name="keywords" content="vehicle wraps Chicago, car wrapping services, fleet wraps, professional installers, commercial vehicle graphics, about Wrapping Chicago, Chicago wrap company history" />
        <link rel="canonical" href="https://wrappingchicago.com/about" />
        <meta property="og:title" content="About Wrapping Chicago | Premier Vehicle Wrapping Company" />
        <meta property="og:description" content="Learn about Chicago's leading vehicle wrap company - our history, expertise, and commitment to quality." />
        <meta property="og:url" content="https://wrappingchicago.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/efdbc4bf-1f04-42bb-a904-f52dae7bef6c.png" />
        <script type="application/ld+json">
          {JSON.stringify(companySchema)}
        </script>
      </Helmet>
      
      <Schema 
        city={chicagoCity}
        path="/about"
        pageTitle="About Wrapping Chicago | Premier Vehicle Wrapping Company"
        pageDescription="Established in 2015, Wrapping Chicago is the leading vehicle wrapping company in the Chicago area with in-house trained installers and premium materials."
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            
            {/* Contact Buttons Section */}
            <div className="mb-8 p-5 bg-brand-navy text-white rounded-lg flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2">Ready to Work With Chicago's Best Wrap Company?</h2>
                <p className="opacity-90 mb-4 sm:mb-0">Get in touch today for a free consultation and quote</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-brand-red hover:bg-red-700 text-white"
                >
                  <Link to="/contact" className="inline-flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Request a Quote
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 bg-white/10 text-white hover:bg-white/20"
                >
                  <a href="tel:3125971286" className="inline-flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    (312) 597-1286
                  </a>
                </Button>
              </div>
            </div>
            
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
                  in-house trained installers has years of experience and undergoes regular training to 
                  stay current with the latest techniques and materials.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden h-80 shadow-lg">
                <img 
                  src="/lovable-uploads/efdbc4bf-1f04-42bb-a904-f52dae7bef6c.png" 
                  alt="Wrapping Chicago installation facility - Professional fleet wrap installation shop for commercial vehicles" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-brand-navy mb-4">Why Choose Us?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-5 border border-gray-200 rounded-lg">
                  <div className="flex items-center mb-3">
                    <CheckSquare className="h-6 w-6 text-brand-red mr-2" />
                    <h3 className="font-semibold text-lg">Premium Materials</h3>
                  </div>
                  <p>We use only genuine 3M and Avery vinyl that lasts longer and retains its appearance.</p>
                </div>
                
                <div className="p-5 border border-gray-200 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Award className="h-6 w-6 text-brand-red mr-2" />
                    <h3 className="font-semibold text-lg">2-Year Warranty</h3>
                  </div>
                  <p>All our installations are backed by a comprehensive "NO QUESTIONS ASKED" warranty.</p>
                </div>
                
                <div className="p-5 border border-gray-200 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Clock className="h-6 w-6 text-brand-red mr-2" />
                    <h3 className="font-semibold text-lg">Fast Turnaround</h3>
                  </div>
                  <p>We respect your time and business needs with efficient project completion.</p>
                </div>
              </div>
              
              <ul className="list-disc pl-6 space-y-2 mt-6">
                <li><strong>In-house trained installers</strong> - Our technicians receive extensive training in our facility</li>
                <li><strong>Convenient Chicago location</strong> - Centrally located for all Chicagoland customers</li>
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
                  <p>Our trained installers carefully apply your wrap, ensuring perfect alignment and a bubble-free finish.</p>
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
