
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Filter } from 'lucide-react';

interface LocationProjectsProps {
  cityName: string;
}

const LocationProjects = ({ cityName }: LocationProjectsProps) => {
  const [activeCategory, setActiveCategory] = useState<'commercial' | 'color-change' | 'all'>('all');
  
  // Commercial wrap examples with descriptions
  const commercialProjects = [
    {
      image: "/lovable-uploads/76973c14-ac60-4c81-afa1-555b0f4f5f36.png",
      title: "Roofing Company Truck Wrap",
      description: `All Angles Roofing pickup truck with professional partial wrap showcasing their business information and logo. This effective commercial wrap helps them stand out in ${cityName} and surrounding areas.`
    },
    {
      image: "/lovable-uploads/efdbc4bf-1f04-42bb-a904-f52dae7bef6c.png",
      title: "HVAC Fleet Wrap Package",
      description: `Bratcher Heating & Air Conditioning fleet vans with cohesive brand wrapping. This fleet wrap package ensures consistent branding for all service vehicles in ${cityName}.`
    },
    {
      image: "/lovable-uploads/f564c255-9ca3-4457-bef5-c940a4a1557a.png",
      title: "Food Delivery Van Wrap",
      description: `D.P. Dough delivery van with vibrant full wrap design. This eye-catching commercial wrap helps this ${cityName}-based food delivery business attract attention on the road.`
    },
    {
      image: "/lovable-uploads/cc335205-fcef-4ca9-a269-5cf6dee478ed.png",
      title: "Plumbing Service Van Graphics",
      description: `Pro Tap Plumbing service van with professional partial wrap. This clean design helps the ${cityName} plumbing company maintain a professional image while advertising their services.`
    },
    {
      image: "/lovable-uploads/676b4902-7b81-4619-90d8-8feb1f986636.png",
      title: "Creative Roofing Truck Wrap",
      description: `DinoRoof pickup truck with playful, attention-grabbing full wrap design. This creative commercial wrap helps the ${cityName} roofing company stand out from competitors.`
    },
    {
      image: "/lovable-uploads/230338ed-a8d9-4584-bb4c-ba33c793f7ab.png",
      title: "Medical Waste Van Wrap",
      description: `MedX Waste medical disposal van with clear branding and professional design. This wrap helps the ${cityName}-based company communicate their specialized services effectively.`
    }
  ];
  
  // Color change wrap examples with descriptions
  const colorChangeProjects = [
    {
      image: "/lovable-uploads/6d45d332-9949-413e-b840-8007afa41d56.png",
      title: "Matte Blue & Black Truck Wrap",
      description: `Ford pickup truck with a striking two-tone matte blue and black color change wrap. This durable finish gives the truck a completely transformed appearance without permanent modification.`
    },
    {
      image: "/lovable-uploads/22a9b401-dc9c-4e13-90da-50d4e85ea3ca.png",
      title: "Olive Green Cybertruck Wrap",
      description: `Tesla Cybertruck with custom olive green matte finish wrap. This unique color change enhances the futuristic design of the vehicle while providing paint protection.`
    },
    {
      image: "/lovable-uploads/33e966e0-f935-4f39-8702-a9ccf53ae49b.png",
      title: "Urban Camo Cybertruck Wrap",
      description: `Tesla Cybertruck with urban camouflage pattern wrap. This custom color change wrap combines gray tones to create a distinctive military-inspired appearance.`
    },
    {
      image: "/lovable-uploads/77a1f4b1-efe3-4779-8646-f92e01667a29.png",
      title: "Rivian Adventure Truck Wrap",
      description: `Rivian electric pickup truck with custom graphics and wrap. This specialty wrap combines a sleek gray finish with custom black graphics for a distinctive look.`
    },
    {
      image: "/lovable-uploads/d2a8e418-117f-4bfc-a6a2-efb63dbbce7f.png",
      title: "Electric Blue Camaro Wrap",
      description: `Chevrolet Camaro with brilliant electric blue gloss vinyl wrap. This vibrant color change completely transforms the sports car with a head-turning finish that stands out on ${cityName} streets.`
    },
    {
      image: "/lovable-uploads/9bb3d94e-589d-4daf-b35e-e19e80610439.png",
      title: "Color Shift Chameleon Wrap",
      description: `Dodge Grand Caravan with color-shifting chameleon wrap that transitions between purple, blue, and green depending on viewing angle. This premium vinyl wrap creates a unique appearance impossible to achieve with paint.`
    },
    {
      image: "/lovable-uploads/fb7a4b97-4b57-4b2e-8f81-42a1098270df.png",
      title: "Carbon Fiber Hood Accent Wrap",
      description: `Dodge Charger with bright blue body and carbon fiber hood accent wrap. This partial color change combines two premium finishes for a customized sports appearance.`
    },
    {
      image: "/lovable-uploads/c352a031-d0db-4f71-9a9e-988136996c27.png",
      title: "Satin White GTR Wrap",
      description: `Nissan GTR with premium satin white wrap and black accents. This elegant color change wrap gives this high-performance vehicle a refined appearance with added paint protection.`
    },
    {
      image: "/lovable-uploads/efc6c586-8651-43ad-811a-b896a91a1b69.png",
      title: "Metallic Blue Lexus Wrap",
      description: `Lexus sedan with metallic blue vinyl wrap. This complete color change transforms the luxury vehicle with a premium finish that maintains the elegant character while adding a custom touch.`
    },
    {
      image: "/lovable-uploads/0316f206-884b-44b4-bdb3-e0f7962a1714.png",
      title: "Matte Black BMW Wrap",
      description: `BMW 3-series with complete matte black vinyl wrap. This sophisticated color change wrap gives the luxury sedan a stealthy, custom appearance that's highly popular in ${cityName}.`
    },
    {
      image: "/lovable-uploads/0ec34598-bcc3-486d-9021-dd527bafe83a.png",
      title: "Red and Black Convertible Wrap",
      description: `Plymouth Prowler with custom two-tone red and black wrap. This color change wrap enhances the retro styling of this unique vehicle with a vibrant color combination.`
    },
    {
      image: "/lovable-uploads/9de106b5-94cb-4fd1-a7c7-5c75c75b7cbb.png",
      title: "Metallic Chrome Blue Wrap",
      description: `Lexus IS with metallic chrome blue wrap. This premium color change creates a stunning reflective finish that catches light and turns heads throughout ${cityName}.`
    }
  ];

  // Determine which projects to display based on active category
  const projectsToDisplay = activeCategory === 'all' 
    ? [...commercialProjects.slice(0, 3), ...colorChangeProjects.slice(0, 3)]
    : activeCategory === 'commercial' 
      ? commercialProjects.slice(0, 6)
      : colorChangeProjects.slice(0, 6);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2 text-center text-brand-navy">
          Recent Vehicle Wrap Projects in {cityName}
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Browse through some of our recent wrapping projects. We specialize in creating 
          effective vehicle graphics and color change wraps that help businesses and individuals in {cityName}
          achieve their unique goals.
        </p>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeCategory === 'all' 
                  ? 'bg-brand-navy text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } border border-gray-200`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveCategory('commercial')}
              className={`px-4 py-2 text-sm font-medium ${
                activeCategory === 'commercial' 
                  ? 'bg-brand-navy text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } border-t border-b border-r border-gray-200`}
            >
              Commercial Wraps
            </button>
            <button
              onClick={() => setActiveCategory('color-change')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeCategory === 'color-change' 
                  ? 'bg-brand-navy text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } border-t border-b border-r border-gray-200`}
            >
              Color Change Wraps
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToDisplay.map((project, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md bg-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden h-56">
                <img 
                  src={project.image}
                  alt={`Professional ${project.title.toLowerCase()} in ${cityName}, IL - ${project.description.substring(0, 50)}...`}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-brand-navy">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {project.description}
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
            className="bg-brand-navy hover:bg-blue-900 text-white mr-4"
          >
            <Link to="/services">Commercial Wraps</Link>
          </Button>
          <Button
            asChild
            className="bg-brand-navy hover:bg-blue-900 text-white"
          >
            <Link to="/color-change-wraps">Color Change Wraps</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocationProjects;
