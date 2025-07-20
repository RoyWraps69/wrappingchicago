import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Shield, Scale } from 'lucide-react';

interface LegalHeroProps {
  title: string;
  subtitle: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const LegalHero = ({ title, subtitle, icon: Icon = Shield }: LegalHeroProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=2070&auto=format&fit=crop')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-800/90 to-gray-700/95" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Icon */}
          <Icon className="h-16 w-16 mx-auto mb-6 text-brand-red" />
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          {/* Trust Signal */}
          <div className="flex justify-center items-center gap-4 mb-8 text-gray-400">
            <span className="text-sm font-medium">Updated {new Date().toLocaleDateString()}</span>
            <span className="text-sm">•</span>
            <span className="text-sm font-medium">Chicago, IL</span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-brand-red hover:bg-red-700 text-white font-bold text-lg px-8 py-6 h-auto shadow-lg"
              onClick={() => window.location.href = 'tel:+13125971286'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (312) 597-1286
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold text-lg px-8 py-6 h-auto"
              onClick={() => window.location.href = '/contact'}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalHero;