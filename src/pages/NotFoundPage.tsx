
import React from 'react';
import { Link } from 'react-router-dom';
import CallToAction from '@/components/CallToAction';
import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Wrapping Chicago</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        
        <main className="flex-grow container mx-auto px-4 py-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-brand-navy mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
            <p className="mb-8 max-w-md mx-auto">
              We're sorry, but the page you were looking for doesn't exist or has been moved.
            </p>
            <div className="space-x-4">
              <Link 
                to="/" 
                className="bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-md inline-block transition-colors"
              >
                Go Home
              </Link>
              <Link 
                to="/contact" 
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-md inline-block transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default NotFoundPage;
