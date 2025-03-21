
import React from 'react';
import { Car, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useGalleryImages } from '@/hooks/useGalleryImages';

const VehicleTypes: React.FC = () => {
  const { fleetWrapVan } = useGalleryImages();
  
  return (
    <div className="mb-8">
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
            src={fleetWrapVan} 
            alt="IDG Tech fleet wrap on SUVs - Chicago vehicle wrap solutions" 
            className="w-full h-auto object-cover rounded-lg shadow-md" 
            style={{maxHeight: '380px'}} 
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
            <p className="text-gray-700 mb-3">An IT services company saw a 28% increase in brand recognition and service inquiries after wrapping their fleet of SUVs with professional "think tech" branded graphics. The distinctive blue design with product photography made their vehicles instantly recognizable throughout the Chicago metropolitan area.</p>
          </div>
          <div className="col-span-1">
            <img src={fleetWrapVan} alt="IDG tech fleet wrap example - Professional vehicle wrapping in Chicago" className="rounded-lg shadow-sm max-w-full h-auto object-fill" />
          </div>
        </div>
      </div>
      
      {/* Manufacturer Vehicle Wraps Section */}
      <div className="mt-12 mb-10">
        <h3 className="text-xl font-semibold text-brand-navy mb-5 flex items-center">
          <Truck className="w-6 h-6 text-brand-red mr-2" />
          Manufacturer Vehicle Wraps
        </h3>
        
        <p className="text-gray-700 mb-6">
          We specialize in creating custom wraps for new and innovative vehicle manufacturers, including electric vehicles 
          and specialty trucks. Our design team can create unique, attention-grabbing wraps that complement the 
          cutting-edge design of modern vehicles.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
            <img src="/lovable-uploads/59f5a326-19ee-4365-8e4f-79619e90ed8c.png" alt="Modern camouflage style vehicle wrap for electric truck" className="w-full h-auto object-cover" />
            <div className="p-4">
              <h5 className="font-medium text-brand-navy mb-2">Modern Camouflage Design</h5>
              <p className="text-sm text-gray-600">Contemporary geometric patterns that create a distinctive camouflage effect for electric trucks.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
            <img src="/lovable-uploads/e717c3b4-fabd-494e-8ad7-8b8303a22ae8.png" alt="Artistic floral pattern vehicle wrap for electric pickup" className="w-full h-auto object-cover" />
            <div className="p-4">
              <h5 className="font-medium text-brand-navy mb-2">Artistic Pattern Wraps</h5>
              <p className="text-sm text-gray-600">Bold, artistic patterns that highlight the unique styling of modern electric vehicles.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
            <img src="/lovable-uploads/0d38121f-f8c5-4fea-a95f-68be2fd3281b.png" alt="Gradient blue custom wrap for electric SUV" className="w-full h-auto object-cover" />
            <div className="p-4">
              <h5 className="font-medium text-brand-navy mb-2">Custom Manufacturer Designs</h5>
              <p className="text-sm text-gray-600">Special edition wraps designed to showcase the innovative features of next-generation vehicles.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-brand-light p-5 rounded-lg border border-brand-navy/10">
          <h5 className="font-semibold text-brand-navy mb-3">Why Manufacturers Choose Our Wrap Services:</h5>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-brand-red font-bold mr-2">✓</span>
              <span>Prototype vehicle disguise wraps</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-red font-bold mr-2">✓</span>
              <span>Special edition vehicle designs</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-red font-bold mr-2">✓</span>
              <span>Auto show and promotional event wraps</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-red font-bold mr-2">✓</span>
              <span>Dealer custom wraps for display models</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-red font-bold mr-2">✓</span>
              <span>Pre-production vehicle concealment wraps</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-red font-bold mr-2">✓</span>
              <span>Brand-consistent dealer fleet wraps</span>
            </li>
          </ul>
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
    </div>
  );
};

export default VehicleTypes;
