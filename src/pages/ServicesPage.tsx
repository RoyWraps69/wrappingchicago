
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import ServiceHeader from '@/components/services/ServiceHeader';
import ServiceCatalog from '@/components/services/ServiceCatalog';
import ServiceContentSelector from '@/components/services/ServiceContentSelector';
import ServiceSchema from '@/components/services/ServiceSchema';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';

const ServicesPage = () => {
  const location = useLocation();
  const path = location.pathname;
  const isSpecificService = path.includes('/services/');
  
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
    }
  }

  return (
    <>
      <Helmet>
        <title>{serviceTitle} | Chicago Fleet Wraps</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content={serviceKeywords} />
        <link rel="canonical" href={`https://chicagofleetwraps.com${path}`} />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            
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
      
      <ServiceSchema 
        title={serviceTitle} 
        description={serviceDescription} 
        path={path} 
      />
    </>
  );
};

export default ServicesPage;
