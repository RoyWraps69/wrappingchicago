
import React from 'react';
import UniversalRichSnippets from '@/components/seo/UniversalRichSnippets';
import { Helmet } from 'react-helmet-async';
import CallToAction from '@/components/CallToAction';
import FAQHero from '@/components/heroes/FAQHero';
import VehicleWrapFAQ from '@/components/home/VehicleWrapFAQ';
import { SchemaDeduplicatorProvider } from '@/components/seo/SchemaDeduplicator';

const FAQPage = () => {
  return (
    <SchemaDeduplicatorProvider>
      <Helmet>
        <title>Vehicle Wrap FAQ - Frequently Asked Questions | Wrapping Chicago</title>
        <meta name="description" content="Get answers to common questions about vehicle wraps, car wraps, and commercial fleet wrapping services in Chicago and surrounding areas." />
        <meta name="keywords" content="vehicle wrap FAQ, car wrap questions, vinyl wrap answers, Chicago wrapping" />
        <link rel="canonical" href="https://www.wrappingchicago.com/faq" />
      </Helmet>
      
      <UniversalRichSnippets 
        pageTitle="Vehicle Wrap FAQ"
        pageDescription="Frequently asked questions about vehicle wrapping services"
        pageType="WebPage"
      />
      
      <main>
        <FAQHero />
        <VehicleWrapFAQ />
        <CallToAction />
      </main>
    </SchemaDeduplicatorProvider>
  );
};

export default FAQPage;
