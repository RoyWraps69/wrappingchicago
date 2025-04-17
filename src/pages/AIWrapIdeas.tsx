
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
import { useIsMobile } from '@/hooks/use-mobile';
import GoogleSearchConsole from '@/components/seo/GoogleSearchConsole';

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
  
  const isMobile = useIsMobile();

  // For Schema component
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  const domain = "https://www.wrappingchicago.com";

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

  // Schema data specifically for voice search and AI assistants
  const voiceSearchSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["#ai-wrap-hero h1", "#ai-wrap-hero p", ".value-proposition h2", ".value-proposition p"]
    },
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "AI Vehicle Wrap Designer",
      "applicationCategory": "DesignApplication",
      "operatingSystem": "Web-based",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Wrap Designer | Create Custom Vehicle Wrap Designs | Chicago</title>
        <meta 
          name="description" 
          content="Design custom vehicle wraps with our AI-powered tool. Create unique, professional vehicle wraps using artificial intelligence for your Chicago business in seconds. Visualize your ideas instantly." 
        />
        <meta name="keywords" content="AI vehicle wrap design, artificial intelligence wrap designer, Chicago fleet wraps, AI design tool, vehicle wrap ideas, custom AI wrap design" />
        <link rel="canonical" href="https://www.wrappingchicago.com/ai-wrap-ideas" />
        <meta property="og:title" content="AI Wrap Designer | Create Custom Vehicle Wrap Designs | Chicago" />
        <meta property="og:description" content="Create unique, professional vehicle wraps using our artificial intelligence design generator. Get instant wrap design ideas for your Chicago business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wrappingchicago.com/ai-wrap-ideas" />
        <meta property="og:image" content="https://www.wrappingchicago.com/lovable-uploads/efc6c586-8651-43ad-811a-b896a91a1b69.png" />
        <meta property="og:image:alt" content="AI-generated vehicle wrap design concept for commercial vehicles - modern professional design" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Wrap Designer | Chicago Fleet Wraps" />
        <meta name="twitter:description" content="Create unique, professional vehicle wraps using our artificial intelligence design generator. Get instant wrap design ideas for your Chicago business." />
        <meta name="twitter:image" content="https://www.wrappingchicago.com/lovable-uploads/efc6c586-8651-43ad-811a-b896a91a1b69.png" />
        
        {/* Mobile-specific meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="theme-color" content="#11172D" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Voice search and AI assistant schema */}
        <script type="application/ld+json">
          {JSON.stringify(voiceSearchSchema)}
        </script>
      </Helmet>
      
      <GoogleSearchConsole verificationCode="gQnkHgsJ2bOPDWFClspUxA6EZsE-XWnLasqxsqSESvg" />
      
      <Schema 
        city={chicagoCity}
        path="/ai-wrap-ideas"
        pageTitle="AI Wrap Designer | Create Custom Vehicle Wrap Designs | Chicago"
        pageDescription="Design custom vehicle wraps with our AI-powered tool. Create unique, professional wraps with artificial intelligence for your Chicago business."
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div id="ai-wrap-hero">
            <AIWrapHero />
          </div>
          
          {/* Contact Buttons Section after Hero */}
          <div className="container mx-auto px-4 max-w-5xl py-4 md:py-6">
            <div className="p-4 md:p-5 bg-gray-900 text-white rounded-lg flex flex-col sm:flex-row items-center justify-between shadow-lg">
              <div>
                <h2 className="text-lg md:text-xl font-bold mb-2 text-center sm:text-left">Ready to bring your AI designs to life?</h2>
                <p className="opacity-90 mb-4 sm:mb-0 text-center sm:text-left text-sm md:text-base">Contact our team to implement your generated wrap ideas</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Button
                  asChild
                  className="bg-brand-red hover:bg-red-700 text-white w-full sm:w-auto"
                >
                  <Link to="/contact" className="inline-flex items-center justify-center">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Request a Quote
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 bg-white/10 text-white hover:bg-white/20 w-full sm:w-auto"
                >
                  <a href="tel:3125971286" className="inline-flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4" />
                    (312) 597-1286
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="value-proposition">
            <ValueProposition />
          </div>
          
          <WrapIdeaGenerator />
          
          {showResults && generatedIdeas.length > 0 && (
            <div id="results-section" className="container mx-auto px-4 max-w-6xl py-8 md:py-12">
              <WrapIdeasResults />
              
              {/* Enhanced Contact Button with Internal Linking */}
              <div className="mt-6 md:mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size={isMobile ? "default" : "lg"}
                  className="bg-brand-red hover:bg-red-700 text-white w-full md:w-auto"
                >
                  <Link to="/contact" className="inline-flex items-center justify-center px-3 py-2 md:px-6 md:py-3">
                    <MessageSquare className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-sm md:text-base">Get a Quote to Make These Designs Reality</span>
                  </Link>
                </Button>
                
                {/* Additional internal linking to related services */}
                <Button
                  asChild
                  size={isMobile ? "default" : "lg"}
                  variant="outline"
                  className="border-gray-300 bg-white text-gray-800 hover:bg-gray-100 w-full md:w-auto"
                >
                  <Link to="/services/fleet-wraps" className="inline-flex items-center justify-center px-3 py-2 md:px-6 md:py-3">
                    <span className="text-sm md:text-base">Explore Fleet Wrap Services</span>
                  </Link>
                </Button>
              </div>
              
              {/* Service navigation links */}
              <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-center">Explore Our Vehicle Wrap Services</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Link to="/services/car-wraps" className="text-brand-navy hover:text-brand-red text-sm transition-colors">Car Wraps</Link>
                  <Link to="/services/truck-wraps" className="text-brand-navy hover:text-brand-red text-sm transition-colors">Truck Wraps</Link>
                  <Link to="/services/van-wraps" className="text-brand-navy hover:text-brand-red text-sm transition-colors">Van Wraps</Link>
                  <Link to="/services/fleet-wraps" className="text-brand-navy hover:text-brand-red text-sm transition-colors">Fleet Wraps</Link>
                </div>
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
