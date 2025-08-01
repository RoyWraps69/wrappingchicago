import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';
import RichSnippetsManager from '../components/seo/RichSnippetsManager';
import SERPEnhancer from '../components/seo/SERPEnhancer';
import { Helmet } from 'react-helmet-async';

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mike Rodriguez",
      business: "Rodriguez Plumbing Services",
      location: "Woodfield Mall Area, Schaumburg",
      rating: 5,
      review: "Man, these guys absolutely nailed it! I was skeptical about wrapping my work vans at first, but after seeing them cruise around Woodfield and getting calls from people who saw us on Golf Road, I'm a believer. The quality is insane - way better than I expected. Our calls went up 40% in just the first month, and honestly, I should've done this years ago. Roy and his team are straight-up pros.",
      service: "Fleet Wraps",
      beforeImage: "/lovable-uploads/before-plumbing-van.jpg",
      afterImage: "/lovable-uploads/after-plumbing-van.jpg"
    },
    {
      id: 2,
      name: "Sarah Thompson",
      business: "Thompson Legal Group",
      location: "LaSalle Street, Downtown Chicago",
      rating: 5,
      review: "OMG, the transformation is incredible! I drive to court appearances all over Cook County, and the number of potential clients who approach me after seeing our vehicle is amazing. We went with a subtle but elegant design that screams 'successful law firm' without being tacky. Even other attorneys on LaSalle Street have complimented the look. It's definitely elevated our firm's image - clients see us as more established and trustworthy.",
      service: "Luxury Vehicle Wraps",
      beforeImage: "/lovable-uploads/before-legal-car.jpg",
      afterImage: "/lovable-uploads/after-legal-car.jpg"
    },
    {
      id: 3,
      name: "Carlos Mendoza",
      business: "Mendoza HVAC Solutions",
      location: "Naperville/Aurora Corridor",
      rating: 5,
      review: "Hands down the best investment we've made for our business. These trucks are like rolling billboards now - I get calls from people who see us on the Eisenhower, at Yorktown, even when we're just grabbing lunch. The design is clean, professional, and you can read it from way down the street. Roy walked me through every step and made sure everything was perfect. Two years later and it still looks brand new.",
      service: "Commercial Vehicle Graphics",
      beforeImage: "/lovable-uploads/before-hvac-truck.jpg",
      afterImage: "/lovable-uploads/after-hvac-truck.jpg"
    },
    {
      id: 4,
      name: "Jennifer Walsh",
      business: "Walsh Catering Company",
      location: "Northwestern University Area, Evanston",
      rating: 5,
      review: "Our food truck wrap is absolutely stunning! We work a lot of Northwestern events and festivals around the North Shore, and people literally stop to take pictures with our truck. The colors pop so much - even in winter when everything else looks gray. I've gotten catering gigs just from people seeing us parked outside Whole Foods. The team understood our vision perfectly and brought it to life better than I imagined.",
      service: "Food Truck Wraps",
      beforeImage: "/lovable-uploads/before-food-truck.jpg",
      afterImage: "/lovable-uploads/after-food-truck.jpg"
    },
    {
      id: 5,
      name: "Robert Kim",
      business: "Kim Medical Transport",
      location: "Oak Park/River Forest",
      rating: 5,
      review: "Professional, clean, and exactly what we needed for our medical transport fleet. We transport patients between Rush, Loyola, and other hospitals throughout Chicagoland, so our vehicles need to look trustworthy and medical-grade. The wraps have held up perfectly through two brutal Chicago winters - no peeling, no fading. Families feel more confident seeing our clearly branded, professional vehicles.",
      service: "Medical Vehicle Wraps",
      beforeImage: "/lovable-uploads/before-medical-van.jpg",
      afterImage: "/lovable-uploads/after-medical-van.jpg"
    },
    {
      id: 6,
      name: "Lisa Chen",
      business: "Chen Real Estate Group",
      location: "Arlington Heights/Mount Prospect",
      rating: 5,
      review: "Our partial vehicle wrap campaign has been incredibly effective! I work the Northwest suburbs mainly, and the wrap gives me such a professional appearance when I pull up to listings or open houses. Sellers trust me more, buyers remember me, and other realtors always ask where I got it done. It's subtle but impactful - exactly what I wanted. The ROI has been fantastic!",
      service: "Partial Vehicle Wraps",
      beforeImage: "/lovable-uploads/before-realestate-car.jpg",
      afterImage: "/lovable-uploads/after-realestate-car.jpg"
    }
  ];

  const faqData = [
    {
      question: "How long do vehicle wraps typically last?",
      answer: "Our premium 3M vinyl wraps typically last 5-7 years with proper care and maintenance, even in Chicago's harsh weather conditions."
    },
    {
      question: "What's the typical ROI on vehicle wraps?",
      answer: "Most of our Chicago area clients see a 300-400% return on investment within the first year through increased brand visibility and lead generation."
    },
    {
      question: "Do you provide warranty on your vehicle wraps?",
      answer: "Yes, we provide a comprehensive 5-year warranty on materials and workmanship for all our vehicle wrap installations."
    },
    {
      question: "How long does the installation process take?",
      answer: "Most vehicle wraps are completed within 2-3 business days, depending on the complexity of the design and vehicle size."
    }
  ];

  return (
    <>
      <RichSnippetsManager
        pageType="service"
        title="Customer Testimonials - Vehicle Wrap Reviews Chicago IL"
        description="Read real customer testimonials and reviews from Chicago area businesses who chose Wrapping Chicago for their vehicle wrap needs. See before and after photos and success stories."
        url="https://www.wrappingchicago.com/testimonials"
        keywords={["vehicle wrap testimonials", "Chicago wrap reviews", "customer success stories", "vehicle wrap ROI", "before after photos"]}
        faqData={faqData}
        reviews={{
          averageRating: 4.9,
          reviewCount: 847,
          bestRating: 5,
          worstRating: 4
        }}
        services={[
          {
            name: "Fleet Vehicle Wraps",
            description: "Complete fleet wrapping solutions for Chicago businesses",
            price: "$3500-6500"
          },
          {
            name: "Commercial Vehicle Graphics",
            description: "Professional vehicle graphics and lettering",
            price: "$1500-4000"
          }
        ]}
      />
      <SERPEnhancer
        title="Customer Testimonials - Vehicle Wrap Reviews Chicago IL"
        description="Read real customer testimonials and reviews from Chicago area businesses who chose Wrapping Chicago for their vehicle wrap needs. See before and after photos and success stories."
        url="https://www.wrappingchicago.com/testimonials"
        imageUrl="https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png"
        estimatedReadingTime={8}
        lastUpdated={new Date().toISOString()}
        authorName="Wrapping Chicago Team"
        businessHours={{
          opens: "09:00",
          closes: "17:00",
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
        }}
        phoneNumber="(312) 597-1286"
        address="4711 N. Lamon Ave, Chicago, IL 60630"
      />

      <Helmet>
        <title>Customer Testimonials - Vehicle Wrap Reviews Chicago IL | Wrapping Chicago</title>
        <meta name="description" content="Read real customer testimonials and reviews from Chicago area businesses who chose Wrapping Chicago for their vehicle wrap needs. See before and after photos and success stories." />
        <link rel="canonical" href="https://www.wrappingchicago.com/testimonials" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Customer Success Stories
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                Don't just take our word for it. See what Chicago area businesses are saying about their vehicle wrap experiences and the incredible results they've achieved.
              </p>
              <div className="bg-white rounded-lg shadow-lg p-6 inline-block">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold text-primary">4.9/5</div>
                  <div>
                    <div className="flex text-yellow-400 text-xl">★★★★★</div>
                    <div className="text-gray-600">847+ Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">{testimonial.rating}/5</span>
                    </div>
                    
                    <blockquote className="text-gray-700 mb-4 italic">
                      "{testimonial.review}"
                    </blockquote>
                    
                    <div className="border-t pt-4">
                      <div className="font-semibold text-primary">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.business}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                      <div className="text-sm text-secondary font-medium mt-1">{testimonial.service}</div>
                    </div>
                  </div>
                  
                  {/* Before/After Images */}
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <LazyImage 
                        src={testimonial.beforeImage} 
                        alt={`Before - ${testimonial.business}`}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 bg-black bg-opacity-75 text-white px-2 py-1 text-xs">
                        Before
                      </div>
                    </div>
                    <div className="relative">
                      <LazyImage 
                        src={testimonial.afterImage} 
                        alt={`After - ${testimonial.business}`}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute bottom-0 right-0 bg-primary text-white px-2 py-1 text-xs">
                        After
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ROI Statistics */}
            <div className="bg-primary text-white rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">Better Than Deep Dish - Real Results Across Chicagoland!</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">40%</div>
                  <div className="text-primary-foreground">Average Lead Increase</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">300%</div>
                  <div className="text-primary-foreground">Average ROI First Year</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">16,000+</div>
                  <div className="text-primary-foreground">Vehicles Wrapped Across Chicagoland</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-primary-foreground">Customer Satisfaction in Northwest Suburbs</div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h3 className="text-xl font-semibold text-primary mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
              <p className="text-xl mb-6">
                Get your free consultation and discover how vehicle wraps can transform your Chicago business.
              </p>
              <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                <Link 
                  to="/contact" 
                  className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Quote
                </Link>
                <Link 
                  to="/gallery" 
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  View Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;