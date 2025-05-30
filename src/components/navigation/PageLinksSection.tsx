
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cities } from '@/data/cities';

interface PageLinksSectionProps {
  currentPageTitle?: string;
  excludeCurrentPath?: boolean;
}

const PageLinksSection: React.FC<PageLinksSectionProps> = ({ 
  currentPageTitle = "Related Pages",
  excludeCurrentPath = true 
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // All available pages with descriptions
  const allPages = [
    { path: "/", name: "Home", description: "Vehicle wrap services in Chicago" },
    { path: "/about", name: "About", description: "Our company and expertise" },
    { path: "/contact", name: "Contact", description: "Get in touch for a quote" },
    { path: "/gallery", name: "Gallery", description: "View our work portfolio" },
    { path: "/pricing", name: "Pricing", description: "Transparent pricing information" },
    { path: "/faq", name: "FAQ", description: "Frequently asked questions" },
    { path: "/blog", name: "Blog", description: "Latest news and tips" },
    { path: "/locations", name: "Locations", description: "Areas we serve" },
    { path: "/services", name: "All Services", description: "Complete service list" },
    { path: "/car-wraps", name: "Car Wraps", description: "Custom car wrap services" },
    { path: "/truck-wraps", name: "Truck Wraps", description: "Professional truck wrapping" },
    { path: "/van-wraps", name: "Van Wraps", description: "Commercial van graphics" },
    { path: "/color-change-wraps", name: "Color Change", description: "Transform your vehicle's color" },
    { path: "/luxury-exotic-wraps", name: "Luxury Wraps", description: "High-end vehicle wrapping" },
    { path: "/designer-wraps", name: "Designer Wraps", description: "Artistic vehicle designs" },
    { path: "/ai-wrap-ideas", name: "AI Designer", description: "AI-powered wrap concepts" },
    { path: "/truck-wraps-chicago", name: "Truck Wraps Chicago", description: "Chicago truck wrapping specialists" }
  ];
  
  // Filter out current page if requested
  const availablePages = excludeCurrentPath 
    ? allPages.filter(page => page.path !== currentPath)
    : allPages;
  
  // Get a selection of top cities for additional linking
  const topCities = cities.slice(0, 6);
  
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold text-brand-navy mb-6">{currentPageTitle}</h2>
        
        {/* Main page links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {availablePages.slice(0, 9).map((page) => (
            <Link 
              key={page.path}
              to={page.path}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-brand-red/30"
            >
              <h3 className="font-medium text-brand-navy mb-1">{page.name}</h3>
              <p className="text-sm text-gray-600">{page.description}</p>
            </Link>
          ))}
        </div>
        
        {/* Additional service and location links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service pages */}
          <div>
            <h3 className="font-medium text-brand-navy mb-3">More Services</h3>
            <div className="grid grid-cols-1 gap-2">
              {availablePages.slice(9).map((page) => (
                <Link 
                  key={page.path}
                  to={page.path}
                  className="text-gray-700 hover:text-brand-red transition-colors py-1 text-sm"
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Location pages */}
          <div>
            <h3 className="font-medium text-brand-navy mb-3">Service Areas</h3>
            <div className="grid grid-cols-2 gap-2">
              {topCities.map((city) => (
                <Link 
                  key={city.slug}
                  to={`/vehicle-wraps-${city.slug}-il`}
                  className="text-gray-700 hover:text-brand-red transition-colors py-1 text-sm"
                >
                  {city.name}, IL
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageLinksSection;
