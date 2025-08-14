
import React from 'react';

const DesignerWrapsOptions = () => {
  const designOptions = [
    {
      title: "Custom Patterns",
      description: "Unique geometric patterns, abstract designs, and artistic motifs that transform your vehicle into moving art.",
      image: "/lovable-uploads/ca1d6cca-00da-4bd7-8d01-7ffc62508a02.png",
      alt: "Sports car with custom purple to blue gradient color change wrap"
    },
    {
      title: "Color Shift & Chameleon",
      description: "Advanced vinyl that changes colors as light hits from different angles, creating a mesmerizing effect.",
      image: "/lovable-uploads/39639a03-62f6-4030-8282-2fcb749e3e39.png",
      alt: "Sports car with color shifting wrap that changes from purple to blue"
    },
    {
      title: "Textured Finishes",
      description: "Add visual and tactile depth with carbon fiber, brushed metal, leather, or wood grain textures.",
      image: "/lovable-uploads/2ebb4134-2d8f-442b-880a-018279e6c55a.png",
      alt: "Political campaign vehicle with patriotic themed textured wrap"
    },
    {
      title: "Multi-Tone & Fades",
      description: "Combine multiple colors with professional fades and transitions for a custom, premium appearance.",
      image: "/lovable-uploads/a63bad58-2435-4c95-a1d1-77e8f66e8085.png",
      alt: "Yellow Colorado truck with black multi-tone designer graphics"
    },
    {
      title: "Custom Graphics",
      description: "Incorporate custom illustrations, artwork, and graphics designed specifically for your vehicle.",
      image: "/lovable-uploads/c2d02192-2880-498a-afd4-93ae0f099816.png",
      alt: "Vehicle with custom anime character artwork and graphics"
    },
    {
      title: "Reflective & Specialty",
      description: "Stand out day and night with reflective materials, glow-in-the-dark elements, and specialty finishes.",
      image: "/lovable-uploads/8d49145d-4d3f-4667-b035-9d2020ace530.png",
      alt: "Green Country Financial vehicle with professional specialty graphics"
    }
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-brand-navy mb-8">Designer Wrap Options</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {designOptions.map((option, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="aspect-video">
              <img 
                src={option.image} 
                alt={option.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-navy mb-2">{option.title}</h3>
              <p className="text-gray-700">{option.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-semibold text-brand-navy mb-3">Our Design Process</h3>
        <p className="text-gray-700 mb-4">
          Our designer wraps begin with a collaborative design process to ensure your vision comes to life exactly as you imagined:
        </p>
        <ol className="space-y-3">
          <li className="flex">
            <span className="bg-brand-navy text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
            <p>Initial consultation to understand your style preferences and vision</p>
          </li>
          <li className="flex">
            <span className="bg-brand-navy text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
            <p>Concept development with multiple design options by our graphic artists</p>
          </li>
          <li className="flex">
            <span className="bg-brand-navy text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
            <p>Digital mockups showing how the design will look on your specific vehicle</p>
          </li>
          <li className="flex">
            <span className="bg-brand-navy text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
            <p>Refinement based on your feedback until the design is perfect</p>
          </li>
          <li className="flex">
            <span className="bg-brand-navy text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
            <p>Material selection to achieve the desired visual and textural effects</p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default DesignerWrapsOptions;
