
import React from 'react';
import { Button } from '@/components/ui/button';
import { ThumbsUp, Download, ImageIcon } from 'lucide-react';
import { toast } from 'sonner';
import { Skeleton } from '@/components/ui/skeleton';

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

const WrapIdeaCard = ({ idea, onLike }: WrapIdeaCardProps) => {
  // Check if this is a placeholder image
  const isPlaceholder = idea.imageUrl?.includes('placehold.co');

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl">
      <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-md bg-gray-100">
        {idea.imageUrl ? (
          <img 
            src={idea.imageUrl}
            alt={idea.title}
            className="object-cover w-full h-full"
            loading="lazy"
            onError={(e) => {
              console.error("Card image failed to load:", e);
              // No fallback - show error state
              const target = e.currentTarget;
              target.style.display = 'none';
              target.parentElement?.classList.add('flex', 'items-center', 'justify-center');
              const errorMsg = document.createElement('div');
              errorMsg.textContent = 'Image generation failed';
              errorMsg.className = 'text-red-500 text-sm';
              target.parentElement?.appendChild(errorMsg);
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Skeleton className="h-full w-full absolute" />
            <span className="relative z-10 text-gray-500">Waiting for image generation...</span>
          </div>
        )}
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
        
        {idea.imageUrl && !isPlaceholder ? (
          <Button
            variant="ghost" 
            size="sm"
            className="text-gray-600"
            onClick={() => {
              try {
                // Create a download link for the image
                const link = document.createElement('a');
                link.href = idea.imageUrl || '';
                link.download = `${idea.title.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.png`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                toast.success("Design concept downloaded!");
              } catch (error) {
                console.error("Error downloading card image:", error);
                toast.error("Failed to download image");
              }
            }}
          >
            <Download className="w-4 h-4 mr-2" />
            Save
          </Button>
        ) : isPlaceholder ? (
          <div className="text-xs text-gray-500 flex items-center">
            <ImageIcon className="w-3 h-3 mr-1" />
            Concept preview
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default WrapIdeaCard;
