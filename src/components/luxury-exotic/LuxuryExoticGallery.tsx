
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const LuxuryExoticGallery = () => {
  const galleryItems = [
    {
      image: "/lovable-uploads/0316f206-884b-44b4-bdb3-e0f7962a1714.png",
      alt: "Mercedes sedan with premium matte black luxury wrap",
      title: "Mercedes Sedan Matte Black",
      description: "Complete matte black transformation on a luxury Mercedes sedan."
    },
    {
      image: "/lovable-uploads/9de106b5-94cb-4fd1-a7c7-5c75c75b7cbb.png",
      alt: "BMW sports car with satin metallic blue wrap",
      title: "BMW Sports Car Metallic Blue",
      description: "Satin metallic blue wrap with premium finish on a BMW sports car."
    },
    {
      image: "/lovable-uploads/77a1f4b1-efe3-4779-8646-f92e01667a29.png",
      alt: "Sports car with custom racing stripes and luxury accents",
      title: "Custom Sports Car Racing Design",
      description: "Custom racing stripe design with precision application on high-performance vehicle."
    },
    {
      image: "/lovable-uploads/d2a8e418-117f-4bfc-a6a2-efb63dbbce7f.png",
      alt: "Performance car with luxury custom accent graphics",
      title: "Performance Car Custom Accents",
      description: "High-end performance vehicle with custom accent graphics and luxury finish."
    }
  ];

  return (
    <div className="py-12">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-bold text-brand-navy">Featured Exotic Projects</h2>
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

export default LuxuryExoticGallery;
