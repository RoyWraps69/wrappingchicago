import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, ChevronDown, ChevronUp, MessageCircle, Phone, Calendar } from 'lucide-react';
import Google2025SEOOptimizer from '@/components/seo/Google2025SEOOptimizer';
import { SchemaDeduplicatorProvider } from '@/components/seo/SchemaDeduplicator';

const FAQHubPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const categories = [
    'all', 'Pricing', 'Process', 'Materials', 'Maintenance', 'Design', 'Fleet', 'Warranty'
  ];

  const faqs = [
    {
      id: 1,
      category: 'Pricing',
      question: 'How much does a vehicle wrap cost?',
      answer: 'Vehicle wrap costs vary based on vehicle size, design complexity, and materials. Typical ranges: Cars ($2,500-$4,500), Vans ($3,500-$6,000), Trucks ($4,000-$7,500). We offer free quotes with detailed breakdowns.'
    },
    {
      id: 2,
      category: 'Process',
      question: 'How long does the wrap installation take?',
      answer: 'Installation typically takes 2-5 business days depending on vehicle size and design complexity. Cars: 2-3 days, Vans: 3-4 days, Large trucks: 4-5 days. We provide accurate timelines during consultation.'
    },
    {
      id: 3,
      category: 'Materials',
      question: 'What type of vinyl do you use?',
      answer: 'We use premium cast vinyl from 3M and Avery Dennison - the industry gold standards. Our materials offer 5-7 year warranties and superior conformability for complex curves and surfaces.'
    },
    {
      id: 4,
      category: 'Maintenance',
      question: 'How do I maintain my vehicle wrap?',
      answer: 'Wash regularly with mild soap and water, avoid harsh chemicals and power washing, park in shade when possible. We provide detailed care instructions and offer maintenance packages.'
    },
    {
      id: 5,
      category: 'Design',
      question: 'Do you provide design services?',
      answer: 'Yes! Our in-house design team creates custom artwork at no extra charge. We work with your brand guidelines and provide multiple concepts until you\'re completely satisfied.'
    },
    {
      id: 6,
      category: 'Warranty',
      question: 'What warranty do you offer?',
      answer: 'We provide comprehensive warranties: 5-7 years on materials (manufacturer), 2 years on installation workmanship, and lifetime support for minor touch-ups.'
    },
    {
      id: 7,
      category: 'Process',
      question: 'Will wrapping damage my vehicle\'s paint?',
      answer: 'No! When properly installed and removed by professionals, wraps actually protect your original paint. We use automotive-grade adhesives designed for safe removal.'
    },
    {
      id: 8,
      category: 'Fleet',
      question: 'Do you offer fleet discounts?',
      answer: 'Yes! We offer volume discounts for fleets of 3+ vehicles. Pricing scales with quantity, and we can schedule installations to minimize business disruption.'
    },
    {
      id: 9,
      category: 'Materials',
      question: 'Can wraps be removed?',
      answer: 'Absolutely! Professional wrap removal typically takes 2-4 hours and leaves no residue when done correctly. We offer removal services with a clean surface guarantee.'
    },
    {
      id: 10,
      category: 'Design',
      question: 'Can you match my existing brand colors?',
      answer: 'Yes! We use Pantone color matching and can replicate any brand color with precision. We also offer color samples for approval before production.'
    },
    {
      id: 11,
      category: 'Process',
      question: 'Do I need to prepare my vehicle before wrapping?',
      answer: 'We handle all preparation including thorough cleaning, surface inspection, and minor paint touch-ups if needed. Just bring your vehicle with a full tank of gas.'
    },
    {
      id: 12,
      category: 'Pricing',
      question: 'Are there additional costs beyond the quoted price?',
      answer: 'Our quotes are comprehensive and include design, materials, installation, and warranty. Additional costs only apply for change requests or optional services like removal of existing graphics.'
    },
    {
      id: 13,
      category: 'Materials',
      question: 'What\'s the difference between calendar and cast vinyl?',
      answer: 'Cast vinyl is premium material that conforms better to curves, lasts longer (5-7 years vs 3-5 years), and has better color retention. We exclusively use cast vinyl for all vehicle wraps.'
    },
    {
      id: 14,
      category: 'Fleet',
      question: 'Can you wrap different vehicle types in my fleet?',
      answer: 'Absolutely! We wrap cars, vans, trucks, trailers, and specialty vehicles. Our design team ensures consistent branding across your entire mixed fleet.'
    },
    {
      id: 15,
      category: 'Maintenance',
      question: 'What voids the wrap warranty?',
      answer: 'Warranty is voided by improper maintenance (harsh chemicals, pressure washing), physical damage, or modifications by non-certified installers. Normal wear and fading are covered.'
    },
    {
      id: 16,
      category: 'Design',
      question: 'Can you incorporate existing logos and graphics?',
      answer: 'Yes! We work with your existing brand assets and can enhance them for vehicle application. We ensure proper resolution and sizing for optimal visual impact.'
    },
    {
      id: 17,
      category: 'Process',
      question: 'Do you provide mobile installation services?',
      answer: 'For select projects and fleet accounts, we offer mobile installation. However, shop installation ensures optimal results with controlled environment and professional equipment.'
    },
    {
      id: 18,
      category: 'Warranty',
      question: 'What happens if my wrap gets damaged?',
      answer: 'Minor damage can often be repaired by replacing affected panels. We stock materials for quick repairs and offer 24/7 emergency support for fleet vehicles.'
    },
    {
      id: 19,
      category: 'Pricing',
      question: 'Do you offer financing options?',
      answer: 'Yes! We partner with financing companies to offer flexible payment plans for approved customers. Options include 0% interest for qualified fleet accounts.'
    },
    {
      id: 20,
      category: 'Materials',
      question: 'Are your wraps environmentally friendly?',
      answer: 'Our vinyl materials are recyclable, and we participate in manufacturer take-back programs. Wraps also extend vehicle life by protecting paint, reducing overall environmental impact.'
    },
    {
      id: 21,
      category: 'Process',
      question: 'Can I see examples of your previous work?',
      answer: 'Absolutely! Visit our projects gallery online, schedule a shop tour, or request references from similar businesses. We\'re proud to showcase our 16,000+ completed projects.'
    },
    {
      id: 22,
      category: 'Fleet',
      question: 'How do you handle fleet scheduling?',
      answer: 'We work around your business schedule, offering evening and weekend appointments. We can also provide loaner graphics for vehicles that must stay in service.'
    },
    {
      id: 23,
      category: 'Design',
      question: 'What if I don\'t like the initial design?',
      answer: 'No problem! We provide unlimited revisions until you\'re 100% satisfied. Our goal is creating a design that perfectly represents your brand and vision.'
    },
    {
      id: 24,
      category: 'Maintenance',
      question: 'How often should I wash my wrapped vehicle?',
      answer: 'Wash every 2-3 weeks or as needed. Regular washing prevents dirt buildup and maintains appearance. Use mild soap and avoid automatic car washes with harsh brushes.'
    },
    {
      id: 25,
      category: 'Warranty',
      question: 'Do you provide written warranties?',
      answer: 'Yes! All customers receive detailed written warranties covering materials, installation, and specific care instructions. We also provide warranty transfer options for vehicle sales.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <SchemaDeduplicatorProvider>
      <Google2025SEOOptimizer
        pageTitle="Vehicle Wrap FAQ Hub - 25+ Common Questions Answered"
        pageDescription="Complete FAQ hub for vehicle wraps in Chicago. Get expert answers to 25+ common questions about pricing, process, materials, maintenance, and more."
        primaryKeywords={['vehicle wrap FAQ', 'wrap questions Chicago', 'vehicle wrap help', 'wrap installation FAQ']}
        faqData={faqs.map(faq => ({ question: faq.question, answer: faq.answer }))}
        businessType="general"
      />
      
      <Helmet>
        <title>Vehicle Wrap FAQ Hub - Expert Answers to Common Questions | Wrapping Chicago</title>
        <meta name="description" content="Complete FAQ hub for vehicle wraps in Chicago. Get expert answers to 25+ common questions about pricing, process, materials, maintenance, and more." />
      </Helmet>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary via-primary-600 to-primary-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Vehicle Wrap FAQ Hub
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Expert answers to 25+ common vehicle wrap questions
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <MessageCircle className="inline w-4 h-4 mr-2" />
                  Instant Answers
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <Phone className="inline w-4 h-4 mr-2" />
                  Expert Support
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <Calendar className="inline w-4 h-4 mr-2" />
                  15+ Years Experience
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <select 
                  value={selectedCategory} 
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-center text-gray-600 mt-4">
                Showing {filteredFAQs.length} of {faqs.length} questions
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <div key={faq.id} className="bg-white rounded-lg shadow-md border border-gray-200">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                      className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                      </div>
                      <div className="ml-4">
                        {expandedFAQ === faq.id ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </div>
                    </button>
                    
                    {expandedFAQ === faq.id && (
                      <div className="px-6 pb-6">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl mb-8 text-white/90">Our expert team is here to help with personalized answers</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:(312)597-1286" 
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (312) 597-1286
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Send Message
              </a>
              <a 
                href="/instant-quote" 
                className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Get Quote
              </a>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Popular Topics</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.slice(1).map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SchemaDeduplicatorProvider>
  );
};

export default FAQHubPage;