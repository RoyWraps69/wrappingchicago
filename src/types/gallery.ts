
export type GalleryCategory = 'All' | 'Fleet Wraps' | 'Color Change Wraps' | 'Commercial Graphics' | 'Partial Wraps';

export type GalleryItem = {
  id: number;
  title: string;
  category: GalleryCategory | Exclude<GalleryCategory, 'All'>;
  image: string;
  description: string;
  client?: string;
  location?: string;
};
