
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Separator } from "@/components/ui/separator";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MetaTags from '@/components/seo/MetaTags';
import WebsiteSchema from '@/components/schemas/WebsiteSchema';
import WebPageSchema from '@/components/schemas/WebPageSchema';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { FileText, Map } from 'lucide-react';

const SitemapPage = () => {
  const currentYear = new Date().getFullYear();
  const lastModified = new Date().toISOString().split('T')[0];
  const sitemapKeywords = [
    'sitemap', 'vehicle wrap services', 'car wraps', 'truck wraps', 
    'van wraps', 'Chicago wraps', 'commercial vehicle wraps', 
    'fleet wraps', 'website navigation', 'Wrapping Chicago services'
  ];

  return (
    <>
      <MetaTags 
        title={`Site Map | Wrapping Chicago Vehicle Wraps | ${currentYear}`}
        description="Complete site map of Wrapping Chicago's vehicle wrap services, locations, and resources. Find all our pages and services in one place."
        keywords={sitemapKeywords.join(', ')}
        canonicalUrl="/sitemap"
        lastModified={lastModified}
      />
      
      <WebsiteSchema 
        name="Wrapping Chicago Sitemap"
        description="Navigate through Wrapping Chicago's complete service catalog and website structure"
        url="/sitemap"
        lastModified={lastModified}
        keywords={sitemapKeywords}
      />
      
      <WebPageSchema 
        title="Sitemap | Wrapping Chicago"
        description="Complete site map of Wrapping Chicago's vehicle wrap services, locations, and resources"
        url="/sitemap"
        lastModified={lastModified}
        keywords={sitemapKeywords}
      />
      
      <Header />
      
      <main className="flex-grow bg-gray-50 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mt-6">
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 mr-3 text-brand-red" />
              <h1 className="text-2xl md:text-3xl font-bold text-brand-navy">Complete Site Map</h1>
            </div>
            
            <p className="text-gray-700 mb-8 max-w-3xl">
              Welcome to the Wrapping Chicago sitemap. Use this page to quickly navigate to any section of our website, 
              find our vehicle wrapping services, or explore our resource pages.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                <h2 className="text-xl font-semibold mb-4 text-brand-navy flex items-center">
                  <Map className="h-5 w-5 mr-2 text-brand-red" />
                  Main Pages
                </h2>
                <Separator className="mb-4" />
                <ul className="space-y-3">
                  <li><Link to="/" className="text-gray-700 hover:text-brand-red transition-colors">Home</Link></li>
                  <li><Link to="/about" className="text-gray-700 hover:text-brand-red transition-colors">About Us</Link></li>
                  <li><Link to="/contact" className="text-gray-700 hover:text-brand-red transition-colors">Contact</Link></li>
                  <li><Link to="/gallery" className="text-gray-700 hover:text-brand-red transition-colors">Gallery</Link></li>
                  <li><Link to="/locations" className="text-gray-700 hover:text-brand-red transition-colors">Locations</Link></li>
                  <li><Link to="/ai-wrap-ideas" className="text-gray-700 hover:text-brand-red transition-colors">AI Wrap Designer</Link></li>
                  <li><Link to="/truck-wraps-chicago" className="text-gray-700 hover:text-brand-red transition-colors">Truck Wraps Chicago</Link></li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                <h2 className="text-xl font-semibold mb-4 text-brand-navy flex items-center">
                  <Map className="h-5 w-5 mr-2 text-brand-red" />
                  Vehicle Wrap Services
                </h2>
                <Separator className="mb-4" />
                <ul className="space-y-3">
                  <li><Link to="/services/fleet-wraps" className="text-gray-700 hover:text-brand-red transition-colors">Fleet Wraps</Link></li>
                  <li><Link to="/services/car-wraps" className="text-gray-700 hover:text-brand-red transition-colors">Car Wraps</Link></li>
                  <li><Link to="/services/truck-wraps" className="text-gray-700 hover:text-brand-red transition-colors">Truck Wraps</Link></li>
                  <li><Link to="/services/van-wraps" className="text-gray-700 hover:text-brand-red transition-colors">Van Wraps</Link></li>
                  <li><Link to="/services/color-change-wraps" className="text-gray-700 hover:text-brand-red transition-colors">Color Change Wraps</Link></li>
                  <li><Link to="/services/partial-wraps" className="text-gray-700 hover:text-brand-red transition-colors">Partial Wraps</Link></li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                <h2 className="text-xl font-semibold mb-4 text-brand-navy flex items-center">
                  <Map className="h-5 w-5 mr-2 text-brand-red" />
                  Specialty Services
                </h2>
                <Separator className="mb-4" />
                <ul className="space-y-3">
                  <li><Link to="/services/commercial-graphics" className="text-gray-700 hover:text-brand-red transition-colors">Commercial Graphics</Link></li>
                  <li><Link to="/services/protective-films" className="text-gray-700 hover:text-brand-red transition-colors">Protective Films</Link></li>
                  <li><Link to="/services/vehicle-lettering" className="text-gray-700 hover:text-brand-red transition-colors">Vehicle Lettering</Link></li>
                  <li><Link to="/services/specialty-wraps" className="text-gray-700 hover:text-brand-red transition-colors">Specialty Wraps</Link></li>
                  <li><Link to="/services/designer-wraps" className="text-gray-700 hover:text-brand-red transition-colors">Designer Wraps</Link></li>
                  <li><Link to="/services/luxury-exotic-wraps" className="text-gray-700 hover:text-brand-red transition-colors">Luxury & Exotic Wraps</Link></li>
                  <li><Link to="/services/retail-graphics" className="text-gray-700 hover:text-brand-red transition-colors">Retail Graphics</Link></li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                <h2 className="text-xl font-semibold mb-4 text-brand-navy flex items-center">
                  <Map className="h-5 w-5 mr-2 text-brand-red" />
                  Popular Service Areas
                </h2>
                <Separator className="mb-4" />
                <ul className="space-y-3">
                  <li><Link to="/vehicle-wraps-chicago-il" className="text-gray-700 hover:text-brand-red transition-colors">Chicago, IL</Link></li>
                  <li><Link to="/vehicle-wraps-naperville-il" className="text-gray-700 hover:text-brand-red transition-colors">Naperville, IL</Link></li>
                  <li><Link to="/vehicle-wraps-schaumburg-il" className="text-gray-700 hover:text-brand-red transition-colors">Schaumburg, IL</Link></li>
                  <li><Link to="/vehicle-wraps-evanston-il" className="text-gray-700 hover:text-brand-red transition-colors">Evanston, IL</Link></li>
                  <li><Link to="/vehicle-wraps-oak-brook-il" className="text-gray-700 hover:text-brand-red transition-colors">Oak Brook, IL</Link></li>
                  <li><Link to="/locations" className="text-brand-red hover:underline text-sm">View All Locations →</Link></li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                <h2 className="text-xl font-semibold mb-4 text-brand-navy flex items-center">
                  <Map className="h-5 w-5 mr-2 text-brand-red" />
                  Resources
                </h2>
                <Separator className="mb-4" />
                <ul className="space-y-3">
                  <li><Link to="/gallery" className="text-gray-700 hover:text-brand-red transition-colors">Project Gallery</Link></li>
                  <li><Link to="/ai-wrap-ideas" className="text-gray-700 hover:text-brand-red transition-colors">AI Wrap Designer Tool</Link></li>
                  <li><a href="/vehicle-wrapping-guide.pdf" className="text-gray-700 hover:text-brand-red transition-colors">Vehicle Wrapping Guide (PDF)</a></li>
                  <li><Link to="/contact" className="text-gray-700 hover:text-brand-red transition-colors">Request a Quote</Link></li>
                  <li><Link to="/sitemap" className="text-gray-700 hover:text-brand-red transition-colors">Site Map</Link></li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                <h2 className="text-xl font-semibold mb-4 text-brand-navy flex items-center">
                  <Map className="h-5 w-5 mr-2 text-brand-red" />
                  Contact Information
                </h2>
                <Separator className="mb-4" />
                <ul className="space-y-3">
                  <li><a href="tel:3125971286" className="text-gray-700 hover:text-brand-red transition-colors">(312) 597-1286</a></li>
                  <li><a href="mailto:roy@wrappingchicago.com" className="text-gray-700 hover:text-brand-red transition-colors">roy@wrappingchicago.com</a></li>
                  <li><address className="text-gray-700 not-italic">4711 N. Lamon Ave<br />Chicago, IL 60630</address></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default SitemapPage;
