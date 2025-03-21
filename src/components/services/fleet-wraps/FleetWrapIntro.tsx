
import React from 'react';
import { Truck } from 'lucide-react';
import { useGalleryImages } from '@/hooks/useGalleryImages';

const FleetWrapIntro: React.FC = () => {
  const { fleetWrapVan } = useGalleryImages();
  
  return (
    <>
      <h2 className="text-2xl font-semibold text-brand-navy mb-4">Professional Fleet Vehicle Wrapping Services in Chicago</h2>
      
      <div className="float-right ml-6 mb-4 w-full md:w-2/5">
        <img 
          src={fleetWrapVan} 
          alt="Professional fleet vehicle wrap on service van - Chicago fleet wrapping services" 
          className="rounded-lg shadow-md w-full"
        />
        <p className="text-sm text-gray-600 mt-1 text-center">Custom fleet wrap for Chicago business vehicle</p>
      </div>
      
      <p className="mb-4 text-gray-700">
        Make your company vehicles work harder for your business with our professional fleet wrapping services in Chicago. 
        A wrapped fleet creates thousands of impressions every day, turning your vehicles into powerful mobile 
        billboards that generate leads and build brand recognition 24/7 throughout the Chicago area and beyond.
      </p>
      
      <p className="mb-6 text-gray-700">
        With over 16,000 vehicle wraps completed in our 20 years of business, our team of experienced professionals 
        specializes in fleet vehicle wraps for businesses of all sizes. From small local businesses to large corporations, 
        we provide expert design, high-quality materials, and meticulous installation to ensure your fleet looks 
        professional and makes a lasting impression on the streets of Chicago.
      </p>
      
      <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-8">
        <h3 className="text-xl font-semibold text-brand-navy mb-3">Chicago Fleet Wrap Specialists</h3>
        <p className="text-gray-700">
          Our Chicago-based vehicle wrap shop has proudly served the Chicagoland area for two decades, establishing 
          ourselves as leaders in the fleet wrapping industry. We understand the unique challenges of Chicago's urban environment, 
          weather conditions, and business landscape, allowing us to create fleet wrapping solutions that truly stand out and last.
        </p>
      </div>
    </>
  );
};

export default FleetWrapIntro;
