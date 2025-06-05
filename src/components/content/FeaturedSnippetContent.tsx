
import React from 'react';
import { Clock, DollarSign, Shield, Wrench } from 'lucide-react';

/**
 * Featured Snippet Optimized Content Component
 * Structured for Google's featured snippets and AI Overviews
 */
const FeaturedSnippetContent: React.FC = () => {
  const commonQuestions = [
    {
      question: "How much does a vehicle wrap cost?",
      answer: "Vehicle wrap costs typically range from $2,500-$5,000 for a full wrap, depending on vehicle size and design complexity. Partial wraps start around $1,500.",
      icon: <DollarSign className="h-6 w-6 text-brand-red" />
    },
    {
      question: "How long does a vehicle wrap last?",
      answer: "Professional vehicle wraps last 5-7 years with proper care and maintenance. Premium materials like 3M vinyl provide excellent durability and UV resistance.",
      icon: <Clock className="h-6 w-6 text-brand-red" />
    },
    {
      question: "Do vehicle wraps damage paint?",
      answer: "No, professional vehicle wraps protect your paint. When removed properly, wraps leave the original paint in excellent condition, often better than unwrapped vehicles.",
      icon: <Shield className="h-6 w-6 text-brand-red" />
    },
    {
      question: "How long does vehicle wrap installation take?",
      answer: "Most vehicle wraps take 2-3 days to complete. Simple designs may take 1-2 days, while complex wraps on larger vehicles can take 3-5 days.",
      icon: <Wrench className="h-6 w-6 text-brand-red" />
    }
  ];

  const wrapTypes = [
    { type: "Full Car Wrap", cost: "$2,500 - $4,000", duration: "2-3 days" },
    { type: "Partial Car Wrap", cost: "$1,500 - $2,500", duration: "1-2 days" },
    { type: "Truck Wrap", cost: "$3,500 - $6,000", duration: "3-4 days" },
    { type: "Van Wrap", cost: "$3,000 - $5,500", duration: "2-4 days" },
    { type: "Fleet Wrap (per vehicle)", cost: "$2,800 - $4,500", duration: "2-3 days" }
  ];

  return (
    <section className="py-16 bg-white" id="featured-snippet-content">
      <div className="container mx-auto px-4">
        {/* Quick Answers Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Vehicle Wrap Questions Answered
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {commonQuestions.map((qa, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  {qa.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3 speakable-content">
                    {qa.question}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed speakable-content">
                  {qa.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Table for Featured Snippets */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center speakable-content">
            Vehicle Wrap Pricing Guide Chicago
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-200 rounded-lg shadow-lg">
              <thead className="bg-brand-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Wrap Type</th>
                  <th className="px-6 py-4 text-left font-semibold">Cost Range</th>
                  <th className="px-6 py-4 text-left font-semibold">Installation Time</th>
                </tr>
              </thead>
              <tbody>
                {wrapTypes.map((wrap, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-gray-900">{wrap.type}</td>
                    <td className="px-6 py-4 text-gray-700">{wrap.cost}</td>
                    <td className="px-6 py-4 text-gray-700">{wrap.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="text-sm text-gray-600 mt-4 text-center">
            *Prices vary based on vehicle size, design complexity, and material selection. 
            Contact us for accurate quotes.
          </p>
        </div>

        {/* Step-by-Step Process */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center speakable-content">
            Vehicle Wrap Installation Process
          </h2>
          
          <ol className="space-y-6">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultation & Design</h3>
                <p className="text-gray-700">We discuss your vision, take vehicle measurements, and create custom designs tailored to your needs.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Vehicle Preparation</h3>
                <p className="text-gray-700">Thorough cleaning and surface preparation to ensure optimal adhesion and finish quality.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Installation</h3>
                <p className="text-gray-700">Expert application of premium vinyl using specialized tools and techniques for perfect results.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold mr-4">4</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Inspection & Delivery</h3>
                <p className="text-gray-700">Final quality check, trimming, and vehicle delivery with care instructions and warranty information.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSnippetContent;
