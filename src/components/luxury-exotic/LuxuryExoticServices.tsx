
import React from 'react';
import { Shield, Sparkles, Zap, BarChart4, PaintBucket, CircleDollarSign } from 'lucide-react';

const LuxuryExoticServices = () => {
  const services = [
    {
      icon: <PaintBucket className="h-10 w-10 text-brand-navy" />,
      title: "Premium Color Change Wraps",
      description: "Transform your exotic vehicle with our premium color change wraps, available in matte, gloss, satin, metallic, and chrome finishes. We offer exclusive colors and textures specifically selected for high-end automobiles."
    },
    {
      icon: <Shield className="h-10 w-10 text-brand-navy" />,
      title: "Paint Protection Film",
      description: "Preserve your exotic car's pristine finish with our ultra-clear paint protection film (PPF). This virtually invisible shield protects against stone chips, road debris, and minor scratches while maintaining the factory appearance."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-brand-navy" />,
      title: "Custom Designer Wraps",
      description: "Make a statement with our bespoke designer wraps created specifically for your exotic vehicle. From subtle accents to complete transformations, our design team will create a unique look that enhances your car's distinctive character."
    },
    {
      icon: <Zap className="h-10 w-10 text-brand-navy" />,
      title: "Ceramic Coating",
      description: "Add an additional layer of protection with our ceramic coating services, providing enhanced gloss, chemical resistance, and UV protection for your wrapped exotic vehicle. This premium treatment extends the life and appearance of your wrap."
    },
    {
      icon: <BarChart4 className="h-10 w-10 text-brand-navy" />,
      title: "Accents & Styling Elements",
      description: "Enhance your exotic car with custom accents and styling elements. From carbon fiber accents to racing stripes, roof wraps, and mirror caps, we offer precision installation of detail elements that complement your vehicle's design."
    },
    {
      icon: <CircleDollarSign className="h-10 w-10 text-brand-navy" />,
      title: "Concierge Services",
      description: "Experience our white-glove concierge service for exotic car owners. We offer secure transportation, climate-controlled storage during multi-day installations, and flexible scheduling to accommodate your lifestyle."
    }
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-brand-navy mb-8">Premium Services for Exotic & Luxury Vehicles</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-navy">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-brand-navy mb-3">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-brand-light p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-brand-navy mb-3">The Exotic Car Wrapping Process</h3>
        
        <ol className="space-y-6">
          <li className="flex">
            <div className="bg-brand-navy text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">1</div>
            <div>
              <h4 className="font-semibold text-brand-navy mb-1">Private Consultation</h4>
              <p className="text-gray-700">
                We begin with a private consultation to understand your vision for your exotic vehicle. Our team will discuss 
                options, show material samples, and provide expert recommendations based on your specific make and model.
              </p>
            </div>
          </li>
          
          <li className="flex">
            <div className="bg-brand-navy text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">2</div>
            <div>
              <h4 className="font-semibold text-brand-navy mb-1">Custom Solution Design</h4>
              <p className="text-gray-700">
                Our design team creates a detailed plan for your vehicle, considering its unique body lines, aerodynamic elements, 
                and special features. We'll provide digital mockups to visualize the final result.
              </p>
            </div>
          </li>
          
          <li className="flex">
            <div className="bg-brand-navy text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">3</div>
            <div>
              <h4 className="font-semibold text-brand-navy mb-1">Meticulous Preparation</h4>
              <p className="text-gray-700">
                Your exotic vehicle undergoes thorough preparation in our climate-controlled facility. This includes 
                detailed cleaning, decontamination, and surface preparation to ensure perfect adhesion and quality results.
              </p>
            </div>
          </li>
          
          <li className="flex">
            <div className="bg-brand-navy text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">4</div>
            <div>
              <h4 className="font-semibold text-brand-navy mb-1">Expert Installation</h4>
              <p className="text-gray-700">
                Our specialized exotic car installers apply the wrap with meticulous attention to detail. Complex curves, recessed areas, 
                and body panel gaps are handled with precision techniques developed specifically for high-end vehicles.
              </p>
            </div>
          </li>
          
          <li className="flex">
            <div className="bg-brand-navy text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">5</div>
            <div>
              <h4 className="font-semibold text-brand-navy mb-1">Quality Inspection</h4>
              <p className="text-gray-700">
                Once installation is complete, your vehicle undergoes a comprehensive quality inspection. We verify every detail
                to ensure perfect application, smooth edges, and flawless finish throughout the vehicle.
              </p>
            </div>
          </li>
          
          <li className="flex">
            <div className="bg-brand-navy text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">6</div>
            <div>
              <h4 className="font-semibold text-brand-navy mb-1">Delivery & Aftercare</h4>
              <p className="text-gray-700">
                We deliver your transformed exotic vehicle along with detailed care instructions and a premium maintenance kit. 
                Our aftercare support ensures your wrap maintains its stunning appearance for years to come.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default LuxuryExoticServices;
