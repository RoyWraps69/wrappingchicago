
import React from 'react';
import { Maximize } from 'lucide-react';
import { GalleryItem as GalleryItemType } from '@/types/gallery';

interface GalleryItemProps {
  item: GalleryItemType;
  onExpand: (item: GalleryItemType) => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ item, onExpand }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      <div className="relative h-64 overflow-hidden group">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
          <button 
            onClick={() => onExpand(item)}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-2"
            aria-label="Expand image"
          >
            <Maximize className="h-5 w-5 text-brand-navy" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <span className="text-sm text-brand-red font-medium">{item.category}</span>
          {item.location && (
            <span className="text-xs text-gray-500">{item.location}</span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-brand-navy mt-1">{item.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{item.description}</p>
        {item.client && (
          <p className="text-sm text-gray-700 mt-2 font-medium">Client: {item.client}</p>
        )}
      </div>
    </div>
  );
};

export default GalleryItem;
