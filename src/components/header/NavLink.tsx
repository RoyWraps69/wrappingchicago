
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
      className={cn(
        "text-brand-navy hover:text-brand-red transition-all duration-300 flex items-center relative font-medium px-3 py-2 rounded-md hover:bg-gray-50",
        className
      )}
      onClick={onClick}
    >
      {Icon && <Icon className="mr-1 h-4 w-4" />}
      {children}
    </Link>
  );
};

export default NavLink;
