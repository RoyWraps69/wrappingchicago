
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Zap, Palette, Truck } from 'lucide-react';

const EasyButtonSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-700 py-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 flex-1">
            <div className="flex items-center">
              <Zap className="h-7 w-7 text-yellow-300 mr-2 flex-shrink-0" />
              <h2 className="text-white text-xl md:text-2xl font-bold">The Easy Button: Complete Wrap Package</h2>
            </div>
            <p className="text-white/90 mt-1 text-sm md:text-base max-w-2xl">
              We design, print, and install your vehicle wrap for one flat rate of <span className="font-bold text-yellow-300">$3,999.00</span> — regardless of size, shape, or design (up to 400 sq ft).
            </p>
            
            <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-2">
              <div className="flex items-center text-white/90 text-sm">
                <Check className="h-4 w-4 text-green-300 mr-1 flex-shrink-0" />
                <span>Professional Design</span>
              </div>
              <div className="flex items-center text-white/90 text-sm">
                <Check className="h-4 w-4 text-green-300 mr-1 flex-shrink-0" />
                <span>Premium Materials</span>
              </div>
              <div className="flex items-center text-white/90 text-sm">
                <Check className="h-4 w-4 text-green-300 mr-1 flex-shrink-0" />
                <span>Expert Installation</span>
              </div>
              <div className="flex items-center text-white/90 text-sm">
                <Check className="h-4 w-4 text-green-300 mr-1 flex-shrink-0" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center text-white/90 text-sm">
                <Check className="h-4 w-4 text-green-300 mr-1 flex-shrink-0" />
                <span>Fast Turnaround</span>
              </div>
              <div className="flex items-center text-white/90 text-sm">
                <Check className="h-4 w-4 text-green-300 mr-1 flex-shrink-0" />
                <span>2-Year Warranty</span>
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 flex flex-col md:flex-row items-center gap-3">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white text-sm border border-white/20">
              <div className="flex flex-col items-center mr-3">
                <span className="line-through text-xs text-white/60">$5,499</span>
                <span className="font-bold text-xl text-yellow-300">$3,999</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-white/80">All-Inclusive</span>
                <span className="font-medium">Flat Rate Package</span>
              </div>
            </div>
            
            <Button
              asChild
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold shadow-xl"
            >
              <Link to="/contact" className="inline-flex items-center whitespace-nowrap">
                Get Started Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasyButtonSection;
