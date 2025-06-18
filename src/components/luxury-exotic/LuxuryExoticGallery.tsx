
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const LuxuryExoticGallery = () => {
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80",
      alt: "Ferrari with premium matte black wrap",
      title: "Ferrari 488 Matte Black",
      description: "Complete matte black transformation with carbon fiber accents on a Ferrari 488."
    },
    {
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80",
      alt: "Porsche 911 with satin metallic blue wrap",
      title: "Porsche 911 Metallic Blue",
      description: "Satin metallic blue wrap with black accents on a Porsche 911 Turbo S."
    },
    {
      image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80",
      alt: "Lamborghini with striking purple color shift wrap",
      title: "Lamborghini Aventador SVJ",
      description: "Custom color shift wrap that transitions from purple to blue on a Lamborghini Aventador SVJ."
    },
    {
      image: "https://images.unsplash.com/photo-1597934877652-a0eef2b2e56b?auto=format&fit=crop&w=800&q=80",
      alt: "McLaren with gloss racing stripe design",
      title: "McLaren 720S Racing Design",
      description: "McLaren 720S with custom racing stripe design and full PPF protection."
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
