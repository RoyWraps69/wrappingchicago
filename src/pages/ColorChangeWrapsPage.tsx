
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
import ColorChangeGallery from '@/components/color-change/ColorChangeGallery';
import ColorChangeHero from '@/components/color-change/ColorChangeHero';
import ColorChangeOptions from '@/components/color-change/ColorChangeOptions';
import ColorChangeProcess from '@/components/color-change/ColorChangeProcess';

const ColorChangeWrapsPage = () => {
  // For Schema component
  const chicago = {
    name: 'Chicago',
    county: 'Cook',
    slug: 'chicago',
    population: 2746388,
    region: 'north',
    suburbs: []
  };
  
  return (
    <>
      <Helmet>
        <title>Premium Color Change Wraps Chicago | Matte, Gloss, Satin, Chrome & More</title>
        <meta 
          name="description" 
          content="Transform your vehicle with our premium color change wraps in Chicago. Choose from matte, gloss, satin, metallic, chrome, and custom finishes. Professional installation with 3M and Avery vinyl. Same-day quotes, 3-day installation." 
        />
        <meta name="keywords" content="color change wraps Chicago, matte wraps Chicago, gloss wraps Chicago, satin wraps Chicago, chrome wraps Chicago, metallic wraps Chicago, custom color wraps, vehicle color transformation Chicago, car color change Chicago, vinyl color wraps, premium vehicle wraps Chicago, 3M vinyl wraps Chicago, Avery vinyl wraps Chicago" />
        <link rel="canonical" href="https://wrappingchicago.com/color-change-wraps" />
        <meta property="og:title" content="Premium Color Change Wraps Chicago | Matte, Gloss, Satin, Chrome & More" />
        <meta property="og:description" content="Transform your vehicle with our premium color change wraps in Chicago. Choose from matte, gloss, satin, metallic, chrome, and custom finishes." />
        <meta property="og:url" content="https://wrappingchicago.com/color-change-wraps" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/676b4902-7b81-4619-90d8-8feb1f986636.png" />
      </Helmet>
      
      <Schema 
        city={chicago}
        path="/color-change-wraps"
        pageTitle="Premium Color Change Wraps Chicago | Matte, Gloss, Satin, Chrome & More"
        pageDescription="Transform your vehicle with our premium color change wraps in Chicago. Choose from matte, gloss, satin, metallic, chrome, and custom finishes. Professional installation with 3M and Avery vinyl."
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto px-4">
            <Breadcrumbs />
            
            {/* Contact Buttons Section */}
            <div className="mb-8 p-5 bg-gray-50 rounded-lg border border-gray-200 flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-brand-navy mb-2">Ready to transform your vehicle?</h2>
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
          </div>
          
          <ColorChangeHero />
          
          <div className="container mx-auto px-4 py-12">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Premium Color Change Wraps in Chicago</h2>
              <p className="text-lg text-gray-700 mb-4">
                Transform your vehicle with our premium color change wraps. Whether you're looking for a sleek matte finish, 
                vibrant gloss, elegant satin, eye-catching chrome, or custom color shift effects, our expert installers will 
                deliver flawless results that turn heads wherever you go.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our color change wraps offer numerous advantages over traditional paint:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Preserve your vehicle's original paint and resale value</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Fraction of the cost of a quality paint job</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Removable when you want a change or to sell your vehicle</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Protection against minor scratches and stone chips</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Extensive selection of colors and finishes unavailable in paint</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Quick installation process (typically 3-5 days)</span>
                </li>
              </ul>
              
              <div className="bg-brand-light p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <Sparkles className="h-5 w-5 text-brand-navy mr-2" />
                  <h3 className="text-xl font-semibold text-brand-navy">Design Your Custom Color Wrap</h3>
                </div>
                <p className="mb-4">
                  Want to visualize your vehicle with a new color? Try our AI-powered wrap designer tool to see your 
                  car, truck, or SUV in different colors and finishes before committing.
                </p>
                <Button asChild className="bg-brand-navy hover:bg-blue-800">
                  <Link to="/ai-wrap-ideas" className="inline-flex items-center">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Try Our AI Wrap Designer
                  </Link>
                </Button>
              </div>
            </div>
            
            <ColorChangeOptions />
            
            <ColorChangeProcess />
            
            <ColorChangeGallery />
          </div>
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ColorChangeWrapsPage;
