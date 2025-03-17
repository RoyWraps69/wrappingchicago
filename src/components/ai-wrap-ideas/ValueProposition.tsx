
import React from 'react';
import { Zap, Clock, DollarSign, LightbulbIcon } from 'lucide-react';

const ValueProposition = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Why Use Our AI Wrap Designer?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            The AI generator helps us understand your vision with precision, eliminating the frustration of miscommunications and design revisions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
            <div className="bg-brand-navy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-brand-navy" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-2">Visualize Your Ideas</h3>
            <p className="text-gray-700">
              See your concepts come to life before committing to a design, helping you refine your vision with confidence.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
            <div className="bg-brand-navy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-brand-navy" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-2">Save Time</h3>
            <p className="text-gray-700">
              Reduce back-and-forth revisions and shorten your project timeline by starting with clear visual concepts.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
            <div className="bg-brand-navy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-8 w-8 text-brand-navy" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-2">Reduce Costs</h3>
            <p className="text-gray-700">
              Minimize expensive design changes by exploring multiple concepts before production begins.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
            <div className="bg-brand-navy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <LightbulbIcon className="h-8 w-8 text-brand-navy" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-2">Spark Inspiration</h3>
            <p className="text-gray-700">
              Discover creative directions you might not have considered, expanding your branding possibilities.
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-brand-navy/5 p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Bridging the Communication Gap</h3>
              <p className="text-gray-700 mb-4">
                One of the biggest challenges in vehicle wrap design is translating your vision into reality. Our AI tool bridges that gap by creating visual concepts based on your descriptions.
              </p>
              <p className="text-gray-700">
                By generating images that reflect your ideas, we can better understand your preferences for style, color, layout, and overall aesthetic. This helps us create a final design that truly represents your brand and meets your expectations from the start.
              </p>
            </div>
            <div className="md:w-1/3">
              <img 
                src="/lovable-uploads/efc6c586-8651-43ad-811a-b896a91a1b69.png" 
                alt="Vehicle wrap design process" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
