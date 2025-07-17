
import React from 'react';
import InfoBar from '@/components/home/InfoBar';
import QuickLinksBar from '@/components/home/QuickLinksBar';
import StickyContactButtons from '@/components/home/StickyContactButtons';
import TrustIndicators from '@/components/home/TrustIndicators';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import InstallationFacility from '@/components/home/InstallationFacility';
import VehicleWrapFAQ from '@/components/home/VehicleWrapFAQ';
import { ExploreServices, ServiceAreaLinks } from '@/components/home/indexed-sections';
import EasyButtonSection from '@/components/home/EasyButtonSection';
import CallToAction from '@/components/CallToAction';
import { useGalleryImages } from '@/hooks/useGalleryImages';
import { cities } from '@/data/cities';
import { HeroSection, ServicesMainSection, AreasServedMainSection } from './sections';

const HomePageSections = () => {
  const { fleetWrapVan, colorChangeVan, commercialGraphics } = useGalleryImages();

  return (
    <main className="flex-grow" role="main">
      <HeroSection />
      
      <InfoBar />
      <QuickLinksBar />
      {/* Temporarily disabled StickyContactButtons - testing for white screen issue */}
      {/* <StickyContactButtons /> */}
      
      <ServicesMainSection 
        fleetWrapVan={fleetWrapVan}
        colorChangeVan={colorChangeVan}
        commercialGraphics={commercialGraphics}
      />
      
      <section aria-labelledby="trust-heading">
        <h2 id="trust-heading" className="sr-only">Why Choose Wrapping Chicago</h2>
        <TrustIndicators />
      </section>
      
      <section aria-labelledby="why-choose-heading">
        <WhyChooseUsSection />
      </section>
      
      <section aria-labelledby="facility-heading">
        <h2 id="facility-heading" className="sr-only">Our Installation Facility</h2>
        <InstallationFacility />
      </section>
      
      <AreasServedMainSection cities={cities} />
      
      <section aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="sr-only">Vehicle Wrap FAQ</h2>
        <VehicleWrapFAQ />
      </section>
      
      <section aria-labelledby="explore-heading">
        <ExploreServices />
      </section>
      
      <section aria-labelledby="locations-heading">
        <ServiceAreaLinks cities={cities} />
      </section>
      
      <EasyButtonSection />
      <CallToAction />
    </main>
  );
};

export default HomePageSections;
