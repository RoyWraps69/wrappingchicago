import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Wrench, Truck } from 'lucide-react';

const ServicesHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2069&auto=format&fit=crop')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-accent/95" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Trust Signals */}
          <div className="flex justify-center items-center gap-6 mb-6 text-white/90">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              <span className="text-sm font-medium">All Vehicle Types</span>
            </div>
            <span className="text-sm">•</span>
            <div className="flex items-center gap-2">
              <Wrench className="h-5 w-5" />
              <span className="text-sm font-medium">Professional Service</span>
            </div>
            <span className="text-sm">•</span>
            <span className="text-sm font-medium">⭐⭐⭐⭐⭐ 5.0 Rating</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Vehicle Wrap Services
            <span className="block bg-gradient-to-r from-white via-accent-foreground to-white bg-clip-text text-transparent">
              Chicago's Premier Wraps
            </span>
          </h1>
          
          {/* Value Propositions */}
          <div className="grid md:grid-cols-3 gap-4 mb-8 text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">All Types</div>
              <div className="text-sm opacity-90">Cars, Trucks, Vans, Fleets</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">Same Week</div>
              <div className="text-sm opacity-90">Fast Turnaround</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">20+ Years</div>
              <div className="text-sm opacity-90">Experience</div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Turn your work truck into your best salesperson! Professional vehicle wraps for Chicago trade businesses. 
            <span className="font-semibold text-accent-foreground"> Premium materials, expert installation, guaranteed results.</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 h-auto shadow-lg"
              onClick={() => window.location.href = 'tel:+13125971286'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (312) 597-1286
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-6 h-auto"
              onClick={() => window.location.href = '/contact'}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;