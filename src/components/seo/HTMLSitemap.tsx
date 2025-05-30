
import React from 'react';
import { Link } from 'react-router-dom';
import { cities } from '@/data/cities';

const HTMLSitemap: React.FC = () => {
  // Define comprehensive sitemap sections with all links
  const sitemapSections = [
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
      title: "Vehicle Type Services",
      links: [
        { path: "/car-wraps", name: "Car Wraps" },
        { path: "/truck-wraps", name: "Truck Wraps" },
        { path: "/van-wraps", name: "Van Wraps" },
        { path: "/luxury-exotic-wraps", name: "Luxury & Exotic Wraps" }
      ]
    },
    {
      title: "Service Categories",
      links: [
        { path: "/services", name: "All Services" },
        { path: "/services/fleet-wraps", name: "Fleet Wraps" },
        { path: "/color-change-wraps", name: "Color Change Wraps" },
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
        { path: "/ai-wrap-ideas", name: "AI Wrap Ideas Generator" },
        { path: "/truck-wraps-chicago", name: "Truck Wraps Chicago" },
        { path: "/sitemap", name: "Sitemap" },
        { path: "/html-sitemap", name: "HTML Sitemap" }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brand-navy mb-4">Wrapping Chicago - Complete Sitemap</h1>
        <p className="text-gray-600 mb-4">
          This comprehensive sitemap provides access to all pages on the Wrapping Chicago website. 
          For search engines, please refer to our <a href="/sitemap.xml" className="text-brand-red hover:underline" target="_blank" rel="noopener">XML Sitemap</a>.
        </p>
        <nav className="text-sm">
          <Link to="/" className="text-brand-red hover:underline">Home</Link>
          <span className="mx-2">•</span>
          <Link to="/about" className="text-brand-red hover:underline">About</Link>
          <span className="mx-2">•</span>
          <Link to="/contact" className="text-brand-red hover:underline">Contact</Link>
          <span className="mx-2">•</span>
          <Link to="/gallery" className="text-brand-red hover:underline">Gallery</Link>
          <span className="mx-2">•</span>
          <Link to="/services" className="text-brand-red hover:underline">Services</Link>
        </nav>
      </div>

      {/* Main Sitemap Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {sitemapSections.map((section, i) => (
          <div key={i} className="border border-gray-200 rounded-lg p-6 shadow-sm bg-white">
            <h2 className="text-lg font-semibold text-brand-navy mb-4 border-b border-gray-200 pb-2">{section.title}</h2>
            <ul className="space-y-2">
              {section.links.map((link, j) => (
                <li key={j}>
                  <Link 
                    to={link.path} 
                    className="text-gray-700 hover:text-brand-red transition-colors inline-block py-1 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Location Pages Section */}
      <div className="border border-gray-200 rounded-lg p-6 shadow-sm mb-12 bg-white">
        <h2 className="text-lg font-semibold text-brand-navy mb-4 border-b border-gray-200 pb-2">
          Service Area Pages ({cities.length} locations)
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {cities.map((city) => (
            <Link 
              key={city.slug}
              to={`/vehicle-wraps-${city.slug}-il`} 
              className="text-gray-700 hover:text-brand-red transition-colors inline-block py-2 px-3 bg-gray-50 hover:bg-gray-100 rounded text-sm text-center"
            >
              {city.name}, IL
            </Link>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link to="/locations" className="text-brand-red hover:underline font-medium">
            View All Service Areas →
          </Link>
        </div>
      </div>

      {/* Cross-links to all pages */}
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-medium text-brand-navy mb-4">Quick Navigation</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          {sitemapSections.flatMap(section => section.links).map((link, i) => (
            <Link 
              key={i}
              to={link.path} 
              className="bg-white hover:bg-gray-100 px-3 py-1 rounded border border-gray-200 hover:border-gray-300 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* SEO Information */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 mt-8">
        <h2 className="text-lg font-medium text-brand-navy mb-3">Sitemap Information</h2>
        <p className="text-gray-600 text-sm mb-2">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
        <p className="text-gray-600 text-sm mb-4">
          This HTML sitemap contains links to all {sitemapSections.flatMap(s => s.links).length + cities.length} pages on our website.
          If you're looking for a specific page that isn't listed here, please <Link to="/contact" className="text-brand-red hover:underline">contact us</Link>.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link to="/sitemap.xml" className="text-brand-red hover:underline text-sm">XML Sitemap</Link>
          <span className="text-gray-400">|</span>
          <Link to="/robots.txt" className="text-brand-red hover:underline text-sm">Robots.txt</Link>
          <span className="text-gray-400">|</span>
          <Link to="/contact" className="text-brand-red hover:underline text-sm">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default HTMLSitemap;
