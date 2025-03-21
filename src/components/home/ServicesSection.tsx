
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GalleryItem } from '@/types/gallery';

interface ServicesSectionProps {
  fleetWrapVan: string;
  colorChangeVan: string;
  commercialGraphics: string;
}

const ServicesSection = ({ fleetWrapVan, colorChangeVan, commercialGraphics }: ServicesSectionProps) => {
  const services = [
    {
      title: "Fleet Wraps",
      description: "Transform your company vehicles into eye-catching mobile billboards. Our fleet wrapping services help businesses maximize their advertising reach across Chicago.",
      image: fleetWrapVan,
      link: "/services/fleet-wraps"
    },
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-navy">Our Vehicle Wrap Services</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Chicago Fleet Wraps offers a comprehensive range of vehicle wrapping services to meet the needs of businesses and individuals throughout Chicago and surrounding areas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-brand-light rounded-lg overflow-hidden shadow-md">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={service.image}
                  alt={`${service.title} - Chicago Fleet Wraps`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-brand-navy">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
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
