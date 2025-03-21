
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, CheckCircle2, Shield } from 'lucide-react';
import Schema from '@/components/Schema';
import LuxuryExoticHero from '@/components/luxury-exotic/LuxuryExoticHero';
import LuxuryExoticBrands from '@/components/luxury-exotic/LuxuryExoticBrands';
import LuxuryExoticServices from '@/components/luxury-exotic/LuxuryExoticServices';
import LuxuryExoticGallery from '@/components/luxury-exotic/LuxuryExoticGallery';

const LuxuryExoticWrapsPage = () => {
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
  
  return (
    <>
      <Helmet>
        <title>Exotic & Luxury Car Wraps Chicago | Ferrari, Lamborghini, Porsche Specialists</title>
        <meta 
          name="description" 
          content="Premium exotic car wrapping services in Chicago for Ferrari, Lamborghini, Porsche, McLaren, Aston Martin, and other luxury vehicles. Expert installers with specialized training for high-end automobiles. Custom color changes, paint protection film, and designer wraps." 
        />
        <meta name="keywords" content="exotic car wraps Chicago, luxury car wraps Chicago, Ferrari wraps, Lamborghini wraps, Porsche wraps, McLaren wraps, Aston Martin wraps, high-end vehicle wraps, supercar wraps Chicago, exotic car color change, luxury vehicle paint protection, premium car wraps Chicago, exotic car protection film, supercar vinyl wraps" />
        <link rel="canonical" href="https://wrappingchicago.com/luxury-exotic-wraps" />
        <meta property="og:title" content="Exotic & Luxury Car Wraps Chicago | Ferrari, Lamborghini, Porsche Specialists" />
        <meta property="og:description" content="Premium exotic car wrapping services in Chicago for Ferrari, Lamborghini, Porsche, McLaren, Aston Martin, and other luxury vehicles." />
        <meta property="og:url" content="https://wrappingchicago.com/luxury-exotic-wraps" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/d2a8e418-117f-4bfc-a6a2-efb63dbbce7f.png" />
      </Helmet>
      
      <Schema 
        city={chicago}
        path="/luxury-exotic-wraps"
        pageTitle="Exotic & Luxury Car Wraps Chicago | Ferrari, Lamborghini, Porsche Specialists"
        pageDescription="Premium exotic car wrapping services in Chicago for Ferrari, Lamborghini, Porsche, McLaren, Aston Martin, and other luxury vehicles. Expert installers with specialized training for high-end automobiles."
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto px-4">
            <Breadcrumbs />
            
            {/* Contact Buttons Section */}
            <div className="mb-8 p-5 bg-brand-black/5 rounded-lg border border-brand-gold/10 flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-brand-black mb-2">Exotic & luxury car specialists</h2>
                <p className="text-brand-grey mb-4 sm:mb-0">Contact us for premium wrapping services for high-end vehicles</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  variant="gold"
                >
                  <Link to="/contact" className="inline-flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Request a Quote
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-gold"
                >
                  <a href="tel:3125971286" className="inline-flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    (312) 597-1286
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <LuxuryExoticHero />
          
          <div className="container mx-auto px-4 py-12">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-black mb-6">Chicago's Premier Exotic Car Wrap Specialists</h2>
              <p className="text-lg text-brand-grey mb-4">
                When it comes to wrapping exotic and luxury vehicles, experience and expertise matter. Our dedicated team 
                of specialists has extensive training in handling high-end automobiles like Ferrari, Lamborghini, Porsche, 
                McLaren, and Aston Martin. We understand the unique curves, materials, and requirements of these premium vehicles.
              </p>
              <p className="text-lg text-brand-grey mb-4">
                Our luxury vehicle wrapping services provide numerous benefits:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-brand-grey">Preserve your exotic car's factory paint and value</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-brand-grey">Custom colors and finishes without permanent modification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-brand-grey">Protection from road debris, minor scratches, and UV damage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-brand-grey">Significantly less downtime than a custom paint job</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-brand-grey">Ability to personalize your vehicle while maintaining warranty</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-brand-grey">Exclusive access to premium materials and specialized techniques</span>
                </li>
              </ul>
              
              <div className="bg-brand-black/5 p-5 rounded-lg border border-brand-gold/10">
                <div className="flex items-center mb-3">
                  <Shield className="h-5 w-5 text-brand-gold mr-2" />
                  <h3 className="text-xl font-semibold text-brand-black">Our Exotic Vehicle Guarantee</h3>
                </div>
                <p className="mb-4 text-brand-grey">
                  We understand that your exotic or luxury vehicle is a significant investment. That's why we offer a 
                  comprehensive guarantee on all our high-end wrapping services, including expert installation, premium 
                  materials, and exceptional care throughout the process.
                </p>
                <Button asChild variant="gold">
                  <Link to="/contact" className="inline-flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Schedule a Consultation
                  </Link>
                </Button>
              </div>
            </div>
            
            <LuxuryExoticBrands />
            
            <LuxuryExoticServices />
            
            <LuxuryExoticGallery />
          </div>
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default LuxuryExoticWrapsPage;
