
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const DesignerWrapsGallery = () => {
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?auto=format&fit=crop&w=800&q=80",
      alt: "Sports car with custom racing stripe design wrap",
      title: "Custom Racing Stripes Design",
      description: "Bold racing stripes with metallic accents and custom color fades."
    },
    {
      image: "https://images.unsplash.com/photo-1603384699007-50707fc265ce?auto=format&fit=crop&w=800&q=80",
      alt: "Vehicle with geometric pattern wrap design",
      title: "Geometric Pattern Concept",
      description: "Modern geometric design combining matte and gloss finishes with precise edges."
    },
    {
      image: "https://images.unsplash.com/photo-1570071677470-c04398af73fc?auto=format&fit=crop&w=800&q=80",
      alt: "Luxury car with color shift wrap",
      title: "Color Shift Chameleon",
      description: "Premium color-shifting wrap that transitions from purple to blue depending on viewing angle."
    },
    {
      image: "https://images.unsplash.com/photo-1595840688621-60f943209793?auto=format&fit=crop&w=800&q=80",
      alt: "Vehicle with artistic abstract design wrap",
      title: "Abstract Art Concept",
      description: "Custom abstract design featuring flowing lines and vibrant color transitions."
    }
  ];

  return (
    <div className="py-12">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-bold text-brand-navy">Featured Designer Projects</h2>
        <Link to="/gallery" className="text-brand-navy hover:text-brand-red font-medium flex items-center">
          View all projects
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {galleryItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative w-full h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-navy mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <Button asChild size="lg" className="bg-brand-navy hover:bg-blue-800">
          <Link to="/gallery" className="inline-flex items-center">
            View Our Complete Gallery
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default DesignerWrapsGallery;
