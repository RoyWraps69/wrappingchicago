
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
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone } from 'lucide-react';
import Schema from '@/components/Schema';
import { cities } from '@/data/cities';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('All');
  const [expandedImage, setExpandedImage] = useState<GalleryItem | null>(null);
  
  // For Schema component
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  
  return (
    <>
      <Helmet>
        <title>Vehicle Wrap Gallery | Wrapping Chicago Portfolio</title>
        <meta 
          name="description" 
          content="Browse our gallery of completed vehicle wrap projects including fleet wraps, color change wraps, and commercial graphics across Chicago and surrounding areas. See real examples of our professional wrapping work."
        />
        <meta name="keywords" content="vehicle wrap gallery, Chicago wrap examples, fleet wrap portfolio, color change wrap photos, commercial graphics examples, car wrap images" />
        <link rel="canonical" href="https://wrappingchicago.com/gallery" />
        <meta property="og:title" content="Vehicle Wrap Gallery | Wrapping Chicago Portfolio" />
        <meta property="og:description" content="Browse our gallery of completed vehicle wrap projects throughout Chicago. See real examples of our professional wrapping work." />
        <meta property="og:url" content="https://wrappingchicago.com/gallery" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/5539b79e-ab54-428d-82a0-e4735ee97a95.png" />
      </Helmet>
      
      <Schema 
        city={chicagoCity}
        path="/gallery"
        pageTitle="Vehicle Wrap Gallery | Wrapping Chicago Portfolio"
        pageDescription="Browse our gallery of completed vehicle wrap projects including fleet wraps, color change wraps, and commercial graphics across Chicago and surrounding areas."
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            <h1 className="text-4xl font-bold text-brand-navy mb-6">Our Work</h1>
            
            {/* Contact Buttons Section */}
            <div className="mb-8 p-4 bg-brand-navy/5 rounded-lg border border-brand-navy/10 flex flex-col sm:flex-row items-center justify-between">
              <p className="text-lg mb-4 sm:mb-0 sm:mr-4 text-gray-700">
                Like what you see? Get in touch for a free quote on your vehicle wrap project.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-brand-red hover:bg-red-700 text-white"
                >
                  <Link to="/contact" className="inline-flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Get a Free Quote
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                >
                  <a href="tel:3125971286" className="inline-flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    (312) 597-1286
                  </a>
                </Button>
              </div>
            </div>
            
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
