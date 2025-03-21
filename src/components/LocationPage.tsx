
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { City } from '@/data/cities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Schema from '@/components/Schema';
import LocationHero from '@/components/location/LocationHero';
import LocationContent from '@/components/location/LocationContent';
import LocationProjects from '@/components/location/LocationProjects';
import LocationTestimonials from '@/components/location/LocationTestimonials';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Award, CheckCircle2, Shield } from 'lucide-react';

interface LocationPageProps {
  city: City;
}

const LocationPage = ({ city }: LocationPageProps) => {
  if (!city) {
    return <div>City not found</div>;
  }

  // Generate additional keywords specific to this city
  const cityKeywords = [
    `vehicle wraps ${city.name}`, 
    `car wraps ${city.name}`, 
    `truck wraps ${city.name}`,
    `van wraps ${city.name}`, 
    `fleet wraps ${city.name}`, 
    `commercial vehicle wraps ${city.name}`,
    `custom vehicle wraps ${city.name}`, 
    `vehicle graphics ${city.name}`, 
    `vehicle wrap installation ${city.name}`,
    `car wrap advertising ${city.name}`, 
    `business vehicle wraps ${city.name}`, 
    `mobile advertising ${city.name}`,
    `vinyl lettering ${city.name}`, 
    `partial vehicle wraps ${city.name}`
  ];

  return (
    <>
      <Helmet>
        <title>Professional Vehicle Wraps in {city.name}, IL | Car, Truck & Fleet Wraps</title>
        <meta 
          name="description" 
          content={`Chicago's top-rated vehicle wrap provider serving ${city.name}, IL. Professional car wraps, truck wraps, van wraps & fleet wraps with over 16,000 completed projects in our 20 years of business. Free quotes available.`} 
        />
        <link rel="canonical" href={`https://wrappingchicago.com/vehicle-wraps-${city.slug}-il`} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`Professional Vehicle Wraps in ${city.name}, IL | Wrapping Chicago`} />
        <meta property="og:description" content={`Expert vehicle wrapping services in ${city.name}, IL. Specializing in fleet wraps, car wraps, truck wraps, and commercial graphics with premium 3M materials and installation.`} />
        <meta property="og:url" content={`https://wrappingchicago.com/vehicle-wraps-${city.slug}-il`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Professional Vehicle Wraps in ${city.name}, IL | Wrapping Chicago`} />
        <meta name="twitter:description" content={`Expert vehicle wrapping services in ${city.name}, IL. Specializing in fleet wraps, car wraps, truck wraps, and commercial graphics with 20 years of experience.`} />
        <meta name="twitter:image" content="/og-image.png" />
        <meta name="geo.region" content="US-IL" />
        <meta name="geo.placename" content={city.name} />
        <meta name="keywords" content={cityKeywords.join(", ")} />
      </Helmet>
      
      <Schema 
        city={city} 
        path={`/vehicle-wraps-${city.slug}-il`}
        pageTitle={`Professional Vehicle Wraps in ${city.name}, IL | Car, Truck & Fleet Wraps`}
        pageDescription={`Chicago's top-rated vehicle wrap provider serving ${city.name}, IL. Professional car wraps, truck wraps, van wraps & fleet wraps with over 16,000 completed projects in our 20 years of business. Free quotes available.`}
        keywords={cityKeywords}
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-4">
            <Breadcrumbs />
          </div>
          
          {/* Business Statistics Banner */}
          <div className="bg-brand-navy text-white py-4">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-brand-red" />
                  <span className="text-sm md:text-base">Serving {city.name} • 16,000+ Wraps Completed • 20 Years in Business</span>
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
          
          {/* Service Types Bar */}
          <div className="bg-gray-100 py-3 border-y border-gray-200">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center md:justify-between items-center gap-3 text-sm">
                <span className="font-medium text-gray-700">Our {city.name} Vehicle Wrap Services:</span>
                <div className="flex flex-wrap gap-2">
                  <Link to="/services/car-wraps" className="flex items-center hover:text-brand-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-brand-red">
                      <path d="M7 17h10v-3.3a2 2 0 0 0-.6-1.4l-.9-.9a2 2 0 0 1-.6-1.4V7" />
                      <path d="M5 5h14" />
                      <path d="M6 5v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5" />
                    </svg>
                    Car Wraps
                  </Link>
                  <Link to="/services/truck-wraps" className="flex items-center hover:text-brand-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-brand-red">
                      <path d="M10 17h4V5H2v12h3" />
                      <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
                      <circle cx="7.5" cy="17.5" r="2.5" />
                      <circle cx="17.5" cy="17.5" r="2.5" />
                    </svg>
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
          
          <LocationHero cityName={city.name} />
          <LocationContent city={city} />
          <LocationProjects cityName={city.name} />
          <LocationTestimonials city={city} />
          
          {/* Vehicle Wrap FAQ Section */}
          <section className="py-10 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6 text-center">
                Frequently Asked Questions About Vehicle Wraps in {city.name}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">How much do vehicle wraps cost in {city.name}?</h3>
                  <p className="text-gray-700">
                    Vehicle wrap pricing in {city.name} varies based on the size of your vehicle and complexity of the design. 
                    Full car wraps typically range from $2,500-$5,000, while partial wraps start around $1,000. 
                    Truck wraps and van wraps may cost more due to their larger size. Contact us for a free personalized quote.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">How long do vinyl vehicle wraps last?</h3>
                  <p className="text-gray-700">
                    With proper care and maintenance, our premium 3M vinyl vehicle wraps typically last 5-7 years. 
                    All our car wraps, truck wraps, and van wraps come with a 2-year warranty. Factors affecting 
                    longevity include exposure to extreme weather, washing frequency, and storage conditions.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">Do vehicle wraps damage paint?</h3>
                  <p className="text-gray-700">
                    No, our professional vehicle wraps actually protect your paint when properly installed and removed. 
                    Our 3M vinyl wraps act as a shield against minor scratches, stone chips, and UV damage. When removed by 
                    professionals, the original paint remains in excellent condition, often better than unwrapped vehicles.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">How long does it take to wrap a vehicle in {city.name}?</h3>
                  <p className="text-gray-700">
                    Our professional vehicle wrap installation typically takes 3-5 business days from start to finish. 
                    Basic car wraps may be completed in 2-3 days, while complex commercial truck wraps or van wraps with 
                    detailed graphics might require 5-7 days. We provide exact timeframes with every quote.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <CallToAction city={city.name} />
          
          {/* Floating Contact Buttons */}
          <div className="fixed bottom-6 right-6 z-50">
            <div className="flex flex-col gap-3">
              <Button
                asChild
                size="lg"
                className="bg-brand-red hover:bg-red-700 text-white font-medium rounded-full shadow-lg"
              >
                <Link to="/contact" className="inline-flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Get a Quote
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/90 backdrop-blur-sm border-gray-300 text-gray-800 hover:bg-gray-100 font-medium rounded-full shadow-lg"
              >
                <a href="tel:3125971286" className="inline-flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default LocationPage;
