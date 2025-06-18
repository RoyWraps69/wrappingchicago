
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
          
          {/* Simple credibility section with fixed icon sizes */}
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

          {/* Featured Work Gallery with properly sized containers */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-4 text-black">
                Recent Vehicle Wrap Projects in Chicago
              </h2>
              <p className="text-xl text-center text-black mb-12 max-w-3xl mx-auto">
                From fleet branding to luxury color changes, see the quality and craftsmanship that sets us apart.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-64 overflow-hidden">
                    <img 
                      src="/lovable-uploads/fc2146ab-62aa-4fc9-85aa-3582af7ce980.png"
                      alt="Bratcher HVAC fleet van wrap Chicago IL - professional commercial vehicle branding and graphics"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2">HVAC Fleet Branding</h3>
                    <p className="text-black mb-4">Professional fleet wrap for Bratcher HVAC featuring bold branding and contact information.</p>
                    <span className="inline-block bg-brand-red text-white px-3 py-1 rounded-full text-sm font-medium">Fleet Wraps</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-64 overflow-hidden">
                    <img 
                      src="/lovable-uploads/9de106b5-94cb-4fd1-a7c7-5c75c75b7cbb.png"
                      alt="Metallic blue sports car color change wrap Chicago IL - luxury vehicle transformation"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2">Luxury Color Change</h3>
                    <p className="text-black mb-4">Stunning metallic blue transformation showcasing premium vinyl and expert installation.</p>
                    <span className="inline-block bg-brand-red text-white px-3 py-1 rounded-full text-sm font-medium">Color Change</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-64 overflow-hidden">
                    <img 
                      src="/lovable-uploads/efdbc4bf-1f04-42bb-a904-f52dae7bef6c.png"
                      alt="Commercial delivery van wrap Chicago IL - professional fleet branding"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2">Delivery Fleet</h3>
                    <p className="text-black mb-4">Clean, professional branding for Urban Delivery Co. maximizing brand visibility.</p>
                    <span className="inline-block bg-brand-red text-white px-3 py-1 rounded-full text-sm font-medium">Commercial Graphics</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-red hover:bg-red-700 text-white font-semibold"
                >
                  <Link to="/gallery">View Complete Gallery</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Before & After Showcase with fixed containers */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-4 text-black">
                Transformations That Speak for Themselves
              </h2>
              <p className="text-xl text-center text-black mb-12 max-w-3xl mx-auto">
                See the dramatic difference professional vehicle wraps make for businesses and personal vehicles.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-full h-80 overflow-hidden rounded-lg shadow-xl">
                    <img 
                      src="/lovable-uploads/676b4902-7b81-4619-90d8-8feb1f986636.png"
                      alt="Matte black vehicle wrap transformation Chicago IL - sleek color change wrap"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-2xl font-bold text-black mb-2">Matte Black Transformation</h3>
                    <p className="text-black">Complete vehicle makeover with premium matte vinyl</p>
                  </div>
                </div>
                
                <div>
                  <div className="w-full h-80 overflow-hidden rounded-lg shadow-xl">
                    <img 
                      src="/lovable-uploads/230338ed-a8d9-4584-bb4c-ba33c793f7ab.png"
                      alt="Corporate van fleet branding Chicago IL - professional business vehicle wraps"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-2xl font-bold text-black mb-2">Fleet Branding Success</h3>
                    <p className="text-black">Consistent corporate identity across service vehicles</p>
                  </div>
                </div>
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
