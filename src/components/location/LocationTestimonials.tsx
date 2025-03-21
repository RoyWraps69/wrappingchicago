
import React from 'react';
import { City } from '@/data/cities';
import { Quote } from 'lucide-react';

interface LocationTestimonialsProps {
  city: City;
}

const LocationTestimonials = ({ city }: LocationTestimonialsProps) => {
  // Generate city-specific testimonials
  const generateTestimonials = (city: City) => {
    return [
      {
        name: `John ${city.name.charAt(0)}${city.name.slice(1, 3).toLowerCase()}`,
        business: `${city.name} Plumbing Services`,
        text: `Wrapping Chicago transformed our entire fleet of service vans, and the results have been incredible. We've seen a notable increase in calls from ${city.name} residents who saw our vans around town. The quality of work is outstanding, and the customer service was excellent. The team was professional from start to finish.`
      },
      {
        name: `Sarah ${city.name.charAt(0)}${city.name.slice(1, 3).toLowerCase()}`,
        business: `${city.name} Local Cafe`,
        text: `As a small business owner in ${city.name}, visibility is everything. The team at Wrapping Chicago designed and installed a beautiful wrap for our delivery car that perfectly captures our brand. It's like having a mobile billboard throughout ${city.county}! The attention to detail and quality of materials used has me recommending them to everyone.`
      },
      {
        name: `Mike ${city.name.charAt(0)}${city.name.slice(1, 3).toLowerCase()}`,
        business: `Personal Vehicle Owner in ${city.name}`,
        text: `I wanted to change the color of my car without affecting the resale value. The color change wrap from Wrapping Chicago looks better than I imagined. The matte black finish turns heads everywhere I drive in ${city.name}. Worth every penny! Their customer service was outstanding and they completed the job ahead of schedule.`
      }
    ];
  };

  const testimonials = generateTestimonials(city);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2 text-center text-brand-navy">
          What Our {city.name} Customers Say
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Don't just take our word for it. Here's what customers in {city.name} have to say about our vehicle wrap services.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-brand-light rounded-lg shadow-md relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-gray-200" />
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
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationTestimonials;
