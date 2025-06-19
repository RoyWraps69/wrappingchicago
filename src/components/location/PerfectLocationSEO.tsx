
import React from 'react';
import { City } from '@/data/cities';
import UltimateSEOOptimizer from '@/components/seo/UltimateSEOOptimizer';

interface PerfectLocationSEOProps {
  city: City;
  serviceType?: string;
}

const PerfectLocationSEO: React.FC<PerfectLocationSEOProps> = ({ 
  city, 
  serviceType = "Fleet Wraps" 
}) => {
  const currentYear = new Date().getFullYear();
  const domain = "https://www.wrappingchicago.com";
  
  // Perfect SEO title and description
  const pageTitle = `${city.name} ${serviceType} & Vehicle Graphics | Professional Commercial Vehicle Wraps ${city.name}, IL | ${currentYear}`;
  const pageDescription = `Expert ${serviceType.toLowerCase()} in ${city.name}, IL with 20+ years experience. Professional commercial vehicle wraps, fleet branding, and custom graphics for ${city.name} businesses. Premium 3M materials, expert installation, free quotes. Serving ${city.county} County.`;
  
  // Comprehensive local keywords
  const locationKeywords = [
    // Primary service keywords
    `${serviceType.toLowerCase()} ${city.name}`,
    `${serviceType.toLowerCase()} in ${city.name}`,
    `${serviceType.toLowerCase()} ${city.name} IL`,
    `${serviceType.toLowerCase()} ${city.name} Illinois`,
    `commercial vehicle wraps ${city.name}`,
    `fleet branding ${city.name}`,
    `vehicle graphics ${city.name}`,
    
    // Local business keywords
    `${city.name} vehicle wrap company`,
    `${city.name} fleet wrap services`,
    `${city.name} commercial graphics`,
    `${city.name} business vehicle branding`,
    `${city.name} truck wrap installation`,
    `${city.name} van wrap company`,
    
    // Service area keywords
    `vehicle wraps near ${city.name}`,
    `fleet wraps ${city.county} County`,
    `commercial vehicle graphics ${city.county} County`,
    `vehicle wrap installer ${city.name}`,
    `professional vehicle wraps ${city.name}`,
    
    // Long-tail keywords
    `custom fleet wrap design ${city.name}`,
    `commercial vehicle branding solutions ${city.name}`,
    `fleet wrap cost ${city.name}`,
    `vehicle wrap consultation ${city.name}`,
    `mobile advertising wraps ${city.name}`,
    `business vehicle graphics ${city.name}`,
    
    // Material and quality keywords
    `3M vehicle wraps ${city.name}`,
    `premium vinyl wraps ${city.name}`,
    `professional wrap installation ${city.name}`,
    `certified vehicle wrap installer ${city.name}`,
    
    // Competitor and comparison keywords
    `best vehicle wrap company ${city.name}`,
    `top rated fleet wraps ${city.name}`,
    `experienced vehicle wrap installer ${city.name}`,
    `vehicle wrap reviews ${city.name}`
  ];
  
  // FAQ data optimized for local search
  const locationFAQs = [
    {
      question: `How much do ${serviceType.toLowerCase()} cost in ${city.name}?`,
      answer: `${serviceType} costs in ${city.name} typically range from $2,500 to $6,500 per vehicle depending on size and design complexity. We provide free detailed quotes for all ${city.name} businesses and offer volume discounts for fleet projects. Our pricing includes premium 3M materials, professional installation, and a 2-year warranty.`
    },
    {
      question: `Do you provide ${serviceType.toLowerCase()} installation in ${city.name}?`,
      answer: `Yes, we provide professional ${serviceType.toLowerCase()} installation for ${city.name} businesses from our state-of-the-art facility. We're located approximately ${city.distance} from ${city.name} and offer mobile consultation services for large fleet projects throughout ${city.county} County.`
    },
    {
      question: `How long do vehicle wraps last in ${city.name}'s climate?`,
      answer: `Our premium vehicle wraps are designed to withstand ${city.name}'s climate and typically last 5-7 years with proper care. We use UV-resistant 3M and Avery materials specifically chosen for Illinois weather conditions including harsh winters, hot summers, and varying humidity levels.`
    },
    {
      question: `What types of businesses in ${city.name} benefit from ${serviceType.toLowerCase()}?`,
      answer: `${city.name} service businesses, contractors, delivery companies, healthcare providers, and any business with mobile operations see excellent ROI from ${serviceType.toLowerCase()}. Companies serving ${city.county} County benefit most due to increased brand exposure and lead generation from mobile advertising.`
    },
    {
      question: `How long does ${serviceType.toLowerCase()} installation take in ${city.name}?`,
      answer: `Most ${serviceType.toLowerCase()} installations are completed within 2-3 business days. For ${city.name} businesses with larger fleets, we coordinate installation schedules to minimize downtime. Rush services are available for urgent projects.`
    }
  ];
  
  // Service offerings for structured data
  const services = [
    {
      name: `Commercial Fleet Wraps ${city.name}`,
      description: `Professional fleet branding and commercial vehicle wraps for ${city.name} businesses`,
      price: "$2,500+"
    },
    {
      name: `Box Truck Wraps ${city.name}`,
      description: `Custom box truck graphics and advertising wraps for ${city.name} delivery companies`,
      price: "$3,500+"
    },
    {
      name: `Van Wraps ${city.name}`,
      description: `Cargo van and sprinter van wraps for ${city.name} service businesses`,
      price: "$2,800+"
    },
    {
      name: `Vehicle Graphics ${city.name}`,
      description: `Custom vehicle lettering and partial wraps for ${city.name} companies`,
      price: "$1,500+"
    }
  ];
  
  // Breadcrumb structure
  const breadcrumbs = [
    {
      name: "Home",
      url: "/",
      position: 1
    },
    {
      name: "Service Areas",
      url: "/locations",
      position: 2
    },
    {
      name: `${city.name} Vehicle Wraps`,
      url: `/vehicle-wraps-${city.slug}-il`,
      position: 3
    }
  ];
  
  // Featured images
  const images = [
    {
      url: "/lovable-uploads/199c2a21-e0b0-4c29-972f-f32d72698382.png",
      alt: `Professional ${serviceType.toLowerCase()} installation in ${city.name} IL - expert vinyl application on commercial vehicle`,
      width: 1200,
      height: 630
    },
    {
      url: "/lovable-uploads/230338ed-a8d9-4584-bb4c-ba33c793f7ab.png",
      alt: `Commercial vehicle graphics for ${city.name} businesses - fleet branding and mobile advertising solutions`,
      width: 1200,
      height: 630
    }
  ];

  return (
    <UltimateSEOOptimizer
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      keywords={locationKeywords}
      canonicalUrl={`${domain}/vehicle-wraps-${city.slug}-il`}
      cityName={city.name}
      serviceName={serviceType}
      businessType="LocalBusiness"
      priority="critical"
      lastModified={new Date().toISOString()}
      publishDate={new Date().toISOString()}
      authorName="Wrapping Chicago Expert Team"
      images={images}
      faqs={locationFAQs}
      breadcrumbs={breadcrumbs}
      services={services}
    />
  );
};

export default PerfectLocationSEO;
