export interface MetropolitanArea {
  name: string;
  slug: string;
  county: string;
  state: string;
  zipCodes: string[];
  landmarks: string[];
  neighborhoods: string[];
  businessDistricts: string[];
  keyFeatures: string[];
  population: string;
  medianIncome: string;
  description: string;
  distanceFromChicago: number; // miles
  coordinates: {
    lat: number;
    lng: number;
  };
  targetKeywords: string[];
  competitorAnalysis: {
    lowCompetition: string[];
    mediumCompetition: string[];
    highCompetition: string[];
  };
}

// Chicago Metro Area (40-mile radius) - Complete coverage
export const chicagoMetroArea: MetropolitanArea[] = [
  // CHICAGO PROPER - NORTH SIDE
  {
    name: "Lincoln Park",
    slug: "lincoln-park-chicago",
    county: "Cook County",
    state: "IL",
    zipCodes: ["60614", "60657"],
    landmarks: ["Lincoln Park Zoo", "DePaul University", "Lakefront Trail", "North Avenue Beach"],
    neighborhoods: ["Old Town", "Ranch Triangle", "Park West"],
    businessDistricts: ["Lincoln Avenue", "Clark Street Corridor"],
    keyFeatures: ["Young professionals", "Lakefront living", "Historic charm", "Family-friendly"],
    population: "65,000",
    medianIncome: "$95,000",
    distanceFromChicago: 0,
    coordinates: { lat: 41.9242, lng: -87.6369 },
    description: "Elite vehicle wraps in Lincoln Park! Transform luxury sedans and family SUVs near the lakefront. Our master technicians deliver museum-quality installations for Chicago's most prestigious neighborhood.",
    targetKeywords: ["luxury car wraps lincoln park", "vehicle wraps near lincoln park zoo", "premium car wraps chicago north side"],
    competitorAnalysis: {
      lowCompetition: ["exotic car wraps lincoln park", "tesla wraps lincoln park", "maserati wraps chicago"],
      mediumCompetition: ["car wraps lincoln park", "vehicle graphics lincoln park"],
      highCompetition: ["vehicle wraps chicago", "car wraps chicago"]
    }
  },
  {
    name: "Wicker Park",
    slug: "wicker-park-chicago", 
    county: "Cook County",
    state: "IL",
    zipCodes: ["60622", "60647"],
    landmarks: ["Wicker Park", "Bucktown", "The Violet Hour", "Piece Brewery"],
    neighborhoods: ["Bucktown", "Ukrainian Village", "Noble Square"],
    businessDistricts: ["Milwaukee Avenue", "Division Street", "North Avenue"],
    keyFeatures: ["Arts district", "Creative community", "Nightlife", "Trendy restaurants"],
    population: "25,000",
    medianIncome: "$75,000",
    distanceFromChicago: 0,
    coordinates: { lat: 41.9073, lng: -87.6774 },
    description: "Creative vehicle wraps in Wicker Park! Bold custom designs for artists, musicians, and entrepreneurs. Eye-catching graphics that capture the rebellious spirit of Chicago's most artistic neighborhood.",
    targetKeywords: ["custom car wraps wicker park", "artistic vehicle graphics chicago", "creative car wraps bucktown"],
    competitorAnalysis: {
      lowCompetition: ["musician car wraps chicago", "artist vehicle graphics", "creative van wraps wicker park"],
      mediumCompetition: ["custom car wraps chicago west", "vehicle graphics wicker park"],
      highCompetition: ["car wraps chicago", "vehicle wraps chicago"]
    }
  },
  
  // SUBURBAN COOK COUNTY
  {
    name: "Schaumburg",
    slug: "schaumburg-illinois",
    county: "Cook County", 
    state: "IL",
    zipCodes: ["60173", "60194", "60195"],
    landmarks: ["Woodfield Mall", "Medieval Times", "LEGOLAND Discovery Center", "Busse Woods"],
    neighborhoods: ["Hoffman Estates border", "Rolling Meadows border", "Streamwood border"],
    businessDistricts: ["Woodfield Corporate Center", "American Drive", "Golf Road Corridor"],
    keyFeatures: ["Corporate headquarters", "Shopping destination", "Family entertainment", "Suburban lifestyle"],
    population: "74,000",
    medianIncome: "$80,000",
    distanceFromChicago: 28,
    coordinates: { lat: 42.0334, lng: -88.0834 },
    description: "Premier suburban vehicle wraps in Schaumburg! Corporate fleet graphics and family vehicle transformations near Woodfield Mall. Serving northwest Chicago suburbs with precision installations.",
    targetKeywords: ["vehicle wraps schaumburg", "car wraps woodfield mall", "fleet graphics schaumburg", "corporate vehicle wraps northwest suburbs"],
    competitorAnalysis: {
      lowCompetition: ["woodfield mall car wraps", "schaumburg fleet graphics", "corporate wraps hoffman estates"],
      mediumCompetition: ["car wraps schaumburg", "vehicle graphics northwest suburbs"],
      highCompetition: ["vehicle wraps chicago suburbs", "car wraps illinois"]
    }
  },

  // DUPAGE COUNTY
  {
    name: "Naperville",
    slug: "naperville-illinois",
    county: "DuPage County",
    state: "IL", 
    zipCodes: ["60540", "60563", "60564", "60565"],
    landmarks: ["Naperville Riverwalk", "Centennial Beach", "DuPage Children's Museum", "Naper Settlement"],
    neighborhoods: ["Downtown Naperville", "Far South", "Southwest", "Southeast"],
    businessDistricts: ["Downtown Business District", "Naperville Technology Center", "Corporate Woods"],
    keyFeatures: ["Highly educated", "Affluent families", "Top-rated schools", "Tech corridor"],
    population: "147,000",
    medianIncome: "$110,000",
    distanceFromChicago: 28,
    coordinates: { lat: 41.7508, lng: -88.1535 },
    description: "Luxury vehicle wraps in Naperville! Premium installations for DuPage County's most affluent community. Exotic car transformations and executive fleet graphics near the scenic Riverwalk.",
    targetKeywords: ["luxury car wraps naperville", "exotic vehicle wraps dupage county", "premium car wraps naperville riverwalk"],
    competitorAnalysis: {
      lowCompetition: ["ferrari wraps naperville", "lamborghini wraps dupage", "luxury suv wraps naperville"],
      mediumCompetition: ["car wraps naperville", "vehicle graphics dupage county"],
      highCompetition: ["vehicle wraps chicago suburbs", "car wraps illinois"]
    }
  },
  {
    name: "Wheaton",
    slug: "wheaton-illinois",
    county: "DuPage County",
    state: "IL",
    zipCodes: ["60187", "60189"],
    landmarks: ["Wheaton College", "Cantigny Park", "DuPage County Fairgrounds", "Cosley Zoo"],
    neighborhoods: ["Downtown Wheaton", "Danada", "Arrowhead"],
    businessDistricts: ["Downtown Wheaton", "Butterfield Road Corridor"],
    keyFeatures: ["College town", "Historic downtown", "Family-friendly", "Cultural attractions"],
    population: "53,000",
    medianIncome: "$85,000",
    distanceFromChicago: 25,
    coordinates: { lat: 41.8661, lng: -88.1070 },
    description: "College town vehicle wraps in Wheaton! Student-friendly pricing and family vehicle solutions near Wheaton College. Professional installations for DuPage County's historic community.",
    targetKeywords: ["car wraps wheaton college", "student car wraps dupage", "family vehicle wraps wheaton"],
    competitorAnalysis: {
      lowCompetition: ["wheaton college car wraps", "student vehicle graphics", "cantigny park car wraps"],
      mediumCompetition: ["car wraps wheaton", "vehicle graphics dupage"],
      highCompetition: ["vehicle wraps chicago suburbs"]
    }
  },

  // LAKE COUNTY, ILLINOIS
  {
    name: "Libertyville",
    slug: "libertyville-illinois", 
    county: "Lake County",
    state: "IL",
    zipCodes: ["60048"],
    landmarks: ["Lambs Farm", "Cook Memorial Library", "Butler Lake", "Independence Grove"],
    neighborhoods: ["Downtown Libertyville", "Countryside", "Adler Park"],
    businessDistricts: ["Milwaukee Avenue", "Route 21 Corridor"],
    keyFeatures: ["Affluent community", "Historic downtown", "Nature preserves", "Top schools"],
    population: "20,000",
    medianIncome: "$95,000",
    distanceFromChicago: 35,
    coordinates: { lat: 42.2833, lng: -87.9531 },
    description: "North Shore vehicle wraps in Libertyville! Luxury installations for Lake County's most prestigious community. Premium services near Independence Grove and historic downtown.",
    targetKeywords: ["luxury car wraps libertyville", "north shore vehicle wraps", "lake county car wraps"],
    competitorAnalysis: {
      lowCompetition: ["independence grove car wraps", "lambs farm vehicle graphics", "libertyville luxury wraps"],
      mediumCompetition: ["car wraps libertyville", "vehicle graphics lake county"],
      highCompetition: ["north shore car wraps", "luxury vehicle wraps chicago"]
    }
  },
  {
    name: "Lake Forest", 
    slug: "lake-forest-illinois",
    county: "Lake County",
    state: "IL",
    zipCodes: ["60045"],
    landmarks: ["Lake Forest College", "Market Square", "Deer Path Inn", "Chicago Botanic Garden"],
    neighborhoods: ["East Lake Forest", "West Lake Forest", "Everett Park"],
    businessDistricts: ["Market Square", "Green Bay Road"],
    keyFeatures: ["Ultra-affluent", "Historic estates", "Lakefront mansions", "Elite community"],
    population: "19,000",
    medianIncome: "$150,000",
    distanceFromChicago: 30,
    coordinates: { lat: 42.2587, lng: -87.8406 },
    description: "Ultra-luxury vehicle wraps in Lake Forest! Concours-quality installations for North Shore's most exclusive community. Exotic car specialists serving estates and country clubs.",
    targetKeywords: ["exotic car wraps lake forest", "ultra luxury vehicle wraps north shore", "concours car wraps lake county"],
    competitorAnalysis: {
      lowCompetition: ["ferrari wraps lake forest", "rolls royce wraps north shore", "bentley wraps lake county"],
      mediumCompetition: ["luxury car wraps lake forest", "exotic vehicle wraps north shore"],
      highCompetition: ["luxury vehicle wraps chicago", "north shore car wraps"]
    }
  },

  // WILL COUNTY
  {
    name: "Orland Park",
    slug: "orland-park-illinois",
    county: "Will County", 
    state: "IL",
    zipCodes: ["60462", "60467"],
    landmarks: ["Orland Square Mall", "Lake Sedgewick", "Centennial Park", "Silver Lake Country Club"],
    neighborhoods: ["Orland Hills", "Orland Grasslands", "Silver Lake"],
    businessDistricts: ["Orland Square", "159th Street Corridor", "LaGrange Road"],
    keyFeatures: ["Family-oriented", "Shopping destination", "Suburban lifestyle", "Golf communities"],
    population: "59,000",
    medianIncome: "$85,000",
    distanceFromChicago: 25,
    coordinates: { lat: 41.6031, lng: -87.8542 },
    description: "Southwest suburban vehicle wraps in Orland Park! Family-friendly services and business fleet solutions near Orland Square Mall. Serving Will County with premium installations.",
    targetKeywords: ["car wraps orland park", "family vehicle wraps will county", "orland square mall car wraps"],
    competitorAnalysis: {
      lowCompetition: ["orland square car wraps", "silver lake vehicle graphics", "will county fleet wraps"],
      mediumCompetition: ["car wraps orland park", "vehicle graphics southwest suburbs"],
      highCompetition: ["vehicle wraps chicago suburbs", "car wraps will county"]
    }
  },
  {
    name: "Joliet",
    slug: "joliet-illinois",
    county: "Will County",
    state: "IL",
    zipCodes: ["60431", "60432", "60433", "60435"],
    landmarks: ["Chicagoland Speedway", "Rialto Square Theatre", "Pilcher Park", "Harrah's Casino"],
    neighborhoods: ["Cathedral Area", "Fairmont", "Ingalls Park", "Woodruff"],
    businessDistricts: ["Downtown Joliet", "Jefferson Street", "Plainfield Road"],
    keyFeatures: ["Racing heritage", "Entertainment venues", "Working-class community", "Industrial base"],
    population: "150,000",
    medianIncome: "$65,000",
    distanceFromChicago: 40,
    coordinates: { lat: 41.5250, lng: -88.0817 },
    description: "Performance vehicle wraps in Joliet! Racing-inspired graphics and commercial fleet solutions near Chicagoland Speedway. Bold designs for Will County's motorsports community.",
    targetKeywords: ["racing car wraps joliet", "performance vehicle wraps chicagoland speedway", "motorsports graphics will county"],
    competitorAnalysis: {
      lowCompetition: ["chicagoland speedway car wraps", "racing graphics joliet", "motorsports wraps will county"],
      mediumCompetition: ["car wraps joliet", "vehicle graphics will county"],
      highCompetition: ["performance car wraps chicago", "racing vehicle wraps illinois"]
    }
  },

  // KANE COUNTY
  {
    name: "Geneva",
    slug: "geneva-illinois",
    county: "Kane County",
    state: "IL",
    zipCodes: ["60134"],
    landmarks: ["Third Street", "Geneva Commons", "Fox River", "Fabyan Forest Preserve"],
    neighborhoods: ["Downtown Geneva", "Williamsburg", "Mill Creek"],
    businessDistricts: ["Third Street", "Randall Road Corridor"],
    keyFeatures: ["Historic charm", "Antique shops", "Fox River", "Affluent community"],
    population: "22,000", 
    medianIncome: "$90,000",
    distanceFromChicago: 38,
    coordinates: { lat: 41.8875, lng: -88.3054 },
    description: "Historic charm meets modern wraps in Geneva! Elegant vehicle transformations along the Fox River. Kane County's most sophisticated installations near antique districts.",
    targetKeywords: ["luxury car wraps geneva", "fox river vehicle wraps", "kane county car wraps"],
    competitorAnalysis: {
      lowCompetition: ["fox river car wraps", "geneva commons vehicle graphics", "third street car wraps"],
      mediumCompetition: ["car wraps geneva", "vehicle graphics kane county"],
      highCompetition: ["luxury car wraps chicago suburbs", "vehicle wraps kane county"]
    }
  },
  {
    name: "St. Charles",
    slug: "st-charles-illinois",
    county: "Kane County",
    state: "IL", 
    zipCodes: ["60174", "60175"],
    landmarks: ["Historic Downtown", "Fox River", "Pottawatomie Park", "Pheasant Run Resort"],
    neighborhoods: ["Downtown St. Charles", "Norris Woods", "Walnut Creek"],
    businessDistricts: ["Main Street", "Randall Road", "Kirk Road"],
    keyFeatures: ["Historic downtown", "River community", "Family festivals", "Charming atmosphere"],
    population: "33,000",
    medianIncome: "$85,000", 
    distanceFromChicago: 36,
    coordinates: { lat: 41.9142, lng: -88.3084 },
    description: "Riverside elegance in St. Charles! Premium vehicle wraps along the Fox River. Historic charm meets modern automotive artistry in Kane County's crown jewel.",
    targetKeywords: ["car wraps st charles", "fox river vehicle graphics", "historic downtown car wraps"],
    competitorAnalysis: {
      lowCompetition: ["pheasant run car wraps", "fox river trail vehicle graphics", "pottawatomie park wraps"],
      mediumCompetition: ["car wraps st charles", "vehicle graphics kane county west"],
      highCompetition: ["vehicle wraps chicago west suburbs", "car wraps kane county"]
    }
  },

  // WISCONSIN (within 40 miles)
  {
    name: "Kenosha",
    slug: "kenosha-wisconsin",
    county: "Kenosha County",
    state: "WI",
    zipCodes: ["53140", "53141", "53142", "53143", "53144"],
    landmarks: ["Kenosha Harbor", "Civil War Museum", "Jockey International", "University of Wisconsin-Parkside"],
    neighborhoods: ["Downtown Kenosha", "Southport", "Lakeshore"],
    businessDistricts: ["Downtown Kenosha", "Highway 50 Corridor"],
    keyFeatures: ["Lake Michigan", "Industrial heritage", "Harbor district", "Cross-border community"],
    population: "100,000",
    medianIncome: "$55,000",
    distanceFromChicago: 40,
    coordinates: { lat: 42.5847, lng: -87.8212 },
    description: "Cross-border vehicle wraps in Kenosha! Serving Wisconsin's lakefront community with Chicago-quality installations. Premium services just across the state line.",
    targetKeywords: ["car wraps kenosha wisconsin", "vehicle graphics lake michigan", "wisconsin car wraps near chicago"],
    competitorAnalysis: {
      lowCompetition: ["kenosha harbor car wraps", "wisconsin vehicle graphics", "lake michigan car wraps"],
      mediumCompetition: ["car wraps kenosha", "vehicle wraps wisconsin"],
      highCompetition: ["car wraps milwaukee area", "vehicle wraps wisconsin"]
    }
  },

  // INDIANA (within 40 miles) 
  {
    name: "Crown Point",
    slug: "crown-point-indiana",
    county: "Lake County",
    state: "IN",
    zipCodes: ["46307", "46308"],
    landmarks: ["Lake County Courthouse", "Crown Point Square", "Lemon Lake County Park"],
    neighborhoods: ["Downtown Crown Point", "Winfield", "Merrillville border"],
    businessDistricts: ["Crown Point Square", "Indianapolis Boulevard"],
    keyFeatures: ["Historic courthouse", "Small town charm", "Growing community", "Courthouse weddings"],
    population: "29,000",
    medianIncome: "$70,000",
    distanceFromChicago: 35,
    coordinates: { lat: 41.4170, lng: -87.3653 },
    description: "Cross-state vehicle wraps in Crown Point! Indiana's courthouse city gets Chicago-caliber installations. Historic charm meets modern automotive transformation.",
    targetKeywords: ["car wraps crown point indiana", "vehicle graphics lake county indiana", "indiana car wraps near chicago"],
    competitorAnalysis: {
      lowCompetition: ["crown point courthouse car wraps", "indiana vehicle graphics chicago area", "courthouse square wraps"],
      mediumCompetition: ["car wraps crown point", "vehicle wraps lake county indiana"],
      highCompetition: ["car wraps northwest indiana", "vehicle wraps indiana"]
    }
  }
];

export const getMetroLocationBySlug = (slug: string): MetropolitanArea | undefined => {
  return chicagoMetroArea.find(location => location.slug === slug);
};

export const getAllMetroSlugs = (): string[] => {
  return chicagoMetroArea.map(location => location.slug);
};

export const getLocationsByCounty = (county: string): MetropolitanArea[] => {
  return chicagoMetroArea.filter(location => location.county === county);
};

export const getLocationsByState = (state: string): MetropolitanArea[] => {
  return chicagoMetroArea.filter(location => location.state === state);
};

export const getLocationsByDistance = (maxDistance: number): MetropolitanArea[] => {
  return chicagoMetroArea.filter(location => location.distanceFromChicago <= maxDistance);
};