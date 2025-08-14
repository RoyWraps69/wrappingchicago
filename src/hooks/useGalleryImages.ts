
import { galleryItems } from '@/data/galleryItems';

interface GalleryImages {
  fleetWrapVan: string;
  colorChangeVan: string;
  commercialGraphics: string;
}

export const useGalleryImages = (): GalleryImages => {
  // Filter for van images from the gallery
  const vanImages = galleryItems.filter(item => 
    item.title.toLowerCase().includes('van') || 
    item.description.toLowerCase().includes('van')
  ).slice(0, 3); // Take the first 3 van-related images
  
  // Use the State Farm SUV image for fleet wraps section
  const fleetWrapVan = "/lovable-uploads/905af9f6-be4c-4556-b437-8aab136a5307.png";
  
  // Use the sports car color change image for color change wraps section
  const colorChangeVan = "/lovable-uploads/ca1d6cca-00da-4bd7-8d01-7ffc62508a02.png";
  
  // Use the roofing truck image for commercial graphics
  const commercialGraphics = "/lovable-uploads/ea32c99e-7c6e-43f1-b122-f3c64fb9fdf2.png";

  return {
    fleetWrapVan,
    colorChangeVan,
    commercialGraphics
  };
};
