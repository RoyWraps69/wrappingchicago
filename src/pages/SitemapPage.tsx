
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { cities } from '@/data/cities';

const SitemapPage = () => {
  // Generate a fresh lastmod date
  const lastModified = new Date().toISOString().split('T')[0];

  // For crawler discovery
  useEffect(() => {
    // Create a discovery script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "Home",
          "description": "Chicago's premier vehicle wrap company. Professional car & truck wraps with premium 3M materials.",
          "url": "https://www.wrappingchicago.com/"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "Services",
          "description": "Professional vehicle wrap services including car wraps, truck wraps, van wraps, and fleet wraps.",
          "url": "https://www.wrappingchicago.com/services"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "Gallery",
          "description": "Browse our portfolio of completed vehicle wrap projects in Chicago and surrounding areas.",
          "url": "https://www.wrappingchicago.com/gallery"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "About",
          "description": "Learn about Wrapping Chicago's expertise, history, and commitment to quality vehicle wraps.",
          "url": "https://www.wrappingchicago.com/about"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": "Contact",
          "description": "Get in touch with Chicago's leading vehicle wrap company for quotes and consultations.",
          "url": "https://www.wrappingchicago.com/contact"
        }
      ]
    });
    
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Sitemap | Chicago Vehicle Wrap Services | Wrapping Chicago</title>
        <meta 
          name="description" 
          content="Complete sitemap of Wrapping Chicago website. Browse our vehicle wrap services, service areas, gallery, and information pages all in one place." 
        />
        <link rel="canonical" href="https://www.wrappingchicago.com/sitemap" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="alternate" href="https://www.wrappingchicago.com/html-sitemap.html" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8">
            <Breadcrumbs />
            
            <header className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Complete Site Map</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Browse all pages of our website to find information about our vehicle wrap services, 
                service areas, gallery, and more.
              </p>
              <p className="text-sm text-gray-500 mt-2">Last Updated: {lastModified}</p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Main Navigation */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-brand-navy mb-4 pb-2 border-b border-gray-200">
                  Main Pages
                </h2>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-brand-navy hover:text-brand-red transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-brand-navy hover:text-brand-red transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-brand-navy hover:text-brand-red transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery" className="text-brand-navy hover:text-brand-red transition-colors">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-brand-navy hover:text-brand-red transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/locations" className="text-brand-navy hover:text-brand-red transition-colors">
                      Service Areas
                    </Link>
                  </li>
                  <li>
                    <Link to="/ai-wrap-ideas" className="text-brand-navy hover:text-brand-red transition-colors">
                      AI Wrap Designer
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Vehicle Types */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-brand-navy mb-4 pb-2 border-b border-gray-200">
                  Vehicle Types
                </h2>
                <ul className="space-y-2">
                  <li>
                    <Link to="/services/car-wraps" className="text-brand-navy hover:text-brand-red transition-colors">
                      Car Wraps
                    </Link>
                    {' - '}
                    <Link to="/car-wraps" className="text-sm text-gray-500 hover:text-brand-red transition-colors">
                      (Direct Link)
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/truck-wraps" className="text-brand-navy hover:text-brand-red transition-colors">
                      Truck Wraps
                    </Link>
                    {' - '}
                    <Link to="/truck-wraps" className="text-sm text-gray-500 hover:text-brand-red transition-colors">
                      (Direct Link)
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/van-wraps" className="text-brand-navy hover:text-brand-red transition-colors">
                      Van Wraps
                    </Link>
                    {' - '}
                    <Link to="/van-wraps" className="text-sm text-gray-500 hover:text-brand-red transition-colors">
                      (Direct Link)
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/fleet-wraps" className="text-brand-navy hover:text-brand-red transition-colors">
                      Fleet Wraps
                    </Link>
                    {' - '}
                    <Link to="/fleet-wraps" className="text-sm text-gray-500 hover:text-brand-red transition-colors">
                      (Direct Link)
                    </Link>
                  </li>
                  <li>
                    <Link to="/truck-wraps-chicago" className="text-brand-navy hover:text-brand-red transition-colors">
                      Truck Wraps Chicago
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Specialty Services */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-brand-navy mb-4 pb-2 border-b border-gray-200">
                  Specialty Services
                </h2>
                <ul className="space-y-2">
                  <li>
                    <Link to="/services/color-change-wraps" className="text-brand-navy hover:text-brand-red transition-colors">
                      Color Change Wraps
                    </Link>
                    {' - '}
                    <Link to="/color-change-wraps" className="text-sm text-gray-500 hover:text-brand-red transition-colors">
                      (Direct Link)
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/commercial-graphics" className="text-brand-navy hover:text-brand-red transition-colors">
                      Commercial Graphics
                    </Link>
                    {' - '}
                    <Link to="/commercial-graphics" className="text-sm text-gray-500 hover:text-brand-red transition-colors">
                      (Direct Link)
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/partial-wraps" className="text-brand-navy hover:text-brand-red transition-colors">
                      Partial Wraps
                    </Link>
                    {' - '}
                    <Link to="/partial-wraps" className="text-sm text-gray-500 hover:text-brand-red transition-colors">
                      (Direct Link)
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/protective-films" className="text-brand-navy hover:text-brand-red transition-colors">
                      Protective Films
                    </Link>
                    {' - '}
                    <Link to="/protective-films" className="text-sm text-gray-500 hover:text-brand-red transition-colors">
                      (Direct Link)
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/vehicle-lettering" className="text-brand-navy hover:text-brand-red transition-colors">
                      Vehicle Lettering
                    </Link>
                    {' - '}
                    <Link to="/vehicle-lettering" className="text-sm text-gray-500 hover:text-brand-red transition-colors">
                      (Direct Link)
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/specialty-wraps" className="text-brand-navy hover:text-brand-red transition-colors">
                      Specialty Wraps
                    </Link>
                    {' - '}
                    <Link to="/specialty-wraps" className="text-sm text-gray-500 hover:text-brand-red transition-colors">
                      (Direct Link)
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/retail-graphics" className="text-brand-navy hover:text-brand-red transition-colors">
                      Retail Graphics
                    </Link>
                    {' - '}
                    <Link to="/retail-graphics" className="text-sm text-gray-500 hover:text-brand-red transition-colors">
                      (Direct Link)
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/designer-wraps" className="text-brand-navy hover:text-brand-red transition-colors">
                      Designer Wraps
                    </Link>
                    {' - '}
                    <Link to="/designer-wraps" className="text-sm text-gray-500 hover:text-brand-red transition-colors">
                      (Direct Link)
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/luxury-exotic-wraps" className="text-brand-navy hover:text-brand-red transition-colors">
                      Luxury & Exotic Wraps
                    </Link>
                    {' - '}
                    <Link to="/luxury-exotic-wraps" className="text-sm text-gray-500 hover:text-brand-red transition-colors">
                      (Direct Link)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-12">
              <h2 className="text-xl font-bold text-brand-navy mb-4 pb-2 border-b border-gray-200">
                Service Locations
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cities.map((city) => (
                  <div key={city.slug}>
                    <Link 
                      to={`/vehicle-wraps-${city.slug}-il`}
                      className="text-brand-navy hover:text-brand-red transition-colors"
                    >
                      {city.name}, IL
                    </Link>
                    {' - '}
                    <Link 
                      to={`/${city.slug}`}
                      className="text-sm text-gray-500 hover:text-brand-red transition-colors"
                    >
                      (Direct Link)
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-bold text-brand-navy mb-2">Looking for Something Specific?</h2>
              <p className="text-gray-700 mb-4">
                If you can't find what you're looking for, please don't hesitate to contact us. 
                We're always happy to help you find the information you need about our vehicle 
                wrap services.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-5 py-2.5 bg-brand-red text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default SitemapPage;
