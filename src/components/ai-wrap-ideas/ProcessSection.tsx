
import React from 'react';

const ProcessSection = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        <h2 className="text-2xl font-bold text-brand-navy mb-3">From Concept to Completion: How Our Process Works</h2>
        <p className="text-gray-700 mb-6">
          Our AI-powered design assistant is just the first step in creating your perfect vehicle wrap. Here's how we use this technology to deliver exceptional results.
        </p>
        
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              title: "1. AI-Powered Exploration",
              description: "Share your vision and let our AI create visual concepts that help us understand exactly what you're looking for."
            },
            {
              title: "2. Professional Refinement",
              description: "Our expert designers take your favorite AI concepts and refine them with industry expertise and brand strategy."
            },
            {
              title: "3. Production & Installation",
              description: "We transform the approved design into a high-quality vehicle wrap installed by certified technicians."
            }
          ].map((step, index) => (
            <div key={index} className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-bold text-brand-navy mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-5 bg-brand-light rounded-lg">
          <p className="text-lg font-medium text-brand-navy">
            "The AI design tool helped us communicate our vision much more clearly. Instead of struggling to explain what we wanted, we could show the design team exactly what we had in mind. The final wrap exceeded our expectations!"
          </p>
          <p className="mt-3 font-medium">— Chicago Business Owner</p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
