
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Chicago Fleet Wraps</title>
        <meta 
          name="description" 
          content="Learn about Chicago Fleet Wraps, the leading vehicle wrapping company in the Chicago area with years of experience and hundreds of satisfied customers."
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold text-brand-navy mb-6">About Chicago Fleet Wraps</h1>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <p className="text-lg mb-6">
                  Chicago Fleet Wraps is the premier vehicle wrapping company in the Chicago area, 
                  serving businesses and individuals throughout the region with high-quality wrapping 
                  services that make vehicles stand out on the road.
                </p>
                <p className="mb-6">
                  Founded in 2015, our company has wrapped thousands of vehicles from small cars to 
                  large fleet trucks. Our mission is to provide exceptional quality vehicle wraps 
                  with outstanding customer service at competitive prices.
                </p>
                <p>
                  We take pride in our work and stand behind every wrap we install. Our team of 
                  certified installers has years of experience and undergoes regular training to 
                  stay current with the latest techniques and materials.
                </p>
              </div>
              <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <p className="text-gray-500">Company Image Placeholder</p>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-brand-navy mb-4">Why Choose Us?</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Certified 3M Preferred Installers</li>
                <li>Premium quality materials that last</li>
                <li>5-year warranty on all installs</li>
                <li>Convenient Chicago location</li>
                <li>Fast turnaround times</li>
                <li>Competitive pricing</li>
                <li>Expert design services available</li>
              </ul>
            </div>
          </div>
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
