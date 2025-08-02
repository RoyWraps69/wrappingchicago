
import React from 'react';
import InfoBar from '@/components/home/InfoBar';
import UniversalRichSnippets from '@/components/seo/UniversalRichSnippets';
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
import { 
  OrganizationSchema, 
  LocalBusinessSchema, 
  WebSiteSchema, 
  ReviewSchema, 
  FAQSchema, 
  BreadcrumbSchema, 
  ServiceSchema, 
  WebPageSchema,
  MediaSchema,
  HowToSchema
} from '@/components/schemas/Deduplicated';

const HomePageSections = () => {
  const { fleetWrapVan, colorChangeVan, commercialGraphics } = useGalleryImages();

  return (
    <>
      {/* Universal Rich Snippets + Voice Search Optimization */}
      <UniversalRichSnippets 
        pageTitle="Chicago Vehicle Wraps - Professional Car, Truck & Van Wrapping Services"
        pageDescription="Chicago's premier vehicle wrap specialists. Get 30% more service calls with professional wraps. Same week installation. Won't damage paint. 16,000+ vehicles wrapped."
        pageType="WebPage"
      />
      
      <main className="flex-grow" role="main">
      <HeroSection />
      
      <ServicesMainSection 
        fleetWrapVan={fleetWrapVan}
        colorChangeVan={colorChangeVan}
        commercialGraphics={commercialGraphics}
      />
      
      <InfoBar />
      <QuickLinksBar />
      <StickyContactButtons />
      
      <section aria-labelledby="trust-heading">
        <h2 id="trust-heading" className="sr-only">Why Choose Wrapping Chicago</h2>
        <TrustIndicators />
      </section>
      
      <EasyButtonSection />
      <CallToAction />
    </main>
    </>
  );
};

export default HomePageSections;
