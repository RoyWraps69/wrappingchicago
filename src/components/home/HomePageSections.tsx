
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
      {/* Temporarily disabled StickyContactButtons - testing for white screen issue */}
      {/* <StickyContactButtons /> */}
      
      <section aria-labelledby="services-gallery-heading" className="py-12">
        <div className="container mx-auto px-4">
          <h2 id="services-gallery-heading" className="text-3xl font-bold text-center mb-8 text-brand-navy">
            Our Services Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400&h=300&fit=crop" 
                alt="Fleet wrap services"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop" 
                alt="Color change vehicle wrap"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" 
                alt="Commercial graphics installation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      
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
      
      <PhotoGallery />
      
      <section aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="sr-only">Vehicle Wrap FAQ</h2>
        <VehicleWrapFAQ />
      </section>
      
      <section aria-labelledby="gallery-heading" className="py-12">
        <div className="container mx-auto px-4">
          <h2 id="gallery-heading" className="text-3xl font-bold text-center mb-8 text-brand-navy">
            Our Work Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop" 
                alt="Professional vehicle wrap installation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop" 
                alt="Custom car wrap design"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop" 
                alt="Fleet vehicle wrap project"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop" 
                alt="Commercial truck wrap design"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop" 
                alt="Vehicle wrap installation process"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop" 
                alt="Finished vehicle wrap showcase"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section aria-labelledby="explore-heading">
        <ExploreServices />
      </section>
      
      <EasyButtonSection />
      <CallToAction />
    </main>
  );
};

export default HomePageSections;
