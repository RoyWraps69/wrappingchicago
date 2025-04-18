
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BeforeAfterSlider } from '@/components/ui/before-after-slider';

interface FeaturedServiceProps {
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  link: string;
}

const FeaturedService = ({
  title,
  description,
  beforeImage,
  afterImage,
  link
}: FeaturedServiceProps) => {
  return (
    <div className="mb-8">
      <div className="bg-brand-light rounded-lg overflow-hidden shadow-md">
        <div className="flex flex-col">
          <div className="w-full aspect-[16/9]">
            <BeforeAfterSlider
              beforeImage={beforeImage}
              afterImage={afterImage}
              beforeAlt="Silver Lexus IS before color change wrap"
              afterAlt="Blue Lexus IS after color change wrap"
              className="w-full h-full"
            />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-3 text-brand-navy">{title}</h3>
            <p className="text-gray-700 mb-4 text-lg">{description}</p>
            <Button
              asChild
              className="bg-brand-navy hover:bg-blue-900 text-white w-full md:w-auto self-start"
            >
              <Link to={link}>Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedService;
