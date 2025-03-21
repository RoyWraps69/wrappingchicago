
import React from 'react';
import { Zap, Clock, DollarSign, LightbulbIcon } from 'lucide-react';

const ValueProposition = () => {
  return <section className="py-10 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-brand-navy mb-3">Why Use Our AI Wrap Designer?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            The AI generator helps us understand your vision with precision, eliminating the frustration of miscommunications and design revisions before creating your wrap with premium Avery and 3M materials.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 p-5 rounded-lg text-center hover:shadow-md transition-shadow">
            <div className="bg-brand-navy/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
              <Zap className="h-7 w-7 text-brand-navy" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-2">Visualize Your Ideas</h3>
            <p className="text-gray-700">
              See your concepts come to life before committing to a design, helping you refine your vision with confidence.
            </p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg text-center hover:shadow-md transition-shadow">
            <div className="bg-brand-navy/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="h-7 w-7 text-brand-navy" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-2">Save Time</h3>
            <p className="text-gray-700">
              Reduce back-and-forth revisions and shorten your project timeline by starting with clear visual concepts.
            </p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg text-center hover:shadow-md transition-shadow">
            <div className="bg-brand-navy/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
              <DollarSign className="h-7 w-7 text-brand-navy" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-2">Reduce Costs</h3>
            <p className="text-gray-700">
              Minimize expensive design changes by exploring multiple concepts before production begins.
            </p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg text-center hover:shadow-md transition-shadow">
            <div className="bg-brand-navy/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
              <LightbulbIcon className="h-7 w-7 text-brand-navy" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-2">Spark Inspiration</h3>
            <p className="text-gray-700">
              Discover creative directions you might not have considered, expanding your branding possibilities.
            </p>
          </div>
        </div>
        
        <div className="mt-8 bg-brand-navy/5 p-6 rounded-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-4 md:mb-0 md:pr-6">
              <h3 className="text-2xl font-bold text-brand-navy mb-3">Bridging the Communication Gap</h3>
              <p className="text-gray-700 mb-3">
                One of the biggest challenges in vehicle wrap design is translating your vision into reality. Our AI tool bridges that gap by creating visual concepts based on your descriptions.
              </p>
              <p className="text-gray-700">
                By generating images that reflect your ideas, we can better understand your preferences for style, color, layout, and overall aesthetic. This helps us create a final design using Avery and 3M materials that truly represents your brand and meets your expectations from the start.
              </p>
            </div>
            <div className="md:w-1/3">
              <img alt="Vehicle wrap design process" className="rounded-lg shadow-lg" src="/lovable-uploads/c4a531de-bb9d-47ee-8771-598051ce485e.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default ValueProposition;
