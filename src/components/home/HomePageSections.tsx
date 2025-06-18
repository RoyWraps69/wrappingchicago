import React from 'react';
import Hero from '@/components/home/Hero';
import InfoBar from '@/components/home/InfoBar';
import QuickLinksBar from '@/components/home/QuickLinksBar';
import StickyContactButtons from '@/components/home/StickyContactButtons';
import ServicesSection from '@/components/home/ServicesSection';
import TrustIndicators from '@/components/home/TrustIndicators';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import InstallationFacility from '@/components/home/InstallationFacility';
import AreasServedSection from '@/components/home/AreasServedSection';
import VehicleWrapFAQ from '@/components/home/VehicleWrapFAQ';
import { ExploreServices, ServiceAreaLinks } from '@/components/home/indexed-sections';
import EasyButtonSection from '@/components/home/EasyButtonSection';
import CallToAction from '@/components/CallToAction';
import { useGalleryImages } from '@/hooks/useGalleryImages';
import { cities } from '@/data/cities';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HomePageSections = () => {
  // Use our custom hook to get the images
  const { fleetWrapVan, colorChangeVan, commercialGraphics } = useGalleryImages();

  return (
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
      
      {/* Featured Work Gallery - SMALLER IMAGE SIZING */}
      <section className="py-16 bg-white" aria-labelledby="featured-work-heading">
        <div className="container mx-auto px-4">
          <h2 id="featured-work-heading" className="text-4xl font-bold text-center mb-4 text-black">
            Recent Vehicle Wrap Projects in Chicago
          </h2>
          <p className="text-xl text-center text-black mb-12 max-w-3xl mx-auto">
            From fleet branding to luxury color changes, see the quality and craftsmanship that sets us apart.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-32 overflow-hidden">
                <img 
                  src="/lovable-uploads/fc2146ab-62aa-4fc9-85aa-3582af7ce980.png"
                  alt="Bratcher HVAC fleet van wrap - professional commercial vehicle branding in Chicago"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">HVAC Fleet Branding</h3>
                <p className="text-black mb-4">Professional fleet wrap for Bratcher HVAC featuring bold branding and contact information.</p>
                <span className="inline-block bg-brand-red text-white px-3 py-1 rounded-full text-sm font-medium">Fleet Wraps</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-32 overflow-hidden">
                <img 
                  src="/lovable-uploads/9de106b5-94cb-4fd1-a7c7-5c75c75b7cbb.png"
                  alt="Metallic blue sports car color change wrap - luxury vehicle transformation in Chicago"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">Luxury Color Change</h3>
                <p className="text-black mb-4">Stunning metallic blue transformation showcasing premium vinyl and expert installation.</p>
                <span className="inline-block bg-brand-red text-white px-3 py-1 rounded-full text-sm font-medium">Color Change</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-32 overflow-hidden">
                <img 
                  src="/lovable-uploads/efdbc4bf-1f04-42bb-a904-f52dae7bef6c.png"
                  alt="Commercial delivery van wrap - professional fleet branding for Urban Delivery Co in Chicago"
                  className="absolute inset-0 w-full h-full object-cover object-center"
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
      
      {/* Services Section with proper heading structure */}
      <section className="py-12 racing-stripes" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <h2 id="services-heading" className="text-3xl font-bold text-center mb-8 speakable text-black">
            Our Vehicle Wrap Services in Chicago
          </h2>
          <ServicesSection 
            fleetWrapVan={fleetWrapVan}
            colorChangeVan={colorChangeVan}
            commercialGraphics={commercialGraphics}
          />
        </div>
      </section>
      
      {/* Before & After Showcase - SMALLER IMAGE SIZING */}
      <section className="py-16 bg-gray-50" aria-labelledby="before-after-heading">
        <div className="container mx-auto px-4">
          <h2 id="before-after-heading" className="text-4xl font-bold text-center mb-4 text-black">
            Transformations That Speak for Themselves
          </h2>
          <p className="text-xl text-center text-black mb-12 max-w-3xl mx-auto">
            See the dramatic difference professional vehicle wraps make for businesses and personal vehicles.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-full h-40 overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="/lovable-uploads/676b4902-7b81-4619-90d8-8feb1f986636.png"
                  alt="Matte black vehicle wrap transformation - sleek color change wrap in Chicago"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-black mb-2">Matte Black Transformation</h3>
                <p className="text-black">Complete vehicle makeover with premium matte vinyl</p>
              </div>
            </div>
            
            <div>
              <div className="relative w-full h-40 overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="/lovable-uploads/230338ed-a8d9-4584-bb4c-ba33c793f7ab.png"
                  alt="Corporate van fleet branding - professional business vehicle wraps in Chicago"
                  className="absolute inset-0 w-full h-full object-cover object-center"
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
      
      {/* Trust Indicators Section */}
      <section aria-labelledby="trust-heading">
        <h2 id="trust-heading" className="sr-only">Why Choose Wrapping Chicago</h2>
        <TrustIndicators />
      </section>
      
      {/* Why Choose Us Section */}
      <section aria-labelledby="why-choose-heading">
        <WhyChooseUsSection />
      </section>
      
      {/* Vehicle Types Showcase - SMALLER IMAGE SIZING */}
      <section className="py-16 bg-white" aria-labelledby="vehicle-types-heading">
        <div className="container mx-auto px-4">
          <h2 id="vehicle-types-heading" className="text-4xl font-bold text-center mb-4 text-black">
            We Wrap Every Type of Vehicle
          </h2>
          <p className="text-xl text-center text-black mb-12 max-w-3xl mx-auto">
            From compact cars to heavy-duty trucks, we have the expertise to handle any vehicle wrap project.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="relative w-full h-20 overflow-hidden rounded-lg shadow-md mb-4">
                <img 
                  src="/lovable-uploads/77a1f4b1-efe3-4779-8646-f92e01667a29.png"
                  alt="Sports car with custom racing stripes - performance vehicle wraps in Chicago"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="font-bold text-black">Sports Cars</h3>
            </div>
            
            <div className="text-center">
              <div className="relative w-full h-20 overflow-hidden rounded-lg shadow-md mb-4">
                <img 
                  src="/lovable-uploads/76973c14-ac60-4c81-afa1-555b0f4f5f36.png"
                  alt="Corporate pickup truck fleet wrap - commercial vehicle branding in Chicago"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="font-bold text-black">Pickup Trucks</h3>
            </div>
            
            <div className="text-center">
              <div className="relative w-full h-20 overflow-hidden rounded-lg shadow-md mb-4">
                <img 
                  src="/lovable-uploads/9bb3d94e-589d-4daf-b35e-e19e80610439.png"
                  alt="Service van with professional branding - commercial vehicle wraps in Chicago"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="font-bold text-black">Service Vans</h3>
            </div>
            
            <div className="text-center">
              <div className="relative w-full h-20 overflow-hidden rounded-lg shadow-md mb-4">
                <img 
                  src="/lovable-uploads/0ec34598-bcc3-486d-9021-dd527bafe83a.png"
                  alt="Heavy-duty truck with commercial graphics - large vehicle wraps in Chicago"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="font-bold text-black">Heavy Trucks</h3>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Studio Image */}
      <section aria-labelledby="facility-heading">
        <h2 id="facility-heading" className="sr-only">Our Installation Facility</h2>
        <InstallationFacility />
      </section>
      
      {/* Areas Served Section */}
      <section className="py-12 carbon-fiber-light" aria-labelledby="areas-heading">
        <div className="container mx-auto px-4">
          <h2 id="areas-heading" className="text-3xl font-bold text-center mb-8 speakable text-black">
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
  );
};

export default HomePageSections;
