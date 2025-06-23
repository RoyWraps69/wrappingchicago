
import React from 'react';
import ServicesSection from '@/components/home/ServicesSection';

interface ServicesMainSectionProps {
  fleetWrapVan: string;
  colorChangeVan: string;
  commercialGraphics: string;
}

const ServicesMainSection: React.FC<ServicesMainSectionProps> = ({
  fleetWrapVan,
  colorChangeVan,
  commercialGraphics
}) => {
  return (
    <section className="py-12 racing-stripes" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <h2 id="services-heading" className="text-3xl font-bold text-center mb-8 speakable">
          Our Vehicle Wrap Services in Chicago
        </h2>
        <ServicesSection 
          fleetWrapVan={fleetWrapVan}
          colorChangeVan={colorChangeVan}
          commercialGraphics={commercialGraphics}
        />
      </div>
    </section>
  );
};

export default ServicesMainSection;
