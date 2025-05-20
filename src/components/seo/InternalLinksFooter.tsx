
import React from 'react';
import { Link } from 'react-router-dom';
import { cities } from '@/data/cities';

const InternalLinksFooter: React.FC = () => {
  // Get top cities for linking
  const topCities = cities.slice(0, 8);
  
  // Main service categories for organized linking
  const serviceCategories = [
    {
      title: "Vehicle Types",
      links: [
        { path: "/car-wraps", name: "Car Wraps" },
        { path: "/truck-wraps", name: "Truck Wraps" },
        { path: "/van-wraps", name: "Van Wraps" },
        { path: "/fleet-wraps", name: "Fleet Wraps" },
        { path: "/luxury-exotic-wraps", name: "Luxury & Exotic" }
      ]
    },
    {
      title: "Wrap Types",
      links: [
        { path: "/color-change-wraps", name: "Color Change" },
        { path: "/partial-wraps", name: "Partial Wraps" },
        { path: "/designer-wraps", name: "Designer Wraps" },
        { path: "/specialty-wraps", name: "Specialty Wraps" },
        { path: "/commercial-graphics", name: "Commercial Graphics" }
      ]
    },
    {
      title: "Additional Services",
      links: [
        { path: "/vehicle-lettering", name: "Vehicle Lettering" },
        { path: "/retail-graphics", name: "Retail Graphics" },
        { path: "/protective-films", name: "Protective Films" },
        { path: "/ai-wrap-ideas", name: "AI Wrap Designer" }
      ]
    },
    {
      title: "Information",
      links: [
        { path: "/about", name: "About Us" },
        { path: "/gallery", name: "Gallery" },
        { path: "/contact", name: "Contact" },
        { path: "/locations", name: "Locations" },
        { path: "/sitemap", name: "Sitemap" }
      ]
    }
  ];

  return (
    <footer className="py-10 bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold text-brand-navy mb-6 text-center">Complete Guide to Vehicle Wrapping Services</h2>
        
        {/* Service categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {serviceCategories.map((category, i) => (
            <div key={i} className="space-y-3">
              <h3 className="font-medium text-brand-navy border-b border-gray-200 pb-2">{category.title}</h3>
              <ul className="space-y-2">
                {category.links.map((link, j) => (
                  <li key={j}>
                    <Link 
                      to={link.path} 
                      className="text-gray-600 hover:text-brand-red transition-colors text-sm"
                      aria-label={`Learn about ${link.name}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* City links section */}
        <div className="mb-8">
          <h3 className="font-medium text-brand-navy border-b border-gray-200 pb-2 mb-4">Vehicle Wrap Services by Location</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 text-sm">
            {topCities.map((city) => (
              <Link 
                key={city.slug}
                to={`/vehicle-wraps-${city.slug}-il`} 
                className="bg-white p-2 border border-gray-200 rounded text-center hover:bg-gray-50 hover:border-gray-300 transition-colors"
                aria-label={`Vehicle wraps in ${city.name}, IL`}
              >
                {city.name}, IL
              </Link>
            ))}
            <Link 
              to="/locations" 
              className="bg-white p-2 border border-brand-red/20 rounded text-center hover:bg-brand-red/5 text-brand-red transition-colors"
              aria-label="View all service locations"
            >
              View All →
            </Link>
          </div>
        </div>
        
        {/* Combined services links section */}
        <div>
          <h3 className="font-medium text-brand-navy border-b border-gray-200 pb-2 mb-4">All Vehicle Wrap Services</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-2 text-sm">
            {serviceCategories.flatMap(category => category.links).map((link, i) => (
              <Link 
                key={i}
                to={link.path} 
                className="text-gray-600 hover:text-brand-red transition-colors"
                aria-label={`Learn about ${link.name}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/services" 
              className="text-brand-red font-medium hover:underline"
              aria-label="View all services"
            >
              View All Services →
            </Link>
          </div>
        </div>
        
        {/* Added semantic link for good measure */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Looking for our <Link to="/html-sitemap" className="text-brand-navy hover:underline">HTML Sitemap</Link>? View a complete list of all our pages.</p>
        </div>
      </div>
    </footer>
  );
};

export default InternalLinksFooter;
