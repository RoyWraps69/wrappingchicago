
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
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl">
      <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-md bg-gray-100">
        {idea.imageUrl ? (
          <img 
            src={idea.imageUrl}
            alt={`AI-generated ${idea.vehicleType} wrap design concept: ${idea.title} - ${idea.description.substring(0, 50)}...`}
            className="object-cover w-full h-full"
            loading="lazy"
            onError={(e) => {
              console.error("Card image failed to load:", e);
              // Replace with placeholder
              const target = e.currentTarget;
              target.style.display = 'none';
              target.parentElement?.classList.add('flex', 'items-center', 'justify-center');
              
              const placeholder = document.createElement('div');
              placeholder.className = 'flex flex-col items-center justify-center text-gray-400';
              
              const icon = document.createElement('div');
              icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>';
              
              const text = document.createElement('span');
              text.textContent = 'Image unavailable';
              text.className = 'mt-2 text-sm';
              
              placeholder.appendChild(icon);
              placeholder.appendChild(text);
              target.parentElement?.appendChild(placeholder);
            }}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
            <ImageIcon size={48} strokeWidth={1.5} />
            <span className="mt-2 text-sm">Image unavailable</span>
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
        
        {idea.imageUrl && (
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
        )}
      </div>
    </div>
  );
};

export default WrapIdeaCard;
