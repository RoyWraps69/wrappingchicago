
import React from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, ImageIcon } from 'lucide-react';
import WrapIdeaCard from './WrapIdeaCard';
import { useAIWrap } from '@/contexts/AIWrapContext';

const WrapIdeasResults = () => {
  const { 
    generatedIdeas, 
    handleLikeIdea, 
    handleGenerateIdeas, 
    isGenerating,
    generatedImage 
  } = useAIWrap();
  
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-brand-navy mb-6">Your AI-Generated Wrap Ideas</h2>
      
      {generatedImage && (
        <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="flex items-center text-lg font-semibold mb-3">
            <ImageIcon className="mr-2 h-5 w-5 text-brand-navy" />
            Your Custom Generated Design
          </h3>
          <div className="aspect-w-16 aspect-h-9 bg-white rounded-md overflow-hidden shadow-md">
            <img 
              src={generatedImage} 
              alt="Your custom generated wrap design" 
              className="object-contain w-full h-full"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            This custom design has been applied to your first concept below
          </p>
        </div>
      )}
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {generatedIdeas.map((idea) => (
          <WrapIdeaCard 
            key={idea.id} 
            idea={idea} 
            onLike={() => handleLikeIdea(idea.id)} 
          />
        ))}
      </div>
      
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
    </div>
  );
};

export default WrapIdeasResults;
