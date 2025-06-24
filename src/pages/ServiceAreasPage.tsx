
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone } from 'lucide-react';

const ServiceAreasPage = () => {
  const serviceAreas = [
    {
      name: "Chicago",
      description: "Our primary service area in the heart of Illinois",
      neighborhoods: ["Downtown", "Lincoln Park", "Gold Coast", "West Loop", "River North", "Millennium Park Area"]
    },
    {
      name: "Oak Park",
      description: "Historic suburb with Frank Lloyd Wright architecture",
      neighborhoods: ["Austin Gardens", "Ridgeland", "Oak Park Village"]
    },
    {
      name: "River Grove",
      description: "Close-knit community with easy highway access",
      neighborhoods: ["Leyden Township", "Triton College Area"]
    },
    {
      name: "Elmwood Park",
      description: "Family-friendly neighborhood near Chicago",
      neighborhoods: ["Grand Avenue Corridor", "Harlem Avenue"]
    },
    {
      name: "Franklin Park",
      description: "Industrial and residential community",
      neighborhoods: ["Mannheim Road", "O'Hare Area"]
    },
    {
      name: "Schaumburg",
      description: "Major Northwest suburban business hub",
      neighborhoods: ["Woodfield", "Village Green", "Town Square"]
    },
    {
      name: "Naperville",
      description: "Thriving DuPage County business center",
      neighborhoods: ["Downtown Naperville", "Aurora Border", "Wheaton Border"]
    },
    {
      name: "Evanston",
      description: "North Shore community home to Northwestern University",
      neighborhoods: ["Northwestern Campus", "Downtown Evanston", "Lakefront"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Service Areas | Vehicle Wraps Throughout Chicagoland | Wrapping Chicago</title>
        <meta 
          name="description" 
          content="Professional vehicle wrap services throughout Chicago and surrounding suburbs. We serve Oak Park, River Grove, Elmwood Park, Franklin Park, Schaumburg, Naperville, Evanston, and more." 
        />
        <meta name="keywords" content="vehicle wraps Chicago suburbs, car wraps Oak Park, truck wraps Schaumburg, van wraps Naperville, fleet wraps Evanston, Chicagoland vehicle wraps" />
        <link rel="canonical" href="https://www.wrappingchicago.com/service-areas" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-brand-navy mb-6 flex items-center">
                <MapPin className="mr-3 h-10 w-10 text-brand-red" />
                Service Areas Throughout Chicagoland
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Wrapping Chicago proudly serves vehicle wrap customers throughout Chicago and the surrounding suburbs. 
                Our mobile service and convenient location make us accessible to businesses and individuals across 
                the greater Chicagoland area.
              </p>
            </div>

            {/* Service Hours & Contact */}
            <div className="bg-brand-light p-6 rounded-lg mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-brand-navy mr-3" />
                  <div>
                    <h3 className="font-semibold text-brand-navy">Service Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 8AM - 6PM</p>
                    <p className="text-gray-700">Saturday: 9AM - 4PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-brand-navy mr-3" />
                  <div>
                    <h3 className="font-semibold text-brand-navy">Contact Us</h3>
                    <p className="text-gray-700">(312) 597-1286</p>
                    <p className="text-gray-700">Free estimates available</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-brand-navy mr-3" />
                  <div>
                    <h3 className="font-semibold text-brand-navy">Service Radius</h3>
                    <p className="text-gray-700">50+ mile radius from Chicago</p>
                    <p className="text-gray-700">Mobile service available</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Service Areas Grid */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-8">Areas We Serve</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-3 text-brand-navy">{area.name}</h3>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <div className="mb-4">
                      <h4 className="font-medium text-brand-navy mb-2">Key Areas:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {area.neighborhoods.map((neighborhood, idx) => (
                          <li key={idx}>• {neighborhood}</li>
                        ))}
                      </ul>
                    </div>
                    <Link 
                      to={`/vehicle-wraps-${area.name.toLowerCase().replace(' ', '-')}-il`}
                      className="text-brand-red hover:text-red-700 font-medium"
                    >
                      Learn More →
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Local */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Why Choose Local Vehicle Wrap Experts?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-brand-navy">Local Market Knowledge</h3>
                  <p className="text-gray-700 mb-4">
                    We understand the unique needs of Chicago-area businesses and the local market dynamics. 
                    Our designs reflect the character and spirit of Chicagoland communities.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Understanding of local business districts</li>
                    <li>• Knowledge of traffic patterns and visibility</li>
                    <li>• Familiarity with local regulations and permits</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-brand-navy">Community Commitment</h3>
                  <p className="text-gray-700 mb-4">
                    As a local business, we're committed to supporting the Chicagoland community. 
                    We provide reliable service and build lasting relationships with our customers.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Quick response times for local customers</li>
                    <li>• Support for local businesses and events</li>
                    <li>• Long-term partnerships with area companies</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ServiceAreasPage;
