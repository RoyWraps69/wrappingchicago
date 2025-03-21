
import React, { useEffect } from 'react';
import { X, Download } from 'lucide-react';
import { GalleryItem } from '@/types/gallery';
import { Button } from '@/components/ui/button';

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

  const handleDownload = () => {
    if (!item) return;
    
    // Create a link element and simulate click to download the image
    const link = document.createElement('a');
    link.href = item.image;
    link.download = `${item.title.toLowerCase().replace(/\s+/g, '-')}-chicago-fleet-wraps.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        <div className="absolute top-4 right-4 flex gap-2">
          <Button 
            variant="secondary"
            size="icon"
            className="bg-white hover:bg-gray-100 border-none shadow-lg"
            onClick={handleDownload}
            aria-label="Download image"
          >
            <Download className="h-5 w-5 text-brand-navy" />
          </Button>
          <Button 
            variant="secondary"
            size="icon"
            className="bg-white hover:bg-gray-100 border-none shadow-lg"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X className="h-5 w-5 text-brand-navy" />
          </Button>
        </div>
        <img 
          src={item.image} 
          alt={`${item.title} - ${item.category} vehicle wrap by Wrapping Chicago${item.client ? ` for ${item.client}` : ''} in ${item.location || 'Chicago'}`} 
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
