
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
      {/* Home link first - separate from other items with higher z-index */}
      <NavLink key="/" to="/" className="mr-4 relative z-50">
        Home
      </NavLink>
      
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
