
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, MessageSquare, MapPin, DollarSign } from 'lucide-react';
import NavLink from './NavLink';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="md:hidden fixed inset-0 z-50 bg-black/95 text-white overflow-y-auto">
      <div className="container mx-auto py-8 px-4">
        <div className="space-y-6">
          <NavLink to="/" onClick={onClose} className="text-2xl text-white">
            Home
          </NavLink>
          <NavLink to="/ai-wrap-ideas" onClick={onClose} icon={Sparkles} className="text-2xl text-white">
            AI Wrap Designer
          </NavLink>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-2">Services</h3>
            <div className="grid grid-cols-2 gap-4">
              <NavLink to="/services/car-wraps" onClick={onClose} className="text-white">
                Car Wraps
              </NavLink>
              <NavLink to="/services/truck-wraps" onClick={onClose} className="text-white">
                Truck Wraps
              </NavLink>
              <NavLink to="/services/van-wraps" onClick={onClose} className="text-white">
                Van Wraps
              </NavLink>
              <NavLink to="/services/fleet-wraps" onClick={onClose} className="text-white">
                Fleet Wraps
              </NavLink>
              <NavLink to="/services/color-change-wraps" onClick={onClose} className="text-white">
                Color Change
              </NavLink>
              <NavLink to="/services/partial-wraps" onClick={onClose} className="text-white">
                Partial Wraps
              </NavLink>
            </div>
            <Link to="/services" className="block mt-2 text-brand-red underline" onClick={onClose}>
              View All Services
            </Link>
          </div>
          
          <NavLink to="/gallery" onClick={onClose} className="text-2xl text-white">
            Gallery
          </NavLink>

          <div>
            <h3 className="text-lg font-medium text-white mb-2">Pricing & Locations</h3>
            <div className="space-y-2">
              <NavLink to="/pricing" onClick={onClose} icon={DollarSign} className="text-white">
                Pricing & Packages
              </NavLink>
              <NavLink to="/locations" onClick={onClose} icon={MapPin} className="text-white">
                Service Areas
              </NavLink>
            </div>
          </div>
          
          <NavLink to="/about" onClick={onClose} className="text-2xl text-white">
            About Us
          </NavLink>
          
          <NavLink to="/contact" onClick={onClose} className="text-2xl text-white">
            Contact
          </NavLink>
          
          <div className="pt-4 border-t border-white/10">
            <div className="grid grid-cols-2 gap-4">
              <Link 
                to="/contact"
                onClick={onClose}
                className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-4 text-center transition-colors text-white"
              >
                <MessageSquare className="mx-auto mb-2 h-6 w-6 text-brand-red" />
                <span>Get a Quote</span>
              </Link>
              
              <a 
                href="tel:3125971286"
                className="bg-brand-red hover:bg-red-600 rounded-lg p-4 text-center transition-colors text-white"
              >
                <Phone className="mx-auto mb-2 h-6 w-6" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
