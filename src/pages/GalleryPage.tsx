
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
import MetaTags from '@/components/seo/MetaTags';
import BusinessLocationSchema from '@/components/schemas/BusinessLocationSchema';
import { useGalleryImages } from '@/hooks/useGalleryImages';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('All');
  const [expandedImage, setExpandedImage] = useState<GalleryItem | null>(null);
  
  // For Schema component
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  const domain = "https://www.wrappingchicago.com";
  const path = "/gallery";
  
  // Get featured images for structured data
  const { fleetWrapVan, colorChangeVan, commercialGraphics } = useGalleryImages();
  
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
    },
    {
      question: "Do you offer design services for vehicle wraps?",
      answer: "Yes, our in-house design team creates custom vehicle wrap designs tailored to your brand and marketing goals. We offer complimentary design consultations and can work from your existing brand assets or create something entirely new. Our designers have extensive experience creating effective vehicle wraps."
    }
  ];
  
  // Rich structured data for gallery items
  const galleryStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": galleryItems.slice(0, 10).map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "ImageObject",
        "name": item.title,
        "description": item.description,
        "contentUrl": item.image,
        "thumbnailUrl": item.image,
        "uploadDate": "2023-01-01T00:00:00Z",
        "creator": {
          "@type": "Organization",
          "name": "Wrapping Chicago"
        }
      }
    }))
  };
  
  // Additional location-specific keywords for SEO
  const keywords = "vehicle wrap gallery, Chicago wrap portfolio, fleet wrap examples, car wrap photos, truck wrap images, van wrap designs, commercial wrap portfolio, color change wraps Chicago, vehicle branding examples, partial wraps gallery, 3M wrap gallery Chicago";
  
  // Last modified date for SEO freshness
  const lastModified = new Date().toISOString().split('T')[0];

  return (
    <>
      {/* Enhanced SEO Meta Tags */}
      <MetaTags
        title="Vehicle Wrap Gallery Chicago | Portfolio of Car, Truck & Fleet Wraps"
        description="Browse our gallery of completed vehicle wrap projects from Chicago and surrounding suburbs. View examples of our premium fleet wraps, color change wraps, car wraps, and commercial graphics installations."
        keywords={keywords}
        canonicalUrl={`${domain}${path}`}
        ogImage={`${domain}/lovable-uploads/5539b79e-ab54-428d-82a0-e4735ee97a95.png`}
        ogType="website"
        twitterCard="summary_large_image"
        lastModified={lastModified}
        structuredData={galleryStructuredData}
      />
      
      <GoogleSearchConsole verificationCode="gQnkHgsJ2bOPDWFClspUxA6EZsE-XWnLasqxsqSESvg" />
      
      <Schema 
        city={chicagoCity}
        path="/gallery"
        pageTitle="Vehicle Wrap Gallery Chicago | Portfolio of Car, Truck & Fleet Wraps"
        pageDescription="Browse our gallery of completed vehicle wrap projects including fleet wraps, color change wraps, and commercial graphics across Chicago and surrounding areas."
        faqs={galleryFAQs}
        keywords={keywords.split(', ')}
        mainImage={`${domain}/lovable-uploads/5539b79e-ab54-428d-82a0-e4735ee97a95.png`}
        datePublished="2022-01-01T00:00:00+00:00"
        dateModified={new Date().toISOString()}
        allCities={cities}
        includeSpeakable={true}
      />
      
      {/* Additional Location Schema for Chicago Area */}
      <BusinessLocationSchema city={chicagoCity} />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            
            {/* SEO-optimized heading structure */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-brand-navy mb-3">Chicago Vehicle Wrap Gallery</h1>
              <p className="text-lg text-gray-700 max-w-3xl">
                Browse our portfolio of professionally installed vehicle wraps, featuring projects 
                completed throughout Chicago and surrounding suburbs. From commercial fleet wraps 
                to custom color changes, explore our work below.
              </p>
            </div>
            
            {/* Contact Buttons Section with improved internal links */}
            <div className="mb-8 p-5 bg-brand-navy/5 rounded-lg border border-brand-navy/10 flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-4 sm:mb-0 sm:mr-4">
                <h2 className="text-xl font-bold text-brand-navy mb-2">Ready to Transform Your Vehicle?</h2>
                <p className="text-gray-700">Get in touch for a free quote on your vehicle wrap project</p>
              </div>
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
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-brand-navy mb-4">Our Vehicle Wrap Portfolio</h2>
              <p className="text-lg mb-4 max-w-3xl">
                With over 16,000 vehicle wraps completed in our 20 years of business, we've transformed 
                vehicles of all types into eye-catching mobile advertisements. Our gallery showcases 
                examples of our high-quality work throughout Chicago and surrounding suburbs.
              </p>
              <p className="text-md mb-6 max-w-3xl">
                All projects feature premium 3M and Avery vinyl materials, professionally installed 
                by our expert team with meticulous attention to detail and exceptional customer service.
              </p>
            </div>
            
            {/* Enhanced service navigation links for internal linking */}
            <div className="mb-8 bg-gray-50 p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-brand-navy">Explore Our Vehicle Wrap Services</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <h4 className="font-medium text-brand-navy mb-2">Vehicle Types</h4>
                  <ul className="space-y-2">
                    <li><Link to="/services/car-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Car Wraps</Link></li>
                    <li><Link to="/services/truck-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Truck Wraps</Link></li>
                    <li><Link to="/services/van-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Van Wraps</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-brand-navy mb-2">Commercial Services</h4>
                  <ul className="space-y-2">
                    <li><Link to="/services/fleet-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Fleet Wraps</Link></li>
                    <li><Link to="/services/commercial-graphics" className="text-brand-navy hover:text-brand-red transition-colors">Commercial Graphics</Link></li>
                    <li><Link to="/services/vehicle-lettering" className="text-brand-navy hover:text-brand-red transition-colors">Vehicle Lettering</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-brand-navy mb-2">Specialty Services</h4>
                  <ul className="space-y-2">
                    <li><Link to="/services/color-change-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Color Change Wraps</Link></li>
                    <li><Link to="/services/partial-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Partial Wraps</Link></li>
                    <li><Link to="/services/specialty-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Specialty Wraps</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-brand-navy mb-2">Additional Services</h4>
                  <ul className="space-y-2">
                    <li><Link to="/services/protective-films" className="text-brand-navy hover:text-brand-red transition-colors">Protective Films</Link></li>
                    <li><Link to="/services/retail-graphics" className="text-brand-navy hover:text-brand-red transition-colors">Retail Graphics</Link></li>
                    <li><Link to="/ai-wrap-ideas" className="text-brand-navy hover:text-brand-red transition-colors">AI Wrap Designer</Link></li>
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
            
            {/* Client testimonials section - adds E-E-A-T signals */}
            <div className="my-12 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-brand-navy mb-4">What Our Clients Say</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="text-yellow-400 flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="ml-2 font-semibold">John D. - Fleet Manager</span>
                  </div>
                  <p className="italic">"The team at Wrapping Chicago transformed our entire delivery fleet with stunning, consistent branding. The quality of both the design and installation is exceptional, and we've seen a measurable increase in brand recognition since the wraps were installed."</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="text-yellow-400 flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="ml-2 font-semibold">Sarah M. - Business Owner</span>
                  </div>
                  <p className="italic">"I couldn't be happier with my delivery van wrap! The design team really understood my brand vision, and the installation was flawless. The wrap has been a fantastic investment - I get new customer inquiries every week from people who saw my van."</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Viewer Modal */}
          <ImageViewer 
            item={expandedImage} 
            onClose={() => setExpandedImage(null)} 
          />
          
          {/* Add FAQ Section - Critical for SEO */}
          <PageFAQ 
            faqs={galleryFAQs}
            serviceName="Vehicle Wrap Gallery"
            cityName="Chicago"
          />
          
          {/* Chicago-specific location information - helps with local SEO */}
          <section className="py-10 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-semibold text-brand-navy mb-6">Vehicle Wraps Throughout Chicago</h2>
              <p className="mb-4">
                Our vehicle wrap portfolio features projects completed throughout Chicago and surrounding 
                suburbs including Arlington Heights, Naperville, Schaumburg, Evanston, Oak Park, and more. 
                No matter where you're located in the Chicago metropolitan area, our team provides expert 
                vehicle wrap installation services with attention to detail and quality craftsmanship.
              </p>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-6">
                <Link to="/vehicle-wraps-arlington-heights-il" className="text-sm text-brand-navy hover:text-brand-red">Arlington Heights</Link>
                <Link to="/vehicle-wraps-naperville-il" className="text-sm text-brand-navy hover:text-brand-red">Naperville</Link>
                <Link to="/vehicle-wraps-schaumburg-il" className="text-sm text-brand-navy hover:text-brand-red">Schaumburg</Link>
                <Link to="/vehicle-wraps-evanston-il" className="text-sm text-brand-navy hover:text-brand-red">Evanston</Link>
                <Link to="/vehicle-wraps-oak-park-il" className="text-sm text-brand-navy hover:text-brand-red">Oak Park</Link>
                <Link to="/vehicle-wraps-skokie-il" className="text-sm text-brand-navy hover:text-brand-red">Skokie</Link>
              </div>
            </div>
          </section>
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default GalleryPage;
