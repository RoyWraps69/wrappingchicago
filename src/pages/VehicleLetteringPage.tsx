import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';

const VehicleLetteringPage = () => {
  return (
    <>
      <Helmet>
        <title>Professional Vehicle Lettering Services | Wrapping Chicago</title>
        <meta 
          name="description" 
          content="Custom vehicle lettering and vinyl graphics in Chicago. Professional car lettering, truck lettering, and business vehicle signage with expert installation." 
        />
        <meta name="keywords" content="vehicle lettering Chicago, car lettering, truck lettering, vinyl lettering, vehicle signage, business vehicle graphics" />
        <link rel="canonical" href="https://www.wrappingchicago.com/vehicle-lettering" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Professional Vehicle Lettering
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  Custom vehicle lettering and vinyl graphics that make your business stand out. Professional installation with premium materials.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Get Free Quote
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                    View Examples
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
                <h2 className="text-3xl font-bold mb-6">Custom Vehicle Lettering & Graphics</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Transform your vehicle into a mobile advertisement with our professional vehicle lettering services. 
                  From simple text to complex graphics, we create eye-catching designs that promote your business effectively.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Lettering Services:</h3>
                    <ul className="space-y-2">
                      <li>• Business name and contact info</li>
                      <li>• Custom logos and graphics</li>
                      <li>• Reflective and safety lettering</li>
                      <li>• Magnetic removable signs</li>
                      <li>• Window lettering and decals</li>
                      <li>• DOT numbers and compliance</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Material Options:</h3>
                    <ul className="space-y-2">
                      <li>• Premium vinyl lettering</li>
                      <li>• Reflective safety materials</li>
                      <li>• Outdoor-rated adhesives</li>
                      <li>• UV-resistant inks</li>
                      <li>• Multiple color options</li>
                      <li>• Various finish options</li>
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

export default VehicleLetteringPage;