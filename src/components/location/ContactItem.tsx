
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
    <div className={`flex items-start p-4 rounded-lg transition-all ${highlight ? 'bg-brand-red/10 border border-brand-red/20' : 'hover:bg-gray-50'}`}>
      <div className={`flex items-center justify-center w-10 h-10 rounded-full mr-4 ${highlight ? 'bg-brand-red text-white' : 'bg-brand-navy/10 text-brand-navy'}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className={`font-semibold text-lg ${highlight ? 'text-brand-red' : 'text-brand-navy'}`}>{title}</p>
        <div className="text-gray-600 mt-1">{children}</div>
      </div>
    </div>
  );
};

export default ContactItem;
