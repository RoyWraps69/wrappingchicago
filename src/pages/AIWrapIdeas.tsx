
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { toast } from 'sonner';
import { storeStabilityApiKey } from '@/utils/store-stability-key';
import AIWrapSchema from '@/components/ai-wrap-ideas/AIWrapSchema';

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
        <title>AI Wrap Designer | Chicago Fleet Wraps</title>
        <meta 
          name="description" 
          content="Design custom vehicle wraps with our AI-powered tool. Create unique, professional vehicle wraps using artificial intelligence for your Chicago business." 
        />
        <meta name="keywords" content="AI vehicle wrap design, artificial intelligence wrap designer, Chicago fleet wraps, AI design tool, vehicle wrap ideas, custom AI wrap design" />
        <meta property="og:title" content="AI Wrap Designer | Chicago Fleet Wraps" />
        <meta property="og:description" content="Create unique, professional vehicle wraps using our artificial intelligence design generator. Get instant wrap design ideas for your Chicago business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chicagofleetwraps.com/ai-wrap-ideas" />
        <meta property="og:image" content="/lovable-uploads/efc6c586-8651-43ad-811a-b896a91a1b69.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Wrap Designer | Chicago Fleet Wraps" />
        <meta name="twitter:description" content="Create unique, professional vehicle wraps using our artificial intelligence design generator. Get instant wrap design ideas for your Chicago business." />
        <meta name="twitter:image" content="/lovable-uploads/efc6c586-8651-43ad-811a-b896a91a1b69.png" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <AIWrapHero />
          
          <ValueProposition />
          
          <WrapIdeaGenerator />
          
          {showResults && generatedIdeas.length > 0 && (
            <div id="results-section" className="container mx-auto px-4 max-w-6xl py-12">
              <WrapIdeasResults />
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
