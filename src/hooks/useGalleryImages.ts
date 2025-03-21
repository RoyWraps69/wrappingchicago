
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
  
  // Get specific van image for color change wraps section
  const colorChangeVan = galleryItems.find(item => 
    item.title.toLowerCase().includes('van') && 
    item.category === 'Color Change Wraps'
  )?.image || vanImages[0]?.image || "/lovable-uploads/230338ed-a8d9-4584-bb4c-ba33c793f7ab.png";
  
  // Get specific image for commercial graphics section
  const commercialGraphics = galleryItems.find(item => 
    item.title === 'Blue Truck Commercial Graphics' && 
    item.category === 'Commercial Graphics'
  )?.image || "/lovable-uploads/fb7a4b97-4b57-4b2e-8f81-42a1098270df.png";

  return {
    fleetWrapVan,
    colorChangeVan,
    commercialGraphics
  };
};
