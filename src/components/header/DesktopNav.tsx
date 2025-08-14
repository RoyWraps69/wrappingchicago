
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceMenu from './ServiceMenu';
import PricingMenu from './PricingMenu';
import TradeMenu from './TradeMenu';
import LocationsMenu from './LocationsMenu';

const DesktopNav = () => {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Industries', path: '/industries' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <div className="hidden md:flex items-center space-x-2">
      {/* Home link first */}
      <Link
        to="/"
        className="text-brand-navy hover:text-brand-red transition-colors duration-300 font-medium px-4 py-2 rounded-md hover:bg-gray-50"
      >
        Home
      </Link>
      
      {/* Important business items first */}
      <ServiceMenu />
      <PricingMenu />
      <LocationsMenu />
      <TradeMenu />
      
      {/* Secondary navigation links */}
      {navItems.slice(1).map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="text-brand-navy hover:text-brand-red transition-colors duration-300 font-medium px-4 py-2 rounded-md hover:bg-gray-50"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default DesktopNav;
