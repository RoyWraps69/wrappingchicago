
import React from 'react';
import { Car, Truck, Users } from 'lucide-react';

const QuickLinksBar = () => {
  const mainServices = [
    {
      icon: Truck,
      title: "Truck Wraps",
      description: "Get more service calls",
      price: "From $2,800",
      url: "/truck-wraps",
      popular: true
    },
    {
      icon: Car,
      title: "Car Wraps", 
      description: "Custom vehicle graphics",
      price: "From $2,500",
      url: "/car-wraps"
    },
    {
      icon: Users,
      title: "Fleet Wraps",
      description: "Multiple vehicle deals",
      price: "Volume discounts",
      url: "/fleet-wraps"
    }
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Vehicle Wrap Services & Pricing</h2>
          <p className="text-xl text-gray-600">Transform your vehicle into a customer magnet</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {mainServices.map((service, index) => (
            <div key={index} className={`relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${service.popular ? 'border-brand-red' : 'border-gray-200'}`}>
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-red text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              
              <div className="text-center">
                <div className="bg-brand-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-3">{service.description}</p>
                <div className="text-2xl font-bold text-brand-red mb-4">{service.price}</div>
                <a 
                  href={service.url}
                  className="bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Quick action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:3125971286"
            className="bg-brand-red text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-colors text-center"
          >
            📞 Call for Instant Quote: (312) 597-1286
          </a>
          <a 
            href="/contact"
            className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-800 transition-colors text-center"
          >
            Get Free Written Estimate
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuickLinksBar;
