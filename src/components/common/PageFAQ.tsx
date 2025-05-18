
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface PageFAQProps {
  faqs?: FAQ[];
  cityName?: string;
  serviceName?: string;
}

const defaultFAQs = [
  {
    question: "How much do vehicle wraps cost?",
    answer: "Vehicle wrap pricing varies based on vehicle size and design complexity. Full car wraps typically range from $2,500-$5,000, partial wraps start around $1,000, and commercial trucks/vans may cost more due to their larger size. Contact us for a personalized quote."
  },
  {
    question: "How long do vinyl vehicle wraps last?",
    answer: "With proper care and maintenance, our premium 3M vinyl vehicle wraps typically last 5-7 years. All our wraps come with a 2-year warranty. Longevity depends on exposure to weather, washing frequency, and storage conditions."
  },
  {
    question: "Do vehicle wraps damage paint?",
    answer: "No, professional vehicle wraps actually protect your paint when properly installed and removed. Our 3M vinyl wraps act as a shield against minor scratches, stone chips, and UV damage. When removed by professionals, the original paint remains in excellent condition."
  },
  {
    question: "How long does it take to wrap a vehicle?",
    answer: "Our professional vehicle wrap installation typically takes 3-5 business days. Basic wraps may be completed in 2-3 days, while complex commercial wraps with detailed graphics might require 5-7 days. We provide exact timeframes with every quote."
  }
];

const PageFAQ: React.FC<PageFAQProps> = ({ faqs, cityName, serviceName }) => {
  // Use provided FAQs or fall back to default ones
  const displayFAQs = faqs && faqs.length > 0 ? faqs : defaultFAQs;
  
  // Customize FAQ content with city name if provided
  const customizedFAQs = displayFAQs.map(faq => {
    if (!cityName) return faq;
    
    return {
      question: faq.question.includes("?") ? 
        faq.question.replace("?", ` in ${cityName}?`) : 
        `${faq.question} in ${cityName}?`,
      answer: faq.answer
    };
  });

  const pageTitle = serviceName ? 
    (cityName ? `${serviceName} in ${cityName}` : serviceName) : 
    (cityName ? `Vehicle Wraps in ${cityName}` : "Vehicle Wraps");

  return (
    <section className="py-12 bg-gray-50" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6 text-center">
          Frequently Asked Questions About {pageTitle}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {customizedFAQs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-brand-navy mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button
            asChild
            className="bg-brand-navy hover:bg-blue-900 text-white"
          >
            <Link to="/contact" className="inline-flex items-center">
              <MessageSquare className="mr-2 h-4 w-4" />
              Get Answers to Your Questions
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PageFAQ;
