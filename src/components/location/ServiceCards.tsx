
import React from 'react';
import { City } from '@/data/cities';
import ServiceFeatureItem from './ServiceFeatureItem';

interface ServiceCardsProps {
  city: City;
}

const ServiceCards: React.FC<ServiceCardsProps> = ({ city }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 my-8">
      <div className="bg-brand-light p-5 rounded-lg">
        <h4 className="text-xl font-semibold mb-3 text-brand-navy">Fleet Wraps</h4>
        <p className="mb-4 text-gray-700">
          Transform your company vehicles into eye-catching mobile billboards. Our fleet wrapping services using premium Avery and 3M materials help {city.name} 
          businesses maximize their advertising reach throughout the Chicago area.
        </p>
        <ul className="space-y-2">
          <ServiceFeatureItem text="Consistent branding across multiple vehicles" />
          <ServiceFeatureItem text="Cost-effective compared to traditional advertising" />
          <ServiceFeatureItem text="Protects original paint from everyday wear" />
        </ul>
      </div>
      
      <div className="bg-brand-light p-5 rounded-lg">
        <h4 className="text-xl font-semibold mb-3 text-brand-navy">Color Change Wraps</h4>
        <p className="mb-4 text-gray-700">
          Want to give your vehicle a new look without the permanence of paint? Our color change wraps using Avery and 3M vinyl offer {city.name} 
          drivers the ability to transform their vehicles with premium vinyl wraps.
        </p>
        <ul className="space-y-2">
          <ServiceFeatureItem text="Matte, gloss, satin, and specialty finishes available" />
          <ServiceFeatureItem text="Reversible alternative to permanent paint" />
          <ServiceFeatureItem text="Protects resale value while customizing your look" />
        </ul>
      </div>

      <div className="bg-brand-light p-5 rounded-lg">
        <h4 className="text-xl font-semibold mb-3 text-brand-navy">Commercial Graphics</h4>
        <p className="mb-4 text-gray-700">
          Make your business stand out with professional commercial vehicle graphics. Our {city.name}-based wrap services
          using premium Avery and 3M materials help local businesses create effective and eye-catching mobile advertising.
        </p>
        <ul className="space-y-2">
          <ServiceFeatureItem text="Custom designs tailored to your brand" />
          <ServiceFeatureItem text="Options from simple lettering to full wraps" />
          <ServiceFeatureItem text="Durable materials that withstand weather conditions" />
        </ul>
      </div>
    </div>
  );
};

export default ServiceCards;
