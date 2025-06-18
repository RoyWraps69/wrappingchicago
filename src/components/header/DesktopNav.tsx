
import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import ServiceMenu from './ServiceMenu';
import PricingMenu from './PricingMenu';

const DesktopNav = () => {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Locations', path: '/locations' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <div className="hidden md:flex items-center space-x-1">
      {/* Home link first - completely separate with guaranteed clickability */}
      <div className="relative z-50 mr-6">
        <NavLink key="/" to="/" className="bg-transparent hover:bg-gray-50">
          Home
        </NavLink>
      </div>
      
      {/* Service and Pricing menus with lower z-index */}
      <div className="relative z-40">
        <ServiceMenu />
      </div>
      <div className="relative z-40">
        <PricingMenu />
      </div>
      
      {/* Rest of navigation items */}
      {navItems.slice(1).map((item) => (
        <NavLink key={item.path} to={item.path} className="relative z-30">
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default DesktopNav;
