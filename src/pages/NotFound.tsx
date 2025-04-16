
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>{"Page Not Found | Chicago Fleet Wraps"}</title>
        <meta name="description" content="The requested page could not be found." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
    
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow flex items-center justify-center bg-gray-50">
          <div className="container mx-auto py-16 px-4 text-center">
            <h1 className="text-6xl font-bold text-brand-navy mb-4">404</h1>
            <p className="text-2xl text-gray-600 mb-8">Oops! We couldn't find that page.</p>
            <p className="text-lg text-gray-500 max-w-md mx-auto mb-8">
              The page you are looking for might have been removed, had its name changed, 
              or is temporarily unavailable.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="bg-brand-navy hover:bg-brand-navy/90">
                <Link to="/" className="flex items-center">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-brand-navy text-brand-navy">
                <Link to="/services" className="flex items-center">
                  <Search className="mr-2 h-4 w-4" />
                  Browse Services
                </Link>
              </Button>
              <Button 
                asChild 
                variant="ghost" 
                onClick={() => window.history.back()}
                className="text-gray-600"
              >
                <button className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go Back
                </button>
              </Button>
            </div>
            
            <div className="mt-12 text-gray-500">
              <p>If you believe this is an error, please contact us at:</p>
              <a 
                href="mailto:info@wrappingchicago.com" 
                className="text-brand-red hover:underline"
              >
                info@wrappingchicago.com
              </a>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
