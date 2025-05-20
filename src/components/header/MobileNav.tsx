
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Truck, Sparkles, Phone, MessageSquare, MapPin, Info, LayoutGrid } from 'lucide-react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex md:hidden">
      <div className="bg-black w-[85%] max-w-sm h-full overflow-y-auto animate-slide-in-right">
        <div className="p-4 flex justify-between items-center border-b border-white/10">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-brand-red" 
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-6">
            <li>
              <Link 
                to="/" 
                className="text-white hover:text-brand-red flex items-center p-2 rounded hover:bg-white/5 text-lg font-medium"
                onClick={onClose}
              >
                <LayoutGrid className="mr-3 h-5 w-5 text-brand-red" />
                Home
              </Link>
            </li>
            
            <li>
              <Link 
                to="/ai-wrap-ideas" 
                className="text-white hover:text-brand-red flex items-center p-2 rounded hover:bg-white/5 text-lg font-medium"
                onClick={onClose}
              >
                <Sparkles className="mr-3 h-5 w-5 text-brand-red" />
                AI Wrap Designer
              </Link>
            </li>
            
            <li className="py-2">
              <div className="text-white font-medium mb-3 border-b border-white/10 pb-2 flex items-center">
                <Car className="mr-3 h-5 w-5 text-brand-red" />
                <span className="text-lg">Vehicle Wrap Services</span>
              </div>
              <ul className="pl-8 space-y-3 mt-2">
                <li>
                  <Link 
                    to="/services/car-wraps" 
                    className="text-white/80 hover:text-brand-red block py-1 text-base"
                    onClick={onClose}
                  >
                    Car Wraps
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/truck-wraps" 
                    className="text-white/80 hover:text-brand-red block py-1 text-base"
                    onClick={onClose}
                  >
                    Truck Wraps
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/van-wraps" 
                    className="text-white/80 hover:text-brand-red block py-1 text-base"
                    onClick={onClose}
                  >
                    Van Wraps
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/fleet-wraps" 
                    className="text-white/80 hover:text-brand-red block py-1 text-base"
                    onClick={onClose}
                  >
                    Fleet Wraps
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    className="text-brand-red block py-1 font-medium text-base"
                    onClick={onClose}
                  >
                    View All Services →
                  </Link>
                </li>
              </ul>
            </li>
            
            <li>
              <Link 
                to="/gallery" 
                className="text-white hover:text-brand-red flex items-center p-2 rounded hover:bg-white/5 text-lg font-medium"
                onClick={onClose}
              >
                <LayoutGrid className="mr-3 h-5 w-5 text-brand-red" />
                Gallery
              </Link>
            </li>
            
            <li>
              <Link 
                to="/locations" 
                className="text-white hover:text-brand-red flex items-center p-2 rounded hover:bg-white/5 text-lg font-medium"
                onClick={onClose}
              >
                <MapPin className="mr-3 h-5 w-5 text-brand-red" />
                Locations
              </Link>
            </li>
            
            <li>
              <Link 
                to="/about" 
                className="text-white hover:text-brand-red flex items-center p-2 rounded hover:bg-white/5 text-lg font-medium"
                onClick={onClose}
              >
                <Info className="mr-3 h-5 w-5 text-brand-red" />
                About
              </Link>
            </li>
            
            <li>
              <Link 
                to="/contact" 
                className="text-white hover:text-brand-red flex items-center p-2 rounded hover:bg-white/5 text-lg font-medium"
                onClick={onClose}
              >
                <MessageSquare className="mr-3 h-5 w-5 text-brand-red" />
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-black flex flex-col gap-3">
          <Button asChild variant="outline" className="w-full">
            <Link to="/contact">
              <MessageSquare className="mr-2 h-4 w-4" />
              Get a Quote
            </Link>
          </Button>
          
          <Button asChild variant="gradient" animation="glow" className="w-full">
            <a href="tel:3125971286" className="inline-flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              (312) 597-1286
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
