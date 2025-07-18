
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone } from 'lucide-react';

const DesignerWrapsHero = () => {
  return (
    <div className="relative bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1562911791-c7a97b729ec5?auto=format&fit=crop&w=2000&q=80"
          alt="Custom wrapped sports car with unique design elements"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Designer Vehicle Wraps Chicago - Custom Artistic Graphics
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Transform your vehicle into a personalized masterpiece with our custom designer wraps. 
            From artistic patterns to one-of-a-kind textures, we bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="default">
              <Link to="/contact" className="inline-flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Get a Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outlineWhite">
              <a href="tel:3125971286" className="inline-flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call (312) 597-1286
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignerWrapsHero;
