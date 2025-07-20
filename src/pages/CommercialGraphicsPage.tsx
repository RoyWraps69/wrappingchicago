import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';

const CommercialGraphicsPage = () => {
  return (
    <>
      <Helmet>
        <title>Commercial Graphics & Vehicle Branding | Wrapping Chicago</title>
        <meta 
          name="description" 
          content="Professional commercial graphics and vehicle branding for businesses in Chicago. Custom decals, logos, and fleet graphics that promote your brand effectively." 
        />
        <meta name="keywords" content="commercial graphics Chicago, vehicle branding, business decals, fleet graphics, company logos, commercial vehicle wraps" />
        <link rel="canonical" href="https://www.wrappingchicago.com/commercial-graphics" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Commercial Graphics & Vehicle Branding
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  Professional vehicle graphics that turn your fleet into mobile billboards. Custom business branding that gets noticed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Get Free Quote
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                    View Gallery
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
                <h2 className="text-3xl font-bold mb-6">Professional Commercial Graphics</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Transform your business vehicles into powerful marketing tools with our professional commercial graphics services. 
                  We specialize in creating eye-catching designs that effectively promote your brand while maintaining a professional appearance.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Services Include:</h3>
                    <ul className="space-y-2">
                      <li>• Custom logo design and application</li>
                      <li>• Fleet branding and graphics</li>
                      <li>• Vehicle decals and lettering</li>
                      <li>• Magnetic signs for temporary branding</li>
                      <li>• Window graphics and perforated vinyl</li>
                      <li>• Reflective safety graphics</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Why Choose Our Graphics:</h3>
                    <ul className="space-y-2">
                      <li>• Professional design consultation</li>
                      <li>• High-quality 3M materials</li>
                      <li>• Expert installation team</li>
                      <li>• Fast turnaround times</li>
                      <li>• Competitive pricing</li>
                      <li>• Full warranty coverage</li>
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

export default CommercialGraphicsPage;