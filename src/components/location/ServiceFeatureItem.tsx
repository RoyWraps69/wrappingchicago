
import React from 'react';
import { Check } from 'lucide-react';

interface ServiceFeatureItemProps {
  text: string;
}

const ServiceFeatureItem: React.FC<ServiceFeatureItemProps> = ({ text }) => {
  return (
    <li className="flex items-start">
      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
      <span>{text}</span>
    </li>
  );
};

export default ServiceFeatureItem;
