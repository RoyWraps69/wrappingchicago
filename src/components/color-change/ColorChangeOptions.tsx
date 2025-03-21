
import React from 'react';

const ColorChangeOptions = () => {
  const colorOptions = [
    {
      title: "Matte Finish",
      description: "Non-reflective, sophisticated finish that adds a premium, stealth look to any vehicle.",
      image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80",
      alt: "Luxury sports car with matte black wrap"
    },
    {
      title: "Gloss Finish",
      description: "Vibrant, high-shine finish that enhances your vehicle's lines and creates a showroom-quality appearance.",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80",
      alt: "Sports car with glossy blue wrap"
    },
    {
      title: "Satin Finish",
      description: "The perfect middle ground between matte and gloss, offering a subtle sheen with an elegant look.",
      image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=800&q=80",
      alt: "Luxury sedan with satin silver wrap"
    },
    {
      title: "Chrome & Metallic",
      description: "Eye-catching reflective finishes that create a stunning, mirror-like or metallic appearance.",
      image: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?auto=format&fit=crop&w=800&q=80",
      alt: "Sports car with chrome finish wrap"
    },
    {
      title: "Color Shift",
      description: "Advanced vinyl that changes color depending on the viewing angle and lighting conditions.",
      image: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?auto=format&fit=crop&w=800&q=80",
      alt: "Supercar with color shifting wrap that changes from purple to blue"
    },
    {
      title: "Custom Colors",
      description: "Match any specific color or create a fully custom finish for a truly unique vehicle.",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
      alt: "Sports car with custom color wrap"
    }
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-brand-navy mb-8">Color Change Wrap Options</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {colorOptions.map((option, index) => (
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
        <h3 className="text-xl font-semibold text-brand-navy mb-3">Premium Vinyl Brands</h3>
        <p className="text-gray-700 mb-4">
          We exclusively use the highest quality vinyl films from industry-leading manufacturers including:
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="bg-white px-4 py-3 rounded-md shadow-sm">
            <span className="font-semibold">3M™</span> 2080 Series
          </div>
          <div className="bg-white px-4 py-3 rounded-md shadow-sm">
            <span className="font-semibold">Avery Dennison</span> Supreme Wrapping Film
          </div>
          <div className="bg-white px-4 py-3 rounded-md shadow-sm">
            <span className="font-semibold">KPMF</span> Premium Series
          </div>
          <div className="bg-white px-4 py-3 rounded-md shadow-sm">
            <span className="font-semibold">Oracal</span> 970RA & 975
          </div>
          <div className="bg-white px-4 py-3 rounded-md shadow-sm">
            <span className="font-semibold">HEXIS</span> HX20000 Series
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorChangeOptions;
