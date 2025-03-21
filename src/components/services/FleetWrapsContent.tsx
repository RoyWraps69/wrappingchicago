
import React from 'react';

const FleetWrapsContent: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold text-brand-navy mb-4">Fleet Vehicle Wrapping Services</h2>
      <p className="mb-6">
        Make your company vehicles work harder for your business with our professional fleet wrapping services. 
        A wrapped fleet creates thousands of impressions every day, turning your vehicles into powerful mobile 
        billboards that generate leads and build brand recognition 24/7.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-brand-light p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-brand-navy mb-3">Benefits of Fleet Wraps</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Create thousands of impressions daily</li>
            <li>Lower cost-per-impression than traditional advertising</li>
            <li>Build brand consistency across your entire fleet</li>
            <li>Protect your vehicles' original paint</li>
            <li>Easy to update or remove without damage</li>
            <li>Typically lasts 5-7 years with proper care</li>
          </ul>
        </div>
        <div className="bg-brand-light p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-brand-navy mb-3">Our Fleet Wrap Process</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Initial consultation to understand your needs</li>
            <li>Professional design tailored to your brand</li>
            <li>Vehicle measurement and template creation</li>
            <li>High-quality printing on premium 3M vinyl</li>
            <li>Expert installation by our in-house trained technicians</li>
            <li>Final inspection and quality assurance</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default FleetWrapsContent;
