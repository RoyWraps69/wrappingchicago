
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import GalleryFilter from '@/components/gallery/GalleryFilter';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import ImageViewer from '@/components/gallery/ImageViewer';
import { galleryItems } from '@/data/galleryItems';
import { GalleryCategory, GalleryItem } from '@/types/gallery';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('All');
  const [expandedImage, setExpandedImage] = useState<GalleryItem | null>(null);
  
  return (
    <>
      <Helmet>
        <title>Our Work Gallery | Wrapping Chicago</title>
        <meta 
          name="description" 
          content="Browse our gallery of completed vehicle wrap projects including fleet wraps, color change wraps, and commercial graphics across Chicago and surrounding areas."
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            <h1 className="text-4xl font-bold text-brand-navy mb-6">Our Work</h1>
            <p className="text-lg mb-8 max-w-3xl">
              Browse our gallery of completed projects to see examples of our high-quality
              vehicle wraps. From fleet wraps to color change wraps and commercial graphics,
              we've successfully completed hundreds of projects throughout Chicago and surrounding areas.
            </p>
            
            {/* Gallery Filter */}
            <GalleryFilter 
              activeFilter={activeFilter} 
              setActiveFilter={setActiveFilter} 
            />
            
            {/* Gallery Grid */}
            <GalleryGrid 
              items={galleryItems}
              activeFilter={activeFilter}
              onExpandImage={setExpandedImage}
            />
          </div>
          
          {/* Image Viewer Modal */}
          <ImageViewer 
            item={expandedImage} 
            onClose={() => setExpandedImage(null)} 
          />
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default GalleryPage;
