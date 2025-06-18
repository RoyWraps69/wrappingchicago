
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const WrapShowcase = () => {
  const showcaseItems = [
    {
      image: "/lovable-uploads/a8335462-2c63-40ad-8bd2-2aead73abfb1.png",
      title: "IDG Tech Fleet SUVs",
      description: "Consistent brand identity across technology company fleet with 'think tech' messaging.",
      category: "Fleet Wraps",
      client: "IDG Technology"
    },
    {
      image: "/lovable-uploads/cc335205-fcef-4ca9-a269-5cf6dee478ed.png",
      title: "Creative Food Truck Graphics",
      description: "Vibrant and attention-grabbing design for street food business.",
      category: "Partial Wraps",
      client: "Street Cuisine"
    },
    {
      image: "/lovable-uploads/fb7a4b97-4b57-4b2e-8f81-42a1098270df.png",
      title: "Blue Truck Commercial Graphics",
      description: "High-visibility commercial graphics with bold branding and contact information.",
      category: "Commercial Graphics",
      client: "Chicago Building Contractors"
    },
    {
      image: "/lovable-uploads/0316f206-884b-44b4-bdb3-e0f7962a1714.png",
      title: "Luxury Black Sedan",
      description: "Elegant matte black wrap enhancing the vehicle's luxury appearance.",
      category: "Color Change",
      client: "Executive Car Service"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Chicago's Premier Vehicle Wrap Portfolio
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
            From Fortune 500 companies to local entrepreneurs, see how we transform vehicles 
            into powerful marketing tools and stunning personal statements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {showcaseItems.map((item, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image}
                  alt={`${item.title} - Professional vehicle wrap project in Chicago`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block bg-brand-red text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                  <span className="text-gray-600 text-sm">{item.client}</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">{item.title}</h3>
                <p className="text-black leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-4"
            >
              <Link to="/gallery" className="inline-flex items-center">
                View Complete Gallery
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-black hover:text-white px-8 py-4"
            >
              <Link to="/contact">Get Your Quote Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WrapShowcase;
