import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Enhanced Internal Linking System - Addresses "too few internal links" SEO issue
 * Provides comprehensive internal linking structure for better crawlability
 */
const EnhancedInternalLinking: React.FC = () => {
  return (
    <>
      {/* Comprehensive Service Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">
            Complete Vehicle Wrap Services Chicago
          </h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {/* Primary Services */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Vehicle Wraps</h3>
              <ul className="space-y-2">
                <li><Link to="/car-wraps" className="text-brand-red hover:underline">Car Wraps Chicago</Link></li>
                <li><Link to="/truck-wraps" className="text-brand-red hover:underline">Truck Wraps Chicago</Link></li>
                <li><Link to="/van-wraps" className="text-brand-red hover:underline">Van Wraps Chicago</Link></li>
                <li><Link to="/fleet-wraps" className="text-brand-red hover:underline">Fleet Wraps Chicago</Link></li>
                <li><Link to="/color-change-wraps" className="text-brand-red hover:underline">Color Change Wraps</Link></li>
              </ul>
            </div>
            
            {/* Specialty Services */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Specialty Wraps</h3>
              <ul className="space-y-2">
                <li><Link to="/luxury-exotic-wraps" className="text-brand-red hover:underline">Luxury Car Wraps</Link></li>
                <li><Link to="/designer-wraps" className="text-brand-red hover:underline">Designer Wraps</Link></li>
                <li><Link to="/ai-wrap-ideas" className="text-brand-red hover:underline">AI Wrap Designer</Link></li>
                <li><Link to="/services" className="text-brand-red hover:underline">All Services</Link></li>
                <li><Link to="/pricing" className="text-brand-red hover:underline">Wrap Pricing</Link></li>
              </ul>
            </div>
            
            {/* Trade Services */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Trade Vehicle Wraps</h3>
              <ul className="space-y-2">
                <li><Link to="/plumbing-wraps" className="text-brand-red hover:underline">Plumbing Wraps</Link></li>
                <li><Link to="/hvac-wraps" className="text-brand-red hover:underline">HVAC Wraps</Link></li>
                <li><Link to="/electrical-wraps" className="text-brand-red hover:underline">Electrical Wraps</Link></li>
                <li><Link to="/movers-wraps" className="text-brand-red hover:underline">Moving Wraps</Link></li>
                <li><Link to="/delivery-wraps" className="text-brand-red hover:underline">Delivery Wraps</Link></li>
              </ul>
            </div>
            
            {/* Chicago Locations */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Chicago Locations</h3>
              <ul className="space-y-2">
                <li><Link to="/chicago" className="text-brand-red hover:underline">Chicago Wraps</Link></li>
                <li><Link to="/evanston" className="text-brand-red hover:underline">Evanston Wraps</Link></li>
                <li><Link to="/naperville" className="text-brand-red hover:underline">Naperville Wraps</Link></li>
                <li><Link to="/schaumburg" className="text-brand-red hover:underline">Schaumburg Wraps</Link></li>
                <li><Link to="/locations" className="text-brand-red hover:underline">All Locations</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Extended Location Links */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h3 className="text-2xl font-semibold text-brand-navy mb-6">Vehicle Wraps Throughout Chicagoland</h3>
            <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-4">
              <Link to="/skokie" className="text-brand-red hover:underline">Skokie IL</Link>
              <Link to="/arlington-heights" className="text-brand-red hover:underline">Arlington Heights</Link>
              <Link to="/palatine" className="text-brand-red hover:underline">Palatine IL</Link>
              <Link to="/oak-park" className="text-brand-red hover:underline">Oak Park IL</Link>
              <Link to="/aurora" className="text-brand-red hover:underline">Aurora IL</Link>
              <Link to="/joliet" className="text-brand-red hover:underline">Joliet IL</Link>
              <Link to="/wheaton" className="text-brand-red hover:underline">Wheaton IL</Link>
              <Link to="/elmhurst-il" className="text-brand-red hover:underline">Elmhurst IL</Link>
              <Link to="/lombard-il" className="text-brand-red hover:underline">Lombard IL</Link>
              <Link to="/downers-grove" className="text-brand-red hover:underline">Downers Grove</Link>
              <Link to="/bolingbrook" className="text-brand-red hover:underline">Bolingbrook IL</Link>
              <Link to="/cicero" className="text-brand-red hover:underline">Cicero IL</Link>
              <Link to="/berwyn" className="text-brand-red hover:underline">Berwyn IL</Link>
              <Link to="/glen-ellyn-il" className="text-brand-red hover:underline">Glen Ellyn IL</Link>
              <Link to="/oak-lawn-il" className="text-brand-red hover:underline">Oak Lawn IL</Link>
              <Link to="/tinley-park-il" className="text-brand-red hover:underline">Tinley Park IL</Link>
              <Link to="/orland-park-il" className="text-brand-red hover:underline">Orland Park IL</Link>
              <Link to="/lakeview-chicago" className="text-brand-red hover:underline">Lakeview Chicago</Link>
              <Link to="/logan-square-chicago" className="text-brand-red hover:underline">Logan Square</Link>
              <Link to="/bucktown-chicago" className="text-brand-red hover:underline">Bucktown Chicago</Link>
              <Link to="/gold-coast-chicago" className="text-brand-red hover:underline">Gold Coast</Link>
              <Link to="/truck-wraps-chicago" className="text-brand-red hover:underline">Truck Wraps Chicago</Link>
              <Link to="/vehicle-wraps-chicago-il" className="text-brand-red hover:underline">Chicago Vehicle Wraps</Link>
              <Link to="/andersonville-chicago" className="text-brand-red hover:underline">Andersonville</Link>
            </div>
          </div>
          
          {/* Information & Resource Links */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Company Information</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-brand-red hover:underline">About Wrapping Chicago</Link></li>
                <li><Link to="/gallery" className="text-brand-red hover:underline">Vehicle Wrap Gallery</Link></li>
                <li><Link to="/contact" className="text-brand-red hover:underline">Contact Us</Link></li>
                <li><Link to="/faq" className="text-brand-red hover:underline">Frequently Asked Questions</Link></li>
                <li><Link to="/blog" className="text-brand-red hover:underline">Vehicle Wrap Blog</Link></li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Resources & Tools</h3>
              <ul className="space-y-2">
                <li><Link to="/glossary" className="text-brand-red hover:underline">Vehicle Wrap Glossary</Link></li>
                <li><Link to="/stats" className="text-brand-red hover:underline">Company Statistics</Link></li>
                <li><Link to="/sitemap" className="text-brand-red hover:underline">Website Sitemap</Link></li>
                <li><Link to="/ai-wrap-ideas" className="text-brand-red hover:underline">AI Design Tool</Link></li>
                <li><Link to="/service-areas" className="text-brand-red hover:underline">Service Areas</Link></li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Legal & Policies</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy-policy" className="text-brand-red hover:underline">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-brand-red hover:underline">Terms of Service</Link></li>
                <li><Link to="/return-policy" className="text-brand-red hover:underline">Return Policy</Link></li>
                <li><Link to="/shipping" className="text-brand-red hover:underline">Shipping Information</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contextual Service Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Popular Vehicle Wrap Services</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/car-wraps" className="bg-brand-navy text-white px-4 py-2 rounded hover:bg-brand-red transition-colors">
                Chicago Car Wraps
              </Link>
              <Link to="/truck-wraps" className="bg-brand-navy text-white px-4 py-2 rounded hover:bg-brand-red transition-colors">
                Commercial Truck Wraps
              </Link>
              <Link to="/fleet-wraps" className="bg-brand-navy text-white px-4 py-2 rounded hover:bg-brand-red transition-colors">
                Fleet Vehicle Graphics
              </Link>
              <Link to="/color-change-wraps" className="bg-brand-navy text-white px-4 py-2 rounded hover:bg-brand-red transition-colors">
                Color Change Wraps
              </Link>
              <Link to="/plumbing-wraps" className="bg-brand-navy text-white px-4 py-2 rounded hover:bg-brand-red transition-colors">
                Plumbing Vehicle Wraps
              </Link>
              <Link to="/hvac-wraps" className="bg-brand-navy text-white px-4 py-2 rounded hover:bg-brand-red transition-colors">
                HVAC Truck Graphics
              </Link>
              <Link to="/electrical-wraps" className="bg-brand-navy text-white px-4 py-2 rounded hover:bg-brand-red transition-colors">
                Electrical Van Wraps
              </Link>
              <Link to="/contact" className="bg-brand-red text-white px-4 py-2 rounded hover:bg-brand-red/90 transition-colors">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnhancedInternalLinking;