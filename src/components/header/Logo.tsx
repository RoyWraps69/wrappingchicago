
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" 
        alt="Wrapping Chicago Logo" 
        className="h-12 w-12 mr-3"
      />
      <div className="flex flex-col leading-tight">
        <span className="text-2xl font-extrabold tracking-tight text-brand-navy uppercase">Wrapping</span>
        <span className="text-2xl font-extrabold tracking-tight text-brand-red uppercase">Chicago</span>
      </div>
    </Link>
  );
};

export default Logo;
