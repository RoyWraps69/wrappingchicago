import React from "react";
import HomeSEO from "@/components/home/HomeSEO";
import PageSEO from "@/components/seo/PageSEO";
import InternalLinkingSection from "@/components/seo/InternalLinkingSection";
import Google2025SEOOptimizer from "@/components/seo/Google2025SEOOptimizer";
import AEOOptimizer from "@/components/seo/AEOOptimizer";
import LocalSEOBooster from "@/components/seo/LocalSEOBooster";
{/* Removed CoreWebVitalsOptimizer import - causing conflicts */}
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
      {/* ALL SEO COMPONENTS DISABLED FOR DEBUGGING */}
      {/* <Google2025SEOOptimizer... />
      <AEOOptimizer... />
      <LocalSEOBooster... />
      <HomeSEO /> */}
      
      {/* DEBUGGING: Testing Hero step by step */}
      <div style={{padding: '20px', backgroundColor: 'red', color: 'white'}}>
        <h1>TEST - Before Hero</h1>
      </div>
      
      {/* Simple Hero replacement */}
      <div style={{padding: '50px', backgroundColor: 'black', color: 'white'}}>
        <h1>SIMPLE HERO TEST</h1>
        <p>This replaces the broken Hero component</p>
      </div>
      
      <div style={{padding: '20px', backgroundColor: 'blue', color: 'white'}}>
        <h1>TEST - After Hero Replacement</h1>
      </div>
    </>
  );
};

export default Index;