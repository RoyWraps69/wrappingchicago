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
import EasyButtonSection from '@/components/home/EasyButtonSection';
import BreadcrumbSchema from '@/components/schemas/BreadcrumbSchema';
import CanonicalManager from '@/components/seo/CanonicalManager';
import KeywordRichContent from '@/components/home/KeywordRichContent';
import ComprehensiveSEOFix from '@/components/seo/ComprehensiveSEOFix';

// Import the home page components
import InfoBar from '@/components/home/InfoBar';
import QuickLinksBar from '@/components/home/QuickLinksBar';
import StickyContactButtons from '@/components/home/StickyContactButtons';
import TrustIndicators from '@/components/home/TrustIndicators';
import InstallationFacility from '@/components/home/InstallationFacility';
import VehicleWrapFAQ from '@/components/home/VehicleWrapFAQ';
import { ExploreServices, IndexHelmetTags, ServiceAreaLinks } from '@/components/home/indexed-sections';

// Import new Google Algorithm Alignment components
import GoogleAlgorithmOptimizer from '@/components/seo/GoogleAlgorithmOptimizer';
import EEATContent from '@/components/content/EEATContent';
import TopicalAuthorityHub from '@/components/content/TopicalAuthorityHub';
import CoreWebVitalsOptimizer from '@/components/performance/CoreWebVitalsOptimizer';
import FeaturedSnippetContent from '@/components/content/FeaturedSnippetContent';

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

  // Enhanced SEO keywords for homepage with Google Algorithm focus
  const keywords = [
    "vehicle wraps Chicago", "car wraps Chicago", "truck wraps Chicago", "van wraps Chicago", 
    "fleet wraps Chicago", "vinyl wrap Chicago", "custom graphics Chicago", "commercial graphics Chicago",
    "color change wraps Chicago", "luxury wraps Chicago", "3M vehicle wraps", "premium vinyl wraps",
    "car wrap cost Chicago", "vehicle wrap pricing Chicago", "fleet wrap services Chicago",
    "custom car wrap designs Chicago", "professional vehicle wrap consultation",
    "best truck wrap installers Chicago", "luxury exotic car wraps Chicago",
    "commercial fleet branding solutions", "vehicle wrap maintenance tips Chicago",
    "cargo van wrap specialists Chicago", "sprinter van graphics Chicago",
    "box truck advertising wraps Chicago", "truck wrap lettering Chicago",
    "business vehicle branding Chicago", "mobile advertising vehicle wraps Chicago"
  ];

  // Create breadcrumb items for home page
  const breadcrumbItems = [
    {
      position: 1,
      name: "Home",
      item: "https://www.wrappingchicago.com/"
    }
  ];

  // Enhanced structured data for homepage
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wrapping Chicago",
    "alternateName": "Chicago Vehicle Wraps",
    "url": "https://www.wrappingchicago.com/",
    "telephone": "+13125971286",
    "email": "roy@chicagofleetwraps.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4711 N. Lamon Ave",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60630",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.8781,
      "longitude": -87.6298
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": "Chicago"
    }
  };

  return (
    <>
      {/* FIXED: Comprehensive SEO implementation */}
      <ComprehensiveSEOFix
        pageTitle="Vehicle Wraps Chicago | Car Wraps, Truck Wraps & Fleet Graphics"
        pageDescription="Professional vehicle wraps in Chicago IL. Custom car wraps, truck wraps, van wraps, and fleet graphics with premium 3M vinyl. Get quotes for color change wraps, luxury wraps, and commercial branding solutions."
        keywords={keywords}
        canonicalUrl="https://www.wrappingchicago.com/"
        ogImage="https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png"
        structuredData={homeStructuredData}
        priority="critical"
      />
      
      <HomeSEO />
      <CanonicalManager customCanonical="https://www.wrappingchicago.com/" />
      
      {/* Google Algorithm Alignment Optimizer */}
      <GoogleAlgorithmOptimizer 
        pageTitle="Vehicle Wraps in Chicago IL | Wrapping Chicago"
        pageDescription="Get vehicle wraps in Chicago IL services for cars, trucks, vans, and fleets. Boost style or brand visibility with custom vinyl graphics installed by experts."
        keywords={keywords}
        contentType="local"
        authorName="Roy - Master Vehicle Wrap Installer"
        expertise={["Vehicle Wraps", "20+ Years Experience", "3M Certified Installer", "16,000+ Projects"]}
        trustSignals={["Licensed & Insured", "Premium 3M Materials", "2-Year Warranty", "98% Customer Satisfaction"]}
      />
      
      {/* Core Web Vitals Performance Optimizer */}
      <CoreWebVitalsOptimizer />
      
      {/* Enhanced Schema with comprehensive keywords */}
      <Schema 
        city={chicagoCity} 
        path="/"
        pageTitle="Vehicle Wraps in Chicago IL | Wrapping Chicago"
        pageDescription="Get vehicle wraps in Chicago IL services for cars, trucks, vans, and fleets. Boost style or brand visibility with custom vinyl graphics installed by experts."
        faqs={faqData}
        isServicePage={true}
        serviceType="Vehicle Wraps"
        keywords={keywords}
        priority="critical"
        includeSpeakable={true}
        mainImage="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png"
        allCities={cities}
      />
      
      <BreadcrumbSchema items={breadcrumbItems} />
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
          
          {/* NEW: Keyword-rich content section */}
          <KeywordRichContent />
          
          {/* NEW: E-E-A-T Content for Authority */}
          <EEATContent />
          
          {/* NEW: Featured Snippet Optimized Content */}
          <FeaturedSnippetContent />
          
          {/* Trust Indicators Section */}
          <TrustIndicators />
          
          <WhyChooseUsSection />
          
          {/* Contact Studio Image */}
          <InstallationFacility />
          
          {/* NEW: Topical Authority Hub */}
          <TopicalAuthorityHub />
          
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
