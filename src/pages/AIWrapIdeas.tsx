
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { toast } from 'sonner';

// Import our new components
import AIWrapHero from '@/components/ai-wrap-ideas/AIWrapHero';
import ValueProposition from '@/components/ai-wrap-ideas/ValueProposition';
import WrapIdeaGenerator from '@/components/ai-wrap-ideas/WrapIdeaGenerator';
import WrapIdeasResults from '@/components/ai-wrap-ideas/WrapIdeasResults';
import ProcessSection from '@/components/ai-wrap-ideas/ProcessSection';

// Import the types and example data
import { WrapIdea, exampleIdeas } from '@/types/wrap-idea';

const AIWrapIdeas = () => {
  const [business, setBusiness] = useState('');
  const [description, setDescription] = useState('');
  const [selectedVehicleType, setSelectedVehicleType] = useState('car');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedIdeas, setGeneratedIdeas] = useState<WrapIdea[]>(exampleIdeas);
  
  // State for direct image generation (DALL-E style)
  const [imagePrompt, setImagePrompt] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerateIdeas = () => {
    if (!business.trim()) {
      toast.error("Please enter your business name");
      return;
    }

    setIsGenerating(true);
    
    // Simulate API call to AI service
    setTimeout(() => {
      // In a real app, this would call an AI service
      // For demo, we'll just show the example ideas
      setGeneratedIdeas([...exampleIdeas]);
      setIsGenerating(false);
      toast.success("New wrap concepts generated!");
    }, 2000);
  };
  
  const handleGenerateImage = () => {
    if (!imagePrompt.trim()) {
      toast.error("Please enter a description for your wrap design");
      return;
    }
    
    setIsGeneratingImage(true);
    
    // Simulate API call to image generation service
    setTimeout(() => {
      // In a real app, this would call an image generation API like DALL-E
      // For demo, we'll just use a placeholder
      setGeneratedImage(`https://placehold.co/1024x512/0B3954/FFFFFF?text=${encodeURIComponent(imagePrompt)}`);
      setIsGeneratingImage(false);
      toast.success("Custom wrap design generated!");
    }, 3000);
  };

  const handleLikeIdea = (ideaId: string) => {
    toast.success("Thanks for your feedback! We'll use this to improve future suggestions.");
  };

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
          {/* Hero Section */}
          <AIWrapHero />
          
          {/* Value Proposition Section */}
          <ValueProposition />
          
          {/* Generator Section */}
          <WrapIdeaGenerator 
            onGenerateIdeas={handleGenerateIdeas}
            isGenerating={isGenerating}
            business={business}
            setBusiness={setBusiness}
            description={description}
            setDescription={setDescription}
            selectedVehicleType={selectedVehicleType}
            setSelectedVehicleType={setSelectedVehicleType}
            imagePrompt={imagePrompt}
            setImagePrompt={setImagePrompt}
            onGenerateImage={handleGenerateImage}
            isGeneratingImage={isGeneratingImage}
            generatedImage={generatedImage}
          />
          
          {/* Results Section */}
          <div className="container mx-auto px-4 max-w-6xl py-12">
            <WrapIdeasResults 
              generatedIdeas={generatedIdeas}
              handleLikeIdea={handleLikeIdea}
              handleGenerateIdeas={handleGenerateIdeas}
              isGenerating={isGenerating}
            />
          </div>
          
          {/* Process Section */}
          <ProcessSection />
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AIWrapIdeas;
