
import React from 'react';
import Hero from '@/components/home/Hero';
import InfoBar from '@/components/home/InfoBar';
import QuickLinksBar from '@/components/home/QuickLinksBar';
import StickyContactButtons from '@/components/home/StickyContactButtons';
import ServicesSection from '@/components/home/ServicesSection';
import TrustIndicators from '@/components/home/TrustIndicators';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import InstallationFacility from '@/components/home/InstallationFacility';
import AreasServedSection from '@/components/home/AreasServedSection';
import VehicleWrapFAQ from '@/components/home/VehicleWrapFAQ';
import { ExploreServices, ServiceAreaLinks } from '@/components/home/indexed-sections';
import EasyButtonSection from '@/components/home/EasyButtonSection';
import CallToAction from '@/components/CallToAction';
import { useGalleryImages } from '@/hooks/useGalleryImages';
import { cities } from '@/data/cities';

const HomePageSections = () => {
  // Use our custom hook to get the images
  const { fleetWrapVan, colorChangeVan, commercialGraphics } = useGalleryImages();

  return (
    <main className="flex-grow" role="main">
      {/* Hero section with optimized H1 */}
      <section className="hero-section">
        <Hero />
      </section>
      
      {/* Information Bar with Contact Buttons */}
      <InfoBar />
      
      {/* Service Types Bar - Quick Links */}
      <QuickLinksBar />
      
      {/* Fixed Contact Buttons */}
      <StickyContactButtons />
      
      {/* Services Section with proper heading structure */}
      <section className="py-12 racing-stripes" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <h2 id="services-heading" className="text-3xl font-bold text-center mb-8 speakable">
            Our Vehicle Wrap Services in Chicago
          </h2>
          <ServicesSection 
            fleetWrapVan={fleetWrapVan}
            colorChangeVan={colorChangeVan}
            commercialGraphics={commercialGraphics}
          />
        </div>
      </section>
      
      {/* Trust Indicators Section */}
      <section aria-labelledby="trust-heading">
        <h2 id="trust-heading" className="sr-only">Why Choose Wrapping Chicago</h2>
        <TrustIndicators />
      </section>
      
      {/* Why Choose Us Section */}
      <section aria-labelledby="why-choose-heading">
        <WhyChooseUsSection />
      </section>
      
      {/* Contact Studio Image */}
      <section aria-labelledby="facility-heading">
        <h2 id="facility-heading" className="sr-only">Our Installation Facility</h2>
        <InstallationFacility />
      </section>
      
      {/* Areas Served Section */}
      <section className="py-12 carbon-fiber-light" aria-labelledby="areas-heading">
        <div className="container mx-auto px-4">
          <h2 id="areas-heading" className="text-3xl font-bold text-center mb-8 speakable">
            Chicago Areas We Serve
          </h2>
          <AreasServedSection cities={cities} />
        </div>
      </section>
      
      {/* Vehicle Wrap FAQ */}
      <section aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="sr-only">Vehicle Wrap FAQ</h2>
        <VehicleWrapFAQ />
      </section>
      
      {/* Internal Links Section - Expanded for better site crawlability */}
      <section aria-labelledby="explore-heading">
        <ExploreServices />
      </section>
      
      {/* Location links for improved local SEO */}
      <section aria-labelledby="locations-heading">
        <ServiceAreaLinks cities={cities} />
      </section>
      
      {/* Easy Button Section - Moved to bottom */}
      <EasyButtonSection />
      
      {/* Final Call to Action */}
      <CallToAction />
    </main>
  );
};

export default HomePageSections;
