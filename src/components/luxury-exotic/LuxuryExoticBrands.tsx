
import React from 'react';

const LuxuryExoticBrands = () => {
  const brands = [
    {
      name: "Ferrari",
      description: "Specialized wrapping techniques for Ferrari's unique curves and design elements. Our team understands the precision required for models like the 488, F8 Tributo, and SF90 Stradale.",
      image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=800&q=80",
      alt: "Red Ferrari with premium wrap"
    },
    {
      name: "Lamborghini",
      description: "Expert handling of Lamborghini's aggressive styling and complex body panels. We've wrapped numerous Huracán, Aventador, and Urus models with flawless results.",
      image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=800&q=80",
      alt: "Lamborghini with custom wrap finish"
    },
    {
      name: "Porsche",
      description: "Precision wrapping for Porsche's iconic designs. Our team has extensive experience with 911, Taycan, Panamera, and other models in the Porsche lineup.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      alt: "Porsche sports car with premium wrap"
    },
    {
      name: "McLaren",
      description: "Specialized techniques for McLaren's advanced aerodynamics and carbon fiber components. We're experienced with models including the 720S, GT, and Artura.",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
      alt: "McLaren with custom wrap design"
    },
    {
      name: "Aston Martin",
      description: "Meticulous care for Aston Martin's elegant lines and distinctive features. Our team handles models like the DB11, Vantage, and DBS with exceptional attention to detail.",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=800&q=80",
      alt: "Aston Martin with luxury wrap finish"
    },
    {
      name: "Other Luxury Brands",
      description: "We also specialize in wrapping other high-end vehicles including Mercedes-AMG, BMW M, Audi R8, Bentley, Rolls-Royce, Maserati, and more.",
      image: "https://images.unsplash.com/photo-1549399542-7e8f2e928464?auto=format&fit=crop&w=800&q=80",
      alt: "Luxury Mercedes-Benz with premium wrap"
    }
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-brand-navy mb-8">Our Exotic Car Expertise</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {brands.map((brand, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="aspect-video">
              <img 
                src={brand.image} 
                alt={brand.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-brand-navy mb-2">{brand.name}</h3>
              <p className="text-gray-700">{brand.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-semibold text-brand-navy mb-3">Our Exotic Vehicle Credentials</h3>
        <p className="text-gray-700 mb-4">
          What sets us apart when it comes to exotic and luxury vehicles:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-semibold text-brand-navy mb-2">Specialized Training</h4>
            <p className="text-sm text-gray-700">Our team has received specialized training in handling exotic and high-end vehicles, ensuring safe and proper care throughout the wrapping process.</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-semibold text-brand-navy mb-2">Premium Materials</h4>
            <p className="text-sm text-gray-700">We exclusively use top-tier vinyl films and materials that meet or exceed the standards expected for luxury automobile applications.</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-semibold text-brand-navy mb-2">Controlled Environment</h4>
            <p className="text-sm text-gray-700">All exotic vehicle wrapping is performed in our climate-controlled facility that maintains ideal temperature and dust-free conditions.</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-semibold text-brand-navy mb-2">Extensive Portfolio</h4>
            <p className="text-sm text-gray-700">Our team has successfully wrapped hundreds of exotic and luxury vehicles over the years, building expertise with each specific make and model.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryExoticBrands;
