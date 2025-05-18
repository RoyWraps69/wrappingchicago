
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
import ServiceSchema from '@/components/schemas/ServiceSchema';
import VanWrapsContent from '@/components/services/van-wraps/VanWrapsContent';
import PageFAQ from '@/components/common/PageFAQ';

const VanWrapsPage = () => {
  // For Schema component
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  const path = '/services/van-wraps';
  const domain = "https://www.wrappingchicago.com";
  
  // FAQ data for schema
  const faqData = [
    {
      question: "How much does it cost to wrap a van in Chicago?",
      answer: "Van wrap costs in Chicago generally range from $2,800 to $5,500 depending on van size, design complexity, and wrap coverage. Full wraps for cargo vans typically start at $3,500, while partial wraps begin around $1,800."
    },
    {
      question: "How long does a van wrap last in Chicago's weather conditions?",
      answer: "Professional van wraps installed in Chicago typically last 5-7 years with proper maintenance. Our premium 3M and Avery vinyl materials are specifically chosen to withstand Chicago's varied weather conditions."
    },
    {
      question: "Do you offer wraps for different types of vans?",
      answer: "Yes, we provide wrapping services for all van types including cargo vans, sprinter vans, transit vans, passenger vans, and minivans. Each installation is customized to the specific vehicle's dimensions and contours."
    },
    {
      question: "How long does it take to wrap a commercial van?",
      answer: "Most commercial van wraps can be completed within 3-5 business days. The exact timeframe depends on design complexity, coverage area, and our current project schedule. We work efficiently to minimize downtime for your business."
    },
    {
      question: "Can I use my wrapped van for deliveries in harsh weather?",
      answer: "Absolutely. Our van wraps are designed to withstand daily commercial use in all weather conditions. The vinyl actually provides an additional layer of protection for your van's original paint."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Van Wraps Chicago | Commercial & Cargo Van Wrapping Services</title>
        <meta name="description" content="Professional van wraps in Chicago for cargo, transit, and sprinter vans. Turn your commercial vehicles into mobile billboards with custom, high-quality graphics." />
        <meta name="keywords" content="van wraps Chicago, cargo van wraps, transit van wraps, sprinter van wraps, commercial van graphics, Chicago van wraps, delivery van wrapping" />
        <link rel="canonical" href={`${domain}${path}`} />
        <meta property="og:title" content="Van Wraps Chicago | Commercial & Cargo Van Wrapping Services" />
        <meta property="og:description" content="Professional van wraps in Chicago for cargo, transit, and sprinter vans. Turn your commercial vehicles into mobile billboards with custom, high-quality graphics." />
        <meta property="og:url" content={`${domain}${path}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/5539b79e-ab54-428d-82a0-e4735ee97a95.png" />
      </Helmet>
      
      <Schema 
        city={chicagoCity}
        path={path}
        pageTitle="Van Wraps Chicago | Commercial & Cargo Van Wrapping Services"
        pageDescription="Professional van wraps in Chicago for cargo, transit, and sprinter vans. Turn your commercial vehicles into mobile billboards with custom, high-quality graphics."
        faqs={faqData}
      />
      
      <ServiceSchema 
        title="Van Wraps" 
        description="Professional van wrapping services in Chicago for commercial and delivery vans. Transform your work vehicles into powerful mobile advertisements." 
        path={path} 
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            
            {/* Contact Buttons Section */}
            <div className="mb-8 p-5 bg-gray-50 rounded-lg border border-gray-200 flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-brand-navy mb-2">Interested in van wraps?</h2>
                <p className="text-gray-700 mb-4 sm:mb-0">Contact us today for a free consultation and quote</p>
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
                  className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                >
                  <a href="tel:3125971286" className="inline-flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    (312) 597-1286
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Van Wraps Chicago</h1>
              <p className="text-lg text-gray-700 mb-2">Professional van wrapping services for commercial vehicles</p>
            </div>
            
            <VanWrapsContent />
          </div>
          
          {/* Add FAQ Section */}
          <PageFAQ 
            faqs={faqData}
            serviceName="Van Wraps"
            cityName="Chicago"
          />
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default VanWrapsPage;
