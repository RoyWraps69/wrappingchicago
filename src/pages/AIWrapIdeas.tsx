
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import components
import AIWrapHero from '@/components/ai-wrap-ideas/AIWrapHero';
import ValueProposition from '@/components/ai-wrap-ideas/ValueProposition';
import WrapIdeaGenerator from '@/components/ai-wrap-ideas/WrapIdeaGenerator';
import WrapIdeasResults from '@/components/ai-wrap-ideas/WrapIdeasResults';
import ProcessSection from '@/components/ai-wrap-ideas/ProcessSection';
import ApiKeyModal from '@/components/ai-wrap-ideas/ApiKeyModal';
import { AIWrapProvider, useAIWrap } from '@/contexts/AIWrapContext';
import { toast } from 'sonner';

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
    // Set default client ID if not already set
    const clientId = localStorage.getItem('firefly_api_key');
    if (!clientId) {
      localStorage.setItem('firefly_api_key', '76f09770425e4f7fbb1d30281b4f4fc3');
      toast.success("Adobe Express Client ID has been set automatically");
    }
    
    // Load Adobe Express SDK
    const loadAdobeExpressSDK = () => {
      if (window.CCEverywhere) {
        console.log("Adobe Express SDK already loaded");
        return;
      }

      const script = document.createElement('script');
      script.src = "https://sdk.cc-embed.adobe.com/v2/CCEverywhere.js";
      script.async = true;
      script.onload = () => console.log("Adobe Express SDK loaded successfully");
      script.onerror = () => console.error("Failed to load Adobe Express SDK");
      document.head.appendChild(script);
    };

    loadAdobeExpressSDK();

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
        <title>AI Wrap Design Ideas | Chicago Fleet Wraps</title>
        <meta 
          name="description" 
          content="Generate custom vehicle wrap design ideas using our AI-powered tool. Get inspiration for your business vehicles." 
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <AIWrapHero />
          
          <div className="container mx-auto px-4 flex justify-end -mb-6 mt-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsApiKeyModalOpen(true)}
              className="flex items-center gap-2"
            >
              <Settings size={16} />
              {hasApiKey ? "Update Client ID" : "Set Client ID"}
            </Button>
          </div>
          
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
    </>
  );
};

const AIWrapIdeas = () => (
  <AIWrapProvider>
    <AIWrapIdeasContent />
  </AIWrapProvider>
);

export default AIWrapIdeas;
