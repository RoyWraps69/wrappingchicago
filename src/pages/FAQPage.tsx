
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNavigation from '@/components/seo/BreadcrumbNavigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MetaTags from '@/components/seo/MetaTags';

const FAQPage: React.FC = () => {
  const faqCategories = [
    {
      title: "General Vehicle Wrap Questions",
      faqs: [
        {
          question: "How much does a vehicle wrap cost in Chicago?",
          answer: "Vehicle wrap costs vary by vehicle size and design complexity. Full car wraps typically range from $2,500-$5,000, truck wraps from $3,500-$7,000, and van wraps from $3,000-$6,000. Partial wraps start around $1,500. We offer free detailed quotes for accurate pricing."
        },
        {
          question: "How long do vehicle wraps last?",
          answer: "With proper care, our premium vehicle wraps typically last 5-7 years in Chicago's climate. We use high-quality 3M and Avery Dennison materials with UV protection. All wraps come with a 2-year warranty covering materials and workmanship."
        },
        {
          question: "Will a vehicle wrap damage my paint?",
          answer: "No, professional vehicle wraps actually protect your paint when properly installed and removed. Our premium vinyl acts as a shield against minor scratches, stone chips, and UV damage, often leaving the original paint in better condition than unwrapped vehicles."
        },
        {
          question: "How long does installation take?",
          answer: "Most vehicle wrap installations take 3-5 business days. Simple designs on smaller vehicles may take 2-3 days, while complex wraps on larger vehicles could take 5-7 days. We ensure thorough preparation, precise installation, and proper curing time."
        }
      ]
    },
    {
      title: "Design and Materials",
      faqs: [
        {
          question: "Do you provide design services?",
          answer: "Yes! Our in-house design team creates custom vehicle wrap designs tailored to your brand and marketing goals. We offer complimentary design consultations and can work from your existing brand assets or create something entirely new."
        },
        {
          question: "What materials do you use?",
          answer: "We exclusively use premium materials from 3M and Avery Dennison - the industry leaders in vehicle wrap vinyl. These materials offer superior durability, color retention, and conformability for professional results that last."
        },
        {
          question: "Can I see examples of your work?",
          answer: "Absolutely! Visit our gallery page to see hundreds of completed vehicle wrap projects. We showcase work across all vehicle types including cars, trucks, vans, fleets, and specialty vehicles with various design styles."
        },
        {
          question: "What file formats do you accept for designs?",
          answer: "We accept AI, EPS, PDF, PSD, and high-resolution PNG/JPG files. Vector formats (AI, EPS) are preferred for logos and text elements. Our design team can also work with lower resolution files and recreate artwork as needed."
        }
      ]
    },
    {
      title: "Installation and Maintenance",
      faqs: [
        {
          question: "Can I drive my car through a car wash with a wrap?",
          answer: "Yes, but we recommend touchless car washes for wrapped vehicles. Traditional brush car washes can potentially damage vinyl edges. Hand washing with non-abrasive cleaners is the best option for maintaining your wrap's appearance and longevity."
        },
        {
          question: "How do I care for my vehicle wrap?",
          answer: "Wash regularly with mild soap and water, avoid harsh chemicals and abrasive materials. Park in shade when possible to minimize UV exposure. Address any damage promptly to prevent lifting or peeling. We provide detailed care instructions with every installation."
        },
        {
          question: "What if my wrap gets damaged?",
          answer: "Minor damage can often be repaired by replacing individual panels rather than the entire wrap. We offer repair services and keep material records to ensure color matching. Our 2-year warranty covers defects in materials and workmanship."
        },
        {
          question: "Can wraps be removed?",
          answer: "Yes, vehicle wraps are designed to be removable. Professional removal typically takes 1-2 days and should not damage the original paint when done correctly. We offer wrap removal services and can often install a new wrap immediately after removal."
        }
      ]
    },
    {
      title: "Business and Fleet Wraps",
      faqs: [
        {
          question: "Do you offer fleet discounts?",
          answer: "Yes! We offer competitive pricing for fleet projects of 3 or more vehicles. Larger fleets receive additional discounts. We can also schedule installations to minimize business disruption and work within your operational timeline."
        },
        {
          question: "How effective are vehicle wraps for advertising?",
          answer: "Vehicle wraps are extremely effective mobile advertising. Studies show vehicle wraps generate 30,000-70,000 impressions daily and cost less per impression than traditional advertising. Many clients see immediate increases in inquiries and brand recognition."
        },
        {
          question: "Can you match our brand colors exactly?",
          answer: "Yes, we can match brand colors using Pantone color systems and custom color mixing. We provide color proofs before production to ensure exact brand compliance. Our color matching process ensures consistency across your entire fleet."
        },
        {
          question: "Do you work with leased vehicles?",
          answer: "Yes, we work with leased vehicles regularly. We ensure all wraps can be safely removed without damage to meet lease return requirements. We recommend checking with your leasing company first, though most approve vehicle wraps for business use."
        }
      ]
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category => 
      category.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  };

  return (
    <>
      <MetaTags
        title="Vehicle Wrap FAQ - Common Questions Answered | Wrapping Chicago"
        description="Get answers to frequently asked questions about vehicle wraps in Chicago. Learn about costs, installation time, materials, care, and more from our wrap experts."
        keywords="vehicle wrap FAQ, car wrap questions, truck wrap cost, wrap installation time, vehicle wrap care, Chicago vehicle wraps"
        canonicalUrl="/faq"
        structuredData={structuredData}
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <BreadcrumbNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <HelpCircle className="h-16 w-16 mx-auto mb-6 text-brand-red" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Get answers to common questions about vehicle wraps, installation, pricing, and care from Chicago's wrap experts.
              </p>
            </div>
          </section>

          {/* FAQ Content */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {faqCategories.map((category, categoryIndex) => (
                  <Card key={categoryIndex} className="mb-8">
                    <CardHeader>
                      <CardTitle className="text-2xl text-brand-navy">
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {category.faqs.map((faq, faqIndex) => (
                          <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                            <AccordionTrigger className="text-left font-medium">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="max-w-2xl mx-auto mt-12">
                <Card className="bg-gradient-to-r from-brand-red to-red-600 text-white">
                  <CardContent className="p-8 text-center">
                    <MessageCircle className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">
                      Still Have Questions?
                    </h3>
                    <p className="mb-6">
                      Our vehicle wrap experts are here to help. Get personalized answers and a free quote for your project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild variant="secondary">
                        <a href="/contact">
                          Get Free Quote
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-brand-red">
                        <a href="tel:3125971286">
                          <Phone className="h-4 w-4 mr-2" />
                          (312) 597-1286
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default FAQPage;
