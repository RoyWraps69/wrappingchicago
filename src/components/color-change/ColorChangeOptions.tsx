
import React from 'react';

const ColorChangeOptions = () => {
  const colorOptions = [
    {
      title: "Matte Finish",
      description: "Non-reflective, sophisticated finish that adds a premium, stealth look to any vehicle.",
      image: "/lovable-uploads/0316f206-884b-44b4-bdb3-e0f7962a1714.png",
      alt: "Mercedes sedan with matte black color change wrap"
    },
    {
      title: "Gloss Finish",
      description: "Vibrant, high-shine finish that enhances your vehicle's lines and creates a showroom-quality appearance.",
      image: "/lovable-uploads/9de106b5-94cb-4fd1-a7c7-5c75c75b7cbb.png",
      alt: "BMW sports car with metallic blue gloss finish"
    },
    {
      title: "Satin Finish",
      description: "The perfect middle ground between matte and gloss, offering a subtle sheen with an elegant look.",
      image: "/lovable-uploads/020ef79d-a051-4f6f-9c1e-d4ded8bf2260.png",
      alt: "Tesla Cybertruck with satin black color change wrap"
    },
    {
      title: "Chrome & Metallic",
      description: "Eye-catching reflective finishes that create a stunning, mirror-like or metallic appearance.",
      image: "/lovable-uploads/e021924c-a0a1-407c-9d11-13372909975f.png",
      alt: "Jeep Grand Cherokee with matte black metallic finish"
    },
    {
      title: "Color Shift",
      description: "Advanced vinyl that changes color depending on the viewing angle and lighting conditions.",
      image: "/lovable-uploads/39639a03-62f6-4030-8282-2fcb749e3e39.png",
      alt: "Sports car with purple to blue gradient color shift wrap"
    },
    {
      title: "Custom Colors",
      description: "Match any specific color or create a fully custom finish for a truly unique vehicle.",
      image: "/lovable-uploads/c2d02192-2880-498a-afd4-93ae0f099816.png",
      alt: "Custom anime character wrap with vibrant yellow and artistic design"
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
