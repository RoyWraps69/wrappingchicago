
import React from 'react';
import { City } from '@/data/cities';
import CityHeader from './CityHeader';
import CityIntroduction from './CityIntroduction';
import ServicesOverview from './ServicesOverview';
import ServiceCards from './ServiceCards';
import BusinessBenefits from './BusinessBenefits';
import CallToActionBox from './CallToActionBox';
import LocationSidebar from './LocationSidebar';

interface LocationContentProps {
  city: City;
}

const LocationContent = ({ city }: LocationContentProps) => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <CityHeader city={city} />
            <div className="prose max-w-none">
              <CityIntroduction city={city} />
              <ServicesOverview city={city} />
              <ServiceCards city={city} />
              <BusinessBenefits city={city} />
              <CallToActionBox city={city} />
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="md:col-span-1">
            <LocationSidebar city={city} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContent;
