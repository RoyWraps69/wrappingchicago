
import React from 'react';
import { Shield, Users, Palette, Award, Clock, Wrench, Truck, ThumbsUp } from 'lucide-react';

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
      icon: <Wrench className="w-8 h-8 text-white" />
    },
    {
      title: "2-Year \"NO QUESTIONS ASKED\" Warranty",
      description: "We stand behind our work with a 2-year no questions asked warranty on all installations.",
      icon: <Shield className="w-8 h-8 text-white" />
    },
    {
      title: "Fast Turnaround Times",
      description: "We understand your time is valuable. Most projects are completed within 3-5 business days.",
      icon: <Clock className="w-8 h-8 text-white" />
    },
    {
      title: "Expert Vehicle Handling",
      description: "Your vehicle is in safe hands with our team's extensive automotive experience.",
      icon: <Truck className="w-8 h-8 text-white" />
    },
    {
      title: "Competitive Pricing",
      description: "High-quality wraps at competitive prices to maximize your advertising budget.",
      icon: <Award className="w-8 h-8 text-white" />
    },
    {
      title: "Satisfaction Guaranteed",
      description: "We're not happy until you're completely satisfied with your vehicle transformation.",
      icon: <ThumbsUp className="w-8 h-8 text-white" />
    }
  ];

  return (
    <section className="py-10 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3 text-white">Why Choose Wrapping Chicago</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            When it comes to vehicle wraps in Chicago and surrounding areas, Wrapping Chicago stands apart from the competition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="section-card p-5 flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-16 h-16 mb-4 bg-gradient-to-r from-brand-navy to-brand-red rounded-full flex items-center justify-center shadow-md">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
              <p className="text-gray-200 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
