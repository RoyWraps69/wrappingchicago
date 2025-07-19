import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CertificationsGallery: React.FC = () => {
  const galleryImages = [
    {
      id: 1,
      src: "/lovable-uploads/199c2a21-e0b0-4c29-972f-f32d72698382.png",
      alt: "Advanced vehicle customization process Chicago - specialized technician applying precision vinyl graphics on commercial vehicle using professional-grade tools and meticulous attention to detail",
      title: "Precision Application Techniques",
      description: "Advanced vehicle customization process showcasing specialized application methods and quality control standards in Chicago"
    },
    {
      id: 2,
      src: "/lovable-uploads/230338ed-a8d9-4584-bb4c-ba33c793f7ab.png",
      alt: "Fleet wrap branding Chicago - commercial vehicle graphics for business marketing and brand visibility",
      title: "Fleet Branding",
      description: "Commercial fleet vehicle wrap demonstrating consistent branding across multiple vehicles for maximum marketing impact"
    },
    {
      id: 3,
      src: "/lovable-uploads/33e966e0-f935-4f39-8702-a9ccf53ae49b.png",
      alt: "Commercial vehicle graphics Chicago - business advertising wraps for trucks vans and fleet vehicles",
      title: "Commercial Graphics",
      description: "Eye-catching commercial vehicle graphics designed for business advertising and professional brand representation"
    },
    {
      id: 4,
      src: "/lovable-uploads/459b925b-94c6-40c1-92cc-d4112da7ac6c.png",
      alt: "Custom wrap design Chicago - personalized vehicle graphics with unique artwork and creative branding solutions",
      title: "Custom Designs",
      description: "Custom vehicle wrap design featuring unique artwork and personalized graphics tailored to client specifications"
    },
    {
      id: 5,
      src: "/lovable-uploads/5539b79e-ab54-428d-82a0-e4735ee97a95.png",
      alt: "Luxury vehicle wrap Chicago - premium car wrapping services for high-end exotic and luxury automobiles",
      title: "Luxury Wraps",
      description: "Premium luxury vehicle wrap installation on high-end automobile using top-quality materials and expert craftsmanship"
    },
    {
      id: 6,
      src: "/lovable-uploads/60c7cf64-9ac2-4f0b-b567-3b7f87c327c9.png",
      alt: "Color change wrap Chicago - automotive vinyl wrapping for complete vehicle color transformation and paint protection",
      title: "Color Change",
      description: "Complete color change vehicle wrap transformation providing both aesthetic enhancement and paint protection"
    },
    {
      id: 7,
      src: "/lovable-uploads/676b4902-7b81-4619-90d8-8feb1f986636.png",
      alt: "Truck wrap installation Chicago - commercial truck graphics and vinyl wrapping for business advertising",
      title: "Truck Wraps",
      description: "Professional truck wrap installation featuring commercial graphics and advertising elements for business marketing"
    },
    {
      id: 8,
      src: "/lovable-uploads/6d45d332-9949-413e-b840-8007afa41d56.png",
      alt: "Van wrap graphics Chicago - commercial van branding with custom graphics and business information display",
      title: "Van Graphics",
      description: "Commercial van wrap with custom graphics design featuring business branding and contact information"
    },
    {
      id: 9,
      src: "/lovable-uploads/77a1f4b1-efe3-4779-8646-f92e01667a29.png",
      alt: "Professional wrap finish Chicago - high-quality vehicle wrap installation with seamless edges and perfect alignment",
      title: "Quality Finish",
      description: "Showcase of professional wrap finish quality with seamless edges and precision installation techniques"
    },
    {
      id: 10,
      src: "/lovable-uploads/9bb3d94e-589d-4daf-b35e-e19e80610439.png",
      alt: "Vehicle wrap portfolio Chicago - collection of completed car truck and van wrap projects showcase",
      title: "Our Portfolio",
      description: "Comprehensive vehicle wrap portfolio displaying diverse projects including cars, trucks, and commercial vehicles"
    },
    {
      id: 11,
      src: "/lovable-uploads/d692f69d-0110-48db-811b-8f8a2f114307.png",
      alt: "Patrón Tequila boat wrap Chicago - marine vessel vinyl graphics and luxury yacht branding installation",
      title: "Boat Wraps",
      description: "Premium Patrón Tequila branded boat wrap showcasing marine vinyl graphics and luxury vessel customization"
    },
    {
      id: 12,
      src: "/lovable-uploads/7d075956-9d0f-4be0-8a78-fe64b0952431.png",
      alt: "Patrón Tequila yacht graphics Chicago - luxury marine vessel wrap with premium brand marketing display",
      title: "Yacht Graphics",
      description: "Sophisticated Patrón Tequila yacht graphics featuring premium brand marketing on luxury marine vessel"
    },
    {
      id: 13,
      src: "/lovable-uploads/4861ebf1-5cb2-4c4d-976b-4ff6b8a62232.png",
      alt: "Arnold Electric commercial van wrap Chicago - electrical contractor vehicle branding with service information",
      title: "Electric Company Van",
      description: "Arnold Electric commercial van wrap featuring electrical contractor branding and comprehensive service information"
    },
    {
      id: 14,
      src: "/lovable-uploads/8b9ddef7-09ff-401b-a08b-20482822230e.png",
      alt: "1800 World's Most Awarded Tequila boat wrap Chicago - premium alcohol brand marine vessel graphics",
      title: "Premium Boat Branding",
      description: "Luxury boat wrap featuring 1800 Tequila branding with world-class award recognition and premium aesthetics"
    },
    {
      id: 15,
      src: "/lovable-uploads/8183a9cc-d104-4f96-8aa6-6054f27f9d8e.png",
      alt: "ProAir HVAC vehicle wrap with couple Chicago - heating cooling contractor van graphics and family branding",
      title: "HVAC Fleet Wraps",
      description: "ProAir HVAC commercial vehicle wrap featuring family-owned business branding and heating/cooling service information"
    },
    {
      id: 16,
      src: "/lovable-uploads/665da141-5142-492a-bc18-f4ae66bc8863.png",
      alt: "Corvette luxury car wrap Chicago - high-performance sports car vinyl wrapping and color change transformation",
      title: "Performance Cars",
      description: "Chevrolet Corvette luxury sports car wrap showcasing high-performance vehicle customization and color enhancement"
    },
    {
      id: 17,
      src: "/lovable-uploads/743dfb71-2e90-4308-bc18-0f1e3443c9eb.png",
      alt: "Improovy Painters van wrap Chicago - painting contractor vehicle graphics with service area and contact information",
      title: "Painter Services",
      description: "Improovy Painters commercial van wrap featuring professional painting contractor branding and service coverage area"
    },
    {
      id: 18,
      src: "/lovable-uploads/4abcc3c2-a901-488b-b858-f98c7f604138.png",
      alt: "MH Equipment service van wrap Chicago - industrial equipment company vehicle branding and contact details",
      title: "Equipment Services",
      description: "MH Equipment service van wrap showcasing industrial equipment company branding with professional contact information"
    },
    {
      id: 19,
      src: "/lovable-uploads/21259122-ad77-4f57-afa1-d97c6654b1ce.png",
      alt: "Golden Tixx vehicle wrap with city skyline Chicago - entertainment company car graphics with urban design elements",
      title: "Creative Designs",
      description: "Golden Tixx vehicle wrap featuring creative city skyline design elements and entertainment industry branding"
    },
    {
      id: 20,
      src: "/lovable-uploads/86446105-a575-48cb-929d-693790516ced.png",
      alt: "Blue Camaro color change wrap Chicago - muscle car vinyl transformation with premium gloss finish",
      title: "Sports Car Wraps",
      description: "Blue Chevrolet Camaro sports car color change wrap featuring premium vinyl with high-gloss finish transformation"
    },
    {
      id: 21,
      src: "/lovable-uploads/b49fa5b0-4768-44fe-847b-64093d35ae76.png",
      alt: "Blue Lexus IS sedan with premium gloss vinyl wrap installation Chicago - professional automotive color change",
      title: "Luxury Sedan Wraps",
      description: "Premium blue vinyl wrap on Lexus IS sedan showcasing high-gloss finish and precision installation"
    },
    {
      id: 22,
      src: "/lovable-uploads/3bbad1a4-d07f-465c-971c-8906f2951749.png",
      alt: "Golden Tixx SUV wrap with Chicago skyline graphics - custom commercial vehicle branding design",
      title: "SUV Commercial Graphics",
      description: "Eye-catching SUV wrap featuring Golden Tixx branding with vibrant Chicago skyline design elements"
    },
    {
      id: 23,
      src: "/lovable-uploads/9e7fe95a-3f43-4143-884d-ef09c8a913bb.png",
      alt: "Blue Chevrolet Camaro SS color change wrap - sports car vinyl wrapping Chicago Illinois",
      title: "Performance Car Wraps",
      description: "Stunning blue Chevrolet Camaro SS with full-body color change wrap showcasing automotive excellence"
    },
    {
      id: 24,
      src: "/lovable-uploads/ee58e6c2-cf73-4d4f-936f-e8b82aca712d.png",
      alt: "D.P. Dough delivery van wrap - commercial vehicle graphics for food delivery business Chicago",
      title: "Food Delivery Van Wraps",
      description: "Professional food delivery van wrap for D.P. Dough featuring bright green branding and contact information"
    },
    {
      id: 25,
      src: "/lovable-uploads/364a385b-9d84-494e-b7fd-95b2808071a7.png",
      alt: "BMW X6 color change wrap demonstration - before and after vehicle transformation Chicago",
      title: "Color Change Showcase",
      description: "BMW X6 color change wrap demonstration showing red to blue transformation with Avery Dennison materials"
    },
    {
      id: 26,
      src: "/lovable-uploads/f4bc3875-8088-4f08-aac7-dcb3f33e37d8.png",
      alt: "Blue Dodge Charger with carbon fiber hood wrap - partial vehicle wrap installation Chicago shop",
      title: "Partial Wrap Installation",
      description: "Blue Dodge Charger featuring carbon fiber hood wrap installation in professional Chicago wrap facility"
    },
    {
      id: 27,
      src: "/lovable-uploads/02a278d3-28fd-49a8-886a-65964281b81c.png",
      alt: "State Farm commercial trailer wrap - large format vehicle graphics for insurance company branding",
      title: "Commercial Trailer Wraps",
      description: "State Farm branded commercial trailer wrap showcasing large-format vehicle graphics and corporate branding"
    },
    {
      id: 28,
      src: "/lovable-uploads/7ddb7eff-51b6-4a23-8f20-b1249d22e300.png",
      alt: "Certified vehicle transformation specialist executing vinyl graphics application - comprehensive installation methodology Chicago",
      title: "Certified Installation Specialists",
      description: "Skilled technician applying vehicle wrap vinyl with precision tools in climate-controlled installation bay"
    },
    {
      id: 29,
      src: "/lovable-uploads/7483b609-5383-4d0c-885f-c09e998f2957.png",
      alt: "Pink Chevrolet Avalanche truck wrap - custom color change pickup truck vinyl Chicago Illinois",
      title: "Custom Truck Wraps",
      description: "Eye-catching pink Chevrolet Avalanche pickup truck with full color change wrap installation"
    },
    {
      id: 30,
      src: "/lovable-uploads/1e0abb47-68ea-4705-a9fe-a497ffb25342.png",
      alt: "Oakbros tree service truck wrap - commercial vehicle branding for landscaping business Chicago",
      title: "Service Truck Graphics",
      description: "Oakbros tree care service truck featuring professional commercial graphics with contact information and services"
    }
  ];

  return (
    <div className="bg-brand-navy rounded-lg p-8">
      <h3 className="text-2xl font-bold text-white text-center mb-8">
        Our Work Gallery - Professional Vehicle Wraps Chicago
      </h3>
      
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent className="-ml-4">
          {galleryImages.map((image) => (
            <CarouselItem key={image.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="relative group">
                <img
                  src={image.src}
                  alt={image.alt}
                  title={image.title}
                  className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <h4 className="text-white font-semibold text-lg text-center px-2">{image.title}</h4>
                </div>
                {image.description && (
                  <meta itemProp="description" content={image.description} />
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      
      {/* SEO Schema markup for image gallery */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Vehicle Wrap Gallery - Chicago Fleet Wraps",
          "description": "Professional vehicle wrap installation gallery showcasing car wraps, truck wraps, van wraps, and commercial graphics in Chicago IL",
          "url": "https://www.wrappingchicago.com/#gallery",
          "image": galleryImages.map(img => ({
            "@type": "ImageObject",
            "url": `https://www.wrappingchicago.com${img.src}`,
            "description": img.alt,
            "name": img.title,
            "caption": img.description || img.title
          })),
          "provider": {
            "@type": "Organization",
            "name": "Wrapping Chicago",
            "url": "https://www.wrappingchicago.com"
          }
        })}
      </script>
    </div>
  );
};

export default CertificationsGallery;
