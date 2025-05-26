
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cities } from '@/data/cities';
import Schema from '@/components/Schema';
import AIWrapSchema from '@/components/ai-wrap-ideas/AIWrapSchema';
import AIWrapHero from '@/components/ai-wrap-ideas/AIWrapHero';
import ValueProposition from '@/components/ai-wrap-ideas/ValueProposition';
import ProcessSection from '@/components/ai-wrap-ideas/ProcessSection';
import WrapIdeaGenerator from '@/components/ai-wrap-ideas/WrapIdeaGenerator';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';

const AIWrapIdeasPage = () => {
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <>
      <Helmet>
        <title>AI Wrap Ideas in Chicago IL | Wrapping Chicago</title>
        <meta 
          name="description" 
          content="Get AI wrap ideas in Chicago IL services to help generate creative vehicle concepts. Inspire unique designs, then let our experts bring them to life in vinyl." 
        />
        <meta name="keywords" content="AI wrap ideas Chicago, vehicle wrap design generator, custom wrap concepts, AI vehicle graphics, wrap design inspiration Chicago, automated wrap design, vehicle wrap simulator, creative wrap ideas, AI car wrap generator" />
        <link rel="canonical" href={`${domain}/ai-wrap-ideas`} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="AI Wrap Ideas in Chicago IL | Wrapping Chicago" />
        <meta property="og:description" content="Get AI wrap ideas in Chicago IL services to help generate creative vehicle concepts. Inspire unique designs, then let our experts bring them to life in vinyl." />
        <meta property="og:url" content={`${domain}/ai-wrap-ideas`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Wrap Ideas in Chicago IL | Wrapping Chicago" />
        <meta name="twitter:description" content="Get AI wrap ideas in Chicago IL services to help generate creative vehicle concepts. Inspire unique designs, then let our experts bring them to life in vinyl." />
        <meta name="twitter:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      </Helmet>
      
      <Schema 
        city={chicagoCity}
        path="/ai-wrap-ideas"
        pageTitle="AI Wrap Ideas in Chicago IL | Wrapping Chicago"
        pageDescription="Get AI wrap ideas in Chicago IL services to help generate creative vehicle concepts. Inspire unique designs, then let our experts bring them to life in vinyl."
      />
      
      <AIWrapSchema />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-8 px-4">
            <Breadcrumbs />
            
            <AIWrapHero />
            <ValueProposition />
            <ProcessSection />
            <WrapIdeaGenerator />
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AIWrapIdeasPage;
