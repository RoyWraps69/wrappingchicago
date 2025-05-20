
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
      className={cn("text-white/80 hover:text-white transition-all flex items-center relative font-medium after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-brand-red after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100", className)}
      onClick={onClick}
    >
      {Icon && <Icon className="mr-1 h-4 w-4" />}
      {children}
    </Link>
  );
};

export default NavLink;
