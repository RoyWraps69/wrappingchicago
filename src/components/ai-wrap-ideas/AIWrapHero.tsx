
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';

const AIWrapHero = () => {
  return (
    <section className="bg-gradient-to-r from-brand-black to-brand-grey text-white py-24 relative h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0 opacity-25">
        <img 
          src="/lovable-uploads/199c2a21-e0b0-4c29-972f-f32d72698382.png" 
          alt="Vehicle wrap background" 
          className="object-cover w-full h-full"
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Breadcrumbs />
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center bg-brand-black/70 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-4 border border-brand-gold/20">
            <Sparkles className="h-4 w-4 mr-2 text-brand-gold" />
            <span>AI-Powered Design Assistant</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-md">AI Wrap Designer</h1>
          <p className="text-xl text-white mb-8 drop-shadow-md">
            Our AI design tool helps bridge the gap between your vision and reality, allowing you to explore concepts before committing to a design using premium Avery and 3M materials.
          </p>
          <Button
            size="lg" 
            variant="gold"
            className="py-6 px-8 rounded-full h-auto"
            onClick={() => document.getElementById('generator-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Create Your Design Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIWrapHero;
