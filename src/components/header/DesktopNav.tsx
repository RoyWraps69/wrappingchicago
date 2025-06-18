
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import NavLink from './NavLink';
import ServiceMenu from './ServiceMenu';
import PricingMenu from './PricingMenu';

const DesktopNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { label: 'Gallery', path: '/gallery' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Locations', path: '/locations' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleHomeClick = (e) => {
    e.preventDefault();
    console.log('Home link clicked, current location:', location.pathname);
    console.log('Navigating to /');
    navigate('/', { replace: true });
  };

  return (
    <div className="hidden md:flex items-center space-x-1">
      {/* Home link first - completely isolated and forced navigation */}
      <div className="relative z-50 mr-8">
        <Link 
          to="/" 
          onClick={handleHomeClick}
          className="text-brand-navy hover:text-brand-red transition-all duration-300 flex items-center font-medium px-4 py-2 rounded-md hover:bg-gray-50 cursor-pointer"
          style={{ 
            pointerEvents: 'auto',
            position: 'relative',
            zIndex: 9999
          }}
        >
          Home
        </Link>
      </div>
      
      {/* Service and Pricing menus with lower z-index */}
      <div className="relative z-40">
        <ServiceMenu />
      </div>
      <div className="relative z-40">
        <PricingMenu />
      </div>
      
      {/* Rest of navigation items */}
      {navItems.map((item) => (
        <NavLink key={item.path} to={item.path} className="relative z-30">
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default DesktopNav;
