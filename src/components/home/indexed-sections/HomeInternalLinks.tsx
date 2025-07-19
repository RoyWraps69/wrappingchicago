
import React from 'react';
import { Link } from 'react-router-dom';
import { cities } from '@/data/cities';

const HomeInternalLinks: React.FC = () => {
  // Create service categories for comprehensive internal linking
  const serviceCategories = [
    {
      title: "Car Wrapping Services",
      links: [
        { path: "/car-wraps", name: "Car Wraps" },
        { path: "/luxury-exotic-wraps", name: "Luxury & Exotic Wraps" },
        { path: "/color-change-wraps", name: "Color Change Wraps" },
        { path: "/protective-films", name: "Paint Protection Films" },
        { path: "/designer-wraps", name: "Designer Car Wraps" }
      ]
    },
    {
      title: "Commercial Vehicle Wraps",
      links: [
        { path: "/truck-wraps", name: "Truck Wraps" },
        { path: "/van-wraps", name: "Van Wraps" },
        { path: "/fleet-wraps", name: "Fleet Wraps" },
        { path: "/commercial-graphics", name: "Commercial Graphics" },
        { path: "/vehicle-lettering", name: "Vehicle Lettering" }
      ]
    },
    {
      title: "Specialized Wrap Solutions",
      links: [
        { path: "/partial-wraps", name: "Partial Wraps" },
        { path: "/specialty-wraps", name: "Specialty Wraps" },
        { path: "/retail-graphics", name: "Retail Graphics" },
        { path: "/ai-wrap-ideas", name: "AI Wrap Design" }
      ]
    }
  ];

  // Select top cities for linking (first 8)
  const topCities = cities.slice(0, 8);
  
  return (
    <section className="py-12 bg-gray-50 internal-links-section">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-brand-navy text-center mb-8">
          Complete Vehicle Wrap Services Directory
        </h2>
        
        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {serviceCategories.map((category, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-brand-navy mb-4 border-b border-gray-200 pb-2">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.links.map((link, j) => (
                  <li key={j} className="text-base">
                    <Link 
                      to={link.path} 
                      className="text-gray-700 hover:text-brand-red transition-colors flex items-center"
                      aria-label={`Learn about ${link.name}`}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 mr-2 text-brand-red" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* City-Specific Services Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-12">
          <h3 className="text-xl font-semibold text-brand-navy mb-4 border-b border-gray-200 pb-2">
            Vehicle Wrap Services By Location
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {topCities.map((city) => (
              <Link 
                key={city.slug}
                to={`/vehicle-wraps-${city.slug}-il`} 
                className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center"
                aria-label={`Vehicle wraps in ${city.name}, IL`}
              >
                <span className="text-brand-navy font-medium">{city.name}, IL</span>
              </Link>
            ))}
            <Link 
              to="/locations" 
              className="p-3 bg-brand-red/10 rounded-lg hover:bg-brand-red/20 transition-colors text-center"
              aria-label="View all service locations"
            >
              <span className="text-brand-red font-medium">View All Locations →</span>
            </Link>
          </div>
        </div>
        
        {/* Information & Resources Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-brand-navy mb-4 border-b border-gray-200 pb-2">
            Vehicle Wrap Information & Resources
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
            <Link 
              to="/gallery" 
              className="text-gray-700 hover:text-brand-red transition-colors flex items-center"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2 text-brand-red" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              Vehicle Wrap Gallery
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-brand-red transition-colors flex items-center"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2 text-brand-red" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              About Our Company
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-brand-red transition-colors flex items-center"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2 text-brand-red" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact Us
            </Link>
            <Link 
              to="/truck-wraps-chicago" 
              className="text-gray-700 hover:text-brand-red transition-colors flex items-center"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2 text-brand-red" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-4h4a1 1 0 00.95-.68l1-3a1 1 0 00-.95-1.32h-5.18l.71-1.06a2 2 0 011.66-.94H16a1 1 0 000-2h-3.77a4 4 0 00-3.32 1.88L7.41 6h-1A1 1 0 006 5v-.01z" />
              </svg>
              Truck Wraps Chicago
            </Link>
            <Link 
              to="/ai-wrap-ideas" 
              className="text-gray-700 hover:text-brand-red transition-colors flex items-center"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2 text-brand-red" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              AI Wrap Design Tool
            </Link>
            <Link 
              to="/sitemap" 
              className="text-gray-700 hover:text-brand-red transition-colors flex items-center"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2 text-brand-red" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              Complete Sitemap
            </Link>
          </div>
        </div>
        
        {/* SEO text - hidden but available for search engines */}
        <div className="mt-12 text-sm text-gray-500">
          <p>
            Looking for comprehensive vehicle transformation in Chicago? Wrapping Chicago offers premium automotive customization, 
            commercial fleet branding, luxury enhancement, and custom graphic design with over 16,000 completed 
            projects in our 20 years of business. We serve Chicago and all surrounding suburbs with advanced 
            installation using cutting-edge vinyl technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeInternalLinks;
