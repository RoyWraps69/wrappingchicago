import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';

const SpecialtyWrapsPage = () => {
  return (
    <>
      <Helmet>
        <title>Specialty Vehicle Wraps - Chrome, Matte & Textured | Wrapping Chicago</title>
        <meta 
          name="description" 
          content="Specialty vehicle wraps including chrome, matte, carbon fiber, and textured finishes. Unique wrap materials and custom effects for Chicago vehicles." 
        />
        <meta name="keywords" content="specialty wraps Chicago, chrome wraps, matte wraps, carbon fiber wraps, textured vinyl, unique vehicle wraps" />
        <link rel="canonical" href="https://www.wrappingchicago.com/specialty-wraps" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Specialty Vehicle Wraps
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  Unique finishes and textures that make your vehicle truly one-of-a-kind. Chrome, matte, carbon fiber, and custom specialty materials.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Get Free Quote
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                    View Finishes
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
                <h2 className="text-3xl font-bold mb-6">Premium Specialty Finishes</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Go beyond traditional colors with our specialty wrap materials. From mirror-like chrome to subtle matte finishes, 
                  create a look that's uniquely yours with premium specialty vinyl wraps.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Specialty Finishes:</h3>
                    <ul className="space-y-2">
                      <li>• Chrome and mirror finishes</li>
                      <li>• Matte and satin colors</li>
                      <li>• Carbon fiber textures</li>
                      <li>• Brushed metal effects</li>
                      <li>• Pearl and metallic finishes</li>
                      <li>• Color-changing wraps</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Applications:</h3>
                    <ul className="space-y-2">
                      <li>• Full vehicle transformations</li>
                      <li>• Accent pieces and trim</li>
                      <li>• Hood and roof wraps</li>
                      <li>• Interior trim pieces</li>
                      <li>• Motorcycle and ATV wraps</li>
                      <li>• Custom design combinations</li>
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

export default SpecialtyWrapsPage;