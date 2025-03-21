
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageSquare, Phone, CheckCircle2 } from 'lucide-react';

const InfoBar: React.FC = () => {
  return (
    <div className="bg-brand-black text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <CheckCircle2 className="mr-2 h-5 w-5 text-brand-gold" />
            <span className="text-sm md:text-base">Chicago's #1 Vehicle Wrap Company • Premium 3M Materials • 2-Year Warranty</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              size="sm"
              className="bg-brand-gold hover:bg-yellow-600 text-brand-black"
            >
              <Link to="/contact" className="inline-flex items-center">
                <MessageSquare className="mr-2 h-4 w-4" />
                Request a Quote
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              <a href="tel:3125971286" className="inline-flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                (312) 597-1286
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
