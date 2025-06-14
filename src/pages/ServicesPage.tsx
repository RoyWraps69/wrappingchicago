
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import ServicesSection from '@/components/home/ServicesSection';
import InstallationFacility from '@/components/home/InstallationFacility';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import { cities } from '@/data/cities';
import Schema from '@/components/Schema';
import ServicesSEO from '@/components/services/ServicesSEO';
import CommercialGraphicsSEO from '@/components/services/CommercialGraphicsSEO';
import ServiceContentSelector from '@/components/services/ServiceContentSelector';
import { useGalleryImages } from '@/hooks/useGalleryImages';

const ServicesPage = () => {
  const { serviceType } = useParams();
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  const { fleetWrapVan, colorChangeVan, commercialGraphics } = useGalleryImages();
  
  // Render appropriate SEO component based on service type
  const renderSEO = () => {
    if (serviceType === 'commercial-graphics') {
      return <CommercialGraphicsSEO />;
    }
    return <ServicesSEO />;
  };
  
  return (
    <>
      {renderSEO()}
      <Schema 
        city={chicagoCity}
        path="/services"
        pageTitle="Vehicle Wrap Services in Chicago IL | Wrapping Chicago"
        pageDescription="Get vehicle wrap services in Chicago IL for complete design, print, and installation. Transform any vehicle with durable vinyl and eye-catching branding."
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Vehicle Wrap Services in Chicago
              </h1>
              <p className="text-lg text-black mb-2">
                Complete design, print, and installation services for all vehicle types
              </p>
            </header>
            
            <ServiceContentSelector path={serviceType || 'services'} />
          </div>
          
          {/* Moved sections from HomePage */}
          <ServicesSection 
            fleetWrapVan={fleetWrapVan} 
            colorChangeVan={colorChangeVan} 
            commercialGraphics={commercialGraphics}
          />
          
          <InstallationFacility />
          
          <WhyChooseUsSection />
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
