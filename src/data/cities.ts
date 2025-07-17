
import { City } from './types/city';
import { northCities } from './regions/north';
import { northwestCities } from './regions/northwest';
import { westCities } from './regions/west';
import { southCities } from './regions/south';
import { westNationalCities } from './regions/west-national';

// Combine all city regions
export const cities: City[] = [
  ...northCities,
  ...northwestCities,
  ...westCities,
  ...southCities,
  ...westNationalCities
];

export type { City } from './types/city';

export const findCityBySlug = (slug: string): City | undefined => {
  if (!slug) return undefined;
  
  // Normalize the slug
  const normalizedSlug = slug.toLowerCase().trim();
  
  // Exact match
  const exactMatch = cities.find(city => 
    city.slug.toLowerCase() === normalizedSlug || 
    city.name.toLowerCase() === normalizedSlug
  );
  
  if (exactMatch) {
    console.log(`Found exact match for "${slug}": ${exactMatch.name}`);
    return exactMatch;
  }
  
  // Partial match (if the slug contains the city slug or name)
  const partialMatch = cities.find(city => 
    normalizedSlug.includes(city.slug.toLowerCase()) || 
    city.slug.toLowerCase().includes(normalizedSlug) ||
    normalizedSlug.includes(city.name.toLowerCase()) ||
    city.name.toLowerCase().includes(normalizedSlug)
  );
  
  if (partialMatch) {
    console.log(`Found partial match for "${slug}": ${partialMatch.name}`);
    return partialMatch;
  }
  
  // Handle special cases with hyphen variations
  const hyphenMatch = cities.find(city => {
    const citySlugVariations = [
      city.slug.toLowerCase().replace(/-/g, ''),  // no hyphens
      city.slug.toLowerCase().replace(/\s/g, '-'), // spaces to hyphens
      city.name.toLowerCase().replace(/\s+/g, '-') // name with spaces to hyphens
    ];
    
    return citySlugVariations.includes(normalizedSlug) || 
           citySlugVariations.some(variation => normalizedSlug.includes(variation));
  });
  
  if (hyphenMatch) {
    console.log(`Found hyphen variation match for "${slug}": ${hyphenMatch.name}`);
    return hyphenMatch;
  }
  
  // Handle arlington-heights specifically (common case)
  if (normalizedSlug.includes('arlington') || normalizedSlug.includes('heights')) {
    const arlingtonHeights = cities.find(city => 
      city.name.toLowerCase().includes('arlington') || 
      city.slug.includes('arlington')
    );
    
    if (arlingtonHeights) {
      console.log(`Special case match for Arlington Heights`);
      return arlingtonHeights;
    }
  }
  
  console.log(`No match found for "${slug}"`);
  return undefined;
};
