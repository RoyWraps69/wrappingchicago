
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageSquare, Phone } from 'lucide-react';

const StickyContactButtons: React.FC = () => {
  return (
    <div className="sticky top-4 z-50 w-full max-w-2xl mx-auto px-4">
      <div className="flex justify-center gap-4 p-3 bg-black/90 backdrop-blur-sm rounded-full shadow-xl border-2 border-white/20">
        <Button
          asChild
          size="sm"
          className="bg-brand-red hover:bg-red-700 text-white rounded-full border-2 border-brand-red font-bold"
        >
          <Link to="/contact" className="inline-flex items-center">
            <MessageSquare className="mr-2 h-4 w-4" />
            Schedule Perfection Now!
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="bg-white/20 border-2 border-white text-white hover:bg-white/30 rounded-full font-bold"
        >
          <a href="tel:3125971286" className="inline-flex items-center">
            <Phone className="mr-2 h-4 w-4" />
            (312) 597-1286
          </a>
        </Button>
      </div>
    </div>
  );
};

export default StickyContactButtons;
