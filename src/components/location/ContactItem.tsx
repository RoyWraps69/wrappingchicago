
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactItemProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, title, children, highlight = false }) => {
  return (
    <div className={`flex items-start p-4 rounded-lg transition-all ${highlight ? 'bg-brand-red/20 border border-brand-red/30' : 'hover:bg-gray-800/50'}`}>
      <div className={`flex items-center justify-center w-10 h-10 rounded-full mr-4 ${highlight ? 'bg-brand-red text-white' : 'bg-brand-navy/80 text-white'}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className={`font-semibold text-lg ${highlight ? 'text-brand-red' : 'text-white'}`}>{title}</p>
        <div className="text-gray-300 mt-1">{children}</div>
      </div>
    </div>
  );
};

export default ContactItem;
