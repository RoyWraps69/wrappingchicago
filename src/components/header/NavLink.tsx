
import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, icon: Icon, onClick, className }) => {
  return (
    <Link 
      to={to} 
      className={cn("hover:text-brand-gold transition-colors flex items-center text-gray-800", className)}
      onClick={onClick}
    >
      {Icon && <Icon className="mr-1 h-4 w-4" />}
      {children}
    </Link>
  );
};

export default NavLink;
