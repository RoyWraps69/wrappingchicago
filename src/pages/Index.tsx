
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { cities } from '@/data/cities';
import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import AreasServedSection from '@/components/home/AreasServedSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import { useGalleryImages } from '@/hooks/useGalleryImages';
import EasyButtonSection from '@/components/home/EasyButtonSection';

// Import enhanced SEO components
import FullSEOOptimization from '@/components/seo/FullSEOOptimization';
import BreadcrumbSchema from '@/components/schemas/BreadcrumbSchema';

// Import the home page components
import InfoBar from '@/components/home/InfoBar';
import QuickLinksBar from '@/components/home/QuickLinksBar';
import StickyContactButtons from '@/components/home/StickyContactButtons';
import TrustIndicators from '@/components/home/TrustIndicators';
import InstallationFacility from '@/components/home/InstallationFacility';
import VehicleWrapFAQ from '@/components/home/VehicleWrapFAQ';
import { ExploreServices, ServiceAreaLinks } from '@/components/home/indexed-sections';

const Index = () => {
  // Use our custom hook to get the images
  const { fleetWrapVan, colorChangeVan, commercialGraphics } = useGalleryImages();
  
  // For breadcrumbs, create proper structure for both schema and SEO optimization
  const breadcrumbItems = [
    {
      position: 1,
      name: "Home",
      item: "https://www.wrappingchicago.com/"
    }
  ];

  // For SEO optimization component that expects url property
  const seoOptimizationBreadcrumbs = [
    {
      position: 1,
      name: "Home",
      url: "https://www.wrappingchicago.com/"
    }
  ];
  
  // FAQ data for schema
  const faqData = [
    {
      question: "How much does a vehicle wrap cost in Chicago?",
      answer: "Vehicle wrap costs in Chicago typically range from $2,500 to $5,000 for a full wrap, depending on vehicle size and design complexity. Partial wraps start around $1,500. We provide free detailed quotes for all projects."
    },
    {
      question: "How long does a vehicle wrap last?",
      answer: "With proper care and maintenance, a professional vehicle wrap can last 5-7 years. We use premium 3M materials that provide excellent durability and UV resistance with a 2-year warranty."
    },
    {
      question: "How long does it take to wrap a vehicle?",
      answer: "Most vehicle wraps can be completed in 2-3 days. Fleet projects are scheduled according to your timeline and business needs. Rush services available for urgent projects."
    },
    {
      question: "Will a vehicle wrap damage my paint?",
      answer: "No, professional vehicle wraps protect your paint and when removed properly, leave the original paint in excellent condition, often better than vehicles without wraps."
    },
    {
      question: "Do you offer design services for vehicle wraps?",
      answer: "Yes, we offer complete design consultation and custom graphics creation. Our experienced designers work with you to create effective branding that maximizes your mobile advertising impact."
    }
  ];

  // Enhanced SEO keywords for maximum coverage
  const comprehensiveKeywords = [
    // Primary keywords
    "vehicle wraps Chicago", "car wraps Chicago", "truck wraps Chicago", "van wraps Chicago", 
    "fleet wraps Chicago", "vinyl wrap Chicago", "custom graphics Chicago", "commercial graphics Chicago",
    
    // Service-specific keywords
    "color change wraps Chicago", "luxury wraps Chicago", "3M vehicle wraps", "premium vinyl wraps",
    "wrap installation Chicago", "vehicle wrap design", "fleet branding Chicago", "mobile advertising",
    
    // Cost and pricing keywords
    "car wrap cost Chicago", "vehicle wrap pricing Chicago", "wrap installation cost", "fleet wrap pricing",
    
    // Competitive keywords
    "best vehicle wrap company Chicago", "professional wrap installers", "certified wrap technicians",
    "custom vehicle graphics", "vehicle wrap consultation", "wrap design services",
    
    // Location-based keywords
    "vehicle wraps near me", "Chicago area vehicle wraps", "Chicagoland vehicle graphics",
    "local wrap shop Chicago", "vehicle wrap services Chicago IL",
    
    // Long-tail keywords
    "cargo van wrap specialists Chicago", "sprinter van graphics Chicago",
    "box truck advertising wraps Chicago", "truck wrap lettering Chicago",
    "business vehicle branding Chicago", "mobile advertising vehicle wraps Chicago",
    "exotic car wraps Chicago", "luxury vehicle color change", "commercial fleet graphics"
  ];

  // Additional structured data for comprehensive coverage
  const additionalSchemas = [
    // Service schema
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Vehicle Wrap Services Chicago",
      "description": "Professional vehicle wrap installation services including car wraps, truck wraps, van wraps, and fleet graphics in Chicago IL",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Wrapping Chicago"
      },
      "areaServed": "Chicago, IL",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Vehicle Wrap Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Car Wraps"
            },
            "priceRange": "$2500-$5000"
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Truck Wraps"
            },
            "priceRange": "$3500-$7000"
          }
        ]
      }
    },
    // FAQ schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ];

  return (
    <>
      {/* Comprehensive SEO Optimization */}
      <FullSEOOptimization
        pageTitle="Vehicle Wraps Chicago | Car Wraps, Truck Wraps, Van Wraps & Fleet Graphics | 2025"
        pageDescription="Chicago's premier vehicle wrap specialists. Professional car wraps, truck wraps, van wraps, and fleet graphics with premium 3M vinyl. Custom designs, expert installation, and competitive pricing. Get your free quote today!"
        keywords={comprehensiveKeywords}
        h1Text="Professional Vehicle Wraps in Chicago"
        canonicalUrl="https://www.wrappingchicago.com/"
        structuredData={additionalSchemas}
        breadcrumbs={seoOptimizationBreadcrumbs}
        images={[
          {
            url: "https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png",
            alt: "Professional vehicle wraps in Chicago - Wrapping Chicago logo",
            caption: "Wrapping Chicago - Premier vehicle wrap services in Chicago IL"
          }
        ]}
        priority="critical"
      />
      
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
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
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
