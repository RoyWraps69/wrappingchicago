
import React from 'react';
import GalleryItem from './GalleryItem';
import { GalleryItem as GalleryItemType, GalleryCategory } from '@/types/gallery';

interface GalleryGridProps {
  items: GalleryItemType[];
  activeFilter: GalleryCategory;
  onExpandImage: (item: GalleryItemType) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ 
  items, 
  activeFilter, 
  onExpandImage 
}) => {
  // Filter the items based on the active filter
  const filteredItems = activeFilter === 'All' 
    ? items 
    : items.filter(item => item.category === activeFilter);

  if (filteredItems.length === 0) {
    return (
      <div className="text-center py-12 animate-fade-in">
        <p className="text-lg text-gray-600">No projects found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {filteredItems.map((item, index) => (
        <div 
          key={item.id}
          className="transition-all"
          style={{ 
            animationDelay: `${index * 100}ms`,
            animationFillMode: 'both'
          }}
        >
          <GalleryItem
            item={item} 
            onExpand={onExpandImage} 
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
