
import React from 'react';
import { Button } from '@/components/ui/button';
import { ThumbsUp, Download } from 'lucide-react';
import { toast } from 'sonner';

interface WrapIdea {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  vehicleType: string;
}

interface WrapIdeaCardProps {
  idea: WrapIdea;
  onLike: () => void;
}

const WrapIdeaCard = ({ idea, onLike }: WrapIdeaCardProps) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl">
    <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-md bg-gray-100">
      <img 
        src={idea.imageUrl || "https://placehold.co/600x400/0B3954/FFFFFF?text=AI+Concept"}
        alt={idea.title}
        className="object-cover w-full h-full"
        loading="lazy"
      />
    </div>
    <h3 className="text-xl font-bold text-brand-navy mb-2">{idea.title}</h3>
    <p className="text-gray-700 mb-4">{idea.description}</p>
    <div className="flex justify-between items-center">
      <Button 
        variant="outline" 
        size="sm"
        className="text-gray-600"
        onClick={onLike}
      >
        <ThumbsUp className="w-4 h-4 mr-2" />
        Like this idea
      </Button>
      
      {idea.imageUrl && (
        <Button
          variant="ghost" 
          size="sm"
          className="text-gray-600"
          onClick={() => {
            // Create a download link for the image
            const link = document.createElement('a');
            link.href = idea.imageUrl || '';
            link.download = `${idea.title.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            toast.success("Design concept downloaded!");
          }}
        >
          <Download className="w-4 h-4 mr-2" />
          Save
        </Button>
      )}
    </div>
  </div>
);

export default WrapIdeaCard;
