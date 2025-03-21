
import React from 'react';

interface ServiceHeaderProps {
  title: string;
  showImages?: boolean;
  highlightAI?: boolean;
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({ 
  title, 
  showImages = false,
  highlightAI = false
}) => {
  // Determine if this is a specific vehicle type wrap service
  const isVehicleSpecificService = 
    title.toLowerCase().includes('car') || 
    title.toLowerCase().includes('truck') || 
    title.toLowerCase().includes('van') || 
    title.toLowerCase().includes('fleet');
  
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-brand-navy mb-6">
        {title}
        {highlightAI && (
          <span className="ml-2 text-sm bg-brand-red text-white px-3 py-1 rounded-full uppercase">
            AI-Powered
          </span>
        )}
      </h1>
      <p className="text-lg mb-6">
        {highlightAI ? (
          <>
            At Wrapping Chicago, we combine <strong>artificial intelligence</strong> with expert craftsmanship to provide 
            premium quality vehicle wrapping services throughout the greater Chicago area. Our professional team 
            uses only the highest quality 3M vinyl materials and <strong>AI design technology</strong> to ensure 
            your car wraps, truck wraps, van wraps, and fleet graphics look great and last.
          </>
        ) : isVehicleSpecificService ? (
          <>
            At Wrapping Chicago, we specialize in premium quality {title.toLowerCase()} throughout the greater Chicago area. 
            Our team of experienced vehicle wrap professionals uses only the highest quality 3M vinyl materials to ensure 
            your {title.toLowerCase()} look great and last for years. We've wrapped hundreds of vehicles throughout Chicago
            and surrounding suburbs with industry-leading results.
          </>
        ) : (
          <>
            At Wrapping Chicago, we provide premium quality vehicle wrapping services
            throughout the greater Chicago area. Our team of experienced professionals
            specializes in car wraps, truck wraps, van wraps, and fleet graphics using only the highest quality 
            3M vinyl materials to ensure your vehicle wrap looks great and lasts.
          </>
        )}
      </p>
      
      {showImages && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="/lovable-uploads/efdbc4bf-1f04-42bb-a904-f52dae7bef6c.png" 
              alt="Professional fleet wrap installation on commercial van in Chicago - 3M certified vehicle wraps" 
              className="w-full h-48 object-cover"
            />
            <div className="p-3 bg-brand-light">
              <p className="text-sm font-medium text-brand-navy">Fleet Vehicle Wraps</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="/lovable-uploads/f564c255-9ca3-4457-bef5-c940a4a1557a.png" 
              alt="Premium color change car wrap in vibrant blue - custom vehicle wrapping in Chicago" 
              className="w-full h-48 object-cover"
            />
            <div className="p-3 bg-brand-light">
              <p className="text-sm font-medium text-brand-navy">Color Change Wraps</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="/lovable-uploads/fb7a4b97-4b57-4b2e-8f81-42a1098270df.png" 
              alt="Commercial graphics and partial vehicle wrap for business advertising in Chicago" 
              className="w-full h-48 object-cover"
            />
            <div className="p-3 bg-brand-light">
              <p className="text-sm font-medium text-brand-navy">Commercial Graphics</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Added section with keyword-rich badges */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-8">
        <h2 className="text-lg font-semibold text-brand-navy mb-3">Chicago's Premium Vehicle Wrap Services:</h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-brand-navy/10 text-brand-navy text-xs font-medium px-2.5 py-1.5 rounded">Car Wraps Chicago</span>
          <span className="bg-brand-navy/10 text-brand-navy text-xs font-medium px-2.5 py-1.5 rounded">Truck Wraps Chicago</span>
          <span className="bg-brand-navy/10 text-brand-navy text-xs font-medium px-2.5 py-1.5 rounded">Van Wraps Chicago</span>
          <span className="bg-brand-navy/10 text-brand-navy text-xs font-medium px-2.5 py-1.5 rounded">Fleet Wraps Chicago</span>
          <span className="bg-brand-navy/10 text-brand-navy text-xs font-medium px-2.5 py-1.5 rounded">Commercial Vehicle Wraps</span>
          <span className="bg-brand-navy/10 text-brand-navy text-xs font-medium px-2.5 py-1.5 rounded">Custom Vehicle Wraps</span>
          <span className="bg-brand-navy/10 text-brand-navy text-xs font-medium px-2.5 py-1.5 rounded">Vehicle Graphics Chicago</span>
          <span className="bg-brand-navy/10 text-brand-navy text-xs font-medium px-2.5 py-1.5 rounded">Vinyl Vehicle Wraps</span>
          <span className="bg-brand-navy/10 text-brand-navy text-xs font-medium px-2.5 py-1.5 rounded">Premium 3M Installation</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeader;
