
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Zap, Palette, Truck, Star, Clock, TrendingDown } from 'lucide-react';

const EasyButtonSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-700 py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      {/* Animated stars/sparkles for visual appeal */}
      <div className="absolute top-0 left-1/4 animate-pulse">
        <Star className="h-6 w-6 text-yellow-300 opacity-75" />
      </div>
      <div className="absolute bottom-1/4 right-1/3 animate-pulse delay-300">
        <Star className="h-5 w-5 text-yellow-300 opacity-75" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-pulse delay-700">
        <Star className="h-4 w-4 text-yellow-300 opacity-75" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Special Offer Banner */}
        <div className="bg-red-600 text-white text-center py-2 px-4 rounded-t-lg mx-auto w-fit mb-2 shadow-lg transform -rotate-1">
          <span className="font-bold tracking-wide">LIMITED TIME SPECIAL OFFER</span>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-xl">
          <div className="mb-6 md:mb-0 flex-1">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-yellow-300 mr-3 flex-shrink-0" />
              <h2 className="text-white text-2xl md:text-3xl font-bold">The Easy Button: Complete Wrap Package</h2>
            </div>
            <p className="text-white/90 mt-3 text-base md:text-lg max-w-2xl">
              We design, print, and install your vehicle wrap for one flat rate of just <span className="font-bold text-yellow-300 text-xl">$3,999.00</span> — regardless of size, shape, or design complexity (up to 400 sq ft).
            </p>
            
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="flex items-center text-white/90">
                <Check className="h-5 w-5 text-green-300 mr-2 flex-shrink-0" />
                <span>Professional Design</span>
              </div>
              <div className="flex items-center text-white/90">
                <Check className="h-5 w-5 text-green-300 mr-2 flex-shrink-0" />
                <span>Premium Materials</span>
              </div>
              <div className="flex items-center text-white/90">
                <Check className="h-5 w-5 text-green-300 mr-2 flex-shrink-0" />
                <span>Expert Installation</span>
              </div>
              <div className="flex items-center text-white/90">
                <Check className="h-5 w-5 text-green-300 mr-2 flex-shrink-0" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center text-white/90">
                <Clock className="h-5 w-5 text-green-300 mr-2 flex-shrink-0" />
                <span>Fast Turnaround</span>
              </div>
              <div className="flex items-center text-white/90">
                <Check className="h-5 w-5 text-green-300 mr-2 flex-shrink-0" />
                <span>2-Year Warranty</span>
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 flex flex-col items-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white border border-white/30 shadow-inner w-full">
              <div className="flex items-center justify-center mb-2">
                <TrendingDown className="h-5 w-5 text-red-300 mr-2" />
                <span className="font-bold text-red-300">SAVE $1,500</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="flex flex-col items-center">
                  <span className="line-through text-sm text-white/60">$5,499</span>
                  <span className="font-bold text-3xl text-yellow-300">$3,999</span>
                </div>
                <div className="flex flex-col text-center">
                  <span className="text-xs text-white/80">All-Inclusive</span>
                  <span className="font-medium">Flat Rate Package</span>
                </div>
              </div>
              <div className="text-center mt-2 text-xs text-white/70">*Limited time offer. Terms apply.</div>
            </div>
            
            <Button
              asChild
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg shadow-xl w-full py-6 animate-pulse"
            >
              <Link to="/contact" className="inline-flex items-center whitespace-nowrap">
                Claim This Special Now!
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasyButtonSection;
