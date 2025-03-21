
import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, icon: Icon, onClick }) => {
  return (
    <Link 
      to={to} 
      className="hover:text-brand-red transition-colors flex items-center"
      onClick={onClick}
    >
      {Icon && <Icon className="mr-1 h-4 w-4" />}
      {children}
    </Link>
  );
};

export default NavLink;
