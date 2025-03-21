
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';

const FloatingContactButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col gap-3">
        <Button
          asChild
          size="lg"
          className="bg-brand-red hover:bg-red-700 text-white font-medium rounded-full shadow-lg"
        >
          <Link to="/contact" className="inline-flex items-center">
            <MessageSquare className="mr-2 h-5 w-5" />
            Get a Quote
          </Link>
        </Button>
        
        <Button
          asChild
          variant="outline"
          size="lg"
          className="bg-white/90 backdrop-blur-sm border-gray-300 text-gray-800 hover:bg-gray-100 font-medium rounded-full shadow-lg"
        >
          <a href="tel:3125971286" className="inline-flex items-center">
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </a>
        </Button>
      </div>
    </div>
  );
};

export default FloatingContactButtons;
