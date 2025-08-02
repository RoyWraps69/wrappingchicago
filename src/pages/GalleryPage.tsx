import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageSEO from '@/components/seo/PageSEO';
import CallToAction from '@/components/CallToAction';
import GalleryFilter from '@/components/gallery/GalleryFilter';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import ImageViewer from '@/components/gallery/ImageViewer';
import GalleryHero from '@/components/heroes/GalleryHero';
import PhotoGallery from '@/components/home/PhotoGallery';
import { galleryItems } from '@/data/galleryItems';
import { GalleryCategory, GalleryItem } from '@/types/gallery';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone } from 'lucide-react';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('All');
  const [expandedImage, setExpandedImage] = useState<GalleryItem | null>(null);

  return (
    <>
      <PageSEO 
        title="Vehicle Wrap Gallery Chicago | Real Projects & Portfolio"
        description="Browse our extensive gallery of completed vehicle wraps in Chicago. See real examples of car wraps, truck wraps, van wraps, and fleet graphics. Professional installations with before/after photos and customer testimonials from across Chicagoland."
        keywords={[
          "vehicle wrap gallery chicago",
          "car wrap examples chicago", 
          "truck wrap portfolio",
          "before after vehicle wraps",
          "chicago wrap projects",
          "vehicle wrap photos",
          "completed wraps chicago",
          "wrap gallery portfolio",
          "real vehicle wrap examples"
        ]}
        canonicalUrl="https://www.wrappingchicago.com/gallery"
        h1="Vehicle Wrap Gallery Chicago"
        h2={["Recent Projects", "Project Categories", "Customer Success Stories"]}
        h3={["Car Wraps", "Truck Wraps", "Van Wraps", "Fleet Graphics"]}
        pageType="service"
        businessSchema={true}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <GalleryHero />
        
        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Recent Projects</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Browse our portfolio of professionally installed vehicle wraps, featuring projects 
                completed throughout Chicago and surrounding suburbs.
              </p>
            </div>
            
            {/* Contact Buttons Section */}
            <div className="mb-8 p-6 bg-muted/30 rounded-lg flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-4 sm:mb-0 sm:mr-4">
                <h3 className="text-xl font-bold mb-2">Ready to Transform Your Vehicle?</h3>
                <p className="text-muted-foreground">Get in touch for a free quote on your vehicle wrap project</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <Link to="/contact" className="inline-flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Get a Free Quote
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:3125971286" className="inline-flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    (312) 597-1286
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Service Navigation Links */}
            <div className="mb-8 p-6 bg-background rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Explore Our Services</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Vehicle Types</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/car-wraps" className="text-primary hover:underline">Car Wraps</Link></li>
                    <li><Link to="/truck-wraps" className="text-primary hover:underline">Truck Wraps</Link></li>
                    <li><Link to="/van-wraps" className="text-primary hover:underline">Van Wraps</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Commercial Services</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/fleet-wraps" className="text-primary hover:underline">Fleet Wraps</Link></li>
                    <li><Link to="/services/commercial-graphics" className="text-primary hover:underline">Commercial Graphics</Link></li>
                    <li><Link to="/services/vehicle-lettering" className="text-primary hover:underline">Vehicle Lettering</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Specialty Services</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/color-change-wraps" className="text-primary hover:underline">Color Change Wraps</Link></li>
                    <li><Link to="/services/partial-wraps" className="text-primary hover:underline">Partial Wraps</Link></li>
                    <li><Link to="/services/specialty-wraps" className="text-primary hover:underline">Specialty Wraps</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Additional Services</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/services/protective-films" className="text-primary hover:underline">Protective Films</Link></li>
                    <li><Link to="/services/retail-graphics" className="text-primary hover:underline">Retail Graphics</Link></li>
                    <li><Link to="/pricing" className="text-primary hover:underline">Pricing</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            
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
            
            {/* Client Testimonials */}
            <section className="my-12 p-6 bg-muted/30 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Customer Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background p-5 rounded-lg border">
                  <div className="flex items-center mb-3">
                    <div className="text-yellow-400 flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="ml-2 font-semibold">John D. - Fleet Manager</span>
                  </div>
                  <p className="italic text-muted-foreground">
                    "The team at Wrapping Chicago transformed our entire delivery fleet with stunning, consistent branding. The quality of both the design and installation is exceptional."
                  </p>
                </div>
                <div className="bg-background p-5 rounded-lg border">
                  <div className="flex items-center mb-3">
                    <div className="text-yellow-400 flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="ml-2 font-semibold">Sarah M. - Business Owner</span>
                  </div>
                  <p className="italic text-muted-foreground">
                    "I couldn't be happier with my delivery van wrap! The design team really understood my brand vision, and the installation was flawless."
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
        
        {/* Image Viewer Modal */}
        <ImageViewer 
          item={expandedImage} 
          onClose={() => setExpandedImage(null)} 
        />
        
        {/* Photo Gallery Section - moved from homepage */}
        <PhotoGallery />
        
        {/* Call to Action */}
        <CallToAction />
      </div>
    </>
  );
};

export default GalleryPage;