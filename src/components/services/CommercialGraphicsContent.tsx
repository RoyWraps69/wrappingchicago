
import React from 'react';

const CommercialGraphicsContent: React.FC = () => {
  return (
    <article>
      <header className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-4">
          Professional Commercial Graphics in Chicago
        </h2>
        <p className="text-lg mb-6">
          From simple lettering to complex designs, our commercial graphics solutions help businesses create 
          professional vehicle identities that stand out on the road and drive brand recognition.
        </p>
      </header>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <section className="bg-brand-light p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-brand-navy mb-3">Commercial Graphics Options</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Vehicle lettering and logos</li>
            <li>Cut vinyl graphics</li>
            <li>Window graphics and perforated film</li>
            <li>Magnetic vehicle signs</li>
            <li>Reflective graphics for increased visibility</li>
            <li>DOT numbers and regulatory markings</li>
          </ul>
        </section>
        
        <section className="bg-brand-light p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-brand-navy mb-3">Perfect For</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Service vehicles and contractor trucks</li>
            <li>Delivery vans and box trucks</li>
            <li>Food trucks and mobile businesses</li>
            <li>Real estate and sales vehicles</li>
            <li>Small business fleets on a budget</li>
            <li>Temporary or seasonal promotions</li>
          </ul>
        </section>
      </div>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold text-brand-navy mb-4">Why Choose Our Commercial Graphics?</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <h4 className="font-semibold text-brand-navy mb-2">Premium Materials</h4>
            <p className="text-sm text-gray-600">High-quality 3M vinyl that lasts 5-7 years</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <h4 className="font-semibold text-brand-navy mb-2">Expert Design</h4>
            <p className="text-sm text-gray-600">Professional designers create impactful graphics</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <h4 className="font-semibold text-brand-navy mb-2">Fast Installation</h4>
            <p className="text-sm text-gray-600">Quick turnaround to get you back on the road</p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default CommercialGraphicsContent;
