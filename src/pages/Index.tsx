
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { cities } from '@/data/cities';
import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import AreasServedSection from '@/components/home/AreasServedSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import HomeSEO from '@/components/home/HomeSEO';
import { useGalleryImages } from '@/hooks/useGalleryImages';
import Schema from '@/components/Schema';
import AIWrapSchema from '@/components/ai-wrap-ideas/AIWrapSchema';
import EasyButtonSection from '@/components/home/EasyButtonSection';

// Import the new components
import InfoBar from '@/components/home/InfoBar';
import QuickLinksBar from '@/components/home/QuickLinksBar';
import StickyContactButtons from '@/components/home/StickyContactButtons';
import TrustIndicators from '@/components/home/TrustIndicators';
import InstallationFacility from '@/components/home/InstallationFacility';
import VehicleWrapFAQ from '@/components/home/VehicleWrapFAQ';

const Index = () => {
  // Use our custom hook to get the images
  const { fleetWrapVan, colorChangeVan, commercialGraphics } = useGalleryImages();
  
  // For the Schema component, choose Chicago as the default city
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];

  return (
    <>
      <HomeSEO />
      <Schema 
        city={chicagoCity} 
        path="/"
        pageTitle="Vehicle Wraps Chicago | Premium Car, Truck & Van Wrapping Services"
        pageDescription="Chicago's leading vehicle wrap company offering professional car wraps, truck wraps, van wraps, fleet wraps & commercial graphics with expert installation using premium 3M materials."
      />
      <AIWrapSchema />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          
          {/* Information Bar with Contact Buttons */}
          <InfoBar />
          
          {/* Service Types Bar - Quick Links */}
          <QuickLinksBar />
          
          {/* Fixed Contact Buttons */}
          <StickyContactButtons />
          
          <div className="py-12 racing-stripes">
            <ServicesSection 
              fleetWrapVan={fleetWrapVan}
              colorChangeVan={colorChangeVan}
              commercialGraphics={commercialGraphics}
            />
          </div>
          
          {/* Trust Indicators Section */}
          <TrustIndicators />
          
          <WhyChooseUsSection />
          
          {/* Contact Studio Image */}
          <InstallationFacility />
          
          <div className="py-12 carbon-fiber-light">
            <AreasServedSection cities={cities} />
          </div>
          
          {/* Vehicle Wrap FAQ */}
          <VehicleWrapFAQ />
          
          {/* Easy Button Section - Moved to bottom */}
          <EasyButtonSection />
          
          <CallToAction />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
