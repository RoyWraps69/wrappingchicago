import React from 'react';
import ColorChangeWrapsHero from './heroes/ColorChangeWrapsHero';

const ColorChangeWrapsContent: React.FC = () => {
  return (
    <>
      <ColorChangeWrapsHero />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Premium Color Change Wraps</h2>
        <p className="mb-6 text-gray-700">
          Want a new look for your vehicle without the permanence of paint? Our color change wraps allow you to 
          completely transform your vehicle's appearance with premium vinyl wraps available in virtually any color or finish.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Available Finishes</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Gloss - High-shine, paint-like finish</li>
              <li>Matte - Sophisticated, non-reflective look</li>
              <li>Satin - Subtle sheen between gloss and matte</li>
              <li>Metallic - Eye-catching metallic effects</li>
              <li>Carbon Fiber - Textured, technical appearance</li>
              <li>Color Shift - Changes color depending on viewing angle</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits of Color Change Wraps</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Non-permanent alternative to paint</li>
              <li>Protects original paint and resale value</li>
              <li>Fraction of the cost of a quality paint job</li>
              <li>Easily removable when you want a change</li>
              <li>Typically lasts 3-5 years with proper care</li>
              <li>Unique finishes not possible with traditional paint</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorChangeWrapsContent;