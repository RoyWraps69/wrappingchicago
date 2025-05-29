
import React from 'react';
import { City } from '@/data/cities';
import CityHeader from './CityHeader';
import CityIntroduction from './CityIntroduction';
import ServicesOverview from './ServicesOverview';
import ServiceCards from './ServiceCards';
import BusinessBenefits from './BusinessBenefits';
import CallToActionBox from './CallToActionBox';
import LocationSidebar from './LocationSidebar';
import VehicleWrapKeywords from './VehicleWrapKeywords';

interface LocationContentProps {
  city: City;
}

const LocationContent = ({ city }: LocationContentProps) => {
  return (
    <main className="py-10 bg-white" id="main-content">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <article className="md:col-span-2">
            <CityHeader city={city} />
            <div className="prose max-w-none">
              <CityIntroduction city={city} />
              <ServicesOverview city={city} />
              <ServiceCards city={city} />
              <BusinessBenefits city={city} />
              <VehicleWrapKeywords city={city} />
              <CallToActionBox city={city} />
            </div>
          </article>
          
          {/* Sidebar */}
          <aside className="md:col-span-1">
            <LocationSidebar city={city} />
          </aside>
        </div>
      </div>
    </main>
  );
};

export default LocationContent;
