
import React from 'react';
import CommercialGraphicsSEO from './CommercialGraphicsSEO';

const CommercialGraphicsContent: React.FC = () => {
  return (
    <>
      <CommercialGraphicsSEO />
      <h2 className="text-2xl font-semibold text-brand-navy mb-4">Professional Commercial Graphics</h2>
      <p className="mb-6">
        From simple lettering to complex designs, our commercial graphics solutions help businesses create 
        professional vehicle identities that stand out on the road and drive brand recognition.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-brand-light p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-brand-navy mb-3">Commercial Graphics Options</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Vehicle lettering and logos</li>
            <li>Cut vinyl graphics</li>
            <li>Window graphics and perforated film</li>
            <li>Magnetic vehicle signs</li>
            <li>Reflective graphics for increased visibility</li>
            <li>DOT numbers and regulatory markings</li>
          </ul>
        </div>
        <div className="bg-brand-light p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-brand-navy mb-3">Perfect For</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Service vehicles and contractor trucks</li>
            <li>Delivery vans and box trucks</li>
            <li>Food trucks and mobile businesses</li>
            <li>Real estate and sales vehicles</li>
            <li>Small business fleets on a budget</li>
            <li>Temporary or seasonal promotions</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CommercialGraphicsContent;
