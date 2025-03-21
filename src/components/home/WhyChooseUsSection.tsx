
import React from 'react';

const WhyChooseUsSection = () => {
  const benefits = [
    {
      title: "Premium Materials",
      description: "We use only top-quality 3M and Avery vinyl materials for maximum durability and appearance."
    },
    {
      title: "Expert Installation",
      description: "Our certified professionals ensure flawless application and attention to detail."
    },
    {
      title: "Comprehensive Design",
      description: "From concept to completion, our design team will create eye-catching graphics."
    },
    {
      title: "5-Year Warranty",
      description: "We stand behind our work with a comprehensive 5-year warranty on all installations."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-navy">Why Choose Chicago Fleet Wraps</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            When it comes to vehicle wraps in Chicago and surrounding areas, Chicago Fleet Wraps stands apart from the competition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-brand-navy rounded-full flex items-center justify-center text-white mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-navy">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
