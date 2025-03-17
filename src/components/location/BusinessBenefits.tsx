
import React from 'react';
import { Building } from 'lucide-react';
import { City } from '@/data/cities';

interface BusinessBenefitsProps {
  city: City;
}

const BusinessBenefits: React.FC<BusinessBenefitsProps> = ({ city }) => {
  return (
    <>
      <h3 className="text-2xl font-bold mt-8 mb-4 text-brand-navy flex items-center">
        <Building className="h-6 w-6 mr-2 text-brand-red" />
        Why {city.name} Businesses Choose Chicago Fleet Wraps
      </h3>
      
      <p>
        When it comes to vehicle wraps in {city.name}, IL, businesses and individuals choose Chicago Fleet Wraps for several key reasons:
      </p>
      
      <ul className="list-disc pl-5 space-y-2 my-4">
        <li>
          <strong>Local Expertise:</strong> We understand the {city.name} market and can help design vehicle wraps that will 
          resonate with your local customers and stand out in {city.businessAreas}.
        </li>
        <li>
          <strong>Premium Materials:</strong> We use only the highest quality 3M and Avery vinyl materials that withstand the 
          harsh Illinois weather conditions from snowy winters to hot summers.
        </li>
        <li>
          <strong>Expert Design Services:</strong> Our in-house design team works with you to create eye-catching graphics 
          that effectively communicate your brand message.
        </li>
        <li>
          <strong>Professional Installation:</strong> Our certified technicians ensure flawless application in our 
          climate-controlled facility.
        </li>
        <li>
          <strong>Comprehensive Warranty:</strong> We stand behind our work with a 5-year warranty on all installations.
        </li>
        <li>
          <strong>Competitive Pricing:</strong> We offer transparent pricing and flexible payment options to fit your budget.
        </li>
      </ul>
      
      <p className="mt-6">
        For {city.name} businesses, vehicle wraps provide an exceptional marketing opportunity. With the high traffic volume 
        throughout {city.county} and the greater Chicago area, your wrapped vehicles can generate thousands of impressions daily. 
        Unlike traditional advertising methods, vehicle wraps work for you 24/7, creating brand awareness whether your vehicles 
        are on the road or parked.
      </p>
      
      <p>
        Additionally, our wraps help protect your vehicles from minor scratches and stone chips, preserving their resale value 
        while simultaneously advertising your business throughout {city.name} and beyond.
      </p>
    </>
  );
};

export default BusinessBenefits;
