import React from "react";
import HomeSEO from "@/components/home/HomeSEO";
import PageSEO from "@/components/seo/PageSEO";
import InternalLinkingSection from "@/components/seo/InternalLinkingSection";
import { getAllKeywords } from "@/components/home/seo/HomeKeywords";
import Hero from "@/components/home/Hero";
// Components will be created if missing

const Index = () => {
  return (
    <>
      {/* Enhanced SEO for Homepage */}
      <HomeSEO />
      <PageSEO 
        title="Chicago Vehicle Wraps for Plumbers, Electricians & HVAC | Get More Calls"
        description="Turn your work truck into a customer magnet! Chicago's trade professionals trust us for vehicle wraps that get noticed. Plumbers, electricians, HVAC techs - we wrap your trucks so they work harder for your business."
        keywords={getAllKeywords()}
        h1="Chicago Vehicle Wraps That Get You More Jobs"
        h2={["Trade Vehicle Wraps That Work", "Professional Installation You Can Trust", "All Chicago Area Coverage"]}
        h3={["Won't Hurt Your Paint", "Same Week Service", "Real Business Results"]}
        pageType="homepage"
        businessSchema={true}
        serviceSchema={true}
      />
      
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