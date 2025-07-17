/**
 * Comprehensive Keyword Strategy for Maximum Chicago Domination
 * Long-tail keywords, local variations, and trade-specific targeting
 */

export const ChicagoKeywordStrategy = {
  // Core Long-Tail Keywords
  primaryLongTail: [
    "best vehicle wrap company in Chicago Illinois",
    "affordable truck wraps Chicago metro area", 
    "professional car wrap installation Chicago suburbs",
    "commercial vehicle graphics Chicago Chicagoland",
    "custom truck lettering Chicago area contractors",
    "fleet vehicle wraps Chicago Illinois businesses",
    "emergency vehicle wrap repair Chicago",
    "vehicle wrap financing Chicago payment plans",
    "mobile vehicle wrap installation Chicago onsite",
    "eco friendly vehicle wraps Chicago sustainable"
  ],

  // Trade-Specific Long-Tail Keywords  
  tradeSpecific: {
    plumber: [
      "plumbing truck wraps Chicago emergency service",
      "water damage restoration vehicle graphics Chicago",
      "drain cleaning truck lettering Chicago suburbs",
      "24 hour plumber truck wraps Chicago area",
      "commercial plumbing fleet wraps Chicago Illinois",
      "residential plumber van graphics Chicago neighborhoods"
    ],
    electrician: [
      "electrical contractor truck wraps Chicago commercial",
      "emergency electrician vehicle graphics Chicago 24/7",
      "solar panel installer truck wraps Chicago green energy",
      "industrial electrical fleet wraps Chicago area",
      "residential electrician van lettering Chicago suburbs",
      "electrical repair truck graphics Chicago neighborhoods"
    ],
    hvac: [
      "heating cooling truck wraps Chicago winter summer",
      "air conditioning repair vehicle graphics Chicago hot weather",
      "furnace installation truck lettering Chicago cold weather", 
      "HVAC emergency service vehicle wraps Chicago 24/7",
      "commercial HVAC fleet graphics Chicago businesses",
      "residential heating cooling van wraps Chicago homes"
    ],
    contractor: [
      "general contractor truck wraps Chicago construction",
      "home remodeling vehicle graphics Chicago renovation",
      "roofing contractor truck lettering Chicago storm damage",
      "basement waterproofing vehicle wraps Chicago flooding",
      "kitchen remodeling contractor graphics Chicago custom",
      "bathroom renovation truck wraps Chicago luxury"
    ]
  },

  // Neighborhood-Specific Keywords
  neighborhoods: [
    "vehicle wraps Lincoln Park Chicago professional installation",
    "truck graphics Wicker Park Chicago creative design",
    "van wraps Lakeview Chicago residential services", 
    "fleet graphics River North Chicago business district",
    "car wraps Gold Coast Chicago luxury vehicles",
    "commercial wraps Loop Chicago downtown businesses",
    "truck lettering West Loop Chicago corporate",
    "vehicle graphics Pilsen Chicago Latino businesses",
    "van graphics Little Village Chicago family owned",
    "fleet wraps Bridgeport Chicago industrial"
  ],

  // Service + Location Long-Tail
  serviceLocation: [
    "same day vehicle wrap installation Chicago emergency",
    "weekend vehicle wrap services Chicago convenient",
    "mobile vehicle wrap consultation Chicago free estimates",
    "vehicle wrap removal Chicago clean professional",
    "wrap design consultation Chicago custom graphics",
    "fleet wrap project management Chicago multiple vehicles",
    "vehicle wrap warranty service Chicago long term",
    "wrap maintenance Chicago cleaning care tips"
  ],

  // Competitive Keywords  
  competitive: [
    "better than 3M authorized Chicago vehicle wraps",
    "cheaper alternative expensive Chicago wrap shops",
    "faster installation Chicago vehicle wrap speed",
    "longer lasting vehicle wraps Chicago durability",
    "better customer service Chicago wrap company",
    "local family owned Chicago vehicle wrap business"
  ],

  // Seasonal Keywords
  seasonal: [
    "winter vehicle wraps Chicago snow resistant materials",
    "summer vehicle wraps Chicago heat resistant vinyl", 
    "spring vehicle wrap specials Chicago new business",
    "fall vehicle wrap maintenance Chicago weather prep",
    "holiday vehicle wraps Chicago seasonal promotions",
    "new year vehicle wrap resolutions Chicago fresh start"
  ]
};

// Geographic Keyword Mapping
export const GeographicKeywords = {
  chicago: {
    primary: "Chicago Illinois vehicle wraps",
    neighborhoods: ["Lincoln Park", "Wicker Park", "Lakeview", "River North", "Gold Coast"],
    longtail: "professional vehicle wrap installation Chicago Illinois metro area"
  },
  evanston: {
    primary: "Evanston Illinois vehicle wraps Northwestern University area",
    demographics: "college town vehicle graphics university students faculty",
    longtail: "vehicle wrap services Evanston Illinois North Shore suburbs"
  },
  naperville: {
    primary: "Naperville Illinois vehicle wraps DuPage County",
    demographics: "family friendly vehicle graphics suburban professionals",
    longtail: "commercial vehicle wraps Naperville Illinois business district"
  },
  schaumburg: {
    primary: "Schaumburg Illinois vehicle wraps Woodfield Mall area",
    demographics: "corporate vehicle graphics business professionals",
    longtail: "fleet vehicle wraps Schaumburg Illinois corporate headquarters"
  }
};

export default ChicagoKeywordStrategy;