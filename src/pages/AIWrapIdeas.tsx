
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AIWrapHero from '@/components/ai-wrap-ideas/AIWrapHero';
import AIWrapSchema from '@/components/ai-wrap-ideas/AIWrapSchema';
import ProcessSection from '@/components/ai-wrap-ideas/ProcessSection';
import ValueProposition from '@/components/ai-wrap-ideas/ValueProposition';
import WrapIdeaGenerator from '@/components/ai-wrap-ideas/WrapIdeaGenerator';
import WrapIdeasResults from '@/components/ai-wrap-ideas/WrapIdeasResults';
import PDFDownloadSection from '@/components/ai-wrap-ideas/PDFDownloadSection';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import Schema from '@/components/Schema';
import { cities } from '@/data/cities';

const AIWrapIdeas = () => {
  // For Schema component, choose Chicago as the default city
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  
  return (
    <>
      <Helmet>
        <title>AI Vehicle Wrap Design Generator | Chicago Fleet Wraps</title>
        <meta 
          name="description" 
          content="Generate unique vehicle wrap designs using AI technology. Transform your vehicle's appearance with innovative, custom graphics tailored to your brand."
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://www.wrappingchicago.com/ai-wrap-ideas" />
      </Helmet>

      <AIWrapSchema />
      
      <Schema 
        city={chicagoCity}
        path="/ai-wrap-ideas"
        pageTitle="AI Vehicle Wrap Design Generator | Chicago Fleet Wraps"
        pageDescription="Generate unique vehicle wrap designs using AI technology. Transform your vehicle's appearance with innovative, custom graphics tailored to your brand."
        keywords={["AI vehicle wrap design", "custom wrap generator", "AI wrap design", "vehicle wrap ideas", "Chicago vehicle wrap design", "wrap design generator"]}
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-4">
            <Breadcrumbs />
          </div>
          
          <AIWrapHero />
          <ValueProposition />
          <ProcessSection />
          
          {/* PDF Download Section */}
          <div className="container mx-auto px-4">
            <PDFDownloadSection />
          </div>
          
          <WrapIdeaGenerator />
          <WrapIdeasResults />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AIWrapIdeas;
