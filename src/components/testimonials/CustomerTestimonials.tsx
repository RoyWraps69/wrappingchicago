
import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  vehicle: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mike Thompson",
    location: "Chicago, IL",
    rating: 5,
    text: "Absolutely incredible work! My food truck wrap has increased my business by 40%. The design is eye-catching and the installation was flawless.",
    vehicle: "Food Truck Wrap",
    image: "/lovable-uploads/fc2146ab-62aa-4fc9-85aa-3582af7ce980.png"
  },
  {
    id: 2,
    name: "Sarah Mitchell", 
    location: "Naperville, IL",
    rating: 5,
    text: "I wanted a color change for my Tesla and they delivered beyond my expectations. The matte black finish looks amazing and has held up perfectly for 2 years.",
    vehicle: "Tesla Model S Color Change",
    image: "/lovable-uploads/676b4902-7b81-4619-90d8-8feb1f986636.png"
  },
  {
    id: 3,
    name: "Chicago Plumbing Co.",
    location: "Schaumburg, IL", 
    rating: 5,
    text: "We wrapped our entire fleet of 12 vehicles. Professional service, great pricing, and our phones haven't stopped ringing since! Highly recommend.",
    vehicle: "Fleet Wraps",
    image: "/lovable-uploads/230338ed-a8d9-4584-bb4c-ba33c793f7ab.png"
  },
  {
    id: 4,
    name: "Jessica Rodriguez",
    location: "Oak Park, IL",
    rating: 5,
    text: "The team at Wrapping Chicago made my business van look like a million bucks. Customer inquiries have tripled since getting the wrap installed.",
    vehicle: "Commercial Van Wrap",
    image: "/lovable-uploads/efdbc4bf-1f04-42bb-a904-f52dae7bef6c.png"
  },
  {
    id: 5,
    name: "David Chen",
    location: "Evanston, IL",
    rating: 5,
    text: "Partial wrap on my pickup truck for my landscaping business. Great quality materials, reasonable price, and quick turnaround. Very satisfied!",
    vehicle: "Pickup Truck Partial Wrap",
    image: "/lovable-uploads/76973c14-ac60-4c81-afa1-555b0f4f5f36.png"
  },
  {
    id: 6,
    name: "Amy Williams",
    location: "Arlington Heights, IL",
    rating: 5,
    text: "My BMW looks absolutely stunning with the new wrap. The attention to detail and quality of work is outstanding. Worth every penny!",
    vehicle: "BMW X5 Full Wrap",
    image: "/lovable-uploads/9de106b5-94cb-4fd1-a7c7-5c75c75b7cbb.png"
  }
];

const CustomerTestimonials: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Over 16,000 satisfied customers in 20 years of business. Here's what they say about our vehicle wrap services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Customer project image - responsive */}
                {testimonial.image && (
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg mb-4">
                    <img 
                      src={testimonial.image}
                      alt={`${testimonial.vehicle} project by Wrapping Chicago`}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-brand-red mr-3" />
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                </div>
                
                <blockquote className="text-gray-700 mb-4 flex-grow">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="mt-auto">
                  <div className="font-semibold text-brand-navy">{testimonial.name}</div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    {testimonial.location}
                  </div>
                  <div className="text-sm text-brand-red font-medium mt-1">
                    {testimonial.vehicle}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center mb-2">
              <div className="flex">{renderStars(5)}</div>
              <span className="ml-2 font-bold text-2xl">4.9/5</span>
            </div>
            <p className="text-gray-600">Based on 850+ customer reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
