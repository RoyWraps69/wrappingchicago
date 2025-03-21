
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
  
  // Use the new uploaded image for fleet wraps section
  const fleetWrapVan = "/lovable-uploads/bc55562c-aa6e-45ac-86ea-5b2657a3f6d5.png";
  
  // Use the new uploaded Cybertruck image for color change wraps section
  const colorChangeVan = "/lovable-uploads/020ef79d-a051-4f6f-9c1e-d4ded8bf2260.png";
  
  // Use the new uploaded image for commercial graphics section
  const commercialGraphics = "/lovable-uploads/bc84c157-8367-4197-9b08-8ef75da53ce3.png";

  return {
    fleetWrapVan,
    colorChangeVan,
    commercialGraphics
  };
};
