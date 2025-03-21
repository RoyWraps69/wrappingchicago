
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { cities } from '@/data/cities';
import { MapPin, ExternalLink } from 'lucide-react';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import ChicagoServiceMap from '@/components/location/ChicagoServiceMap';
import Schema from '@/components/Schema';

const LocationsPage = () => {
  // For Schema component - Chicago as the default city
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  
  return (
    <>
      <Helmet>
        <title>Areas We Serve | Vehicle Wraps in Chicago & Suburbs | Wrapping Chicago</title>
        <meta 
          name="description" 
          content="Wrapping Chicago provides professional vehicle wrapping services throughout Chicago and surrounding areas including Naperville, Schaumburg, Evanston, and more. Find location-specific information for your city." 
        />
        <meta name="keywords" content="vehicle wraps Chicago, car wraps Chicago suburbs, truck wraps Illinois, commercial vehicle wraps Chicago area, fleet wrapping services Chicago, professional vehicle wraps near me, Naperville vehicle wraps, Schaumburg car wraps, Evanston truck wraps" />
        <link rel="canonical" href="https://wrappingchicago.com/locations" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wrappingchicago.com/locations" />
        <meta property="og:title" content="Areas We Serve | Vehicle Wraps in Chicago & Suburbs | Wrapping Chicago" />
        <meta property="og:description" content="Wrapping Chicago provides professional vehicle wrapping services throughout Chicago and surrounding areas including Naperville, Schaumburg, Evanston, and more." />
        <meta property="og:image" content="/lovable-uploads/15ed5c80-d0f3-416b-aff9-e86391a376b2.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Areas We Serve | Vehicle Wraps in Chicago & Suburbs | Wrapping Chicago" />
        <meta name="twitter:description" content="Wrapping Chicago provides professional vehicle wrapping services throughout Chicago and surrounding areas including Naperville, Schaumburg, Evanston, and more." />
        <meta name="twitter:image" content="/lovable-uploads/15ed5c80-d0f3-416b-aff9-e86391a376b2.png" />
      </Helmet>
      
      <Schema 
        city={chicagoCity}
        path="/locations"
        pageTitle="Areas We Serve | Vehicle Wraps in Chicago & Suburbs | Wrapping Chicago"
        pageDescription="Wrapping Chicago provides professional vehicle wrapping services throughout Chicago and surrounding areas including Naperville, Schaumburg, Evanston, and more. Find location-specific information for your city."
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section with Background Image */}
          <section className="relative text-white py-24">
            {/* Background image without overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/lovable-uploads/15ed5c80-d0f3-416b-aff9-e86391a376b2.png"
                alt="Chicago highway with skyline at sunset"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
              {/* No overlay for maximum visibility */}
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <Breadcrumbs />
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white drop-shadow-xl">
                Areas We Serve
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-white drop-shadow-lg">
                Wrapping Chicago provides premium vehicle wrapping services throughout Chicago
                and surrounding communities. Find location-specific information for your city below.
              </p>
            </div>
          </section>
          
          {/* Service Area Map - Moved to top */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-6 text-brand-navy">
                  Our Service Area
                </h2>
                <p className="text-lg text-gray-700">
                  Wrapping Chicago serves businesses and individuals within a 40-mile radius of Chicago.
                  Our central location allows us to efficiently serve the entire metropolitan area.
                </p>
              </div>
              
              <ChicagoServiceMap />
            </div>
          </section>
          
          {/* Locations Grid */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-6 text-brand-navy">
                  Serving Chicago and Surrounding Areas
                </h2>
                <p className="text-lg text-gray-700">
                  Wrapping Chicago is proud to serve businesses and individuals throughout the Greater Chicago area.
                  Click on your city below to learn more about our vehicle wrapping services in your specific location.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {cities.map((city) => (
                  <div key={city.slug} className="p-6 bg-brand-light rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center mb-4">
                      <MapPin className="h-6 w-6 text-brand-red" />
                      <h3 className="ml-2 text-xl font-bold text-brand-navy">
                        {city.name}, IL
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      {city.description.substring(0, 120)}...
                    </p>
                    <div className="flex flex-col space-y-2">
                      <Link 
                        to={`/vehicle-wraps-${city.slug}-il`}
                        className="text-brand-red font-medium flex items-center hover:underline"
                        aria-label={`Learn more about our vehicle wrap services in ${city.name}, Illinois`}
                      >
                        Learn about our services in {city.name}
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                      <a 
                        href={city.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-brand-navy hover:text-brand-red transition-colors flex items-center"
                        aria-label={`Visit the official website for ${city.name}, Illinois`}
                      >
                        Visit official {city.name} website
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-brand-light p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-brand-navy">Don't see your city?</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Wrapping Chicago serves the entire Greater Chicago area. If you don't see your specific location 
                  listed, please contact us. We're likely able to serve your area as well!
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-brand-red font-medium hover:underline"
                  aria-label="Contact us to confirm vehicle wrap services in your area"
                >
                  Contact us to confirm service in your area
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </section>
          
          <CallToAction />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default LocationsPage;
