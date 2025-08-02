
import React from 'react';
import FullSEOOptimization from '@/components/seo/FullSEOOptimization';
import BreadcrumbSchema from '@/components/schemas/BreadcrumbSchema';

const HomePageSEO = () => {
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
      answer: "Vehicle wrap investment varies by project scope and vehicle size. Compact vehicles typically range $2,200-$3,800, larger vehicles $3,200-$5,500. Partial coverage starts around $800. Every estimate includes design development, premium materials, and certified installation."
    },
    {
      question: "How long does a vehicle wrap last?",
      answer: "Premium vehicle wraps maintain optimal appearance for 5-7 years with appropriate maintenance. Engineered materials resist Chicago weather extremes while preserving color saturation and adhesive integrity throughout their operational lifespan."
    },
    {
      question: "How long does it take to wrap a vehicle?",
      answer: "Most vehicle wraps can be completed in 2-3 days. Fleet projects are scheduled according to your timeline and business needs. Rush services available for urgent projects."
    },
    {
      question: "Will a vehicle wrap damage my paint?",
      answer: "Vehicle wraps enhance paint preservation through protective barrier technology. Certified application processes ensure damage-free installation and removal while maintaining original finish quality and enhancing resale value."
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
    // FAQ schema removed - handled by coordinated optimizers
  ];

  return (
    <>
      {/* Comprehensive SEO Optimization */}
      <FullSEOOptimization
        pageTitle="Vehicle Wraps Chicago | Car Wraps, Truck Wraps, Van Wraps & Fleet Graphics | 2025"
        pageDescription="Chicago's leading vehicle transformation specialists. Comprehensive automotive customization including color modification, commercial fleet branding, luxury enhancement, and business marketing solutions using advanced application technology. Request consultation today!"
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
    </>
  );
};

export default HomePageSEO;
