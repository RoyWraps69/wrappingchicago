
import React from 'react';
import AreasServedSection from '@/components/home/AreasServedSection';
import { City } from '@/data/types/city';

interface AreasServedMainSectionProps {
  cities: City[];
}

const AreasServedMainSection: React.FC<AreasServedMainSectionProps> = ({ cities }) => {
  return (
    <section className="py-12 carbon-fiber-light" aria-labelledby="areas-heading">
      <div className="container mx-auto px-4">
        <h2 id="areas-heading" className="text-3xl font-bold text-center mb-8 speakable">
          Chicago Areas We Serve
        </h2>
        <AreasServedSection cities={cities} />
      </div>
    </section>
  );
};

export default AreasServedMainSection;
