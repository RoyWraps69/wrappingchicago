
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
    title: 'Vibrant Metallic Blue Design',
    description: 'A stunning metallic blue wrap with dynamic design elements, perfect for businesses wanting to make a bold statement.',
    imageUrl: '/lovable-uploads/9de106b5-94cb-4fd1-a7c7-5c75c75b7cbb.png', // Blue metallic wrap
    vehicleType: 'sports-car',
    aiGenerated: true
  },
  {
    id: '2',
    title: 'Professional Fleet Branding',
    description: 'Clean, corporate design with consistent branding that gives a professional appearance for delivery vehicles.',
    imageUrl: '/lovable-uploads/efdbc4bf-1f04-42bb-a904-f52dae7bef6c.png', // Fleet vehicle image
    vehicleType: 'fleet',
    aiGenerated: true
  },
  {
    id: '3',
    title: 'Service Van Comprehensive Branding',
    description: 'Bold typography and comprehensive service information that clearly communicates your business offerings.',
    imageUrl: '/lovable-uploads/9bb3d94e-589d-4daf-b35e-e19e80610439.png', // Commercial van image
    vehicleType: 'van',
    aiGenerated: true
  }
];
