
import React from 'react';
import RetailGraphicsHero from './heroes/RetailGraphicsHero';

const RetailGraphicsContent: React.FC = () => {
  return (
    <>
      <RetailGraphicsHero />
      <div className="container mx-auto px-4 py-12">
        <>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Retail Graphics and Signage</h2>
      <p className="mb-6 text-gray-700">
        Enhance your retail space with our custom window wraps, wall graphics, and storefront signage. 
        Our retail graphics solutions help you create an immersive brand experience that attracts customers 
        and communicates your message effectively.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Retail Graphics Options</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Storefront window graphics</li>
            <li>One-way window vision films</li>
            <li>Floor graphics and decals</li>
            <li>Wall murals and displays</li>
            <li>Point-of-purchase displays</li>
            <li>Temporary promotional signage</li>
          </ul>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Ideal Applications</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Retail shops and boutiques</li>
            <li>Restaurant and cafe storefronts</li>
            <li>Pop-up stores and kiosks</li>
            <li>Trade show booths and displays</li>
            <li>Office spaces and reception areas</li>
            <li>Seasonal displays and promotions</li>
          </ul>
        </div>
      </div>
        </>
      </div>
    </>
  );
};

export default RetailGraphicsContent;
