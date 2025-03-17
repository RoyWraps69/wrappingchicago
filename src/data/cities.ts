
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
  },
  {
    name: "Arlington Heights",
    county: "Cook County",
    state: "IL",
    description: "Arlington Heights is a bustling suburb known for its vibrant downtown, Arlington Park Racetrack, and exceptional quality of life. With its tree-lined streets and family-friendly neighborhoods, it offers residents a perfect balance of suburban tranquility and urban convenience. The village features excellent schools, diverse dining options, and abundant recreational facilities, making it a highly desirable place to live and do business in the Chicago metropolitan area.",
    population: "76,000",
    businessAreas: "Arlington Heights Downtown, Arlington Heights Road corridor, and Rand Road shopping district",
    distance: "24 miles",
    slug: "arlington-heights",
    website: "https://www.vah.com"
  },
  {
    name: "Aurora",
    county: "Kane County",
    state: "IL",
    description: "Aurora, Illinois' second-largest city, is a diverse and historic community straddling the Fox River. Known as the 'City of Lights' for being one of the first to implement an all-electric street lighting system, Aurora features a revitalized downtown with the stunning Paramount Theatre, Hollywood Casino, and numerous historical buildings. The city boasts extensive parks, the Phillips Park Zoo, and the Fox Valley Mall shopping district. With its rich multicultural heritage, excellent transportation links, and growing economy, Aurora continues to attract businesses and residents seeking a blend of urban amenities and midwestern charm.",
    population: "180,000",
    businessAreas: "Downtown Aurora, Fox Valley Mall area, and Chicago Premium Outlets",
    distance: "37 miles",
    slug: "aurora",
    website: "https://www.aurora-il.org"
  },
  {
    name: "Joliet",
    county: "Will County",
    state: "IL",
    description: "Joliet is a historic city with a rich industrial heritage, situated where the Des Plaines and Kankakee Rivers meet to form the Illinois River. Once a manufacturing powerhouse, Joliet has diversified its economy while preserving its cultural identity. The city features numerous attractions including the Rialto Square Theatre (known as the 'Jewel of Joliet'), Harrah's Casino, the Joliet Prison (featured in 'The Blues Brothers'), and the Chicagoland Speedway. With its strategic location at the intersection of major highways and railways, Joliet continues to thrive as a logistics and transportation hub while offering residents affordable housing and diverse recreational opportunities.",
    population: "150,000",
    businessAreas: "Downtown Joliet, Louis Joliet Mall area, and I-80 corridor",
    distance: "40 miles",
    slug: "joliet",
    website: "https://www.joliet.gov"
  },
  {
    name: "Waukegan",
    county: "Lake County",
    state: "IL",
    description: "Waukegan, situated on the shores of Lake Michigan, is a diverse city with a rich industrial past and promising future. As the county seat of Lake County, it combines historic charm with modern development initiatives. The city features a scenic harbor and marina, the historic Genesee Theatre, and numerous parks. Waukegan's multicultural community is reflected in its vibrant arts scene, diverse cuisine, and cultural festivals. With ongoing revitalization efforts in its downtown and lakefront areas, Waukegan is transforming while honoring its heritage as one of the oldest communities in Illinois. Its strategic position between Chicago and Milwaukee makes it an important transportation and commercial hub for the region.",
    population: "88,000",
    businessAreas: "Downtown Waukegan, Fountain Square shopping district, and Waukegan Harbor",
    distance: "35 miles",
    slug: "waukegan",
    website: "https://www.waukeganil.gov"
  },
  {
    name: "Cicero",
    county: "Cook County",
    state: "IL",
    description: "Cicero is a densely populated, historically significant suburb bordering Chicago's west side. With a rich immigrant history, Cicero was once home to a young Al Capone and played a notable role during Prohibition. Today, it's characterized by its strong Hispanic heritage, vibrant commercial districts, and working-class neighborhoods. The town offers affordable housing options, diverse eateries, and convenient access to Chicago via public transportation and major highways. Cicero's community takes pride in its cultural diversity, manifested through local festivals, businesses, and community organizations. Its manufacturing legacy continues through numerous industrial areas that provide employment opportunities for residents.",
    population: "81,000",
    businessAreas: "Cermak Road corridor, Cicero Avenue commercial district, and industrial zones near rail lines",
    distance: "7 miles",
    slug: "cicero",
    website: "https://www.thetownofcicero.com"
  },
  {
    name: "Bolingbrook",
    county: "Will County",
    state: "IL",
    description: "Bolingbrook is a thriving suburban community that has experienced remarkable growth since its incorporation in 1965. This diverse, family-friendly village offers excellent amenities including the Promenade Bolingbrook shopping mall, the Bolingbrook Golf Club, and an impressive park district with numerous recreational facilities. The village features well-planned neighborhoods, quality schools, and the Bolingbrook's Clow International Airport. Its strategic location at the intersection of Interstate highways 55 and 355 makes it attractive to businesses and residents alike. Bolingbrook's commitment to environmental sustainability is evident in initiatives like its municipal solar installations and green building practices. The community's cultural diversity is celebrated through various events throughout the year.",
    population: "75,000",
    businessAreas: "The Promenade Bolingbrook, Weber Road corridor, and I-55 business district",
    distance: "30 miles",
    slug: "bolingbrook",
    website: "https://www.bolingbrook.com"
  },
  {
    name: "Palatine",
    county: "Cook County",
    state: "IL",
    description: "Palatine is an established suburban community known for its excellent quality of life, outstanding schools, and beautiful open spaces. The village features a charming downtown with a diverse dining scene, boutique shops, and the historic Clayson House Museum. Palatine's park district maintains numerous recreational facilities, including the popular Twin Lakes Golf Course and Family Aquatic Center. The community is home to Harper College, providing higher education opportunities to residents. Throughout the year, Palatine hosts popular events like the Street Fest and Oktoberfest celebrations that attract visitors from across the region. With its convenient location and access to Chicago via the Metra rail system, Palatine offers residents a perfect blend of suburban comfort and urban accessibility.",
    population: "68,000",
    businessAreas: "Downtown Palatine, Rand Road corridor, and Dundee Road business district",
    distance: "26 miles",
    slug: "palatine",
    website: "https://www.palatine.il.us"
  },
  {
    name: "Elgin",
    county: "Kane County",
    state: "IL",
    description: "Elgin is a historic city straddling the Fox River, known for its diverse architecture, cultural offerings, and natural beauty. The city's downtown features the stunning Grand Victoria Casino, the renowned Elgin Symphony Orchestra, and the historic Elgin Public Museum. With over 75 parks, the Fox River Trail, and numerous golf courses, Elgin offers abundant recreational opportunities. The city takes pride in its diverse population, which is reflected in its varied dining options, cultural festivals, and community events. Elgin's rich history is preserved in its many historic districts, showcasing architectural styles from Victorian to Art Deco. As home to Elgin Community College and a satellite campus of Judson University, the city provides excellent educational resources while maintaining its manufacturing heritage and developing new economic opportunities.",
    population: "112,000",
    businessAreas: "Downtown Elgin, Randall Road corridor, and the I-90 business district",
    distance: "35 miles",
    slug: "elgin",
    website: "https://www.cityofelgin.org"
  },
  {
    name: "Hoffman Estates",
    county: "Cook County",
    state: "IL",
    description: "Hoffman Estates has evolved from a small farming community to a thriving suburban village with excellent amenities and business opportunities. Known for being the home of the Sears Centre Arena (Now NOW Arena), this community offers residents a high quality of life with its award-winning park district, quality schools, and extensive shopping options. The village hosts impressive corporate presences including the headquarters of Sears Holdings and CDK Global. Hoffman Estates blends residential comfort with commercial development, featuring well-maintained neighborhoods, beautiful parks, and convenient access to major highways. The community's commitment to economic development is balanced with environmental stewardship through its numerous conservation areas and forest preserves, providing residents with abundant natural spaces to enjoy.",
    population: "51,000",
    businessAreas: "Prairie Stone Business Park, Barrington Road corridor, and Golf Road commercial district",
    distance: "30 miles",
    slug: "hoffman-estates",
    website: "https://www.hoffmanestates.org"
  },
  {
    name: "Des Plaines",
    county: "Cook County",
    state: "IL",
    description: "Des Plaines is a vibrant suburb strategically located near O'Hare International Airport, making it a key transportation and business hub. The city is known for its Rivers Casino, the first Illinois casino, which contributes significantly to the local economy. Downtown Des Plaines offers a charming mix of shops, restaurants, and cultural venues, including the historic Des Plaines Theatre. With over 40 parks, the pristine Lake Opeka, and miles of trails along the Des Plaines River, residents enjoy abundant recreational opportunities. The city's diverse population is reflected in its varied dining scene featuring cuisines from around the world. Des Plaines balances its industrial and commercial strengths with residential neighborhoods that offer housing options for various income levels, all while maintaining easy access to Chicago via Metra trains and major highways.",
    population: "58,000",
    businessAreas: "Downtown Des Plaines, O'Hare area business parks, and Oakton Street corridor",
    distance: "17 miles",
    slug: "des-plaines",
    website: "https://www.desplaines.org"
  },
  {
    name: "Orland Park",
    county: "Cook County",
    state: "IL",
    description: "Orland Park is an affluent suburb known for its exceptional shopping destinations, including Orland Square Mall and numerous retail corridors. The village combines commercial success with natural beauty, featuring over 60 parks, the scenic Centennial Park, and extensive forest preserves. Orland Park offers excellent educational opportunities with top-rated schools and convenient access to several colleges and universities. The community provides cultural enrichment through its Cultural Center, public art installations, and seasonal events like the Taste of Orland Park. With its strategic location at the intersection of major highways and Metra rail service, Orland Park offers convenient connections to Chicago while maintaining its distinct suburban character. The village continually ranks among the best places to live in Illinois due to its low crime rate, high median income, and outstanding municipal services.",
    population: "58,000",
    businessAreas: "Orland Square Mall area, LaGrange Road corridor, and 159th Street shopping district",
    distance: "25 miles",
    slug: "orland-park",
    website: "https://www.orland-park.il.us"
  },
  {
    name: "Tinley Park",
    county: "Cook County",
    state: "IL",
    description: "Tinley Park is a thriving southwest suburb recognized for its strong community spirit, excellent quality of life, and commitment to the arts. The village is perhaps best known for its Hollywood Casino Amphitheatre, which attracts major musical acts throughout the summer season. Tinley Park has earned accolades as one of America's best places to raise a family, boasting top-rated schools, over 40 parks, and extensive recreational programs. The historic downtown district features charming shops, diverse restaurants, and the iconic Oak Park Avenue train station. The village celebrates its heritage through public art, most notably the 'Benches on the Avenue' program that displays themed public art along Oak Park Avenue each summer. With excellent transportation links via Metra and major highways, Tinley Park offers residents convenient access to Chicago while maintaining its distinctive small-town charm and strong sense of community.",
    population: "56,000",
    businessAreas: "Downtown Tinley Park, Harlem Avenue corridor, and 183rd Street commercial district",
    distance: "28 miles",
    slug: "tinley-park",
    website: "https://www.tinleypark.org"
  },
  {
    name: "Oak Lawn",
    county: "Cook County",
    state: "IL",
    description: "Oak Lawn is a well-established suburban community known for its excellent medical facilities, particularly Advocate Christ Medical Center, one of the Chicago area's premier hospitals. The village offers residents a balanced mix of residential neighborhoods, commercial areas, and recreational spaces. Oak Lawn's downtown has undergone significant revitalization, featuring a blend of modern development and historic charm. The community provides extensive park facilities, including the popular Centennial Park with its splashpad and walking paths. Oak Lawn hosts beloved annual events like the Fall on the Green festival and Fourth of July celebration. With its central location and excellent transportation options, including Metra rail service and proximity to major highways, Oak Lawn provides convenient access to Chicago while maintaining affordable housing options and a strong sense of community identity maintained through numerous local organizations and active civic engagement.",
    population: "56,000",
    businessAreas: "95th Street corridor, Cicero Avenue retail district, and Oak Lawn Medical Campus area",
    distance: "15 miles",
    slug: "oak-lawn",
    website: "https://www.oaklawn-il.gov"
  },
  {
    name: "Downers Grove",
    county: "DuPage County",
    state: "IL",
    description: "Downers Grove is a picturesque village known for its tree-lined streets, historic architecture, and vibrant downtown. The community has earned recognition as one of the country's friendliest towns, offering residents an exceptional quality of life with outstanding schools, beautiful parks, and numerous community events. Downtown Downers Grove features a charming mix of boutique shops, diverse restaurants, and the historic Tivoli Theatre, one of the first theaters in the country to show talking pictures. The village hosts popular events throughout the year, including the Summer Concert Series and Heritage Festival. Downers Grove takes pride in its environmental initiatives, earning Tree City USA status for over 30 years. With excellent transportation options, including three Metra stations and proximity to major highways and airports, Downers Grove provides convenient access to Chicago while maintaining its distinctive small-town atmosphere and strong sense of community.",
    population: "49,000",
    businessAreas: "Downtown Downers Grove, Butterfield Road corridor, and 75th Street commercial district",
    distance: "22 miles",
    slug: "downers-grove",
    website: "https://www.downers.us"
  },
  {
    name: "Wheaton",
    county: "DuPage County",
    state: "IL",
    description: "Wheaton is a historic community distinguished by its religious heritage, educational institutions, and high quality of life. The city is home to Wheaton College, a prestigious liberal arts institution founded in 1860. Downtown Wheaton offers a charming mix of specialty shops, diverse dining options, and cultural attractions like the DuPage County Historical Museum. The community features abundant green space, including the beautiful Cantigny Park with its formal gardens, museums, and golf course. Wheaton's residential neighborhoods showcase architectural styles ranging from Victorian to modern, with well-maintained homes and tree-lined streets. The city hosts numerous community events throughout the year, including the Taste of Wheaton and summer band concerts. With excellent schools, low crime rates, and convenient access to Chicago via Metra and major highways, Wheaton consistently ranks among the most desirable places to live in Illinois, attracting families and professionals seeking a community with strong values and outstanding amenities.",
    population: "53,000",
    businessAreas: "Downtown Wheaton, Danada Square shopping area, and Roosevelt Road corridor",
    distance: "25 miles",
    slug: "wheaton",
    website: "https://www.wheaton.il.us"
  },
  {
    name: "Berwyn",
    county: "Cook County",
    state: "IL",
    description: "Berwyn is a vibrant, densely populated suburb with a rich cultural heritage and strong sense of community. Known for having one of the world's largest collections of Chicago-style bungalows, Berwyn offers affordable housing options with historic charm. The city features distinctive commercial districts, including the Depot District and Cermak Plaza, providing diverse shopping and dining experiences. Berwyn's artistic spirit is evident in its support for public art, music venues like FitzGerald's, and the annual Berwyn Route 66 Car Show. The community's diverse population contributes to its lively atmosphere, reflected in numerous ethnic restaurants and cultural celebrations. With excellent public transportation options, including CTA and Metra service, Berwyn provides convenient access to downtown Chicago. The city continues to evolve through revitalization efforts while maintaining its working-class roots and strong neighborhood identity, making it an increasingly attractive option for young families and professionals seeking affordable housing near Chicago.",
    population: "56,000",
    businessAreas: "Cermak Road corridor, Depot District, and Roosevelt Road commercial area",
    distance: "10 miles",
    slug: "berwyn",
    website: "https://www.berwyn-il.gov"
  }
];

export const findCityBySlug = (slug: string): City | undefined => {
  return cities.find(city => city.slug === slug);
};
