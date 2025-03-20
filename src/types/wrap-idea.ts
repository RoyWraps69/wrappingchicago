
export interface WrapIdea {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  vehicleType: string;
}

// Example AI-generated ideas - in a real app this would come from an API
export const exampleIdeas: WrapIdea[] = [
  {
    id: '1',
    title: 'Vibrant Gradient Design',
    description: 'A stunning gradient design with splashes of color that attract attention, perfect for businesses wanting to stand out.',
    imageUrl: 'https://placehold.co/600x400/ff5e7d/FFFFFF?text=Vehicle+Design',
    vehicleType: 'truck'
  },
  {
    id: '2',
    title: 'Minimalist Corporate Fleet',
    description: 'Clean lines and subtle branding that gives a professional appearance for corporate fleets.',
    imageUrl: 'https://placehold.co/600x400/0B3954/FFFFFF?text=Corporate+Fleet',
    vehicleType: 'fleet'
  },
  {
    id: '3',
    title: 'Bold Contractor Van',
    description: 'Strong typography and impactful imagery that clearly communicates your services to potential customers.',
    imageUrl: 'https://placehold.co/600x400/ffc107/000000?text=Contractor+Van',
    vehicleType: 'van'
  },
];
