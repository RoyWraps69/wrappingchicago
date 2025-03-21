
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import ServiceHeader from '@/components/services/ServiceHeader';
import ServiceCatalog from '@/components/services/ServiceCatalog';
import ServiceContentSelector from '@/components/services/ServiceContentSelector';
import ServiceSchema from '@/components/schemas/ServiceSchema';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';
import Schema from '@/components/Schema';
import { cities } from '@/data/cities';

const ServicesPage = () => {
  const location = useLocation();
  const path = location.pathname;
  const isSpecificService = path.includes('/services/');
  
  // For Schema component
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  
  // Determine which service to display based on the URL
  let serviceTitle = "Our Services";
  let serviceDescription = "Professional vehicle wrapping services in Chicago";
  let serviceKeywords = "vehicle wraps, fleet wraps, car wraps, Chicago, color change wraps, commercial graphics";
  
  if (isSpecificService) {
    if (path.includes('fleet-wraps')) {
      serviceTitle = "Fleet Wraps";
      serviceDescription = "Transform your business vehicles with professional fleet wrapping services from Chicago's top vehicle wrap company.";
      serviceKeywords = "fleet wraps, business vehicle wraps, fleet branding, Chicago fleet wraps";
    } else if (path.includes('color-change-wraps')) {
      serviceTitle = "Color Change Wraps";
      serviceDescription = "Transform your vehicle with our premium color change wraps. Get a new look without the permanence of paint.";
      serviceKeywords = "color change wraps, vehicle color change, car wrap colors, Chicago color change";
    } else if (path.includes('commercial-graphics')) {
      serviceTitle = "Commercial Graphics";
      serviceDescription = "Enhance your business vehicles with eye-catching commercial graphics and lettering. Make your brand visible on the road.";
      serviceKeywords = "commercial vehicle graphics, business vehicle lettering, Chicago truck graphics, company van wraps";
    } else if (path.includes('partial-wraps')) {
      serviceTitle = "Partial Wraps";
      serviceDescription = "Cost-effective partial vehicle wraps that deliver maximum impact for your business on a budget.";
      serviceKeywords = "partial vehicle wraps, half wraps, Chicago partial wraps, budget vehicle graphics";
    } else if (path.includes('protective-films')) {
      serviceTitle = "Protective Films";
      serviceDescription = "Safeguard your vehicle's paint and finish with our high-quality protective films. Shield against road debris and environmental damage.";
      serviceKeywords = "paint protection film, clear bra, vehicle protection, Chicago PPF, car paint protection";
    } else if (path.includes('vehicle-lettering')) {
      serviceTitle = "Vehicle Lettering";
      serviceDescription = "Professional cut vinyl lettering for your business vehicles. Make your company identifiable with our custom vehicle lettering services.";
      serviceKeywords = "vehicle lettering, car decals, truck lettering, Chicago business vehicle lettering";
    } else if (path.includes('specialty-wraps')) {
      serviceTitle = "Specialty Wraps";
      serviceDescription = "Stand out with our specialty vehicle wraps featuring unique finishes like chrome, color-shift, carbon fiber, and custom textures.";
      serviceKeywords = "specialty car wraps, chrome wraps, color-shifting wraps, Chicago specialty vehicle wraps";
    } else if (path.includes('retail-graphics')) {
      serviceTitle = "Retail Graphics";
      serviceDescription = "Transform your storefront with our custom window wraps, wall graphics, and retail signage solutions for maximum visual impact.";
      serviceKeywords = "retail graphics, store window wraps, business signage, Chicago retail graphics, storefront wraps";
    }
  }

  return (
    <>
      <Helmet>
        <title>{serviceTitle} | Wrapping Chicago</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content={serviceKeywords} />
        <link rel="canonical" href={`https://wrappingchicago.com${path}`} />
        <meta property="og:title" content={`${serviceTitle} | Wrapping Chicago`} />
        <meta property="og:description" content={serviceDescription} />
        <meta property="og:url" content={`https://wrappingchicago.com${path}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/5539b79e-ab54-428d-82a0-e4735ee97a95.png" />
      </Helmet>
      
      <Schema 
        city={chicagoCity}
        path={path}
        pageTitle={`${serviceTitle} | Wrapping Chicago`}
        pageDescription={serviceDescription}
      />
      
      <ServiceSchema 
        title={serviceTitle} 
        description={serviceDescription} 
        path={path} 
        includeAI={path.includes('fleet-wraps') || path.includes('commercial-graphics')}
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            
            {/* Contact Buttons Section */}
            <div className="mb-8 p-5 bg-gray-50 rounded-lg border border-gray-200 flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-brand-navy mb-2">Interested in {serviceTitle.toLowerCase()}?</h2>
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
            
            <ServiceHeader 
              title={serviceTitle} 
              showImages={!isSpecificService} // Show images only on the main services page
            />
            
            {/* Service content - either generic or specific */}
            <ServiceContentSelector path={path} />
            
            <ServiceCatalog />
          </div>
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
