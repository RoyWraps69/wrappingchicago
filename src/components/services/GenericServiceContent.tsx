
import React from 'react';
import { Link } from 'react-router-dom';

interface GenericServiceContentProps {
  serviceType?: string;
}

const GenericServiceContent: React.FC<GenericServiceContentProps> = ({ serviceType }) => {
  // Create a title based on serviceType if provided
  const getServiceTitle = () => {
    if (!serviceType) return "Our Services";
    
    switch (serviceType) {
      case "car":
        return "Car Wraps";
      case "truck":
        return "Truck Wraps";
      case "van":
        return "Van Wraps";
      case "designer":
        return "Designer Wraps";
      case "luxury":
        return "Luxury & Exotic Vehicle Wraps";
      default:
        return "Vehicle Wraps";
    }
  };
  
  return (
    <div className="mb-8">
      {serviceType && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-brand-navy mb-4">{getServiceTitle()}</h2>
          <p className="mb-4 text-gray-700">
            Our professional {serviceType} wrapping services combine quality materials with expert installation 
            to deliver exceptional results tailored to your specific vehicle type.
          </p>
        </div>
      )}
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-brand-navy mb-3">Professional Installers</h2>
          <p className="mb-3">
            Our in-house trained installers have years of experience wrapping vehicles of all types.
            From compact cars to large commercial trucks, we have the expertise to handle any project.
          </p>
          <img 
            src="/lovable-uploads/33e966e0-f935-4f39-8702-a9ccf53ae49b.png" 
            alt="Professional installers at work" 
            className="rounded-lg shadow-md w-full h-60 object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-brand-navy mb-3">Premium Materials</h2>
          <p className="mb-3">
            We use only the highest quality 3M and Avery vinyl wraps, ensuring your vehicle
            wrap will look great and stand up to the harsh Chicago weather for years to come.
          </p>
          <img 
            src="/lovable-uploads/676b4902-7b81-4619-90d8-8feb1f986636.png" 
            alt="Premium wrap materials" 
            className="rounded-lg shadow-md w-full h-60 object-cover"
          />
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold text-brand-navy mb-4">Featured Services</h2>
      <div className="grid md:grid-cols-3 gap-5 mb-6">
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <img 
            src="/lovable-uploads/efdbc4bf-1f04-42bb-a904-f52dae7bef6c.png" 
            alt="Fleet wraps" 
            className="w-full h-44 object-cover rounded-md mb-3"
          />
          <h3 className="font-semibold text-brand-navy mb-2 text-xl">Fleet Wraps</h3>
          <p className="text-sm mb-3">Turn your business vehicles into moving billboards with our professional fleet wrapping services.</p>
          <Link to="/services/fleet-wraps" className="text-brand-red hover:underline">Learn more →</Link>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <img 
            src="/lovable-uploads/f564c255-9ca3-4457-bef5-c940a4a1557a.png" 
            alt="Color change wraps" 
            className="w-full h-44 object-cover rounded-md mb-3"
          />
          <h3 className="font-semibold text-brand-navy mb-2 text-xl">Color Change Wraps</h3>
          <p className="text-sm mb-3">Transform your vehicle with a complete color change - a perfect alternative to paint.</p>
          <Link to="/services/color-change-wraps" className="text-brand-red hover:underline">Learn more →</Link>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <img 
            src="/lovable-uploads/fb7a4b97-4b57-4b2e-8f81-42a1098270df.png" 
            alt="Commercial graphics" 
            className="w-full h-44 object-cover rounded-md mb-3"
          />
          <h3 className="font-semibold text-brand-navy mb-2 text-xl">Commercial Graphics</h3>
          <p className="text-sm mb-3">Add professional logos, lettering, and graphics to your business vehicles.</p>
          <Link to="/services/commercial-graphics" className="text-brand-red hover:underline">Learn more →</Link>
        </div>
      </div>
    </div>
  );
};

export default GenericServiceContent;
