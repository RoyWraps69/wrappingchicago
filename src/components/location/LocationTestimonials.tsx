
import React from 'react';
import { City } from '@/data/cities';

interface LocationTestimonialsProps {
  city: City;
}

const LocationTestimonials = ({ city }: LocationTestimonialsProps) => {
  const testimonials = [
    {
      name: "John Smith",
      business: "Smith Plumbing",
      text: `Chicago Fleet Wraps transformed our entire fleet of service vans, and the results have been incredible. We've seen a notable increase in calls from ${city.name} residents who saw our vans around town. The quality of work is outstanding, and the customer service was excellent.`
    },
    {
      name: "Sarah Johnson",
      business: "Local Cafe",
      text: `As a small business owner in ${city.name}, visibility is everything. The team at Chicago Fleet Wraps designed and installed a beautiful wrap for our delivery car that perfectly captures our brand. It's like having a mobile billboard throughout ${city.county}!`
    },
    {
      name: "Mike Williams",
      business: "Personal Vehicle Owner",
      text: `I wanted to change the color of my car without affecting the resale value. The color change wrap from Chicago Fleet Wraps looks better than I imagined. The matte black finish turns heads everywhere I drive in ${city.name}. Worth every penny!`
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center text-brand-navy">
          What Our {city.name} Customers Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-brand-light rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-brand-navy flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-brand-navy">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                </div>
              </div>
              <p className="italic text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationTestimonials;
