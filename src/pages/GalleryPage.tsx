
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';

type GalleryCategory = 'All' | 'Fleet Wraps' | 'Color Change Wraps' | 'Commercial Graphics' | 'Partial Wraps';

type GalleryItem = {
  id: number;
  title: string;
  category: GalleryCategory | Exclude<GalleryCategory, 'All'>;
  image: string;
  description: string;
};

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('All');
  
  const galleryItems: GalleryItem[] = [
    { 
      id: 1, 
      title: 'Fleet Wrap for Delivery Service', 
      category: 'Fleet Wraps',
      image: '/lovable-uploads/efdbc4bf-1f04-42bb-a904-f52dae7bef6c.png',
      description: 'Professional fleet wrap for a local delivery company featuring bold branding and contact information.'
    },
    { 
      id: 2, 
      title: 'Matte Black Tesla Model 3', 
      category: 'Color Change Wraps',
      image: '/lovable-uploads/676b4902-7b81-4619-90d8-8feb1f986636.png',
      description: 'Full vehicle color change wrap from factory white to premium matte black finish.'
    },
    { 
      id: 3, 
      title: 'Commercial Van Graphics', 
      category: 'Commercial Graphics',
      image: '/lovable-uploads/9bb3d94e-589d-4daf-b35e-e19e80610439.png',
      description: 'Custom business graphics for a plumbing service van with logo and service information.'
    },
    { 
      id: 4, 
      title: 'Food Truck Partial Wrap', 
      category: 'Partial Wraps',
      image: '/lovable-uploads/77a1f4b1-efe3-4779-8646-f92e01667a29.png',
      description: 'Eye-catching partial wrap design for local food truck featuring menu highlights and branding.'
    },
    { 
      id: 5, 
      title: 'Logistics Fleet Branding', 
      category: 'Fleet Wraps',
      image: '/lovable-uploads/22a9b401-dc9c-4e13-90da-50d4e85ea3ca.png',
      description: 'Consistent branding across multiple delivery vehicles with company colors and contact information.'
    },
    { 
      id: 6, 
      title: 'Metallic Blue Luxury Wrap', 
      category: 'Color Change Wraps',
      image: '/lovable-uploads/f564c255-9ca3-4457-bef5-c940a4a1557a.png',
      description: 'Stunning metallic blue wrap for luxury vehicle with gloss black accents and custom detailing.'
    },
    { 
      id: 7, 
      title: 'Contractor Van Graphics', 
      category: 'Commercial Graphics',
      image: '/lovable-uploads/0ec34598-bcc3-486d-9021-dd527bafe83a.png',
      description: 'Professional commercial graphics for a construction company featuring logo and contact information.'
    },
    { 
      id: 8, 
      title: 'Sports Car Hood Wrap', 
      category: 'Partial Wraps',
      image: '/lovable-uploads/cc335205-fcef-4ca9-a269-5cf6dee478ed.png',
      description: 'Custom hood wrap with racing stripes and carbon fiber pattern for sports car enthusiast.'
    },
    { 
      id: 9, 
      title: 'Corporate Fleet Vehicles', 
      category: 'Fleet Wraps',
      image: '/lovable-uploads/efc6c586-8651-43ad-811a-b896a91a1b69.png',
      description: 'Corporate fleet branding solution with consistent design across different vehicle types.'
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
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-sm text-brand-red font-medium">{item.category}</span>
                    <h3 className="text-lg font-semibold text-brand-navy mt-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm mt-2">{item.description}</p>
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
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default GalleryPage;
