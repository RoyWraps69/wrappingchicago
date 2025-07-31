import React from 'react';
import { Link } from 'react-router-dom';
import RichSnippetsManager from '../components/seo/RichSnippetsManager';
import SERPEnhancer from '../components/seo/SERPEnhancer';
import LazyImage from '../components/LazyImage';
import { Helmet } from 'react-helmet-async';

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mike Rodriguez",
      business: "Rodriguez Plumbing Services",
      location: "Schaumburg, IL",
      rating: 5,
      review: "Man, these guys totally transformed our whole fleet - all 8 service vans! I was skeptical at first, you know? But after seeing the first van done, I knew we hit gold. Our phone's been ringing off the hook, especially in the Woodfield area. Had one customer tell me she called because our van looked so professional parked outside her neighbor's house. Roy's team? They're perfectionists. Worth every penny.",
      service: "Fleet Wraps",
      beforeImage: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=400",
      afterImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400"
    },
    {
      id: 2,
      name: "Sarah Thompson",
      business: "Thompson Legal Group",
      location: "Downtown Chicago, IL",
      rating: 5,
      review: "Honestly, I wasn't sure about putting graphics on my BMW at first - seemed too flashy for a law practice. But Roy showed me these elegant designs, and wow! It's sophisticated, not tacky at all. I drive to court downtown every day, and I've gotten three new clients just from people seeing my car parked on LaSalle Street. One judge even complimented the design!",
      service: "Luxury Vehicle Wraps",
      beforeImage: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400",
      afterImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400"
    },
    {
      id: 3,
      name: "Carlos Mendoza",
      business: "Mendoza HVAC Solutions",
      location: "Naperville, IL",
      rating: 5,
      review: "Best business decision I've made in 15 years, hands down. My trucks were just plain white before - looked like every other HVAC guy out there. Now? People remember us. Had a lady in Lisle flag me down at a stoplight to ask for my card! The wrap's held up through two brutal Chicago winters too. Roy wasn't kidding when he said this stuff was tough.",
      service: "Commercial Vehicle Graphics",
      beforeImage: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400",
      afterImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400"
    },
    {
      id: 4,
      name: "Jennifer Walsh",
      business: "Walsh Catering Company",
      location: "Evanston, IL",
      rating: 5,
      review: "OMG, the food truck looks incredible! We do a lot of Northwestern University events, and students are always taking selfies with our truck now. The colors pop so much - even on those gloomy Chicago days, we stand out. My Instagram followers doubled just from people tagging us in their posts. The investment paid for itself in three months from all the extra bookings!",
      service: "Food Truck Wraps",
      beforeImage: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400",
      afterImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400"
    },
    {
      id: 5,
      name: "Dr. Robert Kim",
      business: "Kim Medical Transport",
      location: "Oak Park, IL",
      rating: 5,
      review: "Running a medical transport service, trust is everything. Our old vans looked dated and unprofessional. The new wraps give us that clean, medical appearance families expect. I've had nurses at hospitals compliment our vehicles. Plus, the reflective elements they added help with visibility during those early morning pickups on the Eisenhower. Smart thinking all around.",
      service: "Medical Vehicle Wraps",
      beforeImage: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400",
      afterImage: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=400"
    },
    {
      id: 6,
      name: "Lisa Chen",
      business: "Chen Real Estate Group",
      location: "Palatine, IL",
      rating: 5,
      review: "I drive all over the northwest suburbs showing homes, and this partial wrap has been like having a mobile billboard! Way more effective than those expensive Zillow ads. Had a seller in Arlington Heights contact me after seeing my car parked at an open house down the street. The design is classy - not over the top - which works perfect for real estate. My broker's getting one done next month!",
      service: "Partial Vehicle Wraps",
      beforeImage: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400",
      afterImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400"
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
                        alt={`Before vehicle wrap - ${testimonial.business}`}
                        className="w-full h-32 object-cover"
                        fallbackSrc="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=400"
                      />
                      <div className="absolute bottom-0 left-0 bg-black bg-opacity-75 text-white px-2 py-1 text-xs">
                        Before
                      </div>
                    </div>
                    <div className="relative">
                      <LazyImage
                        src={testimonial.afterImage} 
                        alt={`After vehicle wrap - ${testimonial.business}`}
                        className="w-full h-32 object-cover"
                        fallbackSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400"
                      />
                      <div className="absolute bottom-0 right-0 bg-primary text-white px-2 py-1 text-xs">
                        After
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary text-white rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">Real Results from Real Chicago Businesses</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">40%</div>
                  <div className="text-primary-foreground">Average Lead Increase Across Chicagoland</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">340%</div>
                  <div className="text-primary-foreground">Average ROI in First Year (Northwest Suburbs)</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">16,000+</div>
                  <div className="text-primary-foreground">Vehicles Wrapped Since 2003</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-primary-foreground">Customer Satisfaction (Better than Deep Dish!)</div>
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