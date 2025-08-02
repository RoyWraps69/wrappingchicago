
import React from 'react';
import InfoBar from '@/components/home/InfoBar';
import QuickLinksBar from '@/components/home/QuickLinksBar';
import StickyContactButtons from '@/components/home/StickyContactButtons';
import TrustIndicators from '@/components/home/TrustIndicators';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import InstallationFacility from '@/components/home/InstallationFacility';
import VehicleWrapFAQ from '@/components/home/VehicleWrapFAQ';
import PhotoGallery from '@/components/home/PhotoGallery';
import { ExploreServices, ServiceAreaLinks } from '@/components/home/indexed-sections';
import EasyButtonSection from '@/components/home/EasyButtonSection';
import CallToAction from '@/components/CallToAction';
import PricingTransparency from '@/components/home/PricingTransparency';
import { useGalleryImages } from '@/hooks/useGalleryImages';
import { cities } from '@/data/cities';
import { HeroSection, ServicesMainSection } from './sections';

const HomePageSections = () => {
  const { fleetWrapVan, colorChangeVan, commercialGraphics } = useGalleryImages();

  return (
    <main className="flex-grow" role="main">
      <HeroSection />
      
      <InfoBar />
      <QuickLinksBar />
      <StickyContactButtons />
      
      <ServicesMainSection 
        fleetWrapVan={fleetWrapVan}
        colorChangeVan={colorChangeVan}
        commercialGraphics={commercialGraphics}
      />
      
      <section aria-labelledby="trust-heading">
        <h2 id="trust-heading" className="sr-only">Why Choose Wrapping Chicago</h2>
        <TrustIndicators />
      </section>
      
      <EasyButtonSection />
      <CallToAction />
    </main>
  );
};

export default HomePageSections;
