
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
      <div className={`flex items-start p-6 rounded-lg transition-all ${highlight ? 'bg-brand-red border-2 border-brand-red' : 'bg-black border-2 border-white'}`}>
        <div className={`flex items-center justify-center w-12 h-12 rounded-full mr-4 flex-shrink-0 ${highlight ? 'bg-white text-brand-red' : 'bg-brand-red text-white'}`}>
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className={`font-bold text-xl ${highlight ? 'text-white' : 'text-white'}`}>{title}</p>
          <div className="text-white mt-2 text-lg font-medium">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-start p-6 rounded-lg transition-all ${highlight ? 'bg-red-50 border-2 border-brand-red' : 'bg-white border-2 border-black hover:border-brand-red'}`}>
      <div className={`flex items-center justify-center w-12 h-12 rounded-full mr-4 flex-shrink-0 ${highlight ? 'bg-brand-red text-white' : 'bg-black text-white'}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className={`font-bold text-xl ${highlight ? 'text-brand-red' : 'text-black'}`}>{title}</p>
        <div className={`mt-2 text-lg font-medium ${highlight ? 'text-black' : 'text-black'}`}>{children}</div>
      </div>
    </div>
  );
};

export default ContactItem;
