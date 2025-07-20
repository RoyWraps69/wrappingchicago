import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Truck, Package, MapPin } from 'lucide-react';

const ShippingHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-blue-700/95" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Icon */}
          <Truck className="h-16 w-16 mx-auto mb-6 text-blue-300" />
          
          {/* Trust Signals */}
          <div className="flex justify-center items-center gap-6 mb-6 text-blue-200">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium">Nationwide Shipping</span>
            </div>
            <span className="text-sm">•</span>
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              <span className="text-sm font-medium">$250 Flat Rate</span>
            </div>
            <span className="text-sm">•</span>
            <span className="text-sm font-medium">All 50 States</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Nationwide Shipping
            <span className="block bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Vehicle Wrap Materials
            </span>
          </h1>
          
          {/* Value Propositions */}
          <div className="grid md:grid-cols-3 gap-4 mb-8 text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">$250</div>
              <div className="text-sm opacity-90">Flat Rate Per Box</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">5-7 Days</div>
              <div className="text-sm opacity-90">Ground Shipping</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">All 50</div>
              <div className="text-sm opacity-90">States Covered</div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Fast, reliable shipping of premium vehicle wrap materials across the entire United States. 
            <span className="font-semibold text-white"> Professional packaging, tracking included, overnight options available.</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-blue-50 font-bold text-lg px-8 py-6 h-auto shadow-lg"
              onClick={() => window.location.href = 'tel:+13125971286'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (312) 597-1286
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold text-lg px-8 py-6 h-auto"
              onClick={() => window.location.href = '/contact'}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Shipping Quote
            </Button>
          </div>
          
          {/* Service Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-blue-200 text-sm">
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
              Professional Packaging
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
              Tracking Included
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
              Overnight Available
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
              Signature Required
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingHero;