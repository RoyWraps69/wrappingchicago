
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { cities } from '@/data/cities';
import { MapPin } from 'lucide-react';

const LocationsPage = () => {
  return (
    <>
      <Helmet>
        <title>Areas We Serve | Chicago Fleet Wraps Vehicle Wrapping</title>
        <meta 
          name="description" 
          content="Chicago Fleet Wraps provides professional vehicle wrapping services throughout Chicago and surrounding areas. Find location-specific information for your city." 
        />
        <link rel="canonical" href="https://chicagofleetwraps.com/locations" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Areas We Serve
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Chicago Fleet Wraps provides premium vehicle wrapping services throughout Chicago
                and surrounding communities. Find location-specific information for your city below.
              </p>
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
                  Chicago Fleet Wraps is proud to serve businesses and individuals throughout the Greater Chicago area.
                  Click on your city below to learn more about our vehicle wrapping services in your specific location.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {cities.map((city) => (
                  <Link 
                    key={city.slug}
                    to={`/vehicle-wraps-${city.slug}-il`}
                    className="group"
                  >
                    <div className="p-6 bg-brand-light rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                      <div className="flex items-center mb-4">
                        <MapPin className="h-6 w-6 text-brand-red" />
                        <h3 className="ml-2 text-xl font-bold text-brand-navy group-hover:text-brand-red transition-colors">
                          {city.name}, IL
                        </h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        {city.description.substring(0, 120)}...
                      </p>
                      <p className="text-brand-red font-medium flex items-center">
                        Learn more
                        <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="bg-brand-light p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-brand-navy">Don't see your city?</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Chicago Fleet Wraps serves the entire Greater Chicago area. If you don't see your specific location 
                  listed, please contact us. We're likely able to serve your area as well!
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-brand-red font-medium hover:underline"
                >
                  Contact us to confirm service in your area
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </section>
          
          {/* Service Area Map */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-6 text-brand-navy">
                  Our Service Area
                </h2>
                <p className="text-lg text-gray-700">
                  Chicago Fleet Wraps serves businesses and individuals within a 30-mile radius of Chicago.
                  Our central location allows us to efficiently serve the entire metropolitan area.
                </p>
              </div>
              
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://placehold.co/1200x675/0B3954/FFFFFF?text=Chicago+Service+Area+Map"
                  alt="Chicago Fleet Wraps service area map"
                  className="object-cover w-full h-full"
                />
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
