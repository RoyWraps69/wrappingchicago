
import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

const ChicagoServiceMap = () => {
  return (
    <div className="relative">
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
        <img 
          src="/lovable-uploads/chicago-service-area-map.png" 
          alt="Chicago Fleet Wraps service area map"
          className="object-cover w-full h-full"
          onError={(e) => {
            // Fallback to a styled map if the image fails to load
            const target = e.currentTarget;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.classList.add('bg-gray-100', 'flex', 'justify-center', 'items-center', 'flex-col', 'p-6');
              const fallbackContent = document.createElement('div');
              fallbackContent.innerHTML = `
                <div class="text-center">
                  <h3 class="text-xl font-semibold text-brand-navy mb-4">Chicago Service Area Map</h3>
                  <div class="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-inner">
                    <div class="relative w-full h-[400px] bg-blue-50 rounded">
                      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div class="relative w-20 h-20">
                          <div class="w-20 h-20 rounded-full bg-brand-red opacity-20 animate-ping"></div>
                          <div class="absolute top-0 left-0 w-20 h-20 rounded-full bg-brand-red opacity-30"></div>
                          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <MapPin className="h-8 w-8 text-brand-red" />
                          </div>
                        </div>
                      </div>
                      <div class="absolute top-1/4 right-1/4">
                        <div class="relative w-16 h-16">
                          <div class="w-16 h-16 rounded-full bg-blue-500 opacity-20"></div>
                          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <span class="text-sm font-semibold text-blue-800">Schaumburg</span>
                          </div>
                        </div>
                      </div>
                      <div class="absolute bottom-1/4 left-1/3">
                        <div class="relative w-16 h-16">
                          <div class="w-16 h-16 rounded-full bg-blue-500 opacity-20"></div>
                          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <span class="text-sm font-semibold text-blue-800">Oak Lawn</span>
                          </div>
                        </div>
                      </div>
                      <div class="absolute top-1/3 left-1/4">
                        <div class="w-40 h-40 rounded-full border-2 border-dashed border-brand-navy opacity-30"></div>
                        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <span class="text-sm font-semibold text-brand-navy">40-mile radius</span>
                        </div>
                      </div>
                    </div>
                    <p class="mt-4 text-gray-600 text-sm">Service area includes Chicago and surrounding communities within a 40-mile radius</p>
                  </div>
                </div>
              `;
              parent.appendChild(fallbackContent);
            }
          }}
        />
      </div>
      
      <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center space-x-2 mb-2">
          <MapPin className="h-5 w-5 text-brand-red" />
          <span className="font-semibold text-brand-navy">40-Mile Service Radius</span>
        </div>
        <p className="text-gray-600 text-sm">
          We provide vehicle wrap services throughout Chicago and neighboring communities within 
          a 40-mile radius. Our centralized location enables us to efficiently serve businesses 
          and individuals throughout the metropolitan area, including all suburbs and surrounding counties.
        </p>
      </div>
    </div>
  );
};

export default ChicagoServiceMap;
