export interface Location {
  name: string;
  slug: string;
  county: string;
  zipCodes: string[];
  landmarks: string[];
  description: string;
  neighborhoods?: string[];
  businessDistricts?: string[];
  keyFeatures: string[];
  population?: string;
  medianIncome?: string;
}

export const chicagoLocations: Location[] = [
  {
    name: "River North",
    slug: "river-north",
    county: "Cook County",
    zipCodes: ["60654", "60610"],
    landmarks: ["Navy Pier", "Merchandise Mart", "Chicago Riverwalk", "House of Blues"],
    neighborhoods: ["Near North Side", "Streeterville"],
    businessDistricts: ["River North Gallery District"],
    keyFeatures: ["High-end condos", "Art galleries", "Luxury shopping", "Fine dining"],
    population: "15,000",
    medianIncome: "$95,000",
    description: "Premium vehicle wraps in River North! Transform luxury cars, exotic vehicles, and high-end fleets near Navy Pier and Merchandise Mart. Our certified technicians deliver showroom-quality results for Chicago's most discerning clientele."
  },
  {
    name: "Lincoln Park",
    slug: "lincoln-park",
    county: "Cook County", 
    zipCodes: ["60614", "60657"],
    landmarks: ["Lincoln Park Zoo", "DePaul University", "Lakefront Trail", "Lincoln Park Conservatory"],
    neighborhoods: ["Old Town", "Ranch Triangle"],
    businessDistricts: ["Lincoln Avenue Corridor"],
    keyFeatures: ["Young professionals", "Family-friendly", "Lakefront access", "Historic architecture"],
    population: "65,000",
    medianIncome: "$85,000",
    description: "Professional vehicle wraps in Lincoln Park! Serving families and young professionals near the zoo and lakefront. From family SUVs to luxury sedans, we transform vehicles with precision installation and premium materials."
  },
  {
    name: "Wicker Park",
    slug: "wicker-park", 
    county: "Cook County",
    zipCodes: ["60622", "60647"],
    landmarks: ["Wicker Park", "Bucktown", "The Violet Hour", "Double Door"],
    neighborhoods: ["Bucktown", "Ukrainian Village"],
    businessDistricts: ["Milwaukee Avenue Corridor", "Division Street"],
    keyFeatures: ["Arts district", "Hipster culture", "Live music venues", "Trendy restaurants"],
    population: "25,000", 
    medianIncome: "$75,000",
    description: "Creative vehicle wraps in Wicker Park! Bold designs for artists, musicians, and entrepreneurs in Chicago's trendiest neighborhood. Custom graphics that match the artistic spirit of this vibrant community."
  },
  {
    name: "The Loop",
    slug: "the-loop",
    county: "Cook County",
    zipCodes: ["60601", "60602", "60603", "60604", "60605"],
    landmarks: ["Willis Tower", "Millennium Park", "Art Institute", "Chicago Theatre", "Cloud Gate"],
    neighborhoods: ["South Loop", "Printer's Row", "Museum Campus"],
    businessDistricts: ["Financial District", "LaSalle Street Canyon"],
    keyFeatures: ["Business district", "Tourist attractions", "High-rise buildings", "Public transportation hub"],
    population: "29,000",
    medianIncome: "$90,000", 
    description: "Downtown Chicago vehicle wraps! Professional fleet graphics and executive car wraps for businesses in the Loop. From Willis Tower to Millennium Park, we serve Chicago's business epicenter with premium vinyl solutions."
  },
  {
    name: "Schaumburg",
    slug: "schaumburg",
    county: "Cook County",
    zipCodes: ["60173", "60194", "60195"],
    landmarks: ["Woodfield Mall", "Medieval Times", "Schaumburg Regional Airport", "LEGOLAND Discovery Center"],
    neighborhoods: ["Hoffman Estates border", "Rolling Meadows border"],
    businessDistricts: ["Woodfield Corporate Center", "American Drive Corridor"],
    keyFeatures: ["Suburban families", "Shopping destination", "Corporate headquarters", "Family entertainment"],
    population: "74,000",
    medianIncome: "$80,000",
    description: "Suburban vehicle wraps in Schaumburg! Family-friendly services near Woodfield Mall and corporate centers. We specialize in family SUVs, minivans, and business vehicles for northwest suburban professionals."
  },
  {
    name: "Naperville", 
    slug: "naperville",
    county: "DuPage County",
    zipCodes: ["60540", "60563", "60564", "60565"],
    landmarks: ["Naperville Riverwalk", "Centennial Beach", "DuPage Children's Museum", "Naper Settlement"],
    neighborhoods: ["Downtown Naperville", "Far South", "Southeast"],
    businessDistricts: ["Downtown Business District", "Naperville Technology Center"],
    keyFeatures: ["Highly educated", "Family-oriented", "Top schools", "Affluent community"],
    population: "147,000",
    medianIncome: "$110,000",
    description: "Luxury vehicle wraps in Naperville! Serving DuPage County's most affluent community with high-end car wraps, luxury vehicle transformations, and family fleet solutions near the beautiful Riverwalk."
  },
  {
    name: "Oak Brook",
    slug: "oak-brook", 
    county: "DuPage County",
    zipCodes: ["60523"],
    landmarks: ["Oakbrook Center", "Drake Hotel", "Oak Brook Golf Club", "Mayslake Peabody Estate"],
    neighborhoods: ["Fullersburg", "York Woods"],
    businessDistricts: ["Oak Brook Business District", "22nd Street Corridor"],
    keyFeatures: ["Corporate headquarters", "Luxury shopping", "Golf courses", "Executive community"],
    population: "8,000",
    medianIncome: "$125,000",
    description: "Executive vehicle wraps in Oak Brook! Premium services for luxury vehicles and corporate fleets near Oakbrook Center. Serving executives and business leaders with concours-quality installations and premium materials."
  },
  {
    name: "Evanston",
    slug: "evanston",
    county: "Cook County", 
    zipCodes: ["60201", "60202", "60203", "60208"],
    landmarks: ["Northwestern University", "Evanston Lighthouse", "Grosse Point Lighthouse", "Frances Willard House"],
    neighborhoods: ["Central Evanston", "South Evanston", "West Evanston"],
    businessDistricts: ["Downtown Evanston", "Research Park"],
    keyFeatures: ["University town", "Diverse community", "Arts and culture", "Lakefront"],
    population: "78,000",
    medianIncome: "$85,000",
    description: "University town vehicle wraps in Evanston! Serving Northwestern University community and North Shore residents with student-friendly pricing and luxury options. From campus cars to faculty vehicles."
  }
];

export const getLocationBySlug = (slug: string): Location | undefined => {
  return chicagoLocations.find(location => location.slug === slug);
};

export const getAllLocationSlugs = (): string[] => {
  return chicagoLocations.map(location => location.slug);
};