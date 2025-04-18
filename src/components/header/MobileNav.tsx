
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Truck, Sparkles, Phone, MessageSquare, MapPin, Info, LayoutGrid } from 'lucide-react';
import { X } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex md:hidden">
      <div className="bg-brand-navy w-[85%] max-w-sm h-full overflow-y-auto animate-slide-in-right">
        <div className="p-4 flex justify-between items-center border-b border-white/10">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-300" 
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link 
                to="/" 
                className="text-white hover:text-brand-red flex items-center p-2 rounded hover:bg-white/5"
                onClick={onClose}
              >
                <LayoutGrid className="mr-3 h-5 w-5" />
                Home
              </Link>
            </li>
            
            <li>
              <Link 
                to="/ai-wrap-ideas" 
                className="text-white hover:text-brand-red flex items-center p-2 rounded hover:bg-white/5"
                onClick={onClose}
              >
                <Sparkles className="mr-3 h-5 w-5" />
                AI Wrap Designer
              </Link>
            </li>
            
            <li className="py-2">
              <div className="text-white font-medium mb-1 border-b border-white/10 pb-1 flex items-center">
                <Car className="mr-3 h-5 w-5 text-brand-red" />
                Vehicle Wrap Services
              </div>
              <ul className="pl-8 space-y-2 mt-2">
                <li>
                  <Link 
                    to="/services/car-wraps" 
                    className="text-white hover:text-brand-red block py-1"
                    onClick={onClose}
                  >
                    Car Wraps
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/truck-wraps" 
                    className="text-white hover:text-brand-red block py-1"
                    onClick={onClose}
                  >
                    Truck Wraps
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/van-wraps" 
                    className="text-white hover:text-brand-red block py-1"
                    onClick={onClose}
                  >
                    Van Wraps
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services/fleet-wraps" 
                    className="text-white hover:text-brand-red block py-1"
                    onClick={onClose}
                  >
                    Fleet Wraps
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    className="text-white hover:text-brand-red block py-1 font-medium"
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
                className="text-white hover:text-brand-red flex items-center p-2 rounded hover:bg-white/5"
                onClick={onClose}
              >
                <LayoutGrid className="mr-3 h-5 w-5" />
                Gallery
              </Link>
            </li>
            
            <li>
              <Link 
                to="/locations" 
                className="text-white hover:text-brand-red flex items-center p-2 rounded hover:bg-white/5"
                onClick={onClose}
              >
                <MapPin className="mr-3 h-5 w-5" />
                Locations
              </Link>
            </li>
            
            <li>
              <Link 
                to="/about" 
                className="text-white hover:text-brand-red flex items-center p-2 rounded hover:bg-white/5"
                onClick={onClose}
              >
                <Info className="mr-3 h-5 w-5" />
                About
              </Link>
            </li>
            
            <li>
              <Link 
                to="/contact" 
                className="text-white hover:text-brand-red flex items-center p-2 rounded hover:bg-white/5"
                onClick={onClose}
              >
                <MessageSquare className="mr-3 h-5 w-5" />
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-brand-navy">
          <a 
            href="tel:3125971286" 
            className="bg-brand-red hover:bg-red-700 text-white py-3 px-4 rounded block text-center font-medium"
          >
            <Phone className="inline-block mr-2 h-4 w-4" />
            (312) 597-1286
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
