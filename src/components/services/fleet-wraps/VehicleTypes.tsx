import React from 'react';
import { Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const VehicleTypes: React.FC = () => {
  return <div className="mb-8">
      <h3 className="text-xl font-semibold text-brand-navy mb-4 flex items-center">
        <Car className="w-6 h-6 text-brand-red mr-2" />
        Types of Fleet Vehicles We Wrap
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div>
          <p className="mb-4 text-gray-700">
            Our Chicago vehicle wrap installation team has experience wrapping virtually every type of fleet vehicle, including:
          </p>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Cargo Vans</div>
            <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Pickup Trucks</div>
            <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Box Trucks</div>
            <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Service Vans</div>
            <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Sprinter Vans</div>
            <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Transit Vans</div>
            <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Delivery Trucks</div>
            <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700">Company Cars</div>
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <img 
            alt="Fleet wrap on commercial vehicle - Chicago vehicle wrap solutions" 
            className="w-full h-auto object-cover rounded-lg shadow-md" 
            src="/lovable-uploads/38f1a5ce-45bd-4ebc-83bd-709dc1a2f9ce.jpg" 
            style={{ maxHeight: '380px' }}
          />
        </div>
      </div>
      
      <p className="text-gray-700 mb-6">
        Whether you have a single vehicle or a large fleet of mixed vehicle types, we can create a cohesive branding 
        solution that works across all your vehicles, maintaining consistent branding while adapting to each 
        vehicle's unique shape and size.
      </p>
      
      <div className="bg-brand-light p-6 rounded-lg border border-brand-navy/20 mb-6">
        <h4 className="text-lg font-semibold text-brand-navy mb-3">Chicago Fleet Wrap Case Study</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2">
            <p className="text-gray-700 mb-3">
              A Chicago-based HVAC company saw a 32% increase in service calls after wrapping their fleet of 12 service vans with 
              professional graphics. The eye-catching design and clear contact information made their vehicles mobile billboards 
              throughout the Chicago area, resulting in significant business growth within just the first three months.
            </p>
          </div>
          <div className="col-span-1">
            <img src="/lovable-uploads/bc84c157-8367-4197-9b08-8ef75da53ce3.png" alt="HVAC company fleet wrap example - Professional vehicle wrapping in Chicago" className="rounded-lg shadow-sm max-w-full h-auto" />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
        <Button asChild className="bg-brand-red hover:bg-red-700">
          <Link to="/contact">Request a Fleet Wrap Quote</Link>
        </Button>
        <Button asChild variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
          <Link to="/gallery">View Our Fleet Wrap Portfolio</Link>
        </Button>
      </div>
    </div>;
};

export default VehicleTypes;
