
import React from 'react';
import { Check, Shield, Clock, Award } from 'lucide-react';

const InfoBar = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-brand-red/20 border-2 border-brand-red flex items-center justify-center group-hover:bg-brand-red transition-colors duration-300">
              <Check className="text-brand-red group-hover:text-white h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">16,000+ Wraps</h3>
              <p className="text-white text-sm">Completed Successfully</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-brand-red/20 border-2 border-brand-red flex items-center justify-center group-hover:bg-brand-red transition-colors duration-300">
              <Shield className="text-brand-red group-hover:text-white h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Premium Materials</h3>
              <p className="text-white text-sm">3M & Avery Dennison</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-brand-red/20 border-2 border-brand-red flex items-center justify-center group-hover:bg-brand-red transition-colors duration-300">
              <Clock className="text-brand-red group-hover:text-white h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">5-7 Year Lifespan</h3>
              <p className="text-white text-sm">With Proper Maintenance</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-brand-red/20 border-2 border-brand-red flex items-center justify-center group-hover:bg-brand-red transition-colors duration-300">
              <Award className="text-brand-red group-hover:text-white h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Expert Installation</h3>
              <p className="text-white text-sm">Certified Professionals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
