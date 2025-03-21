
import React from 'react';

const DesignerWrapsOptions = () => {
  const designOptions = [
    {
      title: "Custom Patterns",
      description: "Unique geometric patterns, abstract designs, and artistic motifs that transform your vehicle into moving art.",
      image: "https://images.unsplash.com/photo-1605152322258-121402f52eef?auto=format&fit=crop&w=800&q=80",
      alt: "Sports car with geometric pattern wrap design"
    },
    {
      title: "Color Shift & Chameleon",
      description: "Advanced vinyl that changes colors as light hits from different angles, creating a mesmerizing effect.",
      image: "https://images.unsplash.com/photo-1570324165334-8b5be4bea06f?auto=format&fit=crop&w=800&q=80",
      alt: "Sports car with color shifting wrap that changes from purple to teal"
    },
    {
      title: "Textured Finishes",
      description: "Add visual and tactile depth with carbon fiber, brushed metal, leather, or wood grain textures.",
      image: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=800&q=80",
      alt: "Luxury car with carbon fiber textured wrap elements"
    },
    {
      title: "Multi-Tone & Fades",
      description: "Combine multiple colors with professional fades and transitions for a custom, premium appearance.",
      image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=800&q=80",
      alt: "Sports car with two-tone wrap featuring color fade"
    },
    {
      title: "Custom Graphics",
      description: "Incorporate custom illustrations, artwork, and graphics designed specifically for your vehicle.",
      image: "https://images.unsplash.com/photo-1570324404364-f0b60fa6a1de?auto=format&fit=crop&w=800&q=80",
      alt: "Vehicle with custom graphic artwork wrap"
    },
    {
      title: "Reflective & Specialty",
      description: "Stand out day and night with reflective materials, glow-in-the-dark elements, and specialty finishes.",
      image: "https://images.unsplash.com/photo-1563723498198-0caae5b24a68?auto=format&fit=crop&w=800&q=80",
      alt: "Sports car with reflective wrap elements"
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
