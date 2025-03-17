
import React from 'react';
import { X } from 'lucide-react';
import { GalleryItem } from '@/types/gallery';

interface ImageViewerProps {
  item: GalleryItem | null;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" 
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <button 
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
          onClick={onClose}
        >
          <X className="h-5 w-5 text-brand-navy" />
        </button>
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-auto rounded-lg" 
        />
        <div className="bg-white p-4 rounded-b-lg">
          <h3 className="text-xl font-bold text-brand-navy">{item.title}</h3>
          <span className="inline-block bg-brand-red bg-opacity-10 text-brand-red px-2 py-1 rounded text-sm mb-2">
            {item.category}
          </span>
          <p className="text-gray-700">{item.description}</p>
          <div className="mt-2 text-sm text-gray-600 flex flex-col sm:flex-row sm:gap-4">
            {item.client && <span><strong>Client:</strong> {item.client}</span>}
            {item.location && <span><strong>Location:</strong> {item.location}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
