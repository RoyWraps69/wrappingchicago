
import React from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface TruckFAQsProps {
  faqs: FAQ[];
}

const TruckFAQs: React.FC<TruckFAQsProps> = ({ faqs }) => {
  if (!faqs || faqs.length === 0) {
    return null;
  }
  
  return (
    <div className="space-y-6 mb-12">
      <h2 className="text-3xl font-bold text-brand-navy mb-4">
        Frequently Asked Questions
      </h2>
      
      {faqs.map((faq, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-brand-navy mb-2">{faq.question}</h3>
          <p className="text-gray-700">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default TruckFAQs;
