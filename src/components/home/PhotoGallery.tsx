import React from 'react';
import { Card } from '@/components/ui/card';

const PhotoGallery: React.FC = () => {
  const galleryImages = [
    {
      id: 1,
      src: '/lovable-uploads/905af9f6-be4c-4556-b437-8aab136a5307.png',
      alt: 'State Farm insurance agent SUV wrap with professional branding',
      title: 'Insurance Agent Wrap'
    },
    {
      id: 2,
      src: '/lovable-uploads/ea32c99e-7c6e-43f1-b122-f3c64fb9fdf2.png',
      alt: 'All Angles roofing company truck wrap with measurement graphics',
      title: 'Commercial Truck Wrap'
    },
    {
      id: 3,
      src: '/lovable-uploads/51269403-3cfa-4a99-ae4b-cfab9a74115b.png',
      alt: 'Real estate agent van wrap with bold professional branding',
      title: 'Real Estate Van Wrap'
    },
    {
      id: 4,
      src: '/lovable-uploads/ca1d6cca-00da-4bd7-8d01-7ffc62508a02.png',
      alt: 'Sports car with stunning purple to blue gradient color change wrap',
      title: 'Color Change Wrap'
    },
    {
      id: 5,
      src: '/lovable-uploads/a63bad58-2435-4c95-a1d1-77e8f66e8085.png',
      alt: 'Yellow Chevrolet Colorado with bold black designer graphics',
      title: 'Designer Truck Wrap'
    },
    {
      id: 6,
      src: '/lovable-uploads/3866ee24-e044-4320-8675-8c853fdc4245.png',
      alt: 'Political campaign vehicle wrap with candidate photo and branding',
      title: 'Campaign Vehicle Wrap'
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