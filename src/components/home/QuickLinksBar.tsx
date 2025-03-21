
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Truck, Shield } from 'lucide-react';

const QuickLinksBar: React.FC = () => {
  return (
    <div className="bg-gray-100 py-3 border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-3 text-sm">
          <span className="font-medium text-gray-700">Our Vehicle Wrap Services:</span>
          <div className="flex flex-wrap gap-2">
            <Link to="/services/car-wraps" className="flex items-center hover:text-brand-red">
              <Car className="mr-1 h-4 w-4 text-brand-red" />
              Car Wraps
            </Link>
            <Link to="/services/truck-wraps" className="flex items-center hover:text-brand-red">
              <Truck className="mr-1 h-4 w-4 text-brand-red" />
              Truck Wraps
            </Link>
            <Link to="/services/van-wraps" className="flex items-center hover:text-brand-red">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-brand-red">
                <path d="M10 17h4V8h-4z"/>
                <path d="M2 9v8h10V9c0-4-1.5-5-5-5S2 5 2 9z"/>
                <path d="M12 9v8h10V9c0-4-1.5-5-5-5s-5 1-5 5z"/>
              </svg>
              Van Wraps
            </Link>
            <Link to="/services/fleet-wraps" className="flex items-center hover:text-brand-red">
              <Shield className="mr-1 h-4 w-4 text-brand-red" />
              Fleet Wraps
            </Link>
            <Link to="/services/color-change-wraps" className="flex items-center hover:text-brand-red">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-brand-red">
                <path d="M12 2v8"/>
                <path d="M4.93 10.93 9.17 15.17"/>
                <path d="M2 18h12"/>
                <path d="M19 18h3"/>
                <circle cx="12" cy="18" r="2"/>
                <path d="M18 9v9"/>
              </svg>
              Color Change Wraps
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLinksBar;
