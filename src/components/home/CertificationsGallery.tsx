
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CertificationsGallery: React.FC = () => {
  const galleryImages = [
    {
      id: 1,
      src: "/lovable-uploads/199c2a21-e0b0-4c29-972f-f32d72698382.png",
      alt: "Professional vehicle wrap installation",
      title: "Expert Installation"
    },
    {
      id: 2,
      src: "/lovable-uploads/230338ed-a8d9-4584-bb4c-ba33c793f7ab.png",
      alt: "Fleet wrap branding",
      title: "Fleet Branding"
    },
    {
      id: 3,
      src: "/lovable-uploads/33e966e0-f935-4f39-8702-a9ccf53ae49b.png",
      alt: "Commercial vehicle graphics",
      title: "Commercial Graphics"
    },
    {
      id: 4,
      src: "/lovable-uploads/459b925b-94c6-40c1-92cc-d4112da7ac6c.png",
      alt: "Custom wrap design",
      title: "Custom Designs"
    },
    {
      id: 5,
      src: "/lovable-uploads/5539b79e-ab54-428d-82a0-e4735ee97a95.png",
      alt: "Luxury vehicle wrap",
      title: "Luxury Wraps"
    },
    {
      id: 6,
      src: "/lovable-uploads/60c7cf64-9ac2-4f0b-b567-3b7f87c327c9.png",
      alt: "Color change wrap",
      title: "Color Change"
    },
    {
      id: 7,
      src: "/lovable-uploads/676b4902-7b81-4619-90d8-8feb1f986636.png",
      alt: "Truck wrap installation",
      title: "Truck Wraps"
    },
    {
      id: 8,
      src: "/lovable-uploads/6d45d332-9949-413e-b840-8007afa41d56.png",
      alt: "Van wrap graphics",
      title: "Van Graphics"
    },
    {
      id: 9,
      src: "/lovable-uploads/77a1f4b1-efe3-4779-8646-f92e01667a29.png",
      alt: "Professional wrap finish",
      title: "Quality Finish"
    },
    {
      id: 10,
      src: "/lovable-uploads/9bb3d94e-589d-4daf-b35e-e19e80610439.png",
      alt: "Vehicle wrap portfolio",
      title: "Our Portfolio"
    }
  ];

  return (
    <div className="bg-brand-navy rounded-lg p-8">
      <h3 className="text-2xl font-bold text-white text-center mb-8">
        Our Work Gallery
      </h3>
      
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent className="-ml-4">
          {galleryImages.map((image) => (
            <CarouselItem key={image.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="relative group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <h4 className="text-white font-semibold text-lg">{image.title}</h4>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export default CertificationsGallery;
