
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, CheckCircle2 } from 'lucide-react';

interface BusinessStatsBarProps {
  cityName: string;
}

const BusinessStatsBar: React.FC<BusinessStatsBarProps> = ({ cityName }) => {
  return (
    <div className="bg-brand-navy text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <CheckCircle2 className="mr-2 h-5 w-5 text-brand-red" />
            <span className="text-sm md:text-base">Serving {cityName} • 16,000+ Wraps Completed • 20 Years in Business</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              size="sm"
              className="bg-brand-red hover:bg-red-700 text-white"
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

export default BusinessStatsBar;
