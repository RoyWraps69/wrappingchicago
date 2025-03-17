import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { toast } from 'sonner';
import { Settings } from 'lucide-react';

// Import our components
import AIWrapHero from '@/components/ai-wrap-ideas/AIWrapHero';
import ValueProposition from '@/components/ai-wrap-ideas/ValueProposition';
import WrapIdeaGenerator from '@/components/ai-wrap-ideas/WrapIdeaGenerator';
import WrapIdeasResults from '@/components/ai-wrap-ideas/WrapIdeasResults';
import ProcessSection from '@/components/ai-wrap-ideas/ProcessSection';
import ApiKeyModal from '@/components/ai-wrap-ideas/ApiKeyModal';

// Import the types and example data
import { WrapIdea, exampleIdeas } from '@/types/wrap-idea';

// Import OpenAI service
import { generateImage } from '@/services/openai';
import { Button } from '@/components/ui/button';

const AIWrapIdeas = () => {
  const [business, setBusiness] = useState('');
  const [description, setDescription] = useState('');
  const [selectedVehicleType, setSelectedVehicleType] = useState('car');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedIdeas, setGeneratedIdeas] = useState<WrapIdea[]>(exampleIdeas);
  
  const [imagePrompt, setImagePrompt] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState('dall-e-3');
  const [imageGenerationError, setImageGenerationError] = useState<string | undefined>(undefined);
  
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);

  useEffect(() => {
    const apiKey = localStorage.getItem('openai_api_key');
    setHasApiKey(!!apiKey);
  }, [isApiKeyModalOpen]);

  const checkApiKey = (): boolean => {
    const apiKey = localStorage.getItem('openai_api_key');
    if (!apiKey) {
      toast.error("OpenAI API key is required. Please set your API key.");
      setIsApiKeyModalOpen(true);
      return false;
    }
    return true;
  };

  const handleGenerateIdeas = () => {
    if (!business.trim()) {
      toast.error("Please enter your business name");
      return;
    }

    if (!checkApiKey()) return;

    setIsGenerating(true);
    
    setTimeout(() => {
      setGeneratedIdeas([...exampleIdeas]);
      setIsGenerating(false);
      toast.success("New wrap concepts generated!");
    }, 2000);
  };
  
  const handleGenerateImage = async () => {
    if (!imagePrompt.trim()) {
      toast.error("Please enter a description for your wrap design");
      return;
    }
    
    if (!checkApiKey()) return;
    
    setImageGenerationError(undefined);
    setIsGeneratingImage(true);
    
    try {
      const fullPrompt = `${selectedVehicleType} vehicle wrap design for ${business ? business + ',' : ''} ${imagePrompt}. Professional, high quality, photorealistic.`;
      
      const imageUrl = await generateImage({
        prompt: fullPrompt,
        size: "1024x1024",
        model: selectedModel
      });
      
      if (imageUrl) {
        setGeneratedImage(imageUrl);
        toast.success("Custom wrap design generated!");
      } else {
        setImageGenerationError("Failed to generate image. Please try again.");
        toast.error("Failed to generate image. Please try again.");
      }
    } catch (error) {
      console.error("Error generating image:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to generate image";
      setImageGenerationError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleLikeIdea = (ideaId: string) => {
    toast.success("Thanks for your feedback! We'll use this to improve future suggestions.");
  };

  const handleDownloadImage = () => {
    if (!generatedImage) return;
    
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `wrap-design-${new Date().getTime()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Image downloaded successfully!");
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
          <AIWrapHero />
          
          <div className="container mx-auto px-4 flex justify-end -mb-6 mt-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsApiKeyModalOpen(true)}
              className="flex items-center gap-2"
            >
              <Settings size={16} />
              {hasApiKey ? "Update API Key" : "Set API Key"}
            </Button>
          </div>
          
          <ValueProposition />
          
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
            onDownloadImage={handleDownloadImage}
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
            imageGenerationError={imageGenerationError}
          />
          
          <div className="container mx-auto px-4 max-w-6xl py-12">
            <WrapIdeasResults 
              generatedIdeas={generatedIdeas}
              handleLikeIdea={handleLikeIdea}
              handleGenerateIdeas={handleGenerateIdeas}
              isGenerating={isGenerating}
            />
          </div>
          
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

export default AIWrapIdeas;
