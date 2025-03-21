
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ColorChangeGallery = () => {
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=800&q=80",
      alt: "Matte black wrapped luxury sports car",
      title: "Matte Black Porsche 911",
      description: "Complete matte black transformation with premium 3M vinyl wrap."
    },
    {
      image: "https://images.unsplash.com/photo-1615386693523-c360936e5aa3?auto=format&fit=crop&w=800&q=80",
      alt: "Glossy blue wrapped sedan",
      title: "Gloss Blue Tesla Model 3",
      description: "Vibrant gloss blue wrap that enhances the vehicle's modern lines."
    },
    {
      image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80",
      alt: "Satin white wrapped luxury SUV",
      title: "Satin Pearl White Range Rover",
      description: "Elegant satin pearl finish on a Range Rover Sport."
    },
    {
      image: "https://images.unsplash.com/photo-1610915819558-7dc776ba03e4?auto=format&fit=crop&w=800&q=80",
      alt: "Metallic silver wrapped sports car",
      title: "Metallic Silver BMW M4",
      description: "Metallic silver wrap that highlights the aggressive body lines."
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
