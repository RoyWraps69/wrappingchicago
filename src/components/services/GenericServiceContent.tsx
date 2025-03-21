
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface GenericServiceContentProps {
  serviceType?: string;
}

const GenericServiceContent: React.FC<GenericServiceContentProps> = ({ serviceType }) => {
  // Create a title based on serviceType if provided
  const getServiceTitle = () => {
    if (!serviceType) return "Our Services";
    
    switch (serviceType) {
      case "car":
        return "Car Wraps";
      case "truck":
        return "Truck Wraps";
      case "van":
        return "Van Wraps";
      case "designer":
        return "Designer Wraps";
      case "luxury":
        return "Luxury & Exotic Vehicle Wraps";
      default:
        return "Vehicle Wraps";
    }
  };

  // Generate schema data for the specific service type
  const generateServiceSchema = () => {
    if (!serviceType) return null;

    const serviceTitle = getServiceTitle();
    const serviceDescription = `Professional ${serviceType} wrapping services in Chicago using premium 3M materials with expert installation and a 2-year warranty.`;
    
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceTitle,
      "description": serviceDescription,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Wrapping Chicago",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4711 N. Lamon Ave",
          "addressLocality": "Chicago",
          "addressRegion": "IL",
          "postalCode": "60630",
          "addressCountry": "US"
        },
        "telephone": "(312) 597-1286"
      },
      "serviceType": `${serviceType} vehicle wrapping`,
      "areaServed": {
        "@type": "City",
        "name": "Chicago"
      },
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD"
        },
        "availability": "https://schema.org/InStock"
      },
      "isRelatedTo": [
        {
          "@type": "Service",
          "name": "Custom Vehicle Graphics"
        },
        {
          "@type": "Service",
          "name": "Color Change Wraps"
        }
      ],
      "termsOfService": "2-year warranty on all wraps",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://wrappingchicago.com/services/${serviceType}-wraps`
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".service-title", ".service-description"]
      }
    };
  };
  
  return (
    <div className="mb-8">
      {/* Schema markup for voice search and AI assistants */}
      {serviceType && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(generateServiceSchema())}
          </script>
        </Helmet>
      )}
      
      {serviceType && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-brand-navy mb-4 service-title">{getServiceTitle()}</h2>
          <p className="mb-4 text-gray-700 service-description">
            Our professional {serviceType} wrapping services combine quality materials with expert installation 
            to deliver exceptional results tailored to your specific vehicle type.
          </p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
        <div className="p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-navy mb-3">Professional Installers</h2>
          <p className="mb-3 text-sm md:text-base">
            Our in-house trained installers have years of experience wrapping vehicles of all types.
            From compact cars to large commercial trucks, we have the expertise to handle any project.
          </p>
          <div className="aspect-video overflow-hidden rounded-lg">
            <img 
              src="/lovable-uploads/33e966e0-f935-4f39-8702-a9ccf53ae49b.png" 
              alt="Professional installers at work" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-navy mb-3">Premium Materials</h2>
          <p className="mb-3 text-sm md:text-base">
            We use only the highest quality 3M and Avery vinyl wraps, ensuring your vehicle
            wrap will look great and stand up to the harsh Chicago weather for years to come.
          </p>
          <div className="aspect-video overflow-hidden rounded-lg">
            <img 
              src="/lovable-uploads/676b4902-7b81-4619-90d8-8feb1f986636.png" 
              alt="Premium wrap materials" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold text-brand-navy mb-4">Featured Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mb-6">
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <div className="aspect-video overflow-hidden rounded-md mb-3">
            <img 
              src="/lovable-uploads/efdbc4bf-1f04-42bb-a904-f52dae7bef6c.png" 
              alt="Fleet wraps" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <h3 className="font-semibold text-brand-navy mb-2 text-lg md:text-xl">Fleet Wraps</h3>
          <p className="text-xs md:text-sm mb-3">Turn your business vehicles into moving billboards with our professional fleet wrapping services.</p>
          <Link to="/services/fleet-wraps" className="text-brand-red hover:underline text-sm">Learn more →</Link>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <div className="aspect-video overflow-hidden rounded-md mb-3">
            <img 
              src="/lovable-uploads/f564c255-9ca3-4457-bef5-c940a4a1557a.png" 
              alt="Color change wraps" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <h3 className="font-semibold text-brand-navy mb-2 text-lg md:text-xl">Color Change Wraps</h3>
          <p className="text-xs md:text-sm mb-3">Transform your vehicle with a complete color change - a perfect alternative to paint.</p>
          <Link to="/services/color-change-wraps" className="text-brand-red hover:underline text-sm">Learn more →</Link>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <div className="aspect-video overflow-hidden rounded-md mb-3">
            <img 
              src="/lovable-uploads/fb7a4b97-4b57-4b2e-8f81-42a1098270df.png" 
              alt="Commercial graphics" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <h3 className="font-semibold text-brand-navy mb-2 text-lg md:text-xl">Commercial Graphics</h3>
          <p className="text-xs md:text-sm mb-3">Add professional logos, lettering, and graphics to your business vehicles.</p>
          <Link to="/services/commercial-graphics" className="text-brand-red hover:underline text-sm">Learn more →</Link>
        </div>
      </div>
    </div>
  );
};

export default GenericServiceContent;
