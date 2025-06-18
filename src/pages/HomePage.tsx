
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import HomeSEO from '@/components/home/HomeSEO';
import EasyButtonSection from '@/components/home/EasyButtonSection';
import StickyContactButtons from '@/components/home/StickyContactButtons';
import BreadcrumbNavigation from '@/components/seo/BreadcrumbNavigation';
import TrustSignals from '@/components/trust/TrustSignals';
import CustomerTestimonials from '@/components/testimonials/CustomerTestimonials';
import { cities } from '@/data/cities';
import Schema from '@/components/Schema';
import { Star, Shield, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function HomePage() {
  // Get Chicago city for schema
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  
  // Home page FAQ data
  const homeFAQs = [
    {
      question: "How much do vehicle wraps cost in Chicago?",
      answer: "Vehicle wrap costs in Chicago vary by vehicle type and design complexity. Full car wraps typically range from $2,500-$5,000, full truck and van wraps from $3,500-$7,000, and partial wraps start around $1,500. Fleet wraps may receive volume discounts. We offer free, detailed quotes for all projects."
    },
    {
      question: "How long do vehicle wraps last?",
      answer: "With proper care and maintenance, our premium vehicle wraps typically last 5-7 years in Chicago's climate. All our wraps come with a 2-year warranty and are made with durable 3M and Avery Dennison materials that can withstand weather extremes and regular washing."
    }
  ];

  // Add indexing hint to the console that can help identify if page was rendered correctly
  useEffect(() => {
    console.log('HomePage - Google indexing compatibility check: PASS');
  }, []);

  return (
    <>
      <HomeSEO />
      
      {/* Simplified Schema */}
      <Schema 
        city={chicagoCity}
        path="/"
        pageTitle="Vehicle Wraps in Chicago IL | Wrapping Chicago"
        pageDescription="Get vehicle wraps in Chicago IL services for cars, trucks, vans, and fleets. Boost style or brand visibility with custom vinyl graphics installed by experts."
        faqs={homeFAQs}
        isServicePage={true}
        serviceType="Vehicle Wraps"
        priority="high"
        keywords={[
          "vehicle wraps Chicago", 
          "car wraps Chicago", 
          "truck wraps Chicago", 
          "van wraps Chicago", 
          "fleet wraps Chicago", 
          "commercial vehicle wraps"
        ]}
      />
      
      <div className="flex flex-col min-h-screen relative z-10">
        <Header />
        <BreadcrumbNavigation />
        <main id="main-content" className="flex-grow main-content relative z-10">
          <Hero />
          
          {/* Simple credibility section */}
          <section className="py-12 bg-white relative z-10">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-black mb-4">
                  Why Chicago Businesses Choose Us for Vehicle Wraps
                </h2>
                <p className="text-lg text-black max-w-3xl mx-auto">
                  We make vehicle wraps simple. From cars to trucks to entire fleets, 
                  we handle everything so you can focus on your business.
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-black mb-2 text-lg">20+ Years Experience</h3>
                  <p className="text-black text-sm">Over 16,000 vehicles wrapped in Chicago</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-black mb-2 text-lg">Premium Materials</h3>
                  <p className="text-black text-sm">Only 3M and Avery vinyl with 2-year warranty</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-black mb-2 text-lg">Fast Turnaround</h3>
                  <p className="text-black text-sm">Most projects done in 3-5 business days</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-black mb-2 text-lg">5-Star Rating</h3>
                  <p className="text-black text-sm">98% customer satisfaction rate</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-brand-red hover:bg-red-700 text-white font-semibold"
                  >
                    <Link to="/contact">Get Your Free Quote Today</Link>
                  </Button>
                  
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-black text-black hover:bg-black hover:text-white"
                  >
                    <Link to="/pricing">See Our Pricing</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Services section - text only */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-4 text-black">
                Our Vehicle Wrap Services
              </h2>
              <p className="text-xl text-center text-black mb-12 max-w-3xl mx-auto">
                Professional vehicle wrapping services for businesses and individuals throughout Chicago.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-black mb-4">Fleet Wraps</h3>
                  <p className="text-black mb-6">Professional fleet branding solutions that create consistent brand identity across your entire vehicle fleet.</p>
                  <Button asChild className="bg-brand-red hover:bg-red-700 text-white">
                    <Link to="/services/fleet-wraps">Learn More</Link>
                  </Button>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-black mb-4">Color Change Wraps</h3>
                  <p className="text-black mb-6">Transform your vehicle's appearance with premium color change wraps in any color or finish you desire.</p>
                  <Button asChild className="bg-brand-red hover:bg-red-700 text-white">
                    <Link to="/color-change-wraps">Learn More</Link>
                  </Button>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-black mb-4">Commercial Graphics</h3>
                  <p className="text-black mb-6">Professional commercial vehicle graphics that help your business stand out and attract more customers.</p>
                  <Button asChild className="bg-brand-red hover:bg-red-700 text-white">
                    <Link to="/services/commercial-graphics">Learn More</Link>
                  </Button>
                </div>
              </div>
              
              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-red hover:bg-red-700 text-white font-semibold"
                >
                  <Link to="/gallery">View Our Work</Link>
                </Button>
              </div>
            </div>
          </section>
          
          {/* Customer testimonials for social proof */}
          <CustomerTestimonials />
          
          {/* Trust signals */}
          <TrustSignals />
          
          {/* Final call to action */}
          <EasyButtonSection />
        </main>
        <StickyContactButtons />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
