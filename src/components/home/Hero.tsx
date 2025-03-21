
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Shield, Award, Clock, Wrench, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/5539b79e-ab54-428d-82a0-e4735ee97a95.png" 
          alt="Professional vehicle wrap with colorful paint splash design on sports car in Chicago" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div> {/* Darker overlay (60% opacity) to ensure text is readable */}
      </div>
      
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full py-16">
          {/* Left side: Main hero content */}
          <div className="max-w-2xl">
            <div className="animate-fade-in mb-4">
              <span className="bg-brand-red/90 text-white px-4 py-2 rounded-full text-sm uppercase font-medium tracking-wide shadow-xl">
                Chicago's Premier Vehicle Wrap Specialist
              </span>
            </div>
                
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4 animate-enter drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] [text-shadow:_0_1px_2px_#000]" style={{ animationDelay: "0.2s" }}>
              Transform Your <span className="text-brand-gold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_2px_#000]">Vehicle</span>. Elevate Your <span className="text-brand-gold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_2px_#000]">Brand</span>.
            </h1>
                
            <p className="text-lg md:text-xl text-white mb-8 max-w-xl animate-enter drop-shadow-[0_3px_5px_rgba(0,0,0,0.6)] [text-shadow:_0_1px_1px_#000]" style={{ animationDelay: "0.4s" }}>
              Professional vehicle wraps that turn heads and make your business stand out on every street in Chicago.
            </p>
                
            <div className="mb-8 animate-enter" style={{ animationDelay: "0.6s" }}>
              <Button
                asChild
                size="lg"
                className="bg-brand-gold hover:bg-yellow-600 text-brand-black text-lg px-8 py-7 h-auto rounded-full shadow-2xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]"
              >
                <Link to="/contact" className="inline-flex items-center">
                  Request a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
                
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-enter" style={{ animationDelay: "0.8s" }}>
              <div className="flex items-center">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 shadow-xl">
                  <Award className="h-8 w-8 text-brand-gold drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]" />
                </div>
                <span className="ml-3 text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] [text-shadow:_0_1px_1px_#000]">Premium Materials</span>
              </div>
              <div className="flex items-center">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 shadow-xl">
                  <Shield className="h-8 w-8 text-brand-gold drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]" />
                </div>
                <span className="ml-3 text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] [text-shadow:_0_1px_1px_#000]">2-Year Warranty</span>
              </div>
              <div className="flex items-center">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 shadow-xl">
                  <Wrench className="h-8 w-8 text-brand-gold drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]" />
                </div>
                <span className="ml-3 text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] [text-shadow:_0_1px_1px_#000]">Expert Installation</span>
              </div>
              <div className="flex items-center">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 shadow-xl">
                  <Clock className="h-8 w-8 text-brand-gold drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]" />
                </div>
                <span className="ml-3 text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] [text-shadow:_0_1px_1px_#000]">Quick Turnaround</span>
              </div>
            </div>
          </div>

          {/* Right side: AI Wrap Designer promotion */}
          <div className="flex items-center justify-center animate-enter" style={{ animationDelay: "0.7s" }}>
            <div className="bg-brand-black/70 backdrop-blur-md border border-brand-gold/30 rounded-2xl shadow-2xl p-6 w-full max-w-md transform hover:scale-[1.02] transition-transform duration-300">
              <div className="relative mb-6">
                {/* Animated decorative elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-gold/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-grey/40 rounded-full blur-xl animate-pulse delay-700"></div>
                
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-brand-gold to-yellow-600 p-0.5 rounded-full">
                    <div className="bg-brand-black/80 backdrop-blur-sm rounded-full p-4">
                      <Sparkles className="h-12 w-12 text-brand-gold animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-center text-white text-2xl font-bold mb-3 drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
                AI-Powered<br />Wrap Designer
              </h2>
              
              <p className="text-white/90 text-center mb-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                Visualize your vehicle wrap in seconds with our exclusive AI tool. See your design before committing!
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center bg-brand-grey/30 px-4 py-3 rounded-lg">
                  <Zap className="h-5 w-5 text-brand-gold mr-3 flex-shrink-0" />
                  <span className="text-white/90 text-sm">Generate custom designs instantly</span>
                </div>
                <div className="flex items-center bg-brand-grey/30 px-4 py-3 rounded-lg">
                  <Sparkles className="h-5 w-5 text-brand-gold mr-3 flex-shrink-0" />
                  <span className="text-white/90 text-sm">No design skills required</span>
                </div>
                <div className="flex items-center bg-brand-grey/30 px-4 py-3 rounded-lg">
                  <Clock className="h-5 w-5 text-brand-gold mr-3 flex-shrink-0" />
                  <span className="text-white/90 text-sm">Save weeks in the design process</span>
                </div>
              </div>
              
              <Button 
                asChild
                size="lg"
                className="relative w-full bg-brand-black hover:bg-brand-grey/90 text-white text-lg px-8 py-7 h-auto rounded-xl shadow-xl overflow-hidden group"
              >
                <Link to="/ai-wrap-ideas" className="inline-flex items-center justify-center">
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-gold to-brand-black bg-[length:200%_100%] animate-gradient-x"></div>
                  
                  <span className="relative z-10 font-bold flex items-center">
                    <Sparkles className="mr-2 h-5 w-5 text-brand-gold group-hover:animate-ping" />
                    Design Your Wrap Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider - reduced height */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,58.7C160,53,320,43,480,48.3C640,53,800,75,960,75C1120,75,1280,53,1360,42.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
