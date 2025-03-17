
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactItemProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, title, children }) => {
  return (
    <div className="flex items-start">
      <Icon className="h-5 w-5 text-brand-red mr-2 mt-0.5" />
      <div>
        <p className="font-semibold">{title}</p>
        {children}
      </div>
    </div>
  );
};

export default ContactItem;
