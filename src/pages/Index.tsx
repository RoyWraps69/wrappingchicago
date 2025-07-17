import React from "react";
import HomeSEO from "@/components/home/HomeSEO";
import PageSEO from "@/components/seo/PageSEO";
import InternalLinkingSection from "@/components/seo/InternalLinkingSection";
import Google2025SEOOptimizer from "@/components/seo/Google2025SEOOptimizer";
import AEOOptimizer from "@/components/seo/AEOOptimizer";
import LocalSEOBooster from "@/components/seo/LocalSEOBooster";
import CoreWebVitalsOptimizer from "@/components/seo/CoreWebVitalsOptimizer";
import { getAllKeywords } from "@/components/home/seo/HomeKeywords";
import Hero from "@/components/home/Hero";

const Index = () => {
  const tradeKeywords = [
    'plumber truck wraps Chicago', 'electrician van wraps', 'HVAC vehicle graphics',
    'contractor truck lettering', 'trade vehicle wraps Chicago', 'service truck advertising',
    'Chicago commercial vehicle wraps', 'trade business vehicle graphics'
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
      
      <CoreWebVitalsOptimizer />
      
      {/* Legacy SEO components */}
      <HomeSEO />
      
      {/* Page Content with Proper Heading Structure */}
      <div className="min-h-screen">
        {/* H1 is handled in Hero component */}
        <Hero />
        
        {/* Internal Linking for SEO */}
        <InternalLinkingSection />
        
        {/* Core sections with proper SEO structure */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Professional Vehicle Wrap Services</h2>
            <p className="text-lg text-muted-foreground">Complete vehicle transformation solutions</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;