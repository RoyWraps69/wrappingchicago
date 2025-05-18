import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { cities } from '@/data/cities';
import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import AreasServedSection from '@/components/home/AreasServedSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import HomeSEO from '@/components/home/HomeSEO';
import { useGalleryImages } from '@/hooks/useGalleryImages';
import Schema from '@/components/Schema';
import AIWrapSchema from '@/components/ai-wrap-ideas/AIWrapSchema';
import EasyButtonSection from '@/components/home/EasyButtonSection';

// Import the home page components
import InfoBar from '@/components/home/InfoBar';
import QuickLinksBar from '@/components/home/QuickLinksBar';
import StickyContactButtons from '@/components/home/StickyContactButtons';
import TrustIndicators from '@/components/home/TrustIndicators';
import InstallationFacility from '@/components/home/InstallationFacility';
import VehicleWrapFAQ from '@/components/home/VehicleWrapFAQ';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  // Use our custom hook to get the images
  const { fleetWrapVan, colorChangeVan, commercialGraphics } = useGalleryImages();
  
  // For the Schema component, choose Chicago as the default city
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  
  // FAQ data for schema
  const faqData = [
    {
      question: "How much does a vehicle wrap cost in Chicago?",
      answer: "Vehicle wrap costs in Chicago typically range from $2,500 to $5,000 for a full wrap, depending on vehicle size and design complexity. Partial wraps start around $1,500."
    },
    {
      question: "How long does a vehicle wrap last?",
      answer: "With proper care and maintenance, a professional vehicle wrap can last 5-7 years. We use premium 3M materials that provide excellent durability and UV resistance."
    },
    {
      question: "How long does it take to wrap a vehicle?",
      answer: "Most vehicle wraps can be completed in 2-3 days. Fleet projects are scheduled according to your timeline and business needs."
    },
    {
      question: "Will a vehicle wrap damage my paint?",
      answer: "No, professional vehicle wraps protect your paint and when removed properly, leave the original paint in excellent condition, often better than vehicles without wraps."
    }
  ];

  // SEO keywords
  const keywords = [
    "vehicle wraps Chicago", 
    "car wraps Chicago", 
    "truck wraps Chicago", 
    "van wraps Chicago", 
    "fleet wraps Chicago", 
    "commercial vehicle wraps", 
    "custom vehicle wraps", 
    "vehicle graphics Chicago", 
    "vinyl wraps Chicago", 
    "3M vehicle wraps"
  ];

  return (
    <>
      <HomeSEO />
      <Schema 
        city={chicagoCity} 
        path="/"
        pageTitle="Vehicle Wraps Chicago | Premium Car, Truck & Van Wrapping Services"
        pageDescription="Chicago's leading vehicle wrap company offering professional car wraps, truck wraps, van wraps, fleet wraps & commercial graphics with expert installation using premium 3M materials."
        faqs={faqData}
        keywords={keywords}
      />
      <AIWrapSchema />
      
      {/* Add additional link rel tags for key pages */}
      <Helmet>
        <link rel="canonical" href="https://www.wrappingchicago.com/" />
        
        {/* Add link relationships to help search engines discover key pages */}
        <link rel="next" href="https://www.wrappingchicago.com/services" />
        
        {/* Define main pages as important in site structure */}
        <link rel="prerender" href="https://www.wrappingchicago.com/about" />
        <link rel="prerender" href="https://www.wrappingchicago.com/services" />
        <link rel="prerender" href="https://www.wrappingchicago.com/gallery" />
        <link rel="prerender" href="https://www.wrappingchicago.com/contact" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          
          {/* Information Bar with Contact Buttons */}
          <InfoBar />
          
          {/* Service Types Bar - Quick Links */}
          <QuickLinksBar />
          
          {/* Fixed Contact Buttons */}
          <StickyContactButtons />
          
          <div className="py-12 racing-stripes">
            <ServicesSection 
              fleetWrapVan={fleetWrapVan}
              colorChangeVan={colorChangeVan}
              commercialGraphics={commercialGraphics}
            />
          </div>
          
          {/* Trust Indicators Section */}
          <TrustIndicators />
          
          <WhyChooseUsSection />
          
          {/* Contact Studio Image */}
          <InstallationFacility />
          
          <div className="py-12 carbon-fiber-light">
            <AreasServedSection cities={cities} />
          </div>
          
          {/* Vehicle Wrap FAQ */}
          <VehicleWrapFAQ />
          
          {/* Internal Links Section - Expanded for better site crawlability */}
          <div className="py-8 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Explore Our Vehicle Wrap Services</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Keep existing links */}
                <Link to="/services/car-wraps" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-brand-navy">Car Wraps</h3>
                  <p className="text-sm text-gray-600">Professional car wrapping services</p>
                </Link>
                <Link to="/services/truck-wraps" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-brand-navy">Truck Wraps</h3>
                  <p className="text-sm text-gray-600">Commercial truck branding solutions</p>
                </Link>
                <Link to="/services/van-wraps" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-brand-navy">Van Wraps</h3>
                  <p className="text-sm text-gray-600">Delivery and service van wraps</p>
                </Link>
                <Link to="/services/fleet-wraps" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-brand-navy">Fleet Wraps</h3>
                  <p className="text-sm text-gray-600">Consistent branding for vehicle fleets</p>
                </Link>
                <Link to="/gallery" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-brand-navy">Gallery</h3>
                  <p className="text-sm text-gray-600">View our completed projects</p>
                </Link>
                <Link to="/locations" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-brand-navy">Service Areas</h3>
                  <p className="text-sm text-gray-600">Chicago and surrounding suburbs</p>
                </Link>
                <Link to="/about" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-brand-navy">About Us</h3>
                  <p className="text-sm text-gray-600">Our experience and commitment</p>
                </Link>
                <Link to="/contact" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-brand-navy">Contact</h3>
                  <p className="text-sm text-gray-600">Request a quote today</p>
                </Link>
                
                {/* Add more service type links for better site crawlability */}
                <Link to="/services/color-change-wraps" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-brand-navy">Color Change</h3>
                  <p className="text-sm text-gray-600">Transform your vehicle's appearance</p>
                </Link>
                <Link to="/services/commercial-graphics" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-brand-navy">Commercial Graphics</h3>
                  <p className="text-sm text-gray-600">Business branding solutions</p>
                </Link>
                <Link to="/services/protective-films" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-brand-navy">Protective Films</h3>
                  <p className="text-sm text-gray-600">Preserve your vehicle's finish</p>
                </Link>
                <Link to="/services/vehicle-lettering" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-brand-navy">Vehicle Lettering</h3>
                  <p className="text-sm text-gray-600">Professional text and graphics</p>
                </Link>
              </div>
            </div>
            
            {/* Location links for improved local SEO */}
            <div className="container mx-auto px-4 mt-8">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Our Service Areas</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {cities.slice(0, 10).map((city) => (
                  <Link 
                    key={city.slug}
                    to={`/vehicle-wraps-${city.slug}-il`} 
                    className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                  >
                    <span className="font-semibold text-brand-navy">{city.name}, IL</span>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-4">
                <Link to="/locations" className="inline-block text-brand-red hover:underline font-medium">
                  View All Service Areas →
                </Link>
              </div>
            </div>
          </div>
          
          {/* Easy Button Section - Moved to bottom */}
          <EasyButtonSection />
          
          <CallToAction />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
