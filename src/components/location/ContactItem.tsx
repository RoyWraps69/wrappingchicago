
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactItemProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
  darkBackground?: boolean;
}

const ContactItem: React.FC<ContactItemProps> = ({ 
  icon: Icon, 
  title, 
  children, 
  highlight = false,
  darkBackground = false 
}) => {
  if (darkBackground) {
    return (
      <div className={`flex items-start p-6 rounded-lg transition-all bg-black border-2 border-white ${highlight ? 'bg-brand-red border-brand-red' : ''}`}>
        <div className={`flex items-center justify-center w-12 h-12 rounded-full mr-4 flex-shrink-0 ${highlight ? 'bg-white text-brand-red' : 'bg-brand-red text-white'}`}>
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className={`font-bold text-xl ${highlight ? 'text-white' : 'text-white'}`}>{title}</p>
          <div className="text-white mt-2 text-lg">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-start p-6 rounded-lg transition-all bg-white border-2 ${highlight ? 'border-brand-red bg-red-50' : 'border-gray-300 hover:border-gray-400'}`}>
      <div className={`flex items-center justify-center w-12 h-12 rounded-full mr-4 flex-shrink-0 ${highlight ? 'bg-brand-red text-white' : 'bg-black text-white'}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className={`font-bold text-xl ${highlight ? 'text-brand-red' : 'text-black'}`}>{title}</p>
        <div className="text-black mt-2 text-lg">{children}</div>
      </div>
    </div>
  );
};

export default ContactItem;
