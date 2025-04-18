
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface AdditionalServiceProps {
  title: string;
  description: string;
  link: string;
}

const AdditionalService = ({
  title,
  description,
  link
}: AdditionalServiceProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="p-5">
        <h4 className="text-lg font-semibold mb-2 text-brand-navy">{title}</h4>
        <p className="text-gray-700 mb-4 text-sm">{description}</p>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="w-full border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
        >
          <Link to={link}>Learn More</Link>
        </Button>
      </div>
    </div>
  );
};

export default AdditionalService;
