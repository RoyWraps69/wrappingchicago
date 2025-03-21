
import React from 'react';

const SpecialtyWrapsContent: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold text-brand-navy mb-4">Specialty Vehicle Wraps</h2>
      <p className="mb-6 text-gray-700">
        Stand out from the crowd with our specialty vehicle wraps. These premium wrapping options include unique 
        finishes, textures, and effects that can't be achieved with traditional paint or basic vinyl wraps.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-brand-navy mb-3">Specialty Finishes</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Chrome and mirror metallic wraps</li>
            <li>Color-shifting chameleon wraps</li>
            <li>Carbon fiber and brushed metal textures</li>
            <li>Matte and satin luxury finishes</li>
            <li>Glow-in-the-dark and reflective options</li>
            <li>Custom patterns and textures</li>
          </ul>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-brand-navy mb-3">Perfect For</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Luxury and sports vehicles</li>
            <li>Promotional and event vehicles</li>
            <li>Custom car enthusiasts</li>
            <li>Businesses wanting a premium appearance</li>
            <li>Show cars and display vehicles</li>
            <li>Unique branding opportunities</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SpecialtyWrapsContent;
