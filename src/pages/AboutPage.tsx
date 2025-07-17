
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import Schema from '@/components/Schema';
import { cities } from '@/data/cities';
import CallToAction from '@/components/CallToAction';

const AboutPage = () => {
  // For Schema component
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  return (
    <>
      <Helmet>
        <title>About Wrapping Chicago | Real People Who Get Trade Businesses</title>
        <meta name="description" content="We're Chicago locals who understand trade businesses. Been wrapping plumber trucks, electrician vans, and HVAC vehicles for over 10 years. Your success is our business." />
        <meta name="keywords" content="Chicago vehicle wrap company, trade business wraps, local wrap installers, plumber truck wraps, electrician van graphics, HVAC vehicle advertising" />
        <link rel="canonical" href="https://wrappingchicago.com/about" />
      </Helmet>
      
      <Schema 
        city={chicagoCity} 
        path="/about" 
        pageTitle="About Chicago Fleet Wraps | Professional Vehicle Wrap Company" 
        pageDescription="Learn about Chicago Fleet Wraps, a premier vehicle wrapping company serving Chicago and surrounding areas." 
      />
      
      <div className="flex flex-col min-h-screen">
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            <h1 className="text-4xl font-bold text-brand-navy mb-6">We Get Trade Businesses</h1>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <div className="prose max-w-none">
                  <p className="text-lg mb-6">
                    Hey there! We're not some fancy corporate wrap shop. We're Chicago locals who understand 
                    that your truck is more than transportation - it's your mobile office, your tool storage, 
                    and your best advertising all rolled into one.
                  </p>
                  
                  <p className="mb-6">
                    For over 10 years, we've been helping plumbers, electricians, HVAC techs, and other trade 
                    pros turn their work vehicles into customer magnets. We know you need wraps that look 
                    professional but can handle the real world - job sites, weather, and daily wear.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">Our Expertise</h2>
                  
                  <p className="mb-6">
                    As a leading vehicle wrap provider in Chicago, we specialize in:
                  </p>
                  
                  <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">Fleet vehicle wraps for businesses of all sizes</li>
                    <li className="mb-2">Full and partial commercial vehicle wraps</li>
                    <li className="mb-2">Color change wraps for personal vehicles</li>
                    <li className="mb-2">Specialty and custom design wraps</li>
                    <li className="mb-2">Protective films and paint protection</li>
                    <li className="mb-2">Vehicle lettering and graphics</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">Our Commitment</h2>
                  
                  <p className="mb-6">
                    At Chicago Fleet Wraps, we're committed to:
                  </p>
                  
                  <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">Using only premium 3M and Avery materials</li>
                    <li className="mb-2">Employing certified and experienced installers</li>
                    <li className="mb-2">Providing end-to-end service from design to installation</li>
                    <li className="mb-2">Delivering projects on time and within budget</li>
                    <li className="mb-2">Ensuring customer satisfaction with every project</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                  <img alt="Chicago Fleet Wraps Installation Facility" className="w-full h-64 object-cover" src="/lovable-uploads/a10b218d-522c-49b7-b10f-6cde9ee79cf6.jpg" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-brand-navy mb-2">State-of-the-Art Facility</h3>
                    <p className="text-gray-700">
                      Our climate-controlled installation facility ensures optimal conditions for 
                      perfect wrap application every time.
                    </p>
                  </div>
                </div>
                
                <div className="bg-brand-navy/5 rounded-lg p-6 border border-brand-navy/10">
                  <h3 className="text-xl font-semibold text-brand-navy mb-4">Why Choose Us?</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-brand-red rounded-full p-2 mr-4 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Experience</h4>
                        <p className="text-sm text-gray-600">Years of professional experience wrapping all types of vehicles</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-brand-red rounded-full p-2 mr-4 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Quality Materials</h4>
                        <p className="text-sm text-gray-600">We exclusively use premium 3M and Avery wrap films</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-brand-red rounded-full p-2 mr-4 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Customer Service</h4>
                        <p className="text-sm text-gray-600">Dedicated support and attention to detail from start to finish</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-brand-red rounded-full p-2 mr-4 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Warranty Backed</h4>
                        <p className="text-sm text-gray-600">All our installations come with manufacturer warranties</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-12">
              <h2 className="text-2xl font-semibold text-brand-navy mb-4">Our Process</h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-brand-navy/5 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-navy">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Consultation</h3>
                  <p className="text-sm text-gray-600">We discuss your needs and goals for your vehicle wrap</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-brand-navy/5 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-navy">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Design</h3>
                  <p className="text-sm text-gray-600">Our designers create custom concepts for your approval</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-brand-navy/5 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-navy">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Production</h3>
                  <p className="text-sm text-gray-600">We print and prepare your wrap using premium materials</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-brand-navy/5 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-navy">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Installation</h3>
                  <p className="text-sm text-gray-600">Expert installers apply your wrap with precision</p>
                </div>
              </div>
            </div>
          </div>
          
          <CallToAction />
        </main>
      </div>
    </>
  );
};

export default AboutPage;
