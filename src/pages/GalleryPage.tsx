
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';

const GalleryPage = () => {
  // For demo purposes, we'll use a simple gallery layout
  const galleryItems = [
    { id: 1, title: 'Fleet Wrap for XYZ Logistics', category: 'Fleet Wraps' },
    { id: 2, title: 'Color Change Wrap - Matte Black Tesla', category: 'Color Change Wraps' },
    { id: 3, title: 'Commercial Graphics for Local Plumber', category: 'Commercial Graphics' },
    { id: 4, title: 'Partial Wrap for Food Truck', category: 'Partial Wraps' },
    { id: 5, title: 'Fleet Wrapping for Delivery Service', category: 'Fleet Wraps' },
    { id: 6, title: 'Metallic Blue Color Change', category: 'Color Change Wraps' },
  ];

  return (
    <>
      <Helmet>
        <title>Our Work Gallery | Chicago Fleet Wraps</title>
        <meta 
          name="description" 
          content="Browse our gallery of completed vehicle wrap projects including fleet wraps, color change wraps, and commercial graphics across Chicago and surrounding areas."
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold text-brand-navy mb-6">Our Work</h1>
            <p className="text-lg mb-8">
              Browse our gallery of completed projects to see examples of our high-quality
              vehicle wraps. From fleet wraps to color change wraps and commercial graphics,
              we've successfully completed hundreds of projects throughout Chicago and surrounding areas.
            </p>
            
            {/* Gallery Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              <button className="bg-brand-navy text-white px-4 py-2 rounded">All Projects</button>
              <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded transition-colors">Fleet Wraps</button>
              <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded transition-colors">Color Change Wraps</button>
              <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded transition-colors">Commercial Graphics</button>
              <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded transition-colors">Partial Wraps</button>
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {galleryItems.map(item => (
                <div key={item.id} className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="h-64 bg-gray-300 flex items-center justify-center">
                    <p className="text-gray-500">Project Image {item.id}</p>
                  </div>
                  <div className="p-4">
                    <span className="text-sm text-brand-red font-medium">{item.category}</span>
                    <h3 className="text-lg font-semibold text-brand-navy">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default GalleryPage;
