import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';

const ProtectiveFilmsPage = () => {
  return (
    <>
      <Helmet>
        <title>Paint Protection Film & Clear Bra Installation | Wrapping Chicago</title>
        <meta 
          name="description" 
          content="Professional paint protection film (PPF) and clear bra installation in Chicago. Protect your vehicle's paint from chips, scratches, and environmental damage." 
        />
        <meta name="keywords" content="paint protection film Chicago, clear bra installation, PPF Chicago, vehicle paint protection, car protection film" />
        <link rel="canonical" href="https://www.wrappingchicago.com/protective-films" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Paint Protection Film & Clear Bra
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  Invisible protection that preserves your vehicle's paint and maintains its value. Professional PPF installation with lifetime warranty.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Get Free Quote
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>

          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            
            {/* Content Section */}
            <div className="max-w-4xl mx-auto space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6">Ultimate Paint Protection</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our paint protection film (PPF) provides invisible, durable protection against road debris, stone chips, 
                  scratches, and environmental contaminants. Keep your vehicle looking new for years to come.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Protection Areas:</h3>
                    <ul className="space-y-2">
                      <li>• Front bumper and grille</li>
                      <li>• Hood and fenders</li>
                      <li>• Side mirrors and door edges</li>
                      <li>• Rocker panels and door sills</li>
                      <li>• Headlights and taillights</li>
                      <li>• Full vehicle coverage available</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Film Benefits:</h3>
                    <ul className="space-y-2">
                      <li>• Self-healing technology</li>
                      <li>• UV resistance and clarity</li>
                      <li>• Easy maintenance and cleaning</li>
                      <li>• Maintains vehicle resale value</li>
                      <li>• 10-year manufacturer warranty</li>
                      <li>• Removable without paint damage</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
          
          <CallToAction />
        </main>
      </div>
    </>
  );
};

export default ProtectiveFilmsPage;