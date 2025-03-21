
import React from 'react';

const ColorChangeProcess = () => {
  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      description: "We'll discuss your vision, vehicle type, and help you select the perfect color and finish."
    },
    {
      number: "02",
      title: "Custom Quote",
      description: "Receive a detailed quote based on your vehicle and selected wrap options, typically same-day."
    },
    {
      number: "03",
      title: "Design Approval",
      description: "View digital mockups of how your vehicle will look with the new color wrap."
    },
    {
      number: "04",
      title: "Vehicle Preparation",
      description: "Your vehicle is thoroughly cleaned, decontaminated, and prepped for wrapping."
    },
    {
      number: "05",
      title: "Professional Installation",
      description: "Our certified installers apply the vinyl wrap with precision, typically taking 3-5 days."
    },
    {
      number: "06",
      title: "Final Inspection",
      description: "We perform a detailed quality check before returning your transformed vehicle."
    }
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-brand-navy mb-8">Our Color Change Wrap Process</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {processSteps.map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-navy">
            <div className="text-3xl font-bold text-brand-red mb-3">{step.number}</div>
            <h3 className="text-xl font-semibold text-brand-navy mb-2">{step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-brand-light p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-brand-navy mb-3">Color Change Wrap FAQs</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-brand-navy mb-1">How long does a color change wrap last?</h4>
            <p className="text-gray-700">
              With proper care and maintenance, our premium color change wraps typically last 5-7 years. 
              Factors affecting longevity include exposure to extreme weather, storage conditions, and maintenance.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-brand-navy mb-1">Can I wash my wrapped vehicle?</h4>
            <p className="text-gray-700">
              Yes, you can wash your wrapped vehicle, but we recommend hand washing with mild soap and water. 
              Avoid high-pressure washes and automated car washes with brushes as they can damage the edges of the wrap.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-brand-navy mb-1">Is a color change wrap removable?</h4>
            <p className="text-gray-700">
              Yes, our professional-grade wraps are completely removable, leaving your original paint intact and protected. 
              This makes it ideal for leased vehicles or if you want to change colors in the future.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-brand-navy mb-1">How much does a color change wrap cost?</h4>
            <p className="text-gray-700">
              Pricing depends on vehicle size, complexity, and the specific vinyl selected. Full color change wraps 
              typically range from $2,800 to $6,000. Contact us for a personalized quote for your specific vehicle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorChangeProcess;
