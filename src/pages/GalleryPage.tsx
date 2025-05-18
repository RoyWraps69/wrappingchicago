
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
import GoogleSearchConsole from '@/components/seo/GoogleSearchConsole';
import PageFAQ from '@/components/common/PageFAQ';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('All');
  const [expandedImage, setExpandedImage] = useState<GalleryItem | null>(null);
  
  // For Schema component
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  const domain = "https://www.wrappingchicago.com";
  
  // Gallery-specific FAQs
  const galleryFAQs = [
    {
      question: "What types of vehicle wraps do you showcase in your gallery?",
      answer: "Our gallery features a diverse collection of vehicle wrap projects including commercial fleet wraps, color change wraps, partial wraps, truck wraps, van wraps, car wraps, and specialty designer wraps. Each project showcases our premium materials and professional installation quality."
    },
    {
      question: "Can I get the same design I see in your gallery for my vehicle?",
      answer: "Absolutely! Many of our gallery designs can be adapted for your specific vehicle. We can customize any design concept you see to fit your brand, vehicle type, and marketing goals. Contact us for a consultation to discuss your favorite designs from our portfolio."
    },
    {
      question: "How much does a vehicle wrap like those in your gallery typically cost?",
      answer: "The vehicle wraps featured in our gallery range from $1,500 for partial wraps to $5,000+ for full commercial wraps. Pricing depends on vehicle size, design complexity, and materials used. We provide free detailed quotes for every project."
    },
    {
      question: "How long does the installation process take for vehicle wraps?",
      answer: "Most vehicle wrap installations take 3-5 business days to complete. Simple designs on smaller vehicles may take 2-3 days, while complex wraps on larger vehicles could take 5-7 days. We ensure thorough preparation, precise installation, and proper curing time for every project."
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Vehicle Wrap Gallery | Wrapping Chicago Portfolio</title>
        <meta 
          name="description" 
          content="Browse our gallery of completed vehicle wrap projects including fleet wraps, color change wraps, and commercial graphics across Chicago and surrounding areas. See real examples of our professional wrapping work."
        />
        <meta name="keywords" content="vehicle wrap gallery, Chicago wrap examples, fleet wrap portfolio, color change wrap photos, commercial graphics examples, car wrap images" />
        <link rel="canonical" href={`${domain}/gallery`} />
        <meta property="og:title" content="Vehicle Wrap Gallery | Wrapping Chicago Portfolio" />
        <meta property="og:description" content="Browse our gallery of completed vehicle wrap projects throughout Chicago. See real examples of our professional wrapping work." />
        <meta property="og:url" content={`${domain}/gallery`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${domain}/lovable-uploads/5539b79e-ab54-428d-82a0-e4735ee97a95.png`} />
      </Helmet>
      
      <GoogleSearchConsole verificationCode="gQnkHgsJ2bOPDWFClspUxA6EZsE-XWnLasqxsqSESvg" />
      
      <Schema 
        city={chicagoCity}
        path="/gallery"
        pageTitle="Vehicle Wrap Gallery | Wrapping Chicago Portfolio"
        pageDescription="Browse our gallery of completed vehicle wrap projects including fleet wraps, color change wraps, and commercial graphics across Chicago and surrounding areas."
        faqs={galleryFAQs}
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            <h1 className="text-4xl font-bold text-brand-navy mb-6">Our Work</h1>
            
            {/* Contact Buttons Section with improved internal links */}
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
            
            {/* Service navigation links for internal linking */}
            <div className="mb-8 bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Explore Our Services</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Link to="/services/car-wraps" className="text-brand-navy hover:text-brand-red text-sm transition-colors">Car Wraps</Link>
                <Link to="/services/truck-wraps" className="text-brand-navy hover:text-brand-red text-sm transition-colors">Truck Wraps</Link>
                <Link to="/services/van-wraps" className="text-brand-navy hover:text-brand-red text-sm transition-colors">Van Wraps</Link>
                <Link to="/services/fleet-wraps" className="text-brand-navy hover:text-brand-red text-sm transition-colors">Fleet Wraps</Link>
                <Link to="/services/color-change-wraps" className="text-brand-navy hover:text-brand-red text-sm transition-colors">Color Change Wraps</Link>
                <Link to="/services/commercial-graphics" className="text-brand-navy hover:text-brand-red text-sm transition-colors">Commercial Graphics</Link>
                <Link to="/services/vehicle-lettering" className="text-brand-navy hover:text-brand-red text-sm transition-colors">Vehicle Lettering</Link>
                <Link to="/ai-wrap-ideas" className="text-brand-navy hover:text-brand-red text-sm transition-colors">AI Wrap Designer</Link>
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
          </div>
          
          {/* Image Viewer Modal */}
          <ImageViewer 
            item={expandedImage} 
            onClose={() => setExpandedImage(null)} 
          />
          
          {/* Add FAQ Section */}
          <PageFAQ 
            faqs={galleryFAQs}
            serviceName="Vehicle Wrap Gallery"
          />
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default GalleryPage;
