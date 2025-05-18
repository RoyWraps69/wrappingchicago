
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import InfoBar from '@/components/home/InfoBar';
import QuickLinksBar from '@/components/home/QuickLinksBar';
import ServicesSection from '@/components/home/ServicesSection';
import InstallationFacility from '@/components/home/InstallationFacility';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import AreasServedSection from '@/components/home/AreasServedSection';
import VehicleWrapFAQ from '@/components/home/VehicleWrapFAQ';
import TrustIndicators from '@/components/home/TrustIndicators';
import HomeSEO from '@/components/home/HomeSEO';
import EasyButtonSection from '@/components/home/EasyButtonSection';
import StickyContactButtons from '@/components/home/StickyContactButtons';
import { Helmet } from 'react-helmet-async';
import { useGalleryImages } from '@/hooks/useGalleryImages';
import { cities } from '@/data/cities';

function HomePage() {
  // Get the required images for ServicesSection
  const { fleetWrapVan, colorChangeVan, commercialGraphics } = useGalleryImages();

  return (
    <>
      <HomeSEO />
      <Helmet>
        <link rel="canonical" href="https://www.wrappingchicago.com/" />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <InfoBar />
          <QuickLinksBar />
          <ServicesSection 
            fleetWrapVan={fleetWrapVan} 
            colorChangeVan={colorChangeVan} 
            commercialGraphics={commercialGraphics}
          />
          <InstallationFacility />
          <WhyChooseUsSection />
          <AreasServedSection cities={cities} />
          <EasyButtonSection />
          <TrustIndicators />
          <VehicleWrapFAQ />
        </main>
        <StickyContactButtons />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
