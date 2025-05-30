
import React from 'react';
import { Link } from 'react-router-dom';
import { cities } from '@/data/cities';

const InternalLinksFooter: React.FC = () => {
  // Get top cities for linking
  const topCities = cities.slice(0, 12);
  
  // Complete service and page categories for comprehensive linking
  const linkSections = [
    {
      title: "Main Pages",
      links: [
        { path: "/", name: "Home" },
        { path: "/about", name: "About Us" },
        { path: "/contact", name: "Contact" },
        { path: "/gallery", name: "Gallery" },
        { path: "/pricing", name: "Pricing" },
        { path: "/faq", name: "FAQ" },
        { path: "/blog", name: "Blog" },
        { path: "/locations", name: "Locations" }
      ]
    },
    {
      title: "Vehicle Types",
      links: [
        { path: "/car-wraps", name: "Car Wraps" },
        { path: "/truck-wraps", name: "Truck Wraps" },
        { path: "/van-wraps", name: "Van Wraps" },
        { path: "/luxury-exotic-wraps", name: "Luxury & Exotic" }
      ]
    },
    {
      title: "Service Types",
      links: [
        { path: "/services/fleet-wraps", name: "Fleet Wraps" },
        { path: "/color-change-wraps", name: "Color Change" },
        { path: "/services/commercial-graphics", name: "Commercial Graphics" },
        { path: "/services/partial-wraps", name: "Partial Wraps" },
        { path: "/services/protective-films", name: "Protective Films" },
        { path: "/services/vehicle-lettering", name: "Vehicle Lettering" },
        { path: "/services/specialty-wraps", name: "Specialty Wraps" },
        { path: "/services/retail-graphics", name: "Retail Graphics" },
        { path: "/designer-wraps", name: "Designer Wraps" }
      ]
    },
    {
      title: "Special Features",
      links: [
        { path: "/ai-wrap-ideas", name: "AI Wrap Designer" },
        { path: "/truck-wraps-chicago", name: "Truck Wraps Chicago" },
        { path: "/services", name: "All Services" },
        { path: "/sitemap", name: "Sitemap" },
        { path: "/html-sitemap", name: "HTML Sitemap" }
      ]
    }
  ];

  return (
    <footer className="py-12 bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-brand-navy mb-8 text-center">Complete Site Navigation</h2>
        
        {/* Main link sections grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {linkSections.map((section, i) => (
            <div key={i} className="space-y-4">
              <h3 className="font-semibold text-brand-navy border-b border-gray-200 pb-2">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link 
                      to={link.path} 
                      className="text-gray-600 hover:text-brand-red transition-colors text-sm block py-1"
                      aria-label={`Visit ${link.name} page`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* City-specific pages */}
        <div className="mb-10">
          <h3 className="font-semibold text-brand-navy border-b border-gray-200 pb-2 mb-4">Service Locations</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-sm">
            {topCities.map((city) => (
              <Link 
                key={city.slug}
                to={`/vehicle-wraps-${city.slug}-il`} 
                className="bg-white p-3 border border-gray-200 rounded text-center hover:bg-gray-50 hover:border-gray-300 transition-colors text-gray-700 hover:text-brand-red"
                aria-label={`Vehicle wraps in ${city.name}, IL`}
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Cross-linking section for SEO */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-brand-navy mb-4">Explore More</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link to="/gallery" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded transition-colors">View Gallery</Link>
            <Link to="/about" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded transition-colors">About Our Team</Link>
            <Link to="/contact" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded transition-colors">Get Quote</Link>
            <Link to="/pricing" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded transition-colors">See Pricing</Link>
            <Link to="/faq" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded transition-colors">Common Questions</Link>
            <Link to="/blog" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded transition-colors">Read Blog</Link>
            <Link to="/locations" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded transition-colors">All Locations</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default InternalLinksFooter;
