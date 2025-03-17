
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
}

export const cities: City[] = [
  {
    name: "Evanston",
    county: "Cook County",
    state: "IL",
    description: "Evanston is a vibrant suburban city located north of Chicago, known for being home to Northwestern University and offering a perfect blend of urban and suburban living with beautiful lakefront parks.",
    population: "73,000",
    businessAreas: "downtown Evanston, Central Street, and the Northwestern University campus area",
    distance: "12 miles",
    slug: "evanston",
    website: "https://www.cityofevanston.org"
  },
  {
    name: "Oak Park",
    county: "Cook County",
    state: "IL",
    description: "Oak Park is a historic village known for its architectural heritage, including numerous Frank Lloyd Wright designs and Ernest Hemingway's birthplace, offering a culturally rich community with tree-lined streets.",
    population: "52,000",
    businessAreas: "Downtown Oak Park, The Avenue District, and Oak Park Arts District",
    distance: "9 miles",
    slug: "oak-park",
    website: "https://www.oak-park.us"
  },
  {
    name: "Naperville",
    county: "DuPage County",
    state: "IL",
    description: "Naperville is an affluent city with award-winning schools, a charming downtown area along the DuPage River, and consistently ranks as one of the best places to live in America.",
    population: "148,000",
    businessAreas: "Downtown Naperville, Route 59 corridor, and Freedom Commons",
    distance: "28 miles",
    slug: "naperville",
    website: "https://www.naperville.il.us"
  },
  {
    name: "Schaumburg",
    county: "Cook County",
    state: "IL",
    description: "Schaumburg is a major commercial hub and home to Woodfield Mall, one of the largest shopping centers in the United States, along with numerous corporate headquarters and business parks.",
    population: "74,000",
    businessAreas: "Woodfield area, Schaumburg Business Park, and Motorola Solutions campus",
    distance: "20 miles",
    slug: "schaumburg",
    website: "https://www.villageofschaumburg.com"
  },
  {
    name: "Skokie",
    county: "Cook County",
    state: "IL",
    description: "Skokie is a diverse suburban village with excellent public transportation to Chicago, known for its cultural attractions including the North Shore Center for the Performing Arts and the Illinois Holocaust Museum.",
    population: "64,000",
    businessAreas: "Downtown Skokie, Old Orchard Shopping Center, and Skokie Boulevard corridor",
    distance: "10 miles",
    slug: "skokie",
    website: "https://www.skokie.org"
  }
];

export const findCityBySlug = (slug: string): City | undefined => {
  return cities.find(city => city.slug === slug);
};
