
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCatalog: React.FC = () => {
  const allServices = [
    { path: "/car-wraps", title: "Car Wraps", description: "Custom wraps for personal and commercial vehicles" },
    { path: "/truck-wraps", title: "Truck Wraps", description: "Professional wraps for all types of trucks" },
    { path: "/van-wraps", title: "Van Wraps", description: "Custom van wraps for business fleets" },
    { path: "/services/fleet-wraps", title: "Fleet Wraps", description: "Transform your business fleet into mobile billboards" },
    { path: "/color-change-wraps", title: "Color Change Wraps", description: "Transform your vehicle's appearance" },
    { path: "/services/commercial-graphics", title: "Commercial Graphics", description: "Business branding and vehicle graphics" },
    { path: "/services/partial-wraps", title: "Partial Wraps", description: "Cost-effective partial vehicle wrapping" },
    { path: "/services/protective-films", title: "Protective Films", description: "Paint protection and clear bra installation" },
    { path: "/services/vehicle-lettering", title: "Vehicle Lettering", description: "Professional vehicle lettering services" },
    { path: "/services/specialty-wraps", title: "Specialty Wraps", description: "Custom specialty vehicle wrapping" },
    { path: "/services/retail-graphics", title: "Retail Graphics", description: "Store signage and window graphics" },
    { path: "/designer-wraps", title: "Designer Wraps", description: "High-end custom vehicle designs" },
    { path: "/luxury-exotic-wraps", title: "Luxury & Exotic Wraps", description: "Premium wraps for luxury vehicles" }
  ];

  const relatedPages = [
    { path: "/gallery", title: "Gallery", description: "View our completed projects" },
    { path: "/pricing", title: "Pricing", description: "Transparent pricing information" },
    { path: "/about", title: "About Us", description: "Learn about our expertise" },
    { path: "/contact", title: "Contact", description: "Get a free quote" },
    { path: "/locations", title: "Locations", description: "Areas we serve" },
    { path: "/ai-wrap-ideas", title: "AI Designer", description: "Generate wrap ideas with AI" }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-brand-light p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-brand-navy mb-6">Our Vehicle Wrap Services</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allServices.map((service, index) => (
            <Link 
              key={index}
              to={service.path} 
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 hover:border-brand-red/30"
            >
              <h3 className="font-semibold text-brand-navy mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Related pages section */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-semibold text-brand-navy mb-4">More Information</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {relatedPages.map((page, index) => (
            <Link 
              key={index}
              to={page.path} 
              className="p-3 rounded border border-gray-200 hover:border-brand-red/30 transition-colors"
            >
              <h4 className="font-medium text-brand-navy mb-1">{page.title}</h4>
              <p className="text-sm text-gray-600">{page.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCatalog;
