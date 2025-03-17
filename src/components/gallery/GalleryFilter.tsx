
import React from 'react';
import { GalleryCategory } from '@/types/gallery';

interface GalleryFilterProps {
  activeFilter: GalleryCategory;
  setActiveFilter: (filter: GalleryCategory) => void;
}

const GalleryFilter: React.FC<GalleryFilterProps> = ({ activeFilter, setActiveFilter }) => {
  // All available categories
  const categories: GalleryCategory[] = ['All', 'Fleet Wraps', 'Color Change Wraps', 'Commercial Graphics', 'Partial Wraps'];
  
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button 
          key={category}
          className={`px-4 py-2 rounded transition-colors ${
            activeFilter === category 
              ? 'bg-brand-navy text-white' 
              : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
          }`}
          onClick={() => setActiveFilter(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilter;
