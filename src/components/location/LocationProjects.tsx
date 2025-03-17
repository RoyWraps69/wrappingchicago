
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface LocationProjectsProps {
  cityName: string;
}

const LocationProjects = ({ cityName }: LocationProjectsProps) => {
  // Create city-specific project descriptions
  const getProjectDescription = (index: number, cityName: string) => {
    switch(index) {
      case 1:
        return `All Angles Roofing pickup truck with professional partial wrap showcasing their business information and logo. This effective commercial wrap helps them stand out in ${cityName} and surrounding areas.`;
      case 2:
        return `Bratcher Heating & Air Conditioning fleet vans with cohesive brand wrapping. This fleet wrap package ensures consistent branding for all service vehicles in ${cityName}.`;
      case 3:
        return `D.P. Dough delivery van with vibrant full wrap design. This eye-catching commercial wrap helps this ${cityName}-based food delivery business attract attention on the road.`;
      case 4:
        return `Pro Tap Plumbing service van with professional partial wrap. This clean design helps the ${cityName} plumbing company maintain a professional image while advertising their services.`;
      case 5:
        return `DinoRoof pickup truck with playful, attention-grabbing full wrap design. This creative commercial wrap helps the ${cityName} roofing company stand out from competitors.`;
      case 6:
        return `MedX Waste medical disposal van with clear branding and professional design. This wrap helps the ${cityName}-based company communicate their specialized services effectively.`;
      default:
        return `Professional vehicle wrap completed in ${cityName}, IL.`;
    }
  };

  // Project titles
  const getProjectTitle = (index: number) => {
    switch(index) {
      case 1: return "Roofing Company Truck Wrap";
      case 2: return "HVAC Fleet Wrap Package";
      case 3: return "Food Delivery Van Wrap";
      case 4: return "Plumbing Service Van Graphics";
      case 5: return "Creative Roofing Truck Wrap";
      case 6: return "Medical Waste Van Wrap";
      default: return "Commercial Vehicle Wrap";
    }
  };

  // Image paths
  const imagePaths = [
    "/lovable-uploads/76973c14-ac60-4c81-afa1-555b0f4f5f36.png", // All Angles Roofing
    "/lovable-uploads/efdbc4bf-1f04-42bb-a904-f52dae7bef6c.png", // Bratcher Heating & Air
    "/lovable-uploads/f564c255-9ca3-4457-bef5-c940a4a1557a.png", // DP Dough
    "/lovable-uploads/cc335205-fcef-4ca9-a269-5cf6dee478ed.png", // Pro Tap
    "/lovable-uploads/676b4902-7b81-4619-90d8-8feb1f986636.png", // DinoRoof
    "/lovable-uploads/230338ed-a8d9-4584-bb4c-ba33c793f7ab.png", // MedX Waste
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2 text-center text-brand-navy">
          Recent Commercial Wrap Projects in {cityName}
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Browse through some of our recent commercial wrapping projects. We specialize in creating 
          effective vehicle graphics that help businesses in {cityName} increase their visibility 
          and brand recognition.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].slice(0, 3).map((item) => (
            <div key={item} className="rounded-lg overflow-hidden shadow-md bg-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden h-56">
                <img 
                  src={imagePaths[item-1]}
                  alt={`Commercial vehicle wrap in ${cityName}, IL - ${getProjectTitle(item)}`}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-brand-navy">
                  {getProjectTitle(item)}
                </h3>
                <p className="text-gray-700 mb-4">
                  {getProjectDescription(item, cityName)}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                >
                  <Link to="/gallery" className="flex items-center justify-center">
                    View More Examples
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button
            asChild
            className="bg-brand-navy hover:bg-blue-900 text-white"
          >
            <Link to="/services/commercial-graphics">Learn More About Commercial Wraps</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocationProjects;
