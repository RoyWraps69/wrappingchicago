import React from "react";
import { SEOCoordinatorProvider } from "@/components/seo/SEOCoordinator";
import { SchemaDeduplicatorProvider } from "@/components/seo/SchemaDeduplicator";
import Google2025SEOOptimizerCoordinated from "@/components/seo/Google2025SEOOptimizerCoordinated";
import AEOOptimizerCoordinated from "@/components/seo/AEOOptimizerCoordinated";
import LocalSEOBoosterCoordinated from "@/components/seo/LocalSEOBoosterCoordinated";
import CompetitiveRankingBooster from "@/components/seo/CompetitiveRankingBooster";
import LocalDominanceBooster from "@/components/seo/LocalDominanceBooster";
import HomePageSections from "@/components/home/HomePageSections";

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
      answer: "Superior vehicle wraps deliver 5-7 years of exceptional performance with appropriate care. Engineered materials withstand Chicago's seasonal temperature extremes while maintaining color integrity and adhesive strength throughout the product lifecycle.",
      category: 'durability' as const
    },
    {
      question: "Will a vehicle wrap damage my car's paint?",
      answer: "Vehicle wraps enhance paint preservation through advanced protective technology. Certified installation techniques ensure damage-free application and removal while maintaining factory finish quality and vehicle resale value.",
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
      answer: "Truck wraps enhance paint protection through advanced vinyl barrier technology. Professional application preserves original finish integrity while providing superior protection against road hazards and environmental damage."
    },
    {
      question: "How long does installation take for trade vehicles?",
      answer: "Most trade vehicle wraps are completed within 2-3 days. Simple lettering can be done same day."
    }
  ];

  
  
  const chicagoNeighborhoods = [
    "Lakeview", "Logan Square", "Andersonville", "Bucktown", "Gold Coast",
    "Lincoln Park", "Wicker Park", "River North", "Loop", "West Loop",
    "Pilsen", "Little Village", "Chinatown", "Old Town", "North Center"
  ];

  return (
    <SchemaDeduplicatorProvider>
      <SEOCoordinatorProvider>
        {/* Competitive ranking boosters for top Google positions */}
        <CompetitiveRankingBooster 
          primaryKeyword="Chicago Vehicle Wraps"
          location="Chicago, IL"
          businessType="vehicle wrap"
        />
        <LocalDominanceBooster 
          city="Chicago"
          neighborhoods={chicagoNeighborhoods}
          serviceRadius={25}
        />
        
        {/* All SEO optimizers working together in harmony */}
      <Google2025SEOOptimizerCoordinated
        pageTitle="Chicago Vehicle Wraps for Plumbers, Electricians & HVAC | Get More Calls"
        pageDescription="Turn your work truck into a customer magnet! Chicago's trade professionals trust us for vehicle wraps that get noticed. Same week service, won't hurt your paint."
        businessType="general"
        serviceArea={['Chicago', 'Evanston', 'Naperville', 'Schaumburg', 'Oak Park']}
        primaryKeywords={tradeKeywords}
        faqData={tradeFAQs}
        reviewCount={247}
        averageRating={4.9}
      />
      
      <AEOOptimizerCoordinated
        businessType="general"
        location="Chicago"
        serviceKeywords={tradeKeywords}
      />
      
      <LocalSEOBoosterCoordinated
        cityName="Chicago"
        businessType="general"
        serviceRadius={35}
        neighboringCities={['Evanston', 'Naperville', 'Schaumburg', 'Oak Park', 'Cicero']}
      />

      {/* Page Content */}
      <div className="min-h-screen">
        <HomePageSections />
      </div>
    </SEOCoordinatorProvider>
    </SchemaDeduplicatorProvider>
  );
};

export default Index;