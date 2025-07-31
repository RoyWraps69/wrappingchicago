import React from 'react';
import { Link } from 'react-router-dom';
import RichSnippetsManager from '../../components/seo/RichSnippetsManager';
import SERPEnhancer from '../../components/seo/SERPEnhancer';
import { Helmet } from 'react-helmet-async';

const InstantQuoteCalculatorPage = () => {
  const [vehicleType, setVehicleType] = React.useState('');
  const [wrapType, setWrapType] = React.useState('');
  const [complexity, setComplexity] = React.useState('');
  const [timeline, setTimeline] = React.useState('');
  const [quote, setQuote] = React.useState<{min: number, max: number} | null>(null);

  const vehicleTypes = [
    { value: 'car', label: 'Car/Sedan', basePrice: 2500 },
    { value: 'suv', label: 'SUV/Crossover', basePrice: 3200 },
    { value: 'truck', label: 'Pickup Truck', basePrice: 3500 },
    { value: 'van', label: 'Van/Cargo Van', basePrice: 4000 },
    { value: 'truck-large', label: 'Large Truck/Box Truck', basePrice: 5500 },
    { value: 'trailer', label: 'Trailer', basePrice: 3800 },
    { value: 'food-truck', label: 'Food Truck', basePrice: 6500 },
    { value: 'bus', label: 'Bus/Large Vehicle', basePrice: 8500 }
  ];

  const wrapTypes = [
    { value: 'partial', label: 'Partial Wrap (50% coverage)', multiplier: 0.6 },
    { value: 'full', label: 'Full Wrap (100% coverage)', multiplier: 1.0 },
    { value: 'color-change', label: 'Color Change Wrap', multiplier: 1.2 },
    { value: 'premium', label: 'Premium/Specialty Vinyl', multiplier: 1.5 }
  ];

  const complexities = [
    { value: 'simple', label: 'Simple Design (Text & Logo)', multiplier: 1.0 },
    { value: 'moderate', label: 'Moderate Design (Graphics & Images)', multiplier: 1.3 },
    { value: 'complex', label: 'Complex Design (Custom Artwork)', multiplier: 1.6 },
    { value: 'premium', label: 'Premium Design (Full Custom)', multiplier: 2.0 }
  ];

  const timelines = [
    { value: 'standard', label: 'Standard (5-7 days)', multiplier: 1.0 },
    { value: 'rush', label: 'Rush Job (2-3 days)', multiplier: 1.25 },
    { value: 'emergency', label: 'Emergency (24-48 hours)', multiplier: 1.5 }
  ];

  const calculateQuote = () => {
    if (!vehicleType || !wrapType || !complexity || !timeline) return;

    const vehicle = vehicleTypes.find(v => v.value === vehicleType);
    const wrap = wrapTypes.find(w => w.value === wrapType);
    const comp = complexities.find(c => c.value === complexity);
    const time = timelines.find(t => t.value === timeline);

    if (!vehicle || !wrap || !comp || !time) return;

    const basePrice = vehicle.basePrice;
    const totalMultiplier = wrap.multiplier * comp.multiplier * time.multiplier;
    
    const minPrice = Math.round(basePrice * totalMultiplier * 0.9);
    const maxPrice = Math.round(basePrice * totalMultiplier * 1.1);

    setQuote({ min: minPrice, max: maxPrice });
  };

  React.useEffect(() => {
    calculateQuote();
  }, [vehicleType, wrapType, complexity, timeline]);

  const faqData = [
    {
      question: "How accurate is the instant quote calculator?",
      answer: "Our calculator provides estimates within 10-15% of final pricing. Actual quotes depend on specific vehicle conditions, design complexity, and current material costs."
    },
    {
      question: "What's included in the quoted price?",
      answer: "Quotes include design consultation, premium vinyl materials, professional installation, and basic warranty. Custom design work and specialty materials may incur additional costs."
    },
    {
      question: "Can I get a more precise quote?",
      answer: "Yes! Schedule a free consultation where we'll inspect your vehicle and discuss your specific needs to provide an exact quote."
    },
    {
      question: "Are there financing options available?",
      answer: "We offer flexible payment plans and work with various financing partners to make vehicle wraps accessible for all Chicago businesses."
    }
  ];

  return (
    <>
      <RichSnippetsManager
        pageType="service"
        title="Instant Vehicle Wrap Quote Calculator Chicago IL - Get Pricing Now"
        description="Get instant vehicle wrap pricing estimates for Chicago area. Calculate costs for car wraps, truck wraps, fleet wraps and more. Free consultation included."
        url="https://www.wrappingchicago.com/instant-quote"
        keywords={["vehicle wrap cost calculator", "Chicago wrap pricing", "instant wrap quote", "vehicle wrap cost estimate", "wrap pricing tool"]}
        faqData={faqData}
        reviews={{
          averageRating: 4.9,
          reviewCount: 847,
          bestRating: 5,
          worstRating: 4
        }}
        services={[
          {
            name: "Vehicle Wrap Cost Estimation",
            description: "Instant pricing calculator for all vehicle types",
            price: "Free"
          },
          {
            name: "Professional Consultation",
            description: "Detailed quote with vehicle inspection",
            price: "Free"
          }
        ]}
      />
      <SERPEnhancer
        title="Instant Vehicle Wrap Quote Calculator Chicago IL - Get Pricing Now"
        description="Get instant vehicle wrap pricing estimates for Chicago area. Calculate costs for car wraps, truck wraps, fleet wraps and more. Free consultation included."
        url="https://www.wrappingchicago.com/instant-quote"
        imageUrl="https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png"
        estimatedReadingTime={5}
        lastUpdated={new Date().toISOString()}
        authorName="Wrapping Chicago Pricing Team"
        businessHours={{
          opens: "09:00",
          closes: "17:00",
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
        }}
        phoneNumber="(312) 597-1286"
        address="4711 N. Lamon Ave, Chicago, IL 60630"
      />

      <Helmet>
        <title>Instant Vehicle Wrap Quote Calculator Chicago IL - Get Pricing Now | Wrapping Chicago</title>
        <meta name="description" content="Get instant vehicle wrap pricing estimates for Chicago area. Calculate costs for car wraps, truck wraps, fleet wraps and more. Free consultation included." />
        <link rel="canonical" href="https://www.wrappingchicago.com/instant-quote" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Instant Vehicle Wrap Quote Calculator
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Get an instant estimate for your Chicago vehicle wrap project. Select your options below to see real-time pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calculator Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Calculate Your Quote</h2>
                
                <div className="space-y-6">
                  {/* Vehicle Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Type *
                    </label>
                    <select
                      value={vehicleType}
                      onChange={(e) => setVehicleType(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="">Select Vehicle Type</option>
                      {vehicleTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Wrap Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Wrap Coverage *
                    </label>
                    <select
                      value={wrapType}
                      onChange={(e) => setWrapType(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="">Select Wrap Type</option>
                      {wrapTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Design Complexity */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Design Complexity *
                    </label>
                    <select
                      value={complexity}
                      onChange={(e) => setComplexity(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="">Select Design Complexity</option>
                      {complexities.map((comp) => (
                        <option key={comp.value} value={comp.value}>
                          {comp.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline *
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="">Select Timeline</option>
                      {timelines.map((time) => (
                        <option key={time.value} value={time.value}>
                          {time.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Quote Results */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Your Instant Quote</h2>
                
                {quote ? (
                  <div className="text-center">
                    <div className="bg-primary text-white rounded-lg p-6 mb-6">
                      <div className="text-4xl font-bold mb-2">
                        ${quote.min.toLocaleString()} - ${quote.max.toLocaleString()}
                      </div>
                      <div className="text-lg opacity-90">Estimated Price Range</div>
                    </div>
                    
                    <div className="space-y-4 text-left">
                      <div className="flex justify-between">
                        <span>Vehicle Type:</span>
                        <span className="font-medium">
                          {vehicleTypes.find(v => v.value === vehicleType)?.label}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Wrap Coverage:</span>
                        <span className="font-medium">
                          {wrapTypes.find(w => w.value === wrapType)?.label}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Design Complexity:</span>
                        <span className="font-medium">
                          {complexities.find(c => c.value === complexity)?.label}
                        </span>
                      </div>
                      <div className="flex justify-between border-t pt-4">
                        <span>Timeline:</span>
                        <span className="font-medium">
                          {timelines.find(t => t.value === timeline)?.label}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-8 space-y-4">
                      <Link
                        to="/contact"
                        className="block w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center"
                      >
                        Get Exact Quote
                      </Link>
                      <Link
                        to="/gallery"
                        className="block w-full border-2 border-primary text-primary py-3 px-6 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors text-center"
                      >
                        View Gallery
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-12">
                    <div className="text-6xl mb-4">🧮</div>
                    <p>Select all options above to see your instant quote</p>
                  </div>
                )}
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
              <h2 className="text-3xl font-bold text-primary text-center mb-8">What's Included in Your Quote</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="font-semibold mb-2">Design Consultation</h3>
                  <p className="text-sm text-gray-600">Free design consultation and concept development</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="font-semibold mb-2">Premium Materials</h3>
                  <p className="text-sm text-gray-600">High-quality 3M vinyl and automotive-grade materials</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👨‍🔧</span>
                  </div>
                  <h3 className="font-semibold mb-2">Expert Installation</h3>
                  <p className="text-sm text-gray-600">Professional installation by certified technicians</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="font-semibold mb-2">Warranty Coverage</h3>
                  <p className="text-sm text-gray-600">Comprehensive warranty on materials and workmanship</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Pricing FAQs</h2>
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
            <div className="text-center bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 mt-12">
              <h2 className="text-3xl font-bold mb-4">Ready for Your Exact Quote?</h2>
              <p className="text-xl mb-6">
                Schedule a free consultation for precise pricing and see our portfolio of Chicago vehicle wraps.
              </p>
              <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                <Link 
                  to="/contact" 
                  className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Schedule Consultation
                </Link>
                <a 
                  href="tel:(312) 597-1286"
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  Call (312) 597-1286
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstantQuoteCalculatorPage;