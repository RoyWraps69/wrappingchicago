
import React from 'react';
import { Link } from 'react-router-dom';
import { cities } from '@/data/cities';

const HTMLSitemap: React.FC = () => {
  // Define sitemap sections with links
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { path: "/", name: "Home" },
        { path: "/about", name: "About Us" },
        { path: "/contact", name: "Contact" },
        { path: "/gallery", name: "Gallery" },
        { path: "/locations", name: "Locations" }
      ]
    },
    {
      title: "Services",
      links: [
        { path: "/services", name: "All Services" },
        { path: "/car-wraps", name: "Car Wraps" },
        { path: "/truck-wraps", name: "Truck Wraps" },
        { path: "/van-wraps", name: "Van Wraps" },
        { path: "/fleet-wraps", name: "Fleet Wraps" },
        { path: "/luxury-exotic-wraps", name: "Luxury & Exotic Wraps" },
        { path: "/color-change-wraps", name: "Color Change Wraps" },
        { path: "/commercial-graphics", name: "Commercial Graphics" },
        { path: "/partial-wraps", name: "Partial Wraps" },
        { path: "/protective-films", name: "Protective Films" },
        { path: "/vehicle-lettering", name: "Vehicle Lettering" },
        { path: "/specialty-wraps", name: "Specialty Wraps" },
        { path: "/retail-graphics", name: "Retail Graphics" },
        { path: "/designer-wraps", name: "Designer Wraps" }
      ]
    },
    {
      title: "Special Features",
      links: [
        { path: "/ai-wrap-ideas", name: "AI Wrap Ideas Generator" },
        { path: "/truck-wraps-chicago", name: "Truck Wraps Chicago" }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brand-navy mb-4">Wrapping Chicago Sitemap</h1>
        <p className="text-gray-600 mb-8">
          This sitemap provides all pages available on the Wrapping Chicago website. 
          For search engines, please refer to our <a href="/sitemap.xml" className="text-brand-red hover:underline" target="_blank" rel="noopener">XML Sitemap</a>.
        </p>
      </div>

      {/* Main Sitemap Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        {sitemapSections.map((section, i) => (
          <div key={i} className="border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-brand-navy mb-4 border-b border-gray-200 pb-2">{section.title}</h2>
            <ul className="space-y-2">
              {section.links.map((link, j) => (
                <li key={j}>
                  <Link 
                    to={link.path} 
                    className="text-gray-700 hover:text-brand-red transition-colors inline-block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Location Pages Section - More Complete */}
      <div className="border border-gray-200 rounded-lg p-6 shadow-sm mb-12">
        <h2 className="text-xl font-semibold text-brand-navy mb-4 border-b border-gray-200 pb-2">
          Service Area Pages
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-2">
          {cities.map((city) => (
            <Link 
              key={city.slug}
              to={`/vehicle-wraps-${city.slug}-il`} 
              className="text-gray-700 hover:text-brand-red transition-colors inline-block py-1"
            >
              {city.name}, IL Vehicle Wraps
            </Link>
          ))}
        </div>
      </div>

      {/* SEO Information */}
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
        <h2 className="text-lg font-medium text-brand-navy mb-3">Sitemap Information</h2>
        <p className="text-gray-600 text-sm mb-2">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
        <p className="text-gray-600 text-sm">
          This HTML sitemap is updated regularly to reflect all available pages on our website.
          If you're looking for a specific page that isn't listed here, please <Link to="/contact" className="text-brand-red hover:underline">contact us</Link>.
        </p>
      </div>
    </div>
  );
};

export default HTMLSitemap;
