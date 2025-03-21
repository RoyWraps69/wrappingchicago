
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ServicesSectionProps {
  fleetWrapVan: string;
  colorChangeVan: string;
  commercialGraphics: string;
}

const ServicesSection = ({ fleetWrapVan, colorChangeVan, commercialGraphics }: ServicesSectionProps) => {
  // Main featured service
  const featuredService = {
    title: "Fleet Wraps",
    description: "Transform your company vehicles into eye-catching mobile billboards. Our fleet wrapping services help businesses maximize their advertising reach across Chicago.",
    image: fleetWrapVan,
    link: "/services/fleet-wraps"
  };
  
  // Secondary services
  const secondaryServices = [
    {
      title: "Color Change Wraps",
      description: "Want a new look without the permanence of paint? Our color change wraps allow you to transform your vehicle with premium vinyl wraps in any color or finish.",
      image: colorChangeVan,
      link: "/services/color-change-wraps"
    },
    {
      title: "Commercial Graphics",
      description: "From simple lettering to complex designs, our commercial graphics solutions help businesses create professional vehicle identities that stand out on the road.",
      image: commercialGraphics,
      link: "/services/commercial-graphics"
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3 text-brand-navy">Our Vehicle Wrap Services</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Wrapping Chicago offers a comprehensive range of vehicle wrapping services to meet the needs of businesses and individuals throughout Chicago and surrounding areas.
          </p>
        </div>
        
        {/* Featured Service - Fleet Wraps (Larger) with text UNDER the image */}
        <div className="mb-8">
          <div className="bg-brand-light rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col">
              <div className="w-full">
                <img 
                  src={featuredService.image}
                  alt={`${featuredService.title} - Wrapping Chicago`}
                  className="object-cover w-full h-auto"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-3 text-brand-navy">{featuredService.title}</h3>
                <p className="text-gray-700 mb-4 text-lg">{featuredService.description}</p>
                <Button
                  asChild
                  className="bg-brand-navy hover:bg-blue-900 text-white w-full md:w-auto self-start"
                >
                  <Link to={featuredService.link}>Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Secondary Services - Evenly spaced below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryServices.map((service, index) => (
            <div key={index} className="bg-brand-light rounded-lg overflow-hidden shadow-md h-full">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={service.image}
                  alt={`${service.title} - Wrapping Chicago`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-brand-navy">{service.title}</h3>
                <p className="text-gray-700 mb-3">{service.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                >
                  <Link to={service.link}>Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
