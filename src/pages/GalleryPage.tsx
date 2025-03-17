
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { Maximize, X } from 'lucide-react';

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
      title: 'Premium Fleet Branding for Delivery Service', 
      category: 'Fleet Wraps',
      image: '/lovable-uploads/efdbc4bf-1f04-42bb-a904-f52dae7bef6c.png',
      description: 'Full fleet branding solution featuring professional company logo, service information, and contact details.',
      client: 'Urban Delivery Co.',
      location: 'Chicago, IL'
    },
    { 
      id: 2, 
      title: 'Sleek Matte Black Vehicle Transformation', 
      category: 'Color Change Wraps',
      image: '/lovable-uploads/676b4902-7b81-4619-90d8-8feb1f986636.png',
      description: 'Complete exterior transformation with premium matte black vinyl wrap and accent details.',
      client: 'Executive Transport',
      location: 'Evanston, IL'
    },
    { 
      id: 3, 
      title: 'Professional Service Van Branding', 
      category: 'Commercial Graphics',
      image: '/lovable-uploads/9bb3d94e-589d-4daf-b35e-e19e80610439.png',
      description: 'Comprehensive service vehicle branding with company information and service highlights.',
      client: 'Chicago Plumbing Solutions',
      location: 'Chicago, IL'
    },
    { 
      id: 4, 
      title: 'Creative Food Truck Graphics', 
      category: 'Partial Wraps',
      image: '/lovable-uploads/77a1f4b1-efe3-4779-8646-f92e01667a29.png',
      description: 'Eye-catching partial wrap design for mobile food service business with menu highlights.',
      client: 'Street Cuisine',
      location: 'Oak Park, IL'
    },
    { 
      id: 5, 
      title: 'Corporate Fleet Identity Package', 
      category: 'Fleet Wraps',
      image: '/lovable-uploads/22a9b401-dc9c-4e13-90da-50d4e85ea3ca.png',
      description: 'Multi-vehicle branding solution with consistent corporate identity and messaging.',
      client: 'Midwest Logistics',
      location: 'Schaumburg, IL'
    },
    { 
      id: 6, 
      title: 'Luxury Sedan Color Transformation', 
      category: 'Color Change Wraps',
      image: '/lovable-uploads/f564c255-9ca3-4457-bef5-c940a4a1557a.png',
      description: 'Premium metallic wrap installation with paint protection and custom accents.',
      client: 'Executive Car Service',
      location: 'Highland Park, IL'
    },
    { 
      id: 7, 
      title: 'Construction Company Vehicle Branding', 
      category: 'Commercial Graphics',
      image: '/lovable-uploads/0ec34598-bcc3-486d-9021-dd527bafe83a.png',
      description: 'Durable commercial graphics featuring company branding and service information.',
      client: 'Chicago Building Contractors',
      location: 'Chicago, IL'
    },
    { 
      id: 8, 
      title: 'Performance Vehicle Accent Graphics', 
      category: 'Partial Wraps',
      image: '/lovable-uploads/cc335205-fcef-4ca9-a269-5cf6dee478ed.png',
      description: 'Custom racing stripe design and carbon fiber accent elements for performance vehicle.',
      client: 'Motorsport Enthusiast',
      location: 'Naperville, IL'
    },
    { 
      id: 9, 
      title: 'Complete Corporate Fleet System', 
      category: 'Fleet Wraps',
      image: '/lovable-uploads/efc6c586-8651-43ad-811a-b896a91a1b69.png',
      description: 'Unified branding approach for diverse vehicle types maintaining consistent corporate identity.',
      client: 'Regional Business Services',
      location: 'Arlington Heights, IL'
    },
    { 
      id: 10, 
      title: 'Custom Truck Commercial Graphics', 
      category: 'Commercial Graphics',
      image: '/lovable-uploads/fb7a4b97-4b57-4b2e-8f81-42a1098270df.png',
      description: 'Heavy-duty commercial vehicle graphics with durable materials and high-visibility design.',
      client: 'Chicago Distribution Services',
      location: 'Chicago, IL'
    },
    { 
      id: 11, 
      title: 'Specialty Vehicle Transformation', 
      category: 'Color Change Wraps',
      image: '/lovable-uploads/6d45d332-9949-413e-b840-8007afa41d56.png',
      description: 'Full color change with custom finish and protective coating for specialty vehicle.',
      client: 'Luxury Vehicle Owner',
      location: 'Winnetka, IL'
    },
    { 
      id: 12, 
      title: 'Sports Car Custom Accents', 
      category: 'Partial Wraps',
      image: '/lovable-uploads/d2a8e418-117f-4bfc-a6a2-efb63dbbce7f.png',
      description: 'Performance-inspired graphic elements and racing accents for sports vehicle.',
      client: 'Automotive Enthusiast',
      location: 'Chicago, IL'
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
                  <X className="h-5 w-5 text-brand-navy" />
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
