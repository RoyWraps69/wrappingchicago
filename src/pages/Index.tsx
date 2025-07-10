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
        title="Vehicle Wraps Chicago | Car Wraps, Truck Wraps & Fleet Graphics 2024"
        description="Chicago's premier vehicle wrap specialists serving the entire metropolitan area with custom car wraps, truck wraps, van wraps, and fleet graphics using premium 3M vinyl. Professional installation and design consultation across Chicagoland with certified technicians."
        keywords={getAllKeywords()}
        h1="Vehicle Wraps Chicago - Premium Car Wraps & Fleet Graphics"
        h2={["Professional Vehicle Wrap Services", "Premium Materials & Installation", "Chicago Metro Coverage"]}
        h3={["3M Certified Installers", "Free Design Consultation", "5-Year Warranty"]}
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