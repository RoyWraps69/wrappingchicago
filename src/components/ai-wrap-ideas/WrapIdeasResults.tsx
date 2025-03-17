
import React from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import WrapIdeaCard from './WrapIdeaCard';

interface WrapIdea {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  vehicleType: string;
}

interface ResultsProps {
  generatedIdeas: WrapIdea[];
  handleLikeIdea: (id: string) => void;
  handleGenerateIdeas: () => void;
  isGenerating: boolean;
}

const WrapIdeasResults = ({ 
  generatedIdeas, 
  handleLikeIdea, 
  handleGenerateIdeas, 
  isGenerating 
}: ResultsProps) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-brand-navy mb-6">Your AI-Generated Wrap Ideas</h2>
      
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
