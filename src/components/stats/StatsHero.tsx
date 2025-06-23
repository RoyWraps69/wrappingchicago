
import React from 'react';
import { BarChart, TrendingUp, Target } from 'lucide-react';

const StatsHero = () => {
  return (
    <section className="bg-gradient-to-br from-brand-navy to-blue-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <BarChart className="h-12 w-12 text-brand-red mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Vehicle Wrap Statistics
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            100+ Fascinating Facts & Data Points About the Vehicle Wrap Industry
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <TrendingUp className="h-8 w-8 text-brand-red mb-3 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Industry Growth</h3>
              <p className="text-blue-100">Market trends and expansion data</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Target className="h-8 w-8 text-brand-red mb-3 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">ROI & Effectiveness</h3>
              <p className="text-blue-100">Performance and return metrics</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <BarChart className="h-8 w-8 text-brand-red mb-3 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Market Data</h3>
              <p className="text-blue-100">Consumer behavior and preferences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsHero;
