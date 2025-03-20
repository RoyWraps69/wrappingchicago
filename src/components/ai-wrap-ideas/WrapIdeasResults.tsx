
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, ImageIcon } from 'lucide-react';
import WrapIdeaCard from './WrapIdeaCard';
import { useAIWrap } from '@/contexts/AIWrapContext';
import { Skeleton } from '@/components/ui/skeleton';

const WrapIdeasResults = () => {
  const { 
    generatedIdeas, 
    handleLikeIdea, 
    handleGenerateIdeas, 
    isGenerating,
    generatedImage,
    isGeneratingImage 
  } = useAIWrap();

  // Debug logging
  useEffect(() => {
    console.log("WrapIdeasResults rendered with:", {
      generatedIdeasCount: generatedIdeas.length,
      isGenerating,
      hasGeneratedImage: !!generatedImage,
      isGeneratingImage
    });

    if (generatedIdeas.length > 0) {
      console.log("First idea:", generatedIdeas[0]);
    }
  }, [generatedIdeas, isGenerating, generatedImage, isGeneratingImage]);
  
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-brand-navy mb-6">Your AI-Generated Wrap Ideas</h2>
      
      {(generatedImage || isGeneratingImage) && (
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="flex items-center text-lg font-semibold mb-4">
            <ImageIcon className="mr-2 h-5 w-5 text-brand-navy" />
            Your Custom Generated Design
          </h3>
          
          {isGeneratingImage ? (
            <div className="aspect-video bg-white rounded-md overflow-hidden shadow-md flex items-center justify-center">
              <div className="w-full max-w-md">
                <Skeleton className="h-48 w-full rounded-md" />
                <div className="mt-4 flex items-center justify-center">
                  <RefreshCw className="h-6 w-6 animate-spin text-brand-navy" />
                  <span className="ml-2 text-gray-500">Generating your custom design...</span>
                </div>
              </div>
            </div>
          ) : generatedImage ? (
            <div className="aspect-video bg-white rounded-md overflow-hidden shadow-md">
              <img 
                src={generatedImage} 
                alt="Your custom generated wrap design" 
                className="object-contain w-full h-full"
                onError={(e) => {
                  console.error("Image failed to load:", e);
                  const target = e.currentTarget;
                  target.onerror = null; // Prevent infinite loop
                  target.src = "https://placehold.co/1024x1024/0B3954/FFFFFF?text=Design+Loading+Error";
                }}
              />
            </div>
          ) : null}
          
          <p className="text-sm text-gray-500 mt-3">
            {isGeneratingImage ? 
              "This may take 15-30 seconds..." : 
              "This custom design has been applied to your first concept below"}
          </p>
        </div>
      )}
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isGenerating ? (
          // Show skeleton cards while loading
          Array(3).fill(0).map((_, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <Skeleton className="h-48 w-full" />
              <div className="p-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          ))
        ) : generatedIdeas && generatedIdeas.length > 0 ? (
          generatedIdeas.map((idea) => (
            <WrapIdeaCard 
              key={idea.id} 
              idea={idea} 
              onLike={() => handleLikeIdea(idea.id)} 
            />
          ))
        ) : (
          <div className="col-span-3 text-center py-10">
            <p className="text-gray-500">No wrap ideas generated yet. Try generating some ideas first.</p>
          </div>
        )}
      </div>
      
      {generatedIdeas && generatedIdeas.length > 0 && (
        <div className="text-center mt-8">
          <p className="text-gray-500 mb-4">Not seeing what you like? Try adjusting your description or generating new ideas.</p>
          <Button
            variant="outline"
            className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
            onClick={handleGenerateIdeas}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-4 w-4" />
                Generate More Ideas
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default WrapIdeasResults;
