import React from 'react';
import { Link } from 'react-router-dom';

const MainNavigation: React.FC = () => {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {/* Core Services */}
      <div className="relative group">
        <Link 
          to="/services" 
          className="text-white hover:text-brand-red transition-colors font-medium"
        >
          Services
        </Link>
        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">Vehicle Wraps</h4>
                <ul className="space-y-2">
                  <li><Link to="/car-wraps" className="text-gray-600 hover:text-brand-red transition-colors">Car Wraps</Link></li>
                  <li><Link to="/truck-wraps" className="text-gray-600 hover:text-brand-red transition-colors">Truck Wraps</Link></li>
                  <li><Link to="/van-wraps" className="text-gray-600 hover:text-brand-red transition-colors">Van Wraps</Link></li>
                  <li><Link to="/fleet-wraps" className="text-gray-600 hover:text-brand-red transition-colors">Fleet Wraps</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">Specialty Wraps</h4>
                <ul className="space-y-2">
                  <li><Link to="/color-change-wraps" className="text-gray-600 hover:text-brand-red transition-colors">Color Change</Link></li>
                  <li><Link to="/luxury-exotic-wraps" className="text-gray-600 hover:text-brand-red transition-colors">Luxury & Exotic</Link></li>
                  <li><Link to="/designer-wraps" className="text-gray-600 hover:text-brand-red transition-colors">Designer Wraps</Link></li>
                  <li><Link to="/ai-wrap-ideas" className="text-gray-600 hover:text-brand-red transition-colors">AI Design Tool</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <h4 className="font-semibold text-brand-navy mb-3">Trade Services</h4>
              <div className="grid grid-cols-3 gap-2">
                <Link to="/plumbing-wraps" className="text-sm text-gray-600 hover:text-brand-red transition-colors">Plumbing</Link>
                <Link to="/hvac-wraps" className="text-sm text-gray-600 hover:text-brand-red transition-colors">HVAC</Link>
                <Link to="/electrical-wraps" className="text-sm text-gray-600 hover:text-brand-red transition-colors">Electrical</Link>
                <Link to="/movers-wraps" className="text-sm text-gray-600 hover:text-brand-red transition-colors">Movers</Link>
                <Link to="/logistics-wraps" className="text-sm text-gray-600 hover:text-brand-red transition-colors">Logistics</Link>
                <Link to="/delivery-wraps" className="text-sm text-gray-600 hover:text-brand-red transition-colors">Delivery</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Locations */}
      <div className="relative group">
        <Link 
          to="/locations" 
          className="text-white hover:text-brand-red transition-colors font-medium"
        >
          Locations
        </Link>
        <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
          <div className="p-6">
            <h4 className="font-semibold text-brand-navy mb-4">Service Areas</h4>
            <div className="grid grid-cols-3 gap-3">
              <Link to="/chicago" className="text-gray-600 hover:text-brand-red transition-colors">Chicago</Link>
              <Link to="/evanston" className="text-gray-600 hover:text-brand-red transition-colors">Evanston</Link>
              <Link to="/naperville" className="text-gray-600 hover:text-brand-red transition-colors">Naperville</Link>
              <Link to="/schaumburg" className="text-gray-600 hover:text-brand-red transition-colors">Schaumburg</Link>
              <Link to="/skokie" className="text-gray-600 hover:text-brand-red transition-colors">Skokie</Link>
              <Link to="/arlington-heights" className="text-gray-600 hover:text-brand-red transition-colors">Arlington Heights</Link>
              <Link to="/palatine" className="text-gray-600 hover:text-brand-red transition-colors">Palatine</Link>
              <Link to="/aurora" className="text-gray-600 hover:text-brand-red transition-colors">Aurora</Link>
              <Link to="/joliet" className="text-gray-600 hover:text-brand-red transition-colors">Joliet</Link>
              <Link to="/oak-park" className="text-gray-600 hover:text-brand-red transition-colors">Oak Park</Link>
              <Link to="/wheaton" className="text-gray-600 hover:text-brand-red transition-colors">Wheaton</Link>
              <Link to="/elmhurst-il" className="text-gray-600 hover:text-brand-red transition-colors">Elmhurst</Link>
            </div>
            <Link to="/locations" className="inline-block mt-4 text-brand-red hover:underline font-medium">
              View All Locations →
            </Link>
          </div>
        </div>
      </div>

      {/* Core Pages */}
      <Link 
        to="/gallery" 
        className="text-white hover:text-brand-red transition-colors font-medium"
      >
        Gallery
      </Link>
      
      <Link 
        to="/about" 
        className="text-white hover:text-brand-red transition-colors font-medium"
      >
        About
      </Link>
      
      <Link 
        to="/pricing" 
        className="text-white hover:text-brand-red transition-colors font-medium"
      >
        Pricing
      </Link>
      
      <Link 
        to="/contact" 
        className="text-white hover:text-brand-red transition-colors font-medium px-4 py-2 bg-brand-red rounded-lg hover:bg-brand-red/90"
      >
        Get Quote
      </Link>
    </nav>
  );
};

export default MainNavigation;