
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ChevronRight } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const mainNavItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Blog', path: '/blog' },
    { label: 'Locations', path: '/locations' },
    { label: 'Contact', path: '/contact' }
  ];

  const serviceItems = [
    { label: 'Car Wraps', path: '/car-wraps' },
    { label: 'Truck Wraps', path: '/truck-wraps' },
    { label: 'Van Wraps', path: '/van-wraps' },
    { label: 'Fleet Wraps', path: '/services/fleet-wraps' },
    { label: 'Color Change Wraps', path: '/color-change-wraps' },
    { label: 'Commercial Graphics', path: '/services/commercial-graphics' }
  ];

  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t z-40">
      <div className="px-4 py-6">
        {/* Main Navigation */}
        <div className="space-y-4 mb-6">
          {mainNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className="block py-2 text-brand-navy hover:text-brand-red transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Services Section */}
        <div className="border-t pt-6 mb-6">
          <h3 className="font-semibold text-brand-navy mb-4">Our Services</h3>
          <div className="space-y-3">
            {serviceItems.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                onClick={onClose}
                className="flex items-center justify-between py-2 text-gray-700 hover:text-brand-red transition-colors"
              >
                {service.label}
                <ChevronRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t pt-6">
          <div className="space-y-4">
            <a
              href="tel:3125971286"
              className="flex items-center text-brand-navy hover:text-brand-red transition-colors"
            >
              <Phone className="h-5 w-5 mr-3" />
              <span className="font-medium">(312) 597-1286</span>
            </a>
            <a
              href="mailto:roy@chicagofleetwraps.com"
              className="flex items-center text-brand-navy hover:text-brand-red transition-colors"
            >
              <Mail className="h-5 w-5 mr-3" />
              <span>roy@chicagofleetwraps.com</span>
            </a>
          </div>
          
          <Link
            to="/contact"
            onClick={onClose}
            className="block mt-6 bg-brand-red text-white text-center py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
