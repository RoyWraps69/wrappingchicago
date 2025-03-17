
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { ExternalLink, Maximize } from 'lucide-react';

type GalleryCategory = 'All' | 'Fleet Wraps' | 'Color Change Wraps' | 'Commercial Graphics' | 'Partial Wraps';

type GalleryItem = {
  id: number;
  title: string;
  category: GalleryCategory | Exclude<GalleryCategory, 'All'>;
  image: string;
  description: string;
  client?: string;
  location?: string;
};

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('All');
  const [expandedImage, setExpandedImage] = useState<GalleryItem | null>(null);
  
  const galleryItems: GalleryItem[] = [
    { 
      id: 1, 
      title: 'Premium Fleet Wraps for HCS Delivery', 
      category: 'Fleet Wraps',
      image: '/lovable-uploads/efdbc4bf-1f04-42bb-a904-f52dae7bef6c.png',
      description: 'Full fleet branding solution featuring bold company colors, contact information, and service details.',
      client: 'HCS Delivery Services',
      location: 'Chicago, IL'
    },
    { 
      id: 2, 
      title: 'Matte Black Tesla Model 3 Transformation', 
      category: 'Color Change Wraps',
      image: '/lovable-uploads/676b4902-7b81-4619-90d8-8feb1f986636.png',
      description: 'Premium matte black vehicle wrap with gloss black trim accents for a distinguished look.',
      client: 'Private Client',
      location: 'Naperville, IL'
    },
    { 
      id: 3, 
      title: 'Custom Graphics for Service Van', 
      category: 'Commercial Graphics',
      image: '/lovable-uploads/9bb3d94e-589d-4daf-b35e-e19e80610439.png',
      description: 'Professional service van graphics package with branded visual elements and contact information.',
      client: 'Dependable Plumbing',
      location: 'Evanston, IL'
    },
    { 
      id: 4, 
      title: 'Food Truck Partial Wrap Design', 
      category: 'Partial Wraps',
      image: '/lovable-uploads/77a1f4b1-efe3-4779-8646-f92e01667a29.png',
      description: 'Vibrant food truck branding with menu highlights and custom graphics to attract customers.',
      client: 'Street Eats',
      location: 'Chicago, IL'
    },
    { 
      id: 5, 
      title: 'Logistics Fleet Branding Package', 
      category: 'Fleet Wraps',
      image: '/lovable-uploads/22a9b401-dc9c-4e13-90da-50d4e85ea3ca.png',
      description: 'Consistent branding deployed across multiple delivery vehicles featuring corporate identity.',
      client: 'Express Logistics',
      location: 'Oak Park, IL'
    },
    { 
      id: 6, 
      title: 'Metallic Blue Luxury Vehicle Transformation', 
      category: 'Color Change Wraps',
      image: '/lovable-uploads/f564c255-9ca3-4457-bef5-c940a4a1557a.png',
      description: 'Premium metallic blue wrap with custom detailing and protective clear coat for durability.',
      client: 'Private Client',
      location: 'Highland Park, IL'
    },
    { 
      id: 7, 
      title: 'Construction Company Vehicle Graphics', 
      category: 'Commercial Graphics',
      image: '/lovable-uploads/0ec34598-bcc3-486d-9021-dd527bafe83a.png',
      description: 'High-visibility commercial graphics for construction company featuring service offerings.',
      client: 'Precision Builders',
      location: 'Schaumburg, IL'
    },
    { 
      id: 8, 
      title: 'Custom Sports Car Hood Wrap', 
      category: 'Partial Wraps',
      image: '/lovable-uploads/cc335205-fcef-4ca9-a269-5cf6dee478ed.png',
      description: 'Performance-inspired hood wrap featuring racing stripes and carbon fiber accent patterns.',
      client: 'Private Client',
      location: 'Chicago, IL'
    },
    { 
      id: 9, 
      title: 'Corporate Fleet Identity Solution', 
      category: 'Fleet Wraps',
      image: '/lovable-uploads/efc6c586-8651-43ad-811a-b896a91a1b69.png',
      description: 'Professional fleet branding package maintaining corporate identity across various vehicle types.',
      client: 'Metro Business Solutions',
      location: 'Arlington Heights, IL'
    },
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

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
            <Breadcrumbs />
            <h1 className="text-4xl font-bold text-brand-navy mb-6">Our Work</h1>
            <p className="text-lg mb-8 max-w-3xl">
              Browse our gallery of completed projects to see examples of our high-quality
              vehicle wraps. From fleet wraps to color change wraps and commercial graphics,
              we've successfully completed hundreds of projects throughout Chicago and surrounding areas.
            </p>
            
            {/* Gallery Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {(['All', 'Fleet Wraps', 'Color Change Wraps', 'Commercial Graphics', 'Partial Wraps'] as const).map((category) => (
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
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredItems.map(item => (
                <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-64 overflow-hidden group">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                      <button 
                        onClick={() => setExpandedImage(item)}
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
              ))}
            </div>
            
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No projects found in this category.</p>
              </div>
            )}
          </div>
          
          {/* Image Viewer Modal */}
          {expandedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={() => setExpandedImage(null)}>
              <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                <button 
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
                  onClick={() => setExpandedImage(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                  </svg>
                </button>
                <img 
                  src={expandedImage.image} 
                  alt={expandedImage.title} 
                  className="w-full h-auto rounded-lg" 
                />
                <div className="bg-white p-4 rounded-b-lg">
                  <h3 className="text-xl font-bold text-brand-navy">{expandedImage.title}</h3>
                  <span className="inline-block bg-brand-red bg-opacity-10 text-brand-red px-2 py-1 rounded text-sm mb-2">
                    {expandedImage.category}
                  </span>
                  <p className="text-gray-700">{expandedImage.description}</p>
                  <div className="mt-2 text-sm text-gray-600 flex flex-col sm:flex-row sm:gap-4">
                    {expandedImage.client && <span><strong>Client:</strong> {expandedImage.client}</span>}
                    {expandedImage.location && <span><strong>Location:</strong> {expandedImage.location}</span>}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default GalleryPage;
