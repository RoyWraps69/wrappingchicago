
import React from 'react';
import ProtectiveFilmsHero from './heroes/ProtectiveFilmsHero';

const ProtectiveFilmsContent: React.FC = () => {
  return (
    <>
      <ProtectiveFilmsHero />
      <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vehicle Protective Films</h2>
      <p className="mb-6 text-gray-700">
        Protect your vehicle's paint and finish with our high-quality protective films. These transparent films provide 
        a barrier against road debris, stone chips, bug splatters, and minor abrasions while preserving your vehicle's appearance.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Protection Options</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Full vehicle protection films</li>
            <li>Hood, bumper, and fender protection</li>
            <li>Door edge and handle protection</li>
            <li>Headlight protection films</li>
            <li>Self-healing films for minor scratches</li>
            <li>Ceramic-coated protection films</li>
          </ul>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits of Protective Films</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Preserves paint and resale value</li>
            <li>Nearly invisible protection</li>
            <li>Shields against road debris and environmental damage</li>
            <li>Reduces maintenance costs over time</li>
            <li>Many films come with multi-year warranties</li>
            <li>Can be removed without damaging paint</li>
          </ul>
        </div>
        </div>
      </div>
    </>
  );
};

export default ProtectiveFilmsContent;
