
import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { GalleryItem } from '@/types/gallery';

interface ImageViewerProps {
  item: GalleryItem | null;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ item, onClose }) => {
  useEffect(() => {
    // Prevent scrolling when modal is open
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [item]);

  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-0 z-50 flex items-center justify-center p-4 animate-enter"
      onClick={onClose}
      style={{
        animation: 'fade-in 0.3s ease-out forwards',
        backdropFilter: 'blur(5px)'
      }}
    >
      <div 
        className="relative max-w-4xl w-full animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
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
