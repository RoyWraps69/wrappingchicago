
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { toast } from 'sonner';
import { storeStabilityApiKey } from '@/utils/store-stability-key';
import AIWrapSchema from '@/components/ai-wrap-ideas/AIWrapSchema';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone } from 'lucide-react';
import Schema from '@/components/Schema';
import { cities } from '@/data/cities';

// Import components
import AIWrapHero from '@/components/ai-wrap-ideas/AIWrapHero';
import ValueProposition from '@/components/ai-wrap-ideas/ValueProposition';
import WrapIdeaGenerator from '@/components/ai-wrap-ideas/WrapIdeaGenerator';
import WrapIdeasResults from '@/components/ai-wrap-ideas/WrapIdeasResults';
import ProcessSection from '@/components/ai-wrap-ideas/ProcessSection';
import ApiKeyModal from '@/components/ai-wrap-ideas/ApiKeyModal';
import { AIWrapProvider, useAIWrap } from '@/contexts/AIWrapContext';

const AIWrapIdeasContent = () => {
  const { 
    showResults, 
    generatedIdeas, 
    handleLikeIdea, 
    handleGenerateIdeas, 
    isGenerating,
    isApiKeyModalOpen,
    setIsApiKeyModalOpen,
    hasApiKey
  } = useAIWrap();

  // For Schema component
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];

  useEffect(() => {
    // Store Stability AI key
    const stabilityKey = 'sk-glMSCek7n7U8wQJtZACxVDc2iu017px1RmwbOmqDwmNVGpcH';
    storeStabilityApiKey(stabilityKey);
    
    // Clean up
    return () => {
      const container = document.getElementById('adobe-express-container');
      if (container) {
        container.remove();
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>AI Wrap Designer | Create Custom Vehicle Wrap Designs | Chicago</title>
        <meta 
          name="description" 
          content="Design custom vehicle wraps with our AI-powered tool. Create unique, professional vehicle wraps using artificial intelligence for your Chicago business in seconds. Visualize your ideas instantly." 
        />
        <meta name="keywords" content="AI vehicle wrap design, artificial intelligence wrap designer, Chicago fleet wraps, AI design tool, vehicle wrap ideas, custom AI wrap design" />
        <link rel="canonical" href="https://wrappingchicago.com/ai-wrap-ideas" />
        <meta property="og:title" content="AI Wrap Designer | Create Custom Vehicle Wrap Designs | Chicago" />
        <meta property="og:description" content="Create unique, professional vehicle wraps using our artificial intelligence design generator. Get instant wrap design ideas for your Chicago business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wrappingchicago.com/ai-wrap-ideas" />
        <meta property="og:image" content="/lovable-uploads/efc6c586-8651-43ad-811a-b896a91a1b69.png" />
        <meta property="og:image:alt" content="AI-generated vehicle wrap design concept for commercial vehicles - modern professional design" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Wrap Designer | Chicago Fleet Wraps" />
        <meta name="twitter:description" content="Create unique, professional vehicle wraps using our artificial intelligence design generator. Get instant wrap design ideas for your Chicago business." />
        <meta name="twitter:image" content="/lovable-uploads/efc6c586-8651-43ad-811a-b896a91a1b69.png" />
      </Helmet>
      
      <Schema 
        city={chicagoCity}
        path="/ai-wrap-ideas"
        pageTitle="AI Wrap Designer | Create Custom Vehicle Wrap Designs | Chicago"
        pageDescription="Design custom vehicle wraps with our AI-powered tool. Create unique, professional wraps with artificial intelligence for your Chicago business."
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <AIWrapHero />
          
          {/* Contact Buttons Section after Hero */}
          <div className="container mx-auto px-4 max-w-5xl py-6">
            <div className="p-5 bg-gray-900 text-white rounded-lg flex flex-col sm:flex-row items-center justify-between shadow-lg">
              <div>
                <h2 className="text-xl font-bold mb-2">Ready to bring your AI designs to life?</h2>
                <p className="opacity-90 mb-4 sm:mb-0">Contact our team to implement your generated wrap ideas</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-brand-red hover:bg-red-700 text-white"
                >
                  <Link to="/contact" className="inline-flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Request a Quote
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 bg-white/10 text-white hover:bg-white/20"
                >
                  <a href="tel:3125971286" className="inline-flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    (312) 597-1286
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <ValueProposition />
          
          <WrapIdeaGenerator />
          
          {showResults && generatedIdeas.length > 0 && (
            <div id="results-section" className="container mx-auto px-4 max-w-6xl py-12">
              <WrapIdeasResults />
              
              {/* Contact Button after results */}
              <div className="mt-8 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-red hover:bg-red-700 text-white"
                >
                  <Link to="/contact" className="inline-flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Get a Quote to Make These Designs Reality
                  </Link>
                </Button>
              </div>
            </div>
          )}
          
          <ProcessSection />
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
      
      <ApiKeyModal 
        isOpen={isApiKeyModalOpen} 
        onClose={() => setIsApiKeyModalOpen(false)} 
      />
      
      <AIWrapSchema />
    </>
  );
};

const AIWrapIdeas = () => (
  <AIWrapProvider>
    <AIWrapIdeasContent />
  </AIWrapProvider>
);

export default AIWrapIdeas;
