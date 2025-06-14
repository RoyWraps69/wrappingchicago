
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { City } from '@/data/cities';

interface CallToActionBoxProps {
  city: City;
}

const CallToActionBox: React.FC<CallToActionBoxProps> = ({ city }) => {
  return (
    <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-brand-light">
      <h4 className="text-xl font-bold mb-3 text-brand-navy">Ready to Transform Your Vehicles in {city.name}?</h4>
      <p className="mb-4">
        Contact Chicago Fleet Wraps today to schedule a consultation or request a free, no-obligation quote for your 
        {city.name} vehicle wrap project. Our team is ready to help you make a statement on the roads of 
        {city.county} and beyond!
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Button
          asChild
          variant="default"
        >
          <Link to="/contact">Schedule Perfection Now!</Link>
        </Button>
        <Button
          asChild
          variant="outlineNavy"
        >
          <Link to="/gallery">View Our Portfolio</Link>
        </Button>
      </div>
    </div>
  );
};

export default CallToActionBox;
