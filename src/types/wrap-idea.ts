
export interface WrapIdea {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  vehicleType: string;
  aiGenerated?: boolean;
  aiPrompt?: string;
}

// Example AI-generated ideas - in a real app this would come from an API
export const exampleIdeas: WrapIdea[] = [
  {
    id: '1',
    title: 'Vibrant Gradient Design',
    description: 'A stunning gradient design with splashes of color that attract attention, perfect for businesses wanting to stand out.',
    imageUrl: '/lovable-uploads/9de106b5-94cb-4fd1-a7c7-5c75c75b7cbb.png', // Blue metallic wrap
    vehicleType: 'truck',
    aiGenerated: true
  },
  {
    id: '2',
    title: 'Minimalist Corporate Fleet',
    description: 'Clean lines and subtle branding that gives a professional appearance for corporate fleets.',
    imageUrl: '/lovable-uploads/efdbc4bf-1f04-42bb-a904-f52dae7bef6c.png', // Corporate fleet image
    vehicleType: 'fleet',
    aiGenerated: true
  },
  {
    id: '3',
    title: 'Bold Contractor Van',
    description: 'Strong typography and impactful imagery that clearly communicates your services to potential customers.',
    imageUrl: '/lovable-uploads/9bb3d94e-589d-4daf-b35e-e19e80610439.png', // Commercial van image
    vehicleType: 'van',
    aiGenerated: true
  },
];
