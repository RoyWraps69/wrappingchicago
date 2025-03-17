
import { City } from './types/city';
import { northCities } from './regions/north';
import { northwestCities } from './regions/northwest';
import { westCities } from './regions/west';
import { southCities } from './regions/south';

// Combine all city regions
export const cities: City[] = [
  ...northCities,
  ...northwestCities,
  ...westCities,
  ...southCities
];

export type { City } from './types/city';

export const findCityBySlug = (slug: string): City | undefined => {
  if (!slug) return undefined;
  
  // Normalize the slug
  const normalizedSlug = slug.toLowerCase().trim();
  
  // First try exact match
  const exactMatch = cities.find(city => city.slug.toLowerCase() === normalizedSlug);
  if (exactMatch) return exactMatch;
  
  // Then try partial match (if the slug contains the city slug)
  const partialMatch = cities.find(city => 
    normalizedSlug.includes(city.slug.toLowerCase()) ||
    city.slug.toLowerCase().includes(normalizedSlug)
  );
  
  return partialMatch;
};
