import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-brand-navy">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')"
        }}
      />
      
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/98 via-brand-navy/95 to-brand-navy/98" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Trust Signals */}
          <div className="flex justify-center items-center gap-6 mb-6 text-white/90">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span className="text-sm font-medium">Same Day Response</span>
            </div>
            <span className="text-sm">•</span>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span className="text-sm font-medium">Free Consultations</span>
            </div>
            <span className="text-sm">•</span>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium">Chicago Area</span>
            </div>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Get Your Free Quote
            <span className="block bg-gradient-to-r from-white via-accent-foreground to-white bg-clip-text text-transparent">
              Professional Vehicle Wraps
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your vehicle? Contact Chicago's premier vehicle wrap experts. 
            <span className="font-semibold text-accent-foreground"> Free quotes, expert advice, professional results.</span>
          </p>
          
          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-8 text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-xl font-bold mb-1">(312) 597-1286</div>
              <div className="text-sm opacity-90">Call for Instant Quote</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-xl font-bold mb-1">Same Day Service</div>
              <div className="text-sm opacity-90">Emergency Wraps Available</div>
            </div>
          </div>
          
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
              onClick={() => window.location.href = 'mailto:info@wrappingchicago.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;