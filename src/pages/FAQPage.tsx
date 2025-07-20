
import React from 'react';
import { Helmet } from 'react-helmet-async';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import FAQHero from '@/components/heroes/FAQHero';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSections = [
    {
      category: "General Vehicle Wraps",
      questions: [
        {
          question: "What is a vehicle wrap?",
          answer: "A vehicle wrap is a large vinyl graphic or decal that's applied directly to your vehicle's surface. It can cover the entire vehicle (full wrap) or just portions of it (partial wrap). Vehicle wraps are used for advertising, personal expression, or paint protection."
        },
        {
          question: "How long do vehicle wraps last?",
          answer: "Durable vehicle wraps maintain their appearance for 5-7 years under typical usage conditions. Lifespan varies based on exposure intensity, vehicle storage, and maintenance frequency. Premium materials resist fading, cracking, and edge lifting throughout their service life."
        },
        {
          question: "Will a wrap damage my car's paint?",
          answer: "Vehicle wraps enhance paint protection rather than causing damage. Professional application and removal preserve the original finish while providing superior protection against environmental hazards, maintaining vehicle value and appearance."
        }
      ]
    },
    {
      category: "Cost and Pricing",
      questions: [
        {
          question: "How much does a vehicle wrap cost?",
          answer: "Vehicle wrap costs vary based on vehicle size, design complexity, and coverage area. Full car wraps typically range from $2,500-$5,000, truck wraps from $3,500-$7,000, and partial wraps start around $1,200. Contact us for a personalized quote."
        },
        {
          question: "Do you offer financing options?",
          answer: "Yes, we offer flexible payment options for qualifying customers. We understand that vehicle wraps are an investment, and we work with you to find a payment solution that fits your budget."
        },
        {
          question: "Are there ongoing costs after installation?",
          answer: "Vehicle wraps have minimal ongoing costs. You'll want to wash your vehicle regularly (hand washing recommended) and may need minor repairs if the wrap gets damaged. Otherwise, there are no recurring fees."
        }
      ]
    },
    {
      category: "Installation Process",
      questions: [
        {
          question: "How long does installation take?",
          answer: "Most vehicle wraps are completed in 3-5 business days. The timeline depends on the complexity of the design, vehicle size, and weather conditions. We'll provide a specific timeline during your consultation."
        },
        {
          question: "Do I need to remove anything from my vehicle?",
          answer: "We'll handle most preparation, but you should remove personal items from the interior and any aftermarket accessories that might interfere with the wrap installation. We'll discuss specific requirements during your consultation."
        },
        {
          question: "Can I drive my vehicle during installation?",
          answer: "Your vehicle will need to stay at our facility during the installation process. We recommend arranging alternative transportation for the duration of the wrap installation."
        }
      ]
    },
    {
      category: "Design and Customization",
      questions: [
        {
          question: "Do you provide design services?",
          answer: "Yes, our experienced design team can create custom graphics tailored to your needs. We also offer AI-powered design tools to help visualize different options for your vehicle."
        },
        {
          question: "Can I use my own design or logo?",
          answer: "Absolutely! You can provide your own artwork, logos, or design concepts. Our team will ensure your design is optimized for vehicle wrapping and meets technical requirements."
        },
        {
          question: "What file formats do you accept?",
          answer: "We accept most common file formats including AI, EPS, PDF, PNG, and high-resolution JPG files. Vector formats (AI, EPS) are preferred for logos and text elements."
        }
      ]
    },
    {
      category: "Maintenance and Care",
      questions: [
        {
          question: "How do I clean my wrapped vehicle?",
          answer: "Hand washing with mild soap and water is recommended. Avoid automatic car washes with brushes, high-pressure washing, and abrasive cleaning products. We'll provide detailed care instructions after installation."
        },
        {
          question: "Can wrapped vehicles go through car washes?",
          answer: "Touchless car washes are generally safe, but we recommend hand washing for best results. Avoid car washes with brushes or high-pressure systems that could damage the wrap edges."
        },
        {
          question: "What if my wrap gets damaged?",
          answer: "Minor damage can often be repaired by replacing the affected panel or section. We offer repair services and can match the original design and color. Contact us immediately if damage occurs."
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Vehicle Wrap FAQ | Common Questions Answered | Wrapping Chicago</title>
        <meta 
          name="description" 
          content="Get answers to frequently asked questions about vehicle wraps, installation, pricing, and maintenance. Expert advice from Chicago's premier vehicle wrap specialists." 
        />
        <meta name="keywords" content="vehicle wrap FAQ, car wrap questions, truck wrap answers, vehicle wrap cost, wrap installation Chicago, vehicle wrap maintenance" />
        <link rel="canonical" href="https://www.wrappingchicago.com/faq" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        
        <main className="flex-grow">
          <FAQHero />
          
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            
            {faqSections.map((section, sectionIndex) => (
              <section key={sectionIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-brand-navy mb-6">{section.category}</h2>
                <div className="space-y-4">
                  {section.questions.map((faq, questionIndex) => {
                    const globalIndex = sectionIndex * 100 + questionIndex;
                    const isOpen = openIndex === globalIndex;
                    
                    return (
                      <div key={questionIndex} className="bg-white rounded-lg shadow-md">
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-brand-navy pr-4">{faq.question}</h3>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-brand-red flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-brand-red flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
            
            {/* Contact Section */}
            <section className="bg-brand-light p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Still Have Questions?</h2>
              <p className="text-gray-700 mb-6">
                Our expert team is here to help. Contact us for personalized answers to your vehicle wrap questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:3125971286"
                  className="bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Call (312) 597-1286
                </a>
                <a 
                  href="/contact"
                  className="bg-brand-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Request a Quote
                </a>
              </div>
            </section>
          </div>
          
          <CallToAction city="Chicago" />
        </main>
      </div>
    </>
  );
};

export default FAQPage;
