
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Wrapping Chicago</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow flex items-center justify-center py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            
            <div className="space-y-6">
              <Link 
                to="/" 
                className="inline-block bg-brand-red hover:bg-red-700 text-white py-3 px-6 rounded-md transition-colors"
              >
                Return to Homepage
              </Link>
              
              <div className="border-t border-gray-200 pt-8 mt-8">
                <h2 className="text-xl font-semibold mb-4">You might be looking for:</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  <Link to="/services" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    Our Services
                  </Link>
                  <Link to="/gallery" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    Project Gallery
                  </Link>
                  <Link to="/contact" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    Contact Us
                  </Link>
                  <Link to="/locations" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    Locations
                  </Link>
                  <Link to="/about" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    About Us
                  </Link>
                  <Link to="/sitemap" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    Sitemap
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
