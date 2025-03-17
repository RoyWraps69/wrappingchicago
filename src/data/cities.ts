
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

export { City } from './types/city';

export const findCityBySlug = (slug: string): City | undefined => {
  return cities.find(city => city.slug === slug);
};
