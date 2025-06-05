
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Truck, Building, Palette, Shield, FileText } from 'lucide-react';

/**
 * Topical Authority Hub Component
 * Creates comprehensive content clusters demonstrating expertise across all vehicle wrap topics
 */
const TopicalAuthorityHub: React.FC = () => {
  const topicClusters = [
    {
      title: "Vehicle Types & Applications",
      icon: Car,
      description: "Complete coverage of vehicle wrap solutions for every type of vehicle",
      links: [
        { title: "Car Wraps Chicago", href: "/car-wraps", description: "Custom car wrap designs and installation" },
        { title: "Truck Wraps Chicago", href: "/truck-wraps", description: "Commercial truck wrap solutions" },
        { title: "Van Wraps Chicago", href: "/van-wraps", description: "Cargo and sprinter van graphics" },
        { title: "Fleet Wraps Chicago", href: "/fleet-wraps", description: "Multi-vehicle fleet branding" }
      ]
    },
    {
      title: "Wrap Services & Specialties",
      icon: Palette,
      description: "Specialized vehicle wrap services for unique needs and applications",
      links: [
        { title: "Color Change Wraps", href: "/color-change-wraps", description: "Transform your vehicle's color completely" },
        { title: "Commercial Graphics", href: "/commercial-graphics", description: "Business branding and advertising wraps" },
        { title: "Luxury & Exotic Wraps", href: "/luxury-exotic-wraps", description: "Premium wraps for high-end vehicles" },
        { title: "Partial Wraps", href: "/partial-wraps", description: "Targeted wrap coverage for budget-conscious clients" }
      ]
    },
    {
      title: "Materials & Protection",
      icon: Shield,
      description: "Advanced materials and protective solutions for vehicle preservation",
      links: [
        { title: "Protective Films", href: "/protective-films", description: "Paint protection and clear bra services" },
        { title: "3M Vinyl Materials", href: "/services", description: "Premium 3M wrap materials and benefits" },
        { title: "Specialty Wraps", href: "/specialty-wraps", description: "Textured and specialty finish wraps" },
        { title: "Vehicle Lettering", href: "/vehicle-lettering", description: "Professional vehicle lettering and decals" }
      ]
    },
    {
      title: "Business Solutions",
      icon: Building,
      description: "Comprehensive vehicle wrap solutions for businesses and organizations",
      links: [
        { title: "Fleet Management", href: "/fleet-wraps", description: "Complete fleet branding and management" },
        { title: "Retail Graphics", href: "/retail-graphics", description: "Retail and storefront vehicle graphics" },
        { title: "Designer Wraps", href: "/designer-wraps", description: "Custom designer wrap collections" },
        { title: "Commercial Consulting", href: "/contact", description: "Professional design consultation services" }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Complete Vehicle Wrap Solutions in Chicago
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Explore our comprehensive range of vehicle wrap services, materials, and expertise. 
            From simple car wraps to complex fleet graphics, we cover every aspect of vehicle transformation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {topicClusters.map((cluster, index) => {
            const IconComponent = cluster.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">{cluster.title}</h3>
                    <p className="text-black text-sm">{cluster.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {cluster.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      to={link.href}
                      className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="font-semibold text-black hover:text-brand-red">
                        {link.title}
                      </div>
                      <div className="text-sm text-black">
                        {link.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-4">
              Need Help Choosing the Right Wrap Solution?
            </h3>
            <p className="text-black mb-6">
              Our experts are here to guide you through the best vehicle wrap options for your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-brand-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center"
              >
                <FileText className="mr-2 h-5 w-5" />
                Get Expert Consultation
              </Link>
              <a
                href="tel:3125971286"
                className="border-2 border-black text-black hover:bg-black hover:text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center"
              >
                Call (312) 597-1286
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicalAuthorityHub;
