
export interface City {
  name: string;
  county: string;
  state: string;
  description: string;
  population: string;
  businessAreas: string;
  distance: string;
  slug: string;
  website: string;
  nearbyAreas?: string[]; // Added optional nearbyAreas property
  coordinates?: {
    lat: number;
    lng: number;
  };
}
