
import React from 'react';
import FeaturedService from './featured-service/FeaturedService';
import SecondaryService from './secondary-services/SecondaryService';
import AdditionalService from './additional-services/AdditionalService';

interface ServicesSectionProps {
  fleetWrapVan: string;
  colorChangeVan: string;
  commercialGraphics: string;
}

const ServicesSection = ({ fleetWrapVan, colorChangeVan, commercialGraphics }: ServicesSectionProps) => {
  // Featured service configuration
  const featuredService = {
    title: "Color Change Wraps",
    description: "Transform your vehicle's appearance with our premium color change wraps. Slide to see the dramatic before and after transformation from silver to vibrant blue on this Lexus IS.",
    beforeImage: "/lovable-uploads/60c7cf64-9ac2-4f0b-b567-3b7f87c327c9.png",
    afterImage: "/lovable-uploads/b6c498ab-7a00-4a2c-957d-9ff9c4f11e8c.png",
    link: "/services/color-change-wraps"
  };

  // Secondary services configuration
  const secondaryServices = [
    {
      title: "Color Change Wraps",
      description: "Want a new look without the permanence of paint? Our color change wraps allow you to transform your vehicle with premium vinyl wraps in any color or finish.",
      image: "/lovable-uploads/459b925b-94c6-40c1-92cc-d4112da7ac6c.png",
      link: "/color-change-wraps"
    },
    {
      title: "Commercial Graphics",
      description: "From simple lettering to complex designs, our commercial graphics solutions help businesses create professional vehicle identities that stand out on the road.",
      image: commercialGraphics,
      link: "/services/commercial-graphics"
    }
  ];

  // Additional services configuration
  const additionalServices = [
    {
      title: "Designer Wraps",
      description: "Stand out with custom designer wraps featuring unique patterns, textures, and artistic elements that transform your vehicle into a personalized masterpiece.",
      link: "/designer-wraps"
    },
    {
      title: "Luxury & Exotic Wraps",
      description: "Specialized wrapping services for high-end vehicles including Ferrari, Lamborghini, Porsche, and other luxury and exotic automobiles.",
      link: "/luxury-exotic-wraps"
    },
    {
      title: "Partial Wraps",
      description: "Cost-effective partial wrapping solutions that deliver maximum visual impact while working with your budget.",
      link: "/services/partial-wraps"
    },
    {
      title: "Protective Films",
      description: "Shield your vehicle's paint from road debris, scratches, and environmental damage with our premium protective film installations.",
      link: "/services/protective-films"
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
        
        <FeaturedService {...featuredService} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {secondaryServices.map((service, index) => (
            <SecondaryService key={index} {...service} />
          ))}
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6 text-brand-navy">Additional Wrapping Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <AdditionalService key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
