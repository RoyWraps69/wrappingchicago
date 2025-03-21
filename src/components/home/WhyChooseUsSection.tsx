
import React from 'react';
import { Shield, Users, Palette, Award } from 'lucide-react';

const WhyChooseUsSection = () => {
  const benefits = [
    {
      title: "Premium Materials",
      description: "We use only top-quality 3M and Avery vinyl materials for maximum durability and appearance.",
      icon: <Palette className="w-8 h-8 text-white" />
    },
    {
      title: "In-House Trained Professionals",
      description: "Our in-house trained professionals ensure flawless application and attention to detail.",
      icon: <Users className="w-8 h-8 text-white" />
    },
    {
      title: "Comprehensive Design",
      description: "From concept to completion, our design team will create eye-catching graphics.",
      icon: <Palette className="w-8 h-8 text-white" />
    },
    {
      title: "2-Year \"NO QUESTIONS ASKED\" Warranty",
      description: "We stand behind our work with a 2-year no questions asked warranty on all installations.",
      icon: <Shield className="w-8 h-8 text-white" />
    }
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3 text-brand-navy">Why Choose Wrapping Chicago</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            When it comes to vehicle wraps in Chicago and surrounding areas, Wrapping Chicago stands apart from the competition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="section-card p-5 flex flex-col items-center">
              <div className="w-16 h-16 mb-3 bg-brand-navy rounded-full flex items-center justify-center">
                {benefit.icon}
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
