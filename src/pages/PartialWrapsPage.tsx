import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';

const PartialWrapsPage = () => {
  return (
    <>
      <Helmet>
        <title>Partial Vehicle Wraps - Cost-Effective Branding | Wrapping Chicago</title>
        <meta 
          name="description" 
          content="Partial vehicle wraps and graphics in Chicago. Cost-effective vehicle branding solutions with professional installation and custom designs." 
        />
        <meta name="keywords" content="partial wraps Chicago, partial vehicle wraps, cost effective wraps, vehicle graphics, business wraps" />
        <link rel="canonical" href="https://www.wrappingchicago.com/partial-wraps" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Partial Vehicle Wraps
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  Cost-effective vehicle branding that delivers maximum impact. Strategic partial wraps that showcase your business professionally.
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
                <h2 className="text-3xl font-bold mb-6">Strategic Partial Wraps</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Partial vehicle wraps offer an affordable way to transform your vehicle's appearance while maintaining your budget. 
                  Strategic placement ensures maximum visibility and professional brand representation.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Partial Wrap Options:</h3>
                    <ul className="space-y-2">
                      <li>• Hood and roof wraps</li>
                      <li>• Door panel graphics</li>
                      <li>• Rear panel advertising</li>
                      <li>• Side panel branding</li>
                      <li>• Tailgate and bumper wraps</li>
                      <li>• Custom accent pieces</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Advantages:</h3>
                    <ul className="space-y-2">
                      <li>• Lower cost than full wraps</li>
                      <li>• Faster installation time</li>
                      <li>• Easy to update or change</li>
                      <li>• Professional appearance</li>
                      <li>• Targeted brand placement</li>
                      <li>• Great return on investment</li>
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

export default PartialWrapsPage;