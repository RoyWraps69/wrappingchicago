
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
import TruckWrapsContent from '@/components/services/truck-wraps/TruckWrapsContent';
import PageFAQ from '@/components/common/PageFAQ';

const TruckWrapsPage = () => {
  // For Schema component
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  const path = '/services/truck-wraps';
  const domain = "https://www.wrappingchicago.com";
  
  // FAQ data for schema
  const faqData = [
    {
      question: "How much does it cost to wrap a truck in Chicago?",
      answer: "Truck wrap costs in Chicago range from $3,000 to $6,500+ depending on the size of your truck, design complexity, and coverage area. Box trucks and commercial vehicles typically cost more than pickup trucks due to their larger surface area."
    },
    {
      question: "How long do truck wraps last in Chicago's climate?",
      answer: "Professional truck wraps in Chicago typically last 5-7 years with proper maintenance. Our premium materials are designed to withstand Chicago's harsh winters and hot summers."
    },
    {
      question: "Can I wrap my truck if it has rust or damage?",
      answer: "Surface imperfections like rust or damage must be repaired before wrapping, as vinyl conforms to the surface underneath. Minor scratches can be covered, but significant damage should be addressed for best results."
    },
    {
      question: "How long does it take to wrap a commercial truck?",
      answer: "Most commercial truck wraps take 3-7 days to complete, depending on the size and complexity. Box trucks and larger commercial vehicles typically require more time than pickup trucks."
    },
    {
      question: "What kind of maintenance do truck wraps require?",
      answer: "Truck wraps require regular hand washing with mild soap and water. Avoid harsh chemicals and high-pressure washers. We recommend cleaning every 2-3 weeks and keeping wrapped trucks out of prolonged direct sunlight when possible."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Truck Wraps in Chicago IL | Wrapping Chicago</title>
        <meta name="description" content="Get truck wraps in Chicago IL services for standout advertising or rugged protection. High-quality vinyl graphics installed for lasting impact on the road." />
        <meta name="keywords" content="truck wraps Chicago, commercial truck wraps, box truck wraps, pickup truck wraps, fleet truck graphics, truck lettering, Chicago truck graphics" />
        <link rel="canonical" href={`${domain}${path}`} />
        <meta property="og:title" content="Truck Wraps in Chicago IL | Wrapping Chicago" />
        <meta property="og:description" content="Get truck wraps in Chicago IL services for standout advertising or rugged protection. High-quality vinyl graphics installed for lasting impact on the road." />
        <meta property="og:url" content={`${domain}${path}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/5539b79e-ab54-428d-82a0-e4735ee97a95.png" />
      </Helmet>
      
      <Schema 
        city={chicagoCity}
        path={path}
        pageTitle="Truck Wraps in Chicago IL | Wrapping Chicago"
        pageDescription="Get truck wraps in Chicago IL services for standout advertising or rugged protection. High-quality vinyl graphics installed for lasting impact on the road."
        faqs={faqData}
      />
      
      <ServiceSchema 
        title="Truck Wraps" 
        description="Professional truck wrapping services in Chicago for commercial fleets, box trucks, and pickup trucks. Transform your trucks into powerful mobile advertisements." 
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
                <h2 className="text-xl font-bold text-brand-navy mb-2">Interested in truck wraps?</h2>
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
              <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Truck Wraps Chicago</h1>
              <p className="text-lg text-gray-700 mb-2">Professional truck wrapping services for commercial vehicles</p>
            </div>
            
            <TruckWrapsContent />
          </div>
          
          {/* Add FAQ Section */}
          <PageFAQ 
            faqs={faqData}
            serviceName="Truck Wraps"
            cityName="Chicago"
          />
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default TruckWrapsPage;
