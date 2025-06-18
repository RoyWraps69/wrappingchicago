
import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const ChicagoServiceMap = () => {
  return (
    <div className="relative">
      <div className="rounded-lg overflow-hidden shadow-md">
        <div className="relative w-full aspect-video overflow-hidden">
          {/* Main map image */}
          <img 
            src="/lovable-uploads/chicago-40-mile-radius-map.png" 
            alt="Chicago Fleet Wraps 40-mile service area map"
            className="w-full h-full object-cover object-center"
            loading="lazy"
            onError={(e) => {
              // Fallback to a high-quality Google Maps iframe if the image fails to load
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.classList.add('relative', 'w-full', 'h-full', 'bg-white', 'flex', 'justify-center', 'items-center');
                
                // Create a more detailed, close-up fallback map
                const fallbackMap = document.createElement('div');
                fallbackMap.className = 'relative w-full h-full';
                fallbackMap.innerHTML = `
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380513.7159859942!2d-88.01214778988358!3d41.83339248945892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1635339046672!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                  
                  <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div class="w-80 h-80 rounded-full border-4 border-brand-red opacity-40"></div>
                  </div>
                  
                  <div class="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-md z-10">
                    <div class="flex items-center">
                      <div class="w-4 h-4 bg-brand-red opacity-60 rounded-full mr-2"></div>
                      <span class="text-sm font-medium">40-mile service radius</span>
                    </div>
                  </div>
                `;
                parent.appendChild(fallbackMap);
              }
            }}
          />
          
          {/* Radius indicator overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%]">
              <div className="w-full h-full rounded-full border-2 border-brand-red border-dashed opacity-70"></div>
            </div>
          </div>
          
          {/* Map legend */}
          <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-lg shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-brand-red opacity-70 rounded-full"></div>
              <span className="text-xs font-medium">40-mile service radius</span>
            </div>
          </div>
          
          {/* Chicago marker */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="animate-ping absolute h-6 w-6 rounded-full bg-brand-red opacity-30"></div>
              <div className="relative">
                <MapPin className="h-6 w-6 text-brand-red" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Information box */}
      <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center space-x-2 mb-2">
          <Navigation className="h-5 w-5 text-brand-red" />
          <span className="font-semibold text-brand-navy">40-Mile Service Radius from Chicago</span>
        </div>
        <p className="text-gray-600 text-sm">
          We provide vehicle wrap services throughout Chicago and neighboring communities within 
          a 40-mile radius. Our centralized location enables us to efficiently serve businesses 
          and individuals throughout the metropolitan area, including:
        </p>
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="bg-gray-50 px-2 py-1 rounded text-xs text-gray-700">Schaumburg</div>
          <div className="bg-gray-50 px-2 py-1 rounded text-xs text-gray-700">Oak Lawn</div>
          <div className="bg-gray-50 px-2 py-1 rounded text-xs text-gray-700">Evanston</div>
          <div className="bg-gray-50 px-2 py-1 rounded text-xs text-gray-700">Naperville</div>
          <div className="bg-gray-50 px-2 py-1 rounded text-xs text-gray-700">Joliet</div>
          <div className="bg-gray-50 px-2 py-1 rounded text-xs text-gray-700">Des Plaines</div>
          <div className="bg-gray-50 px-2 py-1 rounded text-xs text-gray-700">Orland Park</div>
          <div className="bg-gray-50 px-2 py-1 rounded text-xs text-gray-700">Arlington Heights</div>
        </div>
      </div>
    </div>
  );
};

export default ChicagoServiceMap;
