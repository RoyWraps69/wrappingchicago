
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
import BreadcrumbSchema from '@/components/schemas/BreadcrumbSchema';
import CanonicalManager from '@/components/seo/CanonicalManager';

// Import the home page components
import InfoBar from '@/components/home/InfoBar';
import QuickLinksBar from '@/components/home/QuickLinksBar';
import StickyContactButtons from '@/components/home/StickyContactButtons';
import TrustIndicators from '@/components/home/TrustIndicators';
import InstallationFacility from '@/components/home/InstallationFacility';
import VehicleWrapFAQ from '@/components/home/VehicleWrapFAQ';
import { ExploreServices, IndexHelmetTags, ServiceAreaLinks } from '@/components/home/indexed-sections';

const Index = () => {
  // Use our custom hook to get the images
  const { fleetWrapVan, colorChangeVan, commercialGraphics } = useGalleryImages();
  
  // For the Schema component, choose Chicago as the default city
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  
  // FAQ data for schema
  const faqData = [
    {
      question: "How much does a vehicle wrap cost in Chicago?",
      answer: "Vehicle wrap costs in Chicago typically range from $2,500 to $5,000 for a full wrap, depending on vehicle size and design complexity. Partial wraps start around $1,500."
    },
    {
      question: "How long does a vehicle wrap last?",
      answer: "With proper care and maintenance, a professional vehicle wrap can last 5-7 years. We use premium 3M materials that provide excellent durability and UV resistance."
    },
    {
      question: "How long does it take to wrap a vehicle?",
      answer: "Most vehicle wraps can be completed in 2-3 days. Fleet projects are scheduled according to your timeline and business needs."
    },
    {
      question: "Will a vehicle wrap damage my paint?",
      answer: "No, professional vehicle wraps protect your paint and when removed properly, leave the original paint in excellent condition, often better than vehicles without wraps."
    }
  ];

  // SEO keywords
  const keywords = [
    "vehicle wraps Chicago", 
    "car wraps Chicago", 
    "truck wraps Chicago", 
    "van wraps Chicago", 
    "fleet wraps Chicago", 
    "commercial vehicle wraps", 
    "custom vehicle wraps", 
    "vehicle graphics Chicago", 
    "vinyl wraps Chicago", 
    "3M vehicle wraps"
  ];

  // Create breadcrumb items for home page
  const breadcrumbItems = [
    {
      position: 1,
      name: "Home",
      item: "https://www.wrappingchicago.com/"
    }
  ];

  return (
    <>
      <HomeSEO />
      
      {/* Canonical URL Management - Critical for avoiding duplicate content */}
      <CanonicalManager customCanonical="https://www.wrappingchicago.com/" />
      
      <Schema 
        city={chicagoCity} 
        path="/"
        pageTitle="Vehicle Wraps in Chicago IL | Wrapping Chicago"
        pageDescription="Get vehicle wraps in Chicago IL services for cars, trucks, vans, and fleets. Boost style or brand visibility with custom vinyl graphics installed by experts."
        faqs={faqData}
        keywords={keywords}
      />
      <AIWrapSchema />
      
      {/* Add explicit breadcrumb schema with itemListElement */}
      <BreadcrumbSchema items={breadcrumbItems} />
      
      {/* Add additional link rel tags for key pages */}
      <IndexHelmetTags />
      
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
          
          {/* Internal Links Section - Expanded for better site crawlability */}
          <ExploreServices />
          
          {/* Location links for improved local SEO */}
          <ServiceAreaLinks cities={cities} />
          
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
