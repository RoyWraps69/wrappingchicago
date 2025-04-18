
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface SecondaryServiceProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const SecondaryService = ({
  title,
  description,
  image,
  link
}: SecondaryServiceProps) => {
  return (
    <div className="bg-brand-light rounded-lg overflow-hidden shadow-md h-full">
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={image}
          alt={`${title} in Chicago - Professional vehicle transformation services`}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-brand-navy">{title}</h3>
        <p className="text-gray-700 mb-3">{description}</p>
        <Button
          asChild
          variant="outline"
          className="w-full border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
        >
          <Link to={link}>Learn More</Link>
        </Button>
      </div>
    </div>
  );
};

export default SecondaryService;
