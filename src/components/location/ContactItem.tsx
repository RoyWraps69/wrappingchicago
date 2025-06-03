
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
      <div className={`flex items-start p-4 rounded-lg transition-all contact-item-dark ${highlight ? 'bg-brand-red/30 border border-brand-red' : 'hover:bg-gray-700'}`}>
        <div className={`flex items-center justify-center w-10 h-10 rounded-full mr-4 ${highlight ? 'bg-brand-red text-white' : 'bg-white text-black'}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className={`font-semibold text-lg ${highlight ? 'text-brand-red' : 'text-white'}`}>{title}</p>
          <div className="text-white mt-1">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-start p-4 rounded-lg transition-all ${highlight ? 'contact-item-highlight' : 'contact-item-default hover:bg-gray-100'}`}>
      <div className={`flex items-center justify-center w-10 h-10 rounded-full mr-4 ${highlight ? 'bg-brand-red text-white' : 'bg-black text-white'}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className={`font-semibold text-lg ${highlight ? 'text-brand-red' : 'text-black'}`}>{title}</p>
        <div className="text-black mt-1">{children}</div>
      </div>
    </div>
  );
};

export default ContactItem;
