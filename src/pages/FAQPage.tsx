
import React from 'react';
import UniversalRichSnippets from '@/components/seo/UniversalRichSnippets';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import CallToAction from '@/components/CallToAction';
import FAQHero from '@/components/heroes/FAQHero';
import VehicleWrapFAQ from '@/components/home/VehicleWrapFAQ';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
          <div className="container mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold text-center mb-8">FAQ - Test Page</h1>
            <p className="text-center">This is a test to see if the basic page loads.</p>
          </div>
        </main>
      </div>
    </>
  );
};

export default FAQPage;
