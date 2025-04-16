
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
import CarWrapsContent from '@/components/services/car-wraps/CarWrapsContent';

const CarWrapsPage = () => {
  // For Schema component
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  const path = '/services/car-wraps';
  
  // FAQ data for schema
  const faqData = [
    {
      question: "How much does a car wrap cost in Chicago?",
      answer: "Car wrap costs in Chicago typically range from $2,500 to $5,000 for a full wrap, depending on vehicle size and design complexity. Partial wraps start around $1,200."
    },
    {
      question: "How long does a car wrap last?",
      answer: "With proper care and maintenance, a professional car wrap can last 5-7 years. We use premium 3M and Avery materials that provide excellent durability and UV resistance."
    },
    {
      question: "Can I wash my car after getting it wrapped?",
      answer: "Yes, you can wash your wrapped car. We recommend waiting at least one week after installation, then hand washing using mild soap, soft cloths, and avoiding high-pressure washers."
    },
    {
      question: "Will a car wrap damage my paint?",
      answer: "No, professional car wraps actually protect your paint. When properly installed and removed, wraps leave the original paint in excellent condition, often better than unwrapped vehicles."
    },
    {
      question: "How long does it take to wrap a car?",
      answer: "Most car wraps can be completed in 3-5 days, including preparation, installation, and final quality checks. Complex designs or custom work may take slightly longer."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{"Car Wraps Chicago | Professional Auto Wrap Installation"}</title>
        <meta name="description" content="Transform your vehicle with premium car wraps in Chicago. Our professional installation team uses top-quality 3M vinyl for stunning, durable results." />
        <meta name="keywords" content="car wraps, Chicago car wraps, vehicle wraps, auto wraps, car vinyl wrap, custom car wrap, 3M car wrap, Avery car wrap" />
        <link rel="canonical" href={`https://wrappingchicago.com${path}`} />
        <meta property="og:title" content="Car Wraps Chicago | Professional Auto Wrap Installation" />
        <meta property="og:description" content="Transform your vehicle with premium car wraps in Chicago. Our professional installation team uses top-quality 3M vinyl for stunning, durable results." />
        <meta property="og:url" content={`https://wrappingchicago.com${path}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/5539b79e-ab54-428d-82a0-e4735ee97a95.png" />
      </Helmet>
      
      <Schema 
        city={chicagoCity}
        path={path}
        pageTitle="Car Wraps Chicago | Professional Auto Wrap Installation"
        pageDescription="Transform your vehicle with premium car wraps in Chicago. Our professional installation team uses top-quality 3M vinyl for stunning, durable results."
        faqs={faqData}
      />
      
      <ServiceSchema 
        title="Car Wraps" 
        description="Professional car wrapping services in Chicago for personal and commercial vehicles. Our expert installers transform your vehicle with premium vinyl materials." 
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
                <h2 className="text-xl font-bold text-brand-navy mb-2">Interested in car wraps?</h2>
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
              <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Car Wraps Chicago</h1>
              <p className="text-lg text-gray-700 mb-2">Transform your vehicle with premium car wraps</p>
            </div>
            
            <CarWrapsContent />
          </div>
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CarWrapsPage;
