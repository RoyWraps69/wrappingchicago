
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
  
  // Log all available cities for debugging
  console.log("Looking for city with slug:", slug);
  console.log("Available slugs:", cities.map(c => c.slug).join(', '));
  
  // Normalize the slug
  const normalizedSlug = slug.toLowerCase().trim();
  
  // First try exact match
  const exactMatch = cities.find(city => city.slug.toLowerCase() === normalizedSlug);
  if (exactMatch) {
    console.log(`Found exact match for "${slug}": ${exactMatch.name}`);
    return exactMatch;
  }
  
  // Then try partial match (if the slug contains the city slug)
  const partialMatch = cities.find(city => 
    normalizedSlug.includes(city.slug.toLowerCase()) ||
    city.slug.toLowerCase().includes(normalizedSlug)
  );
  
  if (partialMatch) {
    console.log(`Found partial match for "${slug}": ${partialMatch.name}`);
    return partialMatch;
  }
  
  // Try to match with hyphen variations
  const hyphenMatch = cities.find(city => {
    const citySlugVariations = [
      city.slug.toLowerCase().replace(/-/g, ''),  // no hyphens
      city.slug.toLowerCase().replace(/\s/g, '-') // spaces to hyphens
    ];
    
    return citySlugVariations.includes(normalizedSlug) || 
           citySlugVariations.some(variation => normalizedSlug.includes(variation));
  });
  
  if (hyphenMatch) {
    console.log(`Found hyphen variation match for "${slug}": ${hyphenMatch.name}`);
    return hyphenMatch;
  }
  
  console.log(`No match found for "${slug}"`);
  return undefined;
};
