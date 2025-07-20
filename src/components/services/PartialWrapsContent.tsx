
import React from 'react';
import PartialWrapsHero from './heroes/PartialWrapsHero';

const PartialWrapsContent: React.FC = () => {
  return (
    <>
      <PartialWrapsHero />
      <div className="container mx-auto px-4 py-12">
        <div className="bg-gray-900 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-white mb-4">Effective Partial Vehicle Wraps</h2>
      <p className="mb-6 text-gray-200">
        Partial wraps provide an excellent balance of visual impact and affordability. By strategically covering 
        portions of your vehicle with eye-catching graphics, you can achieve great brand visibility without the cost 
        of a full wrap.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-800/70 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-3">Partial Wrap Options</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-200">
            <li>Quarter wraps (25% coverage)</li>
            <li>Half wraps (50% coverage)</li>
            <li>Three-quarter wraps (75% coverage)</li>
            <li>Tailgate wraps for pickup trucks</li>
            <li>Hood wraps for added impact</li>
            <li>Side panel wraps for vans and box trucks</li>
          </ul>
        </div>
        <div className="bg-gray-800/70 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-3">Benefits of Partial Wraps</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-200">
            <li>Lower cost than full vehicle wraps</li>
            <li>Great visual impact when strategically designed</li>
            <li>Less installation time means faster turnaround</li>
            <li>Can incorporate existing vehicle color into design</li>
            <li>Easy to update or modify for different campaigns</li>
            <li>Excellent entry option for small businesses</li>
          </ul>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default PartialWrapsContent;
