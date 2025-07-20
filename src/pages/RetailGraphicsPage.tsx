import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';

const RetailGraphicsPage = () => {
  return (
    <>
      <Helmet>
        <title>Retail Graphics & Store Signage | Wrapping Chicago</title>
        <meta 
          name="description" 
          content="Professional retail graphics, window displays, and store signage in Chicago. Custom business graphics that attract customers and enhance your brand." 
        />
        <meta name="keywords" content="retail graphics Chicago, store signage, window graphics, business displays, retail signs, storefront graphics" />
        <link rel="canonical" href="https://www.wrappingchicago.com/retail-graphics" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Retail Graphics & Store Signage
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  Eye-catching retail graphics that draw customers in and showcase your brand. Professional storefront and window graphics.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Get Free Quote
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                    View Portfolio
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
                <h2 className="text-3xl font-bold mb-6">Professional Retail Graphics</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Transform your storefront with professional retail graphics that attract customers and communicate your brand message effectively. 
                  From window displays to interior signage, we create graphics that drive business results.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Retail Services:</h3>
                    <ul className="space-y-2">
                      <li>• Window graphics and displays</li>
                      <li>• Storefront signage</li>
                      <li>• Interior wall graphics</li>
                      <li>• Floor graphics and decals</li>
                      <li>• Promotional displays</li>
                      <li>• Wayfinding signage</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Benefits:</h3>
                    <ul className="space-y-2">
                      <li>• Increased foot traffic</li>
                      <li>• Enhanced brand visibility</li>
                      <li>• Cost-effective advertising</li>
                      <li>• Easy installation and removal</li>
                      <li>• Weather-resistant materials</li>
                      <li>• Custom design options</li>
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

export default RetailGraphicsPage;