
import React from 'react';
import { Shield } from 'lucide-react';

const TruckServices = () => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-brand-navy mb-6 text-center">
        Our Truck Wrap Services in Chicago
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red mr-2">
              <path d="M10 17h4V5H2v12h3" />
              <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
              <circle cx="7.5" cy="17.5" r="2.5" />
              <circle cx="17.5" cy="17.5" r="2.5" />
            </svg>
            <h3 className="font-semibold text-lg text-brand-navy">Box Truck Wraps</h3>
          </div>
          <p className="text-gray-700">
            Full and partial wraps for box trucks of all sizes. Maximize the large, flat surfaces 
            of your box truck with eye-catching graphics that can't be missed on Chicago streets.
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red mr-2">
              <rect x="1" y="3" width="15" height="13" rx="1" />
              <path d="m16 8 2 3h4l-3 5H8" />
              <circle cx="7" cy="18" r="2" />
              <path d="M9 18h6" />
              <circle cx="17" cy="18" r="2" />
            </svg>
            <h3 className="font-semibold text-lg text-brand-navy">Delivery Truck Wraps</h3>
          </div>
          <p className="text-gray-700">
            Customized wraps for delivery vehicles that increase brand recognition. Perfect for 
            courier services, food delivery, and distribution companies operating in Chicago.
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red mr-2">
              <path d="M16 16v-8" />
              <path d="M16 8h-8" />
              <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
              <circle cx="9" cy="17" r="1" />
              <path d="M9 17H6a2 2 0 0 1-2-2V5" />
            </svg>
            <h3 className="font-semibold text-lg text-brand-navy">Pickup Truck Wraps</h3>
          </div>
          <p className="text-gray-700">
            Professional wraps for pickup trucks used by contractors, landscapers, and service businesses. 
            Partial and full wrap options available for different budgets.
          </p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red mr-2">
              <rect x="3" y="8" width="18" height="8" rx="1" />
              <path d="M10 8V5c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3" />
              <path d="M7 16v3c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-3" />
            </svg>
            <h3 className="font-semibold text-lg text-brand-navy">Semi Truck Wraps</h3>
          </div>
          <p className="text-gray-700">
            Large-scale wraps for semi-trucks and trailers. Create massive mobile billboards 
            that travel throughout Chicago and beyond, generating thousands of impressions.
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-3">
            <Shield className="h-6 w-6 text-brand-red mr-2" />
            <h3 className="font-semibold text-lg text-brand-navy">Fleet Truck Wraps</h3>
          </div>
          <p className="text-gray-700">
            Consistent branding across your entire fleet of trucks. We manage large fleet projects 
            with consistent quality and timely delivery for businesses throughout Chicago.
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red mr-2">
              <rect width="18" height="10" x="3" y="3" rx="2"/>
              <rect width="18" height="8" x="3" y="13" rx="2"/>
            </svg>
            <h3 className="font-semibold text-lg text-brand-navy">Truck Lettering & Graphics</h3>
          </div>
          <p className="text-gray-700">
            Cost-effective vinyl lettering and graphics for trucks. Perfect for businesses looking 
            for simple identification and contact information on their vehicles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TruckServices;
