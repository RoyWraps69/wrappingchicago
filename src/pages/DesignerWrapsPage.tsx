
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, CheckCircle2, Sparkles } from 'lucide-react';
import Schema from '@/components/Schema';
import DesignerWrapsHero from '@/components/designer-wraps/DesignerWrapsHero';
import DesignerWrapsOptions from '@/components/designer-wraps/DesignerWrapsOptions';
import DesignerWrapsGallery from '@/components/designer-wraps/DesignerWrapsGallery';
import DesignerWrapsProcess from '@/components/designer-wraps/DesignerWrapsProcess';

const DesignerWrapsPage = () => {
  // For Schema component - updated with all required City properties
  const chicago = {
    name: "Chicago",
    county: "Cook County",
    state: "IL",
    description: "Chicago is the third-largest city in the United States, known for its bold architecture, vibrant arts scene, and diverse neighborhoods. As a major transportation hub, it offers businesses excellent connectivity and access to markets.",
    population: "2.7 million",
    businessAreas: "Downtown Chicago, Michigan Avenue, West Loop, and River North",
    distance: "0 miles",
    slug: "chicago",
    website: "https://www.chicago.gov"
  };
  
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <>
      <Helmet>
        <title>Designer Wraps in Chicago IL | Wrapping Chicago</title>
        <meta 
          name="description" 
          content="Get designer wraps in Chicago IL services for artistic, bespoke vehicle graphics. Stand out with custom illustrations executed by master installers." 
        />
        <meta name="keywords" content="designer vehicle wraps Chicago, custom car wraps Chicago, artistic vehicle wraps Chicago, creative car wraps, unique vehicle wraps, pattern wraps Chicago, textured vehicle wraps, color shift wraps Chicago, custom vehicle graphics Chicago, personalized car wraps, one-of-a-kind vehicle wrap, statement car wrap Chicago" />
        <link rel="canonical" href={`${domain}/designer-wraps`} />
        <meta property="og:title" content="Designer Wraps in Chicago IL | Wrapping Chicago" />
        <meta property="og:description" content="Get designer wraps in Chicago IL services for artistic, bespoke vehicle graphics. Stand out with custom illustrations executed by master installers." />
        <meta property="og:url" content={`${domain}/designer-wraps`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/9de106b5-94cb-4fd1-a7c7-5c75c75b7cbb.png" />
      </Helmet>
      
      <Schema 
        city={chicago}
        path="/designer-wraps"
        pageTitle="Designer Wraps in Chicago IL | Wrapping Chicago"
        pageDescription="Get designer wraps in Chicago IL services for artistic, bespoke vehicle graphics. Stand out with custom illustrations executed by master installers."
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto px-4">
            <Breadcrumbs />
            
            {/* Contact Buttons Section */}
            <div className="mb-8 p-5 bg-gray-50 rounded-lg border border-gray-200 flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-brand-navy mb-2">Express yourself with a designer wrap</h2>
                <p className="text-gray-700 mb-4 sm:mb-0">Contact us today for a free design consultation</p>
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
          </div>
          
          <DesignerWrapsHero />
          
          <div className="container mx-auto px-4 py-12">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Custom Designer Vehicle Wraps in Chicago</h2>
              <p className="text-lg text-gray-700 mb-4">
                Make a bold statement with our custom designer vehicle wraps. Whether you want a unique pattern, an 
                artistic design, or a one-of-a-kind finish, our team will help bring your vision to life with precision 
                and creativity.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our designer wraps go beyond simple color changes, offering unique advantages:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Express your personality with a truly unique vehicle</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Create a distinct look that stands out from factory colors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Combine multiple finish types for dramatic effects</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Add textures and patterns impossible with traditional paint</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Showcase your artistic vision on your vehicle</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Change your look when you're ready for something new</span>
                </li>
              </ul>
              
              <div className="bg-brand-light p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <Sparkles className="h-5 w-5 text-brand-navy mr-2" />
                  <h3 className="text-xl font-semibold text-brand-navy">Design Your Custom Wrap</h3>
                </div>
                <p className="mb-4">
                  Not sure what design would work best for your vehicle? Try our AI-powered wrap designer to generate 
                  unique design concepts tailored to your style and preferences.
                </p>
                <Button asChild className="bg-brand-navy hover:bg-blue-800">
                  <Link to="/ai-wrap-ideas" className="inline-flex items-center">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Try Our AI Wrap Designer
                  </Link>
                </Button>
              </div>
            </div>
            
            <DesignerWrapsOptions />
            
            <DesignerWrapsProcess />
            
            <DesignerWrapsGallery />
          </div>
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default DesignerWrapsPage;
