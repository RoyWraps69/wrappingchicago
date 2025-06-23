
import React from 'react';
import { Book } from 'lucide-react';

const GlossaryHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-brand-navy to-blue-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Book className="h-10 w-10 text-brand-red mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Vehicle Wrap Glossary
            </h1>
          </div>
          <p className="text-lg md:text-xl mb-6 text-blue-100">
            Master the language of professional vehicle wrapping with 100+ essential terms
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-blue-100">
              From materials and tools to techniques and quality standards - your complete reference guide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlossaryHero;
