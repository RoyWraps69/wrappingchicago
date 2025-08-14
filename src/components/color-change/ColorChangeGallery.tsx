
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ColorChangeGallery = () => {
  const galleryItems = [
    {
      image: "/lovable-uploads/020ef79d-a051-4f6f-9c1e-d4ded8bf2260.png",
      alt: "Tesla Cybertruck with satin black color change wrap",
      title: "Tesla Cybertruck Satin Black Wrap",
      description: "Complete satin black transformation with premium vinyl wrap."
    },
    {
      image: "/lovable-uploads/9de106b5-94cb-4fd1-a7c7-5c75c75b7cbb.png",
      alt: "BMW sports car with metallic blue color change wrap",
      title: "BMW Metallic Blue Color Change",
      description: "Vibrant metallic blue wrap that enhances the vehicle's dynamic lines."
    },
    {
      image: "/lovable-uploads/0316f206-884b-44b4-bdb3-e0f7962a1714.png",
      alt: "Mercedes sedan with matte black color change wrap",
      title: "Mercedes Sedan Matte Black",
      description: "Elegant matte black finish on a luxury Mercedes sedan."
    },
    {
      image: "/lovable-uploads/e021924c-a0a1-407c-9d11-13372909975f.png",
      alt: "Jeep Grand Cherokee with matte black color change wrap",
      title: "Jeep Grand Cherokee Matte Black",
      description: "Matte black wrap that highlights the SUV's aggressive styling."
    }
  ];

  return (
    <div className="py-12">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-bold text-brand-navy">Recent Color Change Projects</h2>
        <Link to="/gallery" className="text-brand-navy hover:text-brand-red font-medium flex items-center">
          View all projects
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {galleryItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="aspect-video">
              <img 
                src={item.image} 
                alt={item.alt}
                className="w-full h-full object-cover"
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

export default ColorChangeGallery;
