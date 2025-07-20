
import React from 'react';

const InfoBar = () => {
  return (
    <div className="bg-brand-red text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Main conversion message */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Ready to Get More Customers?</h2>
            <p className="text-lg">Free quotes • Same week installation • 20+ years experience</p>
          </div>
          
          {/* Primary conversion actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="tel:3125971286" 
              className="bg-white text-brand-red px-6 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              📞 Call: (312) 597-1286
            </a>
            <a 
              href="/contact" 
              className="bg-black text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
        
        {/* Quick trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/20">
          <div className="text-center">
            <div className="text-2xl font-bold">16,000+</div>
            <div className="text-sm opacity-90">Vehicles Wrapped</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">2-3 Days</div>
            <div className="text-sm opacity-90">Installation Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">5-7 Years</div>
            <div className="text-sm opacity-90">Wrap Lifespan</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm opacity-90">Mobile Service</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
