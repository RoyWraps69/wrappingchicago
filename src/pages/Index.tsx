
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
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Car, Truck, Shield, CheckCircle2 } from 'lucide-react';
import ContactStudioImage from '@/components/contact/ContactStudioImage';

const Index = () => {
  // Use our custom hook to get the images
  const { fleetWrapVan, colorChangeVan, commercialGraphics } = useGalleryImages();
  
  // For the Schema component, choose Chicago as the default city
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];

  return (
    <>
      <HomeSEO />
      <Schema 
        city={chicagoCity} 
        path="/"
        pageTitle="Vehicle Wraps Chicago | Premium Car, Truck & Van Wrapping Services"
        pageDescription="Chicago's leading vehicle wrap company offering professional car wraps, truck wraps, van wraps, fleet wraps & commercial graphics with expert installation using premium 3M materials."
      />
      <AIWrapSchema />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          
          {/* Information Bar with Contact Buttons */}
          <div className="bg-brand-navy text-white py-4">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-brand-red" />
                  <span className="text-sm md:text-base">Chicago's #1 Vehicle Wrap Company • Premium 3M Materials • 2-Year Warranty</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="bg-brand-red hover:bg-red-700 text-white"
                  >
                    <Link to="/contact" className="inline-flex items-center">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Request a Quote
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-white/30 bg-white/10 text-white hover:bg-white/20"
                  >
                    <a href="tel:3125971286" className="inline-flex items-center">
                      <Phone className="mr-2 h-4 w-4" />
                      (312) 597-1286
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Types Bar - Quick Links */}
          <div className="bg-gray-100 py-3 border-y border-gray-200">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center md:justify-between items-center gap-3 text-sm">
                <span className="font-medium text-gray-700">Our Vehicle Wrap Services:</span>
                <div className="flex flex-wrap gap-2">
                  <Link to="/services/car-wraps" className="flex items-center hover:text-brand-red">
                    <Car className="mr-1 h-4 w-4 text-brand-red" />
                    Car Wraps
                  </Link>
                  <Link to="/services/truck-wraps" className="flex items-center hover:text-brand-red">
                    <Truck className="mr-1 h-4 w-4 text-brand-red" />
                    Truck Wraps
                  </Link>
                  <Link to="/services/van-wraps" className="flex items-center hover:text-brand-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-brand-red">
                      <path d="M10 17h4V8h-4z"/>
                      <path d="M2 9v8h10V9c0-4-1.5-5-5-5S2 5 2 9z"/>
                      <path d="M12 9v8h10V9c0-4-1.5-5-5-5s-5 1-5 5z"/>
                    </svg>
                    Van Wraps
                  </Link>
                  <Link to="/services/fleet-wraps" className="flex items-center hover:text-brand-red">
                    <Shield className="mr-1 h-4 w-4 text-brand-red" />
                    Fleet Wraps
                  </Link>
                  <Link to="/services/color-change-wraps" className="flex items-center hover:text-brand-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-brand-red">
                      <path d="M12 2v8"/>
                      <path d="M4.93 10.93 9.17 15.17"/>
                      <path d="M2 18h12"/>
                      <path d="M19 18h3"/>
                      <circle cx="12" cy="18" r="2"/>
                      <path d="M18 9v9"/>
                    </svg>
                    Color Change Wraps
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fixed Contact Buttons */}
          <div className="sticky top-4 z-50 w-full max-w-2xl mx-auto px-4">
            <div className="flex justify-center gap-4 p-3 bg-black/80 backdrop-blur-sm rounded-full shadow-lg border border-white/10">
              <Button
                asChild
                size="sm"
                className="bg-brand-red hover:bg-red-700 text-white rounded-full"
              >
                <Link to="/contact" className="inline-flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Get a Free Quote
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-full"
              >
                <a href="tel:3125971286" className="inline-flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  (312) 597-1286
                </a>
              </Button>
            </div>
          </div>
          
          <div className="py-12 racing-stripes">
            <ServicesSection 
              fleetWrapVan={fleetWrapVan}
              colorChangeVan={colorChangeVan}
              commercialGraphics={commercialGraphics}
            />
          </div>
          
          {/* Trust Indicators Section - NEW */}
          <div className="bg-white py-10 border-y border-gray-200">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">
                  Chicago's Most Trusted Vehicle Wrap Provider
                </h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  From car wraps to truck wraps, van wraps, and fleet graphics, we deliver premium quality
                  vehicle wraps with experienced installation and long-lasting results.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <div className="font-bold text-3xl text-brand-red mb-1">2+ Years</div>
                  <p className="text-gray-700">Warranty Protection</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <div className="font-bold text-3xl text-brand-red mb-1">3M</div>
                  <p className="text-gray-700">Premium Materials</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <div className="font-bold text-3xl text-brand-red mb-1">16,000+</div>
                  <p className="text-gray-700">Vehicle Wraps Completed</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <div className="font-bold text-3xl text-brand-red mb-1">5★</div>
                  <p className="text-gray-700">Customer Rating</p>
                </div>
              </div>
            </div>
          </div>
          
          <WhyChooseUsSection />
          
          {/* Contact Studio Image - NEW PLACEMENT */}
          <div className="bg-gray-50 py-10">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">
                  Vehicle Wrap Installation Facility
                </h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  Our climate-controlled Chicago installation facility ensures perfect vehicle wrap application
                  regardless of weather conditions. We specialize in car wraps, truck wraps, van wraps,
                  and fleet vehicle wraps throughout the Chicagoland area.
                </p>
              </div>
              
              <ContactStudioImage />
              
              <div className="mt-8 text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-red hover:bg-red-700 text-white"
                >
                  <Link to="/gallery">View Our Vehicle Wrap Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="py-12 carbon-fiber-light">
            <AreasServedSection cities={cities} />
          </div>
          
          {/* Vehicle Wrap FAQ - NEW */}
          <div className="py-10 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6 text-center">
                Frequently Asked Questions About Vehicle Wraps
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">How much do vehicle wraps cost in Chicago?</h3>
                  <p className="text-gray-700">
                    Vehicle wrap pricing in Chicago varies based on the size of your vehicle and complexity of the design. 
                    Full car wraps typically range from $2,500-$5,000, while partial wraps start around $1,000. 
                    Truck wraps and van wraps may cost more due to their larger size. Contact us for a free personalized quote.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">How long do vinyl vehicle wraps last?</h3>
                  <p className="text-gray-700">
                    With proper care and maintenance, our premium 3M vinyl vehicle wraps typically last 5-7 years. 
                    All our car wraps, truck wraps, and van wraps come with a 2-year warranty. Factors affecting 
                    longevity include exposure to extreme weather, washing frequency, and storage conditions.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">Do vehicle wraps damage paint?</h3>
                  <p className="text-gray-700">
                    No, our professional vehicle wraps actually protect your paint when properly installed and removed. 
                    Our 3M vinyl wraps act as a shield against minor scratches, stone chips, and UV damage. When removed by 
                    professionals, the original paint remains in excellent condition, often better than unwrapped vehicles.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">How long does it take to wrap a vehicle?</h3>
                  <p className="text-gray-700">
                    Our professional vehicle wrap installation typically takes 3-5 business days from start to finish. 
                    Basic car wraps may be completed in 2-3 days, while complex commercial truck wraps or van wraps with 
                    detailed graphics might require 5-7 days. We provide exact timeframes with every quote.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button
                  asChild
                  className="bg-brand-navy hover:bg-blue-900 text-white"
                >
                  <Link to="/contact">Get Answers to Your Vehicle Wrap Questions</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <CallToAction />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
