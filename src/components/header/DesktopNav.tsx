
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
    <div className="hidden md:flex items-center space-x-2">
      {navItems.slice(0, 1).map((item) => (
        <NavLink key={item.path} to={item.path}>
          {item.label}
        </NavLink>
      ))}
      
      <ServiceMenu />
      <PricingMenu />
      
      {navItems.slice(1).map((item) => (
        <NavLink key={item.path} to={item.path}>
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default DesktopNav;
