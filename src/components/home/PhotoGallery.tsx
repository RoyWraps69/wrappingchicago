import React from 'react';
import { Card } from '@/components/ui/card';

const PhotoGallery: React.FC = () => {
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Professional vehicle wrap installation process showing attention to detail',
      title: 'Expert Installation'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Modern design studio with latest technology for vehicle wrap design',
      title: 'Design Studio'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Consultation session with client discussing vehicle wrap options',
      title: 'Client Consultation'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Beautiful finished vehicle wrap showcasing vibrant colors and professional quality',
      title: 'Stunning Results'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Fleet of professionally wrapped commercial vehicles ready for Chicago streets',
      title: 'Fleet Solutions'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Premium materials and tools used for high-quality vehicle wraps',
      title: 'Quality Materials'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="gallery-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="gallery-heading" className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Our Work in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the quality and craftsmanship that goes into every vehicle wrap project at Wrapping Chicago
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <Card key={image.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to transform your vehicle with a professional wrap?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-brand-red text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
            >
              Get Your Free Quote
            </a>
            <a
              href="/gallery"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-brand-navy text-brand-navy font-semibold rounded-full hover:bg-brand-navy hover:text-white transition-colors"
            >
              View Full Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;