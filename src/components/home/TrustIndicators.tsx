
import React, { useEffect, useState } from 'react';

const TrustIndicators: React.FC = () => {
  const [wrapCount, setWrapCount] = useState(16488);
  
  // Calculate wraps completed (2 per day since starting count)
  useEffect(() => {
    // Starting date of count (today)
    const startDate = new Date();
    
    // Update wrap count periodically
    const interval = setInterval(() => {
      // Get current date
      const currentDate = new Date();
      
      // Calculate days difference
      const timeDiff = currentDate.getTime() - startDate.getTime();
      const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
      
      // 2 wraps per day
      const newWraps = daysDiff * 2;
      
      // Update count (base + new wraps)
      setWrapCount(16488 + newWraps);
    }, 1000 * 60 * 60); // Update every hour
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-10 border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">
            Chicago's Most Trusted Vehicle Wrap Provider
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            From car wraps to truck wraps, van wraps, and fleet graphics, we deliver premium quality
            vehicle wraps with experienced installation and long-lasting results using Avery and 3M materials.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="font-bold text-3xl text-brand-red mb-1">2+ Years</div>
            <p className="text-gray-700">Warranty Protection</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="font-bold text-3xl text-brand-red mb-1">Avery & 3M</div>
            <p className="text-gray-700">Premium Materials</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="font-bold text-3xl text-brand-red mb-1" aria-live="polite">
              {wrapCount.toLocaleString()}+
            </div>
            <p className="text-gray-700">Vehicle Wraps Completed</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="font-bold text-3xl text-brand-red mb-1">5★</div>
            <p className="text-gray-700">Customer Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;
