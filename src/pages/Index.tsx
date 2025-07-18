import React from "react";
import ComprehensiveContentGenerator from "@/components/seo/ComprehensiveContentGenerator";
import EnhancedInternalLinking from "@/components/seo/EnhancedInternalLinking";
import HomeSEO from "@/components/home/HomeSEO";
import PageSEO from "@/components/seo/PageSEO";
import InternalLinkingSection from "@/components/seo/InternalLinkingSection";
import Google2025SEOOptimizer from "@/components/seo/Google2025SEOOptimizer";
import AEOOptimizer from "@/components/seo/AEOOptimizer";
import LocalSEOBooster from "@/components/seo/LocalSEOBooster";
import AdvancedSEODominator from "@/components/seo/AdvancedSEODominator";
import FeaturedSnippetOptimizer from "@/components/seo/FeaturedSnippetOptimizer";
import ReviewSchemaGenerator, { chicagoVehicleWrapReviews } from "@/components/seo/ReviewSchemaGenerator";
import CompetitorAnalysisOptimizer from "@/components/seo/CompetitorAnalysisOptimizer";
{/* Removed CoreWebVitalsOptimizer import - causing conflicts */}
import { getAllKeywords } from "@/components/home/seo/HomeKeywords";
import Hero from "@/components/home/Hero";

const Index = () => {
  const tradeKeywords = [
    'vehicle wraps Chicago', 'car wraps Chicago', 'truck wraps Chicago', 'van wraps Chicago',
    'fleet wraps Chicago', 'commercial vehicle wraps', 'custom car wraps', 'vinyl wraps Chicago',
    'auto wraps Chicago', 'vehicle graphics Chicago', 'car wrap cost', 'truck wrap cost',
    'van wrap cost', 'vehicle wrap installation', 'mobile vehicle wraps', 'same day car wrap',
    'professional vehicle wraps', '3M vehicle wraps', 'Avery Dennison wraps', 'vehicle wrap near me',
    'car wrap near me', 'truck wrap near me', 'wrap shop near me', 'Chicago vehicle wrap company',
    'best vehicle wraps Chicago', 'premium car wraps', 'commercial truck wraps', 'fleet vehicle wraps'
  ];

  const featuredSnippetQuestions = [
    {
      question: "How much does a vehicle wrap cost in Chicago?",
      answer: "Vehicle wrap costs in Chicago range from $1,200 for partial wraps to $5,000+ for full premium wraps. Car wraps average $2,500-$4,000, truck wraps $3,500-$6,000, and van wraps $2,800-$4,500. Cost factors include vehicle size, wrap coverage, design complexity, and material quality.",
      category: 'cost' as const
    },
    {
      question: "How long do vehicle wraps last?", 
      answer: "Professional vehicle wraps last 5-7 years with proper care. Premium 3M and Avery Dennison materials are designed to withstand Chicago weather, UV rays, and daily wear while protecting your original paint.",
      category: 'durability' as const
    },
    {
      question: "Will a vehicle wrap damage my car's paint?",
      answer: "No, professional vehicle wraps protect your paint. High-quality vinyl with proper installation preserves your original paint finish and can be removed without damage by certified installers.",
      category: 'process' as const
    }
  ];

  const uniqueAdvantages = [
    "Only Chicago wrap shop with 24/7 mobile installation service",
    "AI-powered design preview technology for instant mockups", 
    "Same-day wrap repair and touch-up services",
    "Exclusive partnership with 3M for latest materials",
    "GPS fleet tracking integration for business customers",
    "Real-time ROI tracking and marketing analytics",
    "Extended 5-year comprehensive warranty program",
    "Green vehicle wrap recycling program"
  ];

  const tradeFAQs = [
    {
      question: "How much do plumber truck wraps cost in Chicago?",
      answer: "Plumber truck wraps in Chicago typically cost $2,500-$4,500 depending on truck size. Most plumbers see ROI within 6 months through increased service calls."
    },
    {
      question: "Will wrapping my work truck hurt the paint?",
      answer: "No, professional vehicle wraps actually protect your truck's original paint. High-quality vinyl can be removed without damage."
    },
    {
      question: "How long does installation take for trade vehicles?",
      answer: "Most trade vehicle wraps are completed within 2-3 days. Simple lettering can be done same day."
    }
  ];

  console.log('Index component rendering...');
  
  return (
    <>
      {/* Enhanced SEO Stack for Google 2025 */}
      <Google2025SEOOptimizer
        pageTitle="Chicago Vehicle Wraps for Plumbers, Electricians & HVAC | Get More Calls"
        pageDescription="Turn your work truck into a customer magnet! Chicago's trade professionals trust us for vehicle wraps that get noticed. Same week service, won't hurt your paint."
        businessType="general"
        serviceArea={['Chicago', 'Evanston', 'Naperville', 'Schaumburg', 'Oak Park']}
        primaryKeywords={tradeKeywords}
        faqData={tradeFAQs}
        reviewCount={247}
        averageRating={4.9}
      />
      
      <AEOOptimizer
        businessType="general"
        location="Chicago"
        serviceKeywords={tradeKeywords}
      />
      
      <LocalSEOBooster
        cityName="Chicago"
        businessType="general"
        serviceRadius={35}
        neighboringCities={['Evanston', 'Naperville', 'Schaumburg', 'Oak Park', 'Cicero']}
      />
      
      {/* Removed CoreWebVitalsOptimizer - causing conflicts */}
      
      {/* Legacy SEO components */}
      <HomeSEO />
      
      {/* Page Content with Comprehensive SEO Content */}
      <div className="min-h-screen">
        <Hero />
        
        {/* Comprehensive content to meet word count requirements */}
        <ComprehensiveContentGenerator />
        
        {/* Enhanced internal linking for better SEO */}
        <EnhancedInternalLinking />
        
        {/* Internal Linking for SEO */}
        <InternalLinkingSection />
      </div>
    </>
  );
};

export default Index;