
import React, { useState, useEffect } from 'react';
import { Shield, Award, Star, Truck } from 'lucide-react';

const TrustIndicators = () => {
  const [wrapCount, setWrapCount] = useState(16488);
  
  useEffect(() => {
    // Calculate additional wraps based on days since Jan 1, 2024
    const startDate = new Date('2024-01-01').getTime();
    const currentDate = new Date().getTime();
    const daysSinceStart = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
    const additionalWraps = daysSinceStart * 2; // 2 wraps per day
    
    // Set initial count
    setWrapCount(16488 + additionalWraps);
    
    // Update counter in real-time (increment by 2 per day)
    const intervalId = setInterval(() => {
      setWrapCount(prevCount => {
        // Get current date and calculate new count
        const newCurrentDate = new Date().getTime();
        const newDaysSinceStart = Math.floor((newCurrentDate - startDate) / (1000 * 60 * 60 * 24));
        const newAdditionalWraps = newDaysSinceStart * 2;
        return 16488 + newAdditionalWraps;
      });
    }, 86400000); // Update every day
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-10 bg-brand-navy text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white shadow-sm">Chicago's Most Trusted Vehicle Wrap Provider</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-brand-black/30 p-6 rounded-lg backdrop-blur-sm">
            <div className="flex justify-center mb-3">
              <Truck className="h-12 w-12 text-brand-gold" />
            </div>
            <div className="text-4xl font-bold mb-2 text-white">{wrapCount.toLocaleString()}</div>
            <p className="text-white">Vehicle Wraps Completed</p>
          </div>
          
          <div className="bg-brand-black/30 p-6 rounded-lg backdrop-blur-sm">
            <div className="flex justify-center mb-3">
              <Star className="h-12 w-12 text-brand-gold" />
            </div>
            <div className="text-4xl font-bold mb-2 text-white">4.9/5</div>
            <p className="text-white">Customer Rating</p>
          </div>
          
          <div className="bg-brand-black/30 p-6 rounded-lg backdrop-blur-sm">
            <div className="flex justify-center mb-3">
              <Award className="h-12 w-12 text-brand-gold" />
            </div>
            <div className="text-4xl font-bold mb-2 text-white">15+</div>
            <p className="text-white">Years Experience</p>
          </div>
          
          <div className="bg-brand-black/30 p-6 rounded-lg backdrop-blur-sm">
            <div className="flex justify-center mb-3">
              <Shield className="h-12 w-12 text-brand-gold" />
            </div>
            <div className="text-4xl font-bold mb-2 text-white">2 Years</div>
            <p className="text-white">Warranty on All Wraps</p>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 text-white text-center">
            <p className="font-medium">Premium Avery and 3M materials with certified installation technicians</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
