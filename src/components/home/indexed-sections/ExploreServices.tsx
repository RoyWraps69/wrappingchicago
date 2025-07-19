
import React from 'react';
import { Link } from 'react-router-dom';

const ExploreServices: React.FC = () => {
  // Define comprehensive service information with descriptions for rich content
  const serviceGroups = [
    {
      title: "Vehicle Type Wraps",
      services: [
        {
          name: "Car Wraps",
          path: "/car-wraps",
          description: "Custom car wraps for personal and business vehicles. Transform your car's appearance with premium vinyl wraps."
        },
        {
          name: "Truck Wraps",
          path: "/truck-wraps",
          description: "Professional truck wraps for box trucks, pickup trucks, and delivery vehicles. Maximize your advertising presence on the road."
        },
        {
          name: "Van Wraps",
          path: "/van-wraps",
          description: "Specialized van wraps for work vans, delivery vans, and passenger vans. Make your commercial vehicles stand out."
        },
        {
          name: "Fleet Wraps",
          path: "/fleet-wraps",
          description: "Consistent branding across your entire vehicle fleet. Create a unified look for your business vehicles."
        },
        {
          name: "Luxury & Exotic Wraps",
          path: "/luxury-exotic-wraps",
          description: "Premium wraps for luxury and exotic vehicles, including color changes, accents, and chrome deletes."
        }
      ]
    },
    {
      title: "Wrap Types & Applications",
      services: [
        {
          name: "Color Change Wraps",
          path: "/color-change-wraps",
          description: "Transform your vehicle's color without paint. Available in matte, gloss, satin, and custom finishes."
        },
        {
          name: "Commercial Graphics",
          path: "/commercial-graphics",
          description: "Effective business graphics and branding solutions for commercial vehicles and storefronts."
        },
        {
          name: "Partial Wraps",
          path: "/partial-wraps",
          description: "Strategic partial coverage wraps that maximize visual impact while staying within budget."
        },
        {
          name: "Protective Films",
          path: "/protective-films",
          description: "Paint protection films to shield your vehicle from rock chips, scratches, and road debris."
        },
        {
          name: "Vehicle Lettering",
          path: "/vehicle-lettering",
          description: "Professional vinyl lettering, logos, and decals for vehicles, windows, and walls."
        },
        {
          name: "Specialty Wraps",
          path: "/specialty-wraps",
          description: "Unique wrap applications including carbon fiber, chrome, reflective, and textured finishes."
        },
        {
          name: "Retail Graphics",
          path: "/retail-graphics",
          description: "Window graphics, wall murals, and signage for retail locations and storefronts."
        },
        {
          name: "Designer Wraps",
          path: "/designer-wraps",
          description: "Premium designer patterns and collaborations for unique and stylish vehicle customization."
        }
      ]
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-brand-navy mb-2 text-center">Discover Your Perfect Vehicle Wrap Solution</h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-center">
          Chicago's leading provider of comprehensive vehicle customization, automotive branding, commercial graphics, 
          fleet transformation, and luxury enhancement with over 16,000 completed projects.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {serviceGroups.map((group, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-brand-navy mb-4 border-b border-gray-200 pb-2">
                {group.title}
              </h3>
              
              <div className="space-y-4">
                {group.services.map((service, idx) => (
                  <div key={idx} className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium text-brand-navy mb-1 speakable">
                      <Link 
                        to={service.path} 
                        className="hover:text-brand-red transition-colors"
                      >
                        {service.name}
                      </Link>
                    </h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                    <div className="mt-2">
                      <Link 
                        to={service.path} 
                        className="text-brand-red text-sm hover:underline font-medium inline-flex items-center"
                      >
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <Link 
                  to="/services" 
                  className="inline-block px-4 py-2 text-brand-red border border-brand-red rounded hover:bg-brand-red hover:text-white transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional information for SEO with schema markup */}
        <div 
          className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          itemScope 
          itemType="https://schema.org/Service"
        >
          <h3 
            className="text-lg font-semibold text-brand-navy mb-3 speakable" 
            itemProp="name"
          >
            Professional Vehicle Wrap Services in Chicago
          </h3>
          
          <div className="text-gray-600 text-sm space-y-3" itemProp="description">
            <p>
              At Wrapping Chicago, we provide premium vehicle wrapping services using high-quality 
              cutting-edge vinyl technology. With over 16,000 completed projects spanning two decades of innovation, 
              our expert installation team delivers exceptional results for businesses and individuals throughout
              Chicago and surrounding suburbs.
            </p>
            
            <p>
              Our comprehensive vehicle wrap services include car wraps, truck wraps, van wraps, 
              fleet wraps, color change wraps, partial wraps, commercial graphics, vehicle lettering, 
              protective films, specialty wraps, retail graphics, and designer wraps. Whether you need a 
              complete vehicle transformation or targeted branding, we have the expertise to exceed your expectations.
            </p>
            
            <div className="mt-4">
              <Link 
                to="/contact" 
                className="text-brand-red font-medium hover:underline"
                itemProp="url"
              >
                Contact us today for a free vehicle wrap consultation and quote
              </Link>
            </div>
          </div>
          
          <meta itemProp="areaServed" content="Chicago, Illinois" />
          <meta itemProp="provider" content="Wrapping Chicago" />
          <meta itemProp="serviceType" content="Vehicle Wraps" />
        </div>
      </div>
    </section>
  );
};

export default ExploreServices;
