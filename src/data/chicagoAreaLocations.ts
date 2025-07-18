// Comprehensive Chicago Metro Area Locations for Maximum SEO Coverage

export interface ChicagoAreaLocation {
  name: string;
  slug: string;
  county: string;
  zipCodes: string[];
  landmarks: string[];
  description: string;
  population: string;
  medianIncome: string;
  keyFeatures: string[];
  businessType: 'urban' | 'suburban' | 'industrial' | 'mixed';
  priority: 'high' | 'medium' | 'low';
}

export const chicagoAreaLocations: ChicagoAreaLocation[] = [
  // Cook County - Chicago Neighborhoods (High Priority)
  {
    name: "Lakeview",
    slug: "lakeview-chicago",
    county: "Cook County",
    zipCodes: ["60613", "60657"],
    landmarks: ["Wrigley Field", "Belmont Harbor", "Music Box Theatre", "Southport Corridor"],
    description: "Premium vehicle wraps in Lakeview Chicago! Home to Cubs fans and young professionals near Wrigley Field. Custom car wraps, truck graphics, and fleet branding for Lakeview businesses and residents.",
    population: "95,000",
    medianIncome: "$82,000",
    keyFeatures: ["Young professionals", "Cubs fans", "Nightlife", "Lakefront"],
    businessType: 'urban',
    priority: 'high'
  },
  {
    name: "Logan Square", 
    slug: "logan-square-chicago",
    county: "Cook County",
    zipCodes: ["60647", "60618"],
    landmarks: ["Logan Square Auditorium", "Revolution Brewing", "Blue Line", "Kedzie Boulevard"],
    description: "Creative vehicle wraps in Logan Square! Serving artists, hipsters, and young families in Chicago's trendy northwest neighborhood. Bold car wraps and custom graphics that match the area's artistic vibe.",
    population: "73,000",
    medianIncome: "$65,000", 
    keyFeatures: ["Hipster culture", "Artists", "Families", "Food scene"],
    businessType: 'urban',
    priority: 'high'
  },
  {
    name: "Andersonville",
    slug: "andersonville-chicago", 
    county: "Cook County",
    zipCodes: ["60640"],
    landmarks: ["Swedish American Museum", "Women & Children First Bookstore", "Clark Street", "Andersonville Galleria"],
    description: "Unique vehicle wraps in Andersonville! Serving Chicago's charming Swedish neighborhood with custom car graphics, small business vehicle wraps, and personal vehicle transformations.",
    population: "22,000",
    medianIncome: "$78,000",
    keyFeatures: ["Swedish heritage", "LGBTQ+ friendly", "Small business", "Community"],
    businessType: 'urban',
    priority: 'high'
  },
  {
    name: "Bucktown",
    slug: "bucktown-chicago",
    county: "Cook County", 
    zipCodes: ["60647"],
    landmarks: ["606 Trail", "North/Clybourn", "Bucktown Arts Fest", "Holstein Park"],
    description: "Trendy vehicle wraps in Bucktown Chicago! Premium car wraps and commercial graphics for young professionals and creative businesses along the 606 trail and Milwaukee Avenue corridor.",
    population: "35,000",
    medianIncome: "$95,000",
    keyFeatures: ["Young professionals", "Trendy", "606 trail", "Arts scene"],
    businessType: 'urban',
    priority: 'high'
  },
  {
    name: "Gold Coast",
    slug: "gold-coast-chicago",
    county: "Cook County",
    zipCodes: ["60610", "60611"],
    landmarks: ["Oak Street Beach", "Rush Street", "Magnificent Mile", "Chicago History Museum"],
    description: "Luxury vehicle wraps in Gold Coast Chicago! Exclusive car wraps and exotic vehicle transformations for Chicago's most affluent neighborhood. Premium materials and concours-quality installations.",
    population: "18,000", 
    medianIncome: "$125,000",
    keyFeatures: ["Luxury", "Wealthy", "Historic", "Magnificent Mile"],
    businessType: 'urban',
    priority: 'high'
  },

  // Cook County Suburbs (High Priority)
  {
    name: "Arlington Heights",
    slug: "arlington-heights-il",
    county: "Cook County",
    zipCodes: ["60004", "60005"],
    landmarks: ["Arlington Park Racetrack", "Downtown Arlington Heights", "Recreation Park", "Metropolis Performing Arts Centre"],
    description: "Professional vehicle wraps Arlington Heights IL! Serving northwest suburbs with family-friendly car wraps, business graphics, and fleet solutions. Quality installations for Arlington Heights families and businesses.",
    population: "75,000",
    medianIncome: "$88,000",
    keyFeatures: ["Family suburbs", "Commuter town", "Recreation", "Arts"],
    businessType: 'suburban',
    priority: 'high'
  },
  {
    name: "Oak Lawn",
    slug: "oak-lawn-il", 
    county: "Cook County",
    zipCodes: ["60453"],
    landmarks: ["Oak Lawn Park District", "Christ Hospital", "95th Street", "Southwest suburbs"],
    description: "Reliable vehicle wraps Oak Lawn IL! Southwest suburban vehicle graphics serving working families and local businesses. Affordable car wraps and commercial vehicle solutions.",
    population: "56,000",
    medianIncome: "$65,000",
    keyFeatures: ["Working families", "Diverse", "Southwest suburbs", "Community"],
    businessType: 'suburban',
    priority: 'high'
  },
  {
    name: "Tinley Park", 
    slug: "tinley-park-il",
    county: "Cook County",
    zipCodes: ["60477", "60487"],
    landmarks: ["Hollywood Casino", "Tinley Park Convention Center", "Oak Forest", "Chicago Ridge"],
    description: "Complete vehicle wraps Tinley Park IL! Southwest suburban vehicle graphics for families and businesses. Professional car wraps, truck graphics, and fleet branding solutions.",
    population: "56,000",
    medianIncome: "$72,000",
    keyFeatures: ["Family community", "Entertainment", "Convention center", "Growing"],
    businessType: 'suburban', 
    priority: 'high'
  },
  {
    name: "Orland Park",
    slug: "orland-park-il",
    county: "Cook County",
    zipCodes: ["60462", "60467"],
    landmarks: ["Orland Square Mall", "Silver Lake", "Centennial Park", "Lake Katherine"],
    description: "Premium vehicle wraps Orland Park IL! Southwest suburban car wraps and business graphics serving affluent families and growing businesses near Orland Square Mall.",
    population: "59,000", 
    medianIncome: "$85,000",
    keyFeatures: ["Affluent families", "Shopping", "Lakes", "Well-planned"],
    businessType: 'suburban',
    priority: 'high'
  },
  {
    name: "Palatine",
    slug: "palatine-il",
    county: "Cook County",
    zipCodes: ["60067", "60074"],
    landmarks: ["Palatine Hills Golf Course", "Downtown Palatine", "Deer Grove Forest Preserve", "Twin Lakes Recreation Area"],
    description: "Quality vehicle wraps Palatine IL! Northwest suburban vehicle graphics serving families and professionals. Custom car wraps, business lettering, and fleet solutions in Palatine.",
    population: "68,000",
    medianIncome: "$78,000", 
    keyFeatures: ["Established families", "Golf", "Recreation", "Commuter friendly"],
    businessType: 'suburban',
    priority: 'high'
  },

  // DuPage County (High Priority) 
  {
    name: "Wheaton",
    slug: "wheaton-il",
    county: "DuPage County",
    zipCodes: ["60187", "60189"],
    landmarks: ["Wheaton College", "Cantigny Park", "DuPage County Courthouse", "Cosley Zoo"],
    description: "Professional vehicle wraps Wheaton IL! Serving educated families and Wheaton College community with premium car wraps, business graphics, and fleet branding solutions.",
    population: "53,000",
    medianIncome: "$95,000",
    keyFeatures: ["College town", "Educated", "Families", "Historic"],
    businessType: 'suburban',
    priority: 'high'
  },
  {
    name: "Elmhurst",
    slug: "elmhurst-il", 
    county: "DuPage County",
    zipCodes: ["60126"],
    landmarks: ["Elmhurst College", "Wilder Park", "York Commons", "Elmhurst Art Museum"],
    description: "Expert vehicle wraps Elmhurst IL! DuPage County vehicle graphics serving college families and local businesses. Quality car wraps and commercial vehicle solutions in Elmhurst.",
    population: "46,000",
    medianIncome: "$92,000",
    keyFeatures: ["College town", "Arts", "Educated", "Walkable"],
    businessType: 'suburban',
    priority: 'high'
  },
  {
    name: "Lombard",
    slug: "lombard-il",
    county: "DuPage County", 
    zipCodes: ["60148"],
    landmarks: ["Lilacia Park", "Yorkshire Woods", "Lombard Commons", "Great Western Trail"],
    description: "Custom vehicle wraps Lombard IL! DuPage County car wraps and business graphics serving the 'Lilac Village' families and local businesses with quality installations.",
    population: "43,000",
    medianIncome: "$78,000",
    keyFeatures: ["Lilac Village", "Parks", "Trails", "Community"],
    businessType: 'suburban',
    priority: 'high'
  },
  {
    name: "Downers Grove",
    slug: "downers-grove-il",
    county: "DuPage County",
    zipCodes: ["60515", "60516"],
    landmarks: ["Tivoli Theatre", "Fishel Park", "Belmont Prairie", "Downtown Downers Grove"],
    description: "Quality vehicle wraps Downers Grove IL! Professional car wraps and fleet graphics serving DuPage families and businesses. Custom designs and reliable installations.",
    population: "49,000",
    medianIncome: "$88,000", 
    keyFeatures: ["Historic downtown", "Family friendly", "Well-maintained", "Community"],
    businessType: 'suburban',
    priority: 'high'
  },
  {
    name: "Glen Ellyn",
    slug: "glen-ellyn-il",
    county: "DuPage County",
    zipCodes: ["60137"],
    landmarks: ["College of DuPage", "Lake Ellyn", "Ackerman Park", "Downtown Glen Ellyn"],
    description: "Professional vehicle wraps Glen Ellyn IL! DuPage County vehicle graphics serving college community and established families. Premium car wraps and business solutions.",
    population: "28,000",
    medianIncome: "$105,000",
    keyFeatures: ["College community", "Affluent", "Lake access", "Educated"],
    businessType: 'suburban',
    priority: 'high'
  },

  // Lake County (Medium Priority)
  {
    name: "Waukegan",
    slug: "waukegan-il",
    county: "Lake County", 
    zipCodes: ["60085", "60087"],
    landmarks: ["Waukegan Harbor", "Genesee Theatre", "Bowen Park", "Lake Michigan"],
    description: "Affordable vehicle wraps Waukegan IL! Lake County vehicle graphics serving diverse working families and local businesses near Lake Michigan. Quality car wraps and commercial solutions.",
    population: "89,000",
    medianIncome: "$45,000",
    keyFeatures: ["Diverse", "Working class", "Lake access", "Industrial"],
    businessType: 'mixed',
    priority: 'medium'
  },
  {
    name: "Lake Forest", 
    slug: "lake-forest-il",
    county: "Lake County",
    zipCodes: ["60045"],
    landmarks: ["Lake Forest College", "Market Square", "Lake Michigan", "Onwentsia Club"],
    description: "Luxury vehicle wraps Lake Forest IL! Premium car wraps and exotic vehicle graphics for North Shore's most exclusive community. Concours-quality installations and materials.",
    population: "20,000",
    medianIncome: "$185,000",
    keyFeatures: ["Extremely wealthy", "North Shore", "Exclusive", "Historic"],
    businessType: 'suburban',
    priority: 'medium'
  },
  {
    name: "Highland Park",
    slug: "highland-park-il",
    county: "Lake County",
    zipCodes: ["60035"],
    landmarks: ["Ravinia Festival", "Highland Park High School", "Lake Michigan", "Port Clinton Square"],
    description: "Exclusive vehicle wraps Highland Park IL! North Shore luxury car wraps and premium vehicle graphics. Serving affluent families and businesses with top-tier installations.",
    population: "30,000",
    medianIncome: "$130,000",
    keyFeatures: ["Wealthy", "Arts culture", "North Shore", "Ravinia"],
    businessType: 'suburban',
    priority: 'medium'
  },
  {
    name: "Libertyville",
    slug: "libertyville-il",
    county: "Lake County",
    zipCodes: ["60048"],
    landmarks: ["Lambs Farm", "David Adler Music and Arts Center", "Butler Lake", "Cook Memorial Library"],
    description: "Professional vehicle wraps Libertyville IL! Lake County car wraps and business graphics serving established families and local businesses in this charming community.",
    population: "20,000",
    medianIncome: "$95,000",
    keyFeatures: ["Charming", "Arts", "Family oriented", "Historic"],
    businessType: 'suburban',
    priority: 'medium'
  },

  // Kane County (Medium Priority)
  {
    name: "Aurora",
    slug: "aurora-il",
    county: "Kane County",
    zipCodes: ["60502", "60503", "60504", "60505", "60506", "60507"],
    landmarks: ["Paramount Theatre", "Phillips Park Zoo", "Aurora Regional Fire Museum", "RiverEdge Park"],
    description: "Complete vehicle wraps Aurora IL! Kane County's largest city vehicle graphics serving diverse families and growing businesses. Quality car wraps and fleet solutions.",
    population: "200,000",
    medianIncome: "$62,000",
    keyFeatures: ["Diverse", "Growing", "Arts", "Historic"],
    businessType: 'mixed',
    priority: 'medium'
  },
  {
    name: "Elgin",
    slug: "elgin-il", 
    county: "Kane County",
    zipCodes: ["60120", "60123"],
    landmarks: ["Grand Victoria Casino", "Lords Park Zoo", "Elgin Symphony Orchestra", "Fox River"],
    description: "Reliable vehicle wraps Elgin IL! Kane County vehicle graphics serving working families and local businesses. Affordable car wraps and commercial vehicle solutions.",
    population: "114,000",
    medianIncome: "$58,000",
    keyFeatures: ["Working class", "Diverse", "Casino", "River town"],
    businessType: 'mixed',
    priority: 'medium'
  },
  {
    name: "St. Charles",
    slug: "st-charles-il",
    county: "Kane County",
    zipCodes: ["60174", "60175"],
    landmarks: ["Pottawatomie Park", "Fox River", "St. Charles History Museum", "Baker Memorial United Methodist Church"],
    description: "Premium vehicle wraps St. Charles IL! Kane County car wraps serving affluent families along the Fox River. Quality installations and custom designs for this historic community.",
    population: "33,000",
    medianIncome: "$92,000",
    keyFeatures: ["Historic", "Affluent", "Fox River", "Charming"],
    businessType: 'suburban',
    priority: 'medium'
  },
  {
    name: "Geneva",
    slug: "geneva-il",
    county: "Kane County",
    zipCodes: ["60134"],
    landmarks: ["Fox River", "Fabyan Windmill", "Geneva History Museum", "Third Street"],
    description: "Custom vehicle wraps Geneva IL! Kane County vehicle graphics serving this picturesque Fox River community. Premium car wraps and business graphics for Geneva residents and businesses.",
    population: "22,000", 
    medianIncome: "$98,000",
    keyFeatures: ["Picturesque", "Fox River", "Historic", "Well-maintained"],
    businessType: 'suburban',
    priority: 'medium'
  },
  {
    name: "Batavia",
    slug: "batavia-il",
    county: "Kane County",
    zipCodes: ["60510"],
    landmarks: ["Fermilab", "Fox River", "Batavia Depot Museum", "Mooseheart"],
    description: "Professional vehicle wraps Batavia IL! Kane County car wraps near Fermilab and Fox River. Quality vehicle graphics serving science community and local families.",
    population: "26,000",
    medianIncome: "$85,000",
    keyFeatures: ["Science community", "Fermilab", "Fox River", "Educational"],
    businessType: 'suburban',
    priority: 'medium'
  },

  // Will County (Medium Priority)
  {
    name: "Joliet",
    slug: "joliet-il",
    county: "Will County",
    zipCodes: ["60431", "60432", "60433", "60435"],
    landmarks: ["Chicagoland Speedway", "Rialto Square Theatre", "Billie Limacher Bicentennial Park", "University of St. Francis"],
    description: "Affordable vehicle wraps Joliet IL! Will County's largest city vehicle graphics serving diverse working families and businesses. Quality car wraps and commercial solutions.",
    population: "150,000",
    medianIncome: "$58,000",
    keyFeatures: ["Working class", "Speedway", "Diverse", "Growing"],
    businessType: 'mixed',
    priority: 'medium'
  },
  {
    name: "Romeoville",
    slug: "romeoville-il",
    county: "Will County",
    zipCodes: ["60446"],
    landmarks: ["Isle a la Cache Museum", "Centennial Park", "Lewis University", "Hidden Oaks Nature Center"],
    description: "Growing vehicle wraps Romeoville IL! Will County vehicle graphics serving this rapidly expanding community. Car wraps and business graphics for new residents and businesses.",
    population: "40,000",
    medianIncome: "$72,000",
    keyFeatures: ["Rapidly growing", "Young families", "University", "New development"],
    businessType: 'suburban',
    priority: 'medium'
  },
  {
    name: "Plainfield",
    slug: "plainfield-il",
    county: "Will County",
    zipCodes: ["60544", "60585"],
    landmarks: ["Lake Renwick Preserve", "Settlers Park", "DuPage River", "Plainfield Historic Society"],
    description: "Family vehicle wraps Plainfield IL! Will County car wraps serving young families in this fast-growing community. Quality installations and custom designs for Plainfield residents.",
    population: "44,000",
    medianIncome: "$95,000",
    keyFeatures: ["Young families", "Fast growing", "Well-planned", "Family oriented"],
    businessType: 'suburban',
    priority: 'medium'
  },

  // McHenry County (Low Priority)
  {
    name: "Crystal Lake",
    slug: "crystal-lake-il", 
    county: "McHenry County",
    zipCodes: ["60012", "60014"],
    landmarks: ["Crystal Lake", "Three Oaks Recreation Area", "Dole Mansion", "McHenry County College"],
    description: "Professional vehicle wraps Crystal Lake IL! McHenry County vehicle graphics serving lake community families and businesses. Quality car wraps with scenic backdrop.",
    population: "40,000",
    medianIncome: "$78,000",
    keyFeatures: ["Lake community", "Recreation", "Family friendly", "Scenic"],
    businessType: 'suburban',
    priority: 'low'
  },
  {
    name: "Algonquin",
    slug: "algonquin-il",
    county: "McHenry County",
    zipCodes: ["60102"],
    landmarks: ["Fox River", "Riverfront Park", "Algonquin Commons", "Village Green"],
    description: "Custom vehicle wraps Algonquin IL! McHenry County car wraps along the Fox River. Professional vehicle graphics serving this growing Fox River community.",
    population: "31,000", 
    medianIncome: "$85,000",
    keyFeatures: ["Fox River", "Growing", "Recreation", "Community"],
    businessType: 'suburban',
    priority: 'low'
  },
  {
    name: "Cary",
    slug: "cary-il",
    county: "McHenry County",
    zipCodes: ["60013"],
    landmarks: ["Three Oaks Recreation Area", "Fox River", "Cary-Grove High School", "Lions Park"],
    description: "Quality vehicle wraps Cary IL! McHenry County vehicle graphics serving this Fox River community. Car wraps and business solutions for Cary families and local businesses.",
    population: "18,000",
    medianIncome: "$82,000",
    keyFeatures: ["Small town", "Fox River", "Community oriented", "Family friendly"],
    businessType: 'suburban',
    priority: 'low'
  }
];

export const getLocationBySlug = (slug: string): ChicagoAreaLocation | undefined => {
  return chicagoAreaLocations.find(location => location.slug === slug);
};

export const getAllLocationSlugs = (): string[] => {
  return chicagoAreaLocations.map(location => location.slug);
};

export const getHighPriorityLocations = (): ChicagoAreaLocation[] => {
  return chicagoAreaLocations.filter(location => location.priority === 'high');
};

export const getLocationsByCounty = (county: string): ChicagoAreaLocation[] => {
  return chicagoAreaLocations.filter(location => location.county === county);
};