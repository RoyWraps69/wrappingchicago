
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
    { label: 'Gallery', path: '/gallery' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Locations', path: '/locations' },
    { label: 'Contact', path: '/contact' }
  ];

  const serviceItems = [
    { label: 'Car Wraps', path: '/car-wraps' },
    { label: 'Truck Wraps', path: '/truck-wraps' },
    { label: 'Van Wraps', path: '/van-wraps' },
    { label: 'Fleet Wraps', path: '/fleet-wraps' },
    { label: 'Color Change Wraps', path: '/color-change-wraps' }
  ];

  const tradeItems = [
    { label: 'Plumbing Wraps', path: '/plumbing-wraps', badge: 'HOT' },
    { label: 'HVAC Wraps', path: '/hvac-wraps', badge: 'NEW' },
    { label: 'Electrical Wraps', path: '/electrical-wraps' },
    { label: 'Moving Companies', path: '/movers-wraps' },
    { label: 'Logistics & Delivery', path: '/logistics-wraps' },
    { label: 'Food Delivery', path: '/delivery-wraps' }
  ];

  const pricingItems = [
    { label: 'Pricing', path: '/pricing' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' }
  ];

  if (!isOpen) return null;

  return (
    <div 
      className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t z-50"
      role="navigation"
      aria-label="Mobile navigation menu"
    >
      <div className="px-4 py-6">
        {/* Main Navigation */}
        <div className="space-y-4 mb-6">
          {mainNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className="block py-2 text-foreground hover:text-accent transition-colors font-medium text-lg"
              aria-label={`Navigate to ${item.label}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Services Section */}
        <div className="border-t pt-6 mb-6">
          <h3 className="font-semibold text-foreground mb-4 text-lg">Our Services</h3>
          <div className="space-y-3">
            {serviceItems.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                onClick={onClose}
                className="flex items-center justify-between py-2 text-muted-foreground hover:text-accent transition-colors"
                aria-label={`Navigate to ${service.label} service`}
              >
                {service.label}
                <ChevronRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Trade Specialties Section - NEW */}
        <div className="border-t pt-6 mb-6">
          <h3 className="font-semibold text-brand-navy mb-2 text-lg flex items-center">
            Trade Specialists 
            <span className="ml-2 bg-brand-red text-white text-xs px-2 py-1 rounded-full">NEW</span>
          </h3>
          <p className="text-sm text-gray-600 mb-4">3-5x ROI for trade contractors</p>
          <div className="space-y-3">
            {tradeItems.map((trade) => (
              <Link
                key={trade.path}
                to={trade.path}
                onClick={onClose}
                className="flex items-center justify-between py-2 text-gray-700 hover:text-brand-red transition-colors"
              >
                <span className="flex items-center">
                  {trade.label}
                  {trade.badge && (
                    <span className="ml-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
                      {trade.badge}
                    </span>
                  )}
                </span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="border-t pt-6 mb-6">
          <h3 className="font-semibold text-brand-navy mb-4 text-lg">More Info</h3>
          <div className="space-y-3">
            {pricingItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className="flex items-center justify-between py-2 text-gray-700 hover:text-brand-red transition-colors"
              >
                {item.label}
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
            className="block mt-6 bg-brand-red text-white text-center py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-medium shadow-lg"
          >
            Get Quote in 30 Seconds
          </Link>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">70,000+ daily impressions guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
