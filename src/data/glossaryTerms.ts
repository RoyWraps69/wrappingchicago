
export interface GlossaryTerm {
  id: string;
  name: string;
  definition: string;
  category: string;
  relatedTerms?: string[];
}

export interface GlossaryCategory {
  id: string;
  name: string;
  description: string;
  terms: GlossaryTerm[];
}

export const glossaryData: GlossaryCategory[] = [
  {
    id: "materials",
    name: "Vinyl Materials & Films",
    description: "Different types of vinyl materials and films used in vehicle wrapping",
    terms: [
      {
        id: "cast-vinyl",
        name: "Cast Vinyl",
        definition: "A premium, thin, and highly conformable type of vinyl used for vehicle wraps. Cast vinyl is poured in a liquid form before being cured, allowing it to better adhere to curves and recesses without shrinking over time.",
        category: "materials",
        relatedTerms: ["calendared-vinyl", "conformability"]
      },
      {
        id: "calendared-vinyl",
        name: "Calendared Vinyl",
        definition: "A thicker, less conformable vinyl made by rolling and stretching the material. While more affordable than cast vinyl, calendared vinyl is best suited for flat surfaces or short-term wraps.",
        category: "materials",
        relatedTerms: ["cast-vinyl", "conformability"]
      },
      {
        id: "air-release-adhesive",
        name: "Air Release Adhesive",
        definition: "A specialized adhesive with micro-channels that allow trapped air to escape during installation, reducing bubbles and improving wrap quality.",
        category: "materials"
      },
      {
        id: "overlaminate",
        name: "Overlaminate",
        definition: "A clear protective film applied over printed vinyl to enhance durability, UV resistance, and finish. Available in gloss, satin, or matte finishes.",
        category: "materials"
      },
      {
        id: "3m-vinyl",
        name: "3M Vinyl",
        definition: "Premium vinyl wrap materials manufactured by 3M, known for their durability, conformability, and warranty coverage. Popular series include 3M 1080 and 3M 2080.",
        category: "materials"
      },
      {
        id: "avery-vinyl",
        name: "Avery Dennison Vinyl",
        definition: "High-quality vinyl wrap materials from Avery Dennison, offering excellent conformability and color selection in their Supreme Wrapping Film series.",
        category: "materials"
      },
      {
        id: "architectural-film",
        name: "Architectural Film",
        definition: "Specialized vinyl designed for building surfaces but sometimes used on large commercial vehicles or fleet applications requiring extreme durability.",
        category: "materials"
      },
      {
        id: "digital-print-vinyl",
        name: "Digital Print Vinyl",
        definition: "Vinyl specifically designed to receive digital printing, allowing for custom graphics, photographs, and complex designs on vehicle wraps.",
        category: "materials"
      },
      {
        id: "carbon-fiber-vinyl",
        name: "Carbon Fiber Vinyl",
        definition: "Textured vinyl that mimics the appearance of real carbon fiber, popular for automotive accents and sport vehicle wraps.",
        category: "materials"
      },
      {
        id: "chrome-vinyl",
        name: "Chrome Vinyl",
        definition: "Highly reflective metallic vinyl that creates a mirror-like chrome finish, requiring special handling due to its visibility of imperfections.",
        category: "materials"
      },
      {
        id: "matte-vinyl",
        name: "Matte Vinyl",
        definition: "Non-reflective vinyl finish that provides a flat, non-glossy appearance. Popular for luxury and stealth vehicle wraps.",
        category: "materials"
      },
      {
        id: "satin-vinyl",
        name: "Satin Vinyl",
        definition: "Mid-gloss vinyl finish that falls between matte and gloss, offering a sophisticated pearl-like appearance.",
        category: "materials"
      },
      {
        id: "color-change-vinyl",
        name: "Color Change Vinyl",
        definition: "Premium vinyl specifically designed for complete vehicle color transformations, offering superior conformability and durability.",
        category: "materials"
      },
      {
        id: "metallic-vinyl",
        name: "Metallic Vinyl",
        definition: "Vinyl with metallic particles or finish that creates shimmer and depth, popular for eye-catching commercial wraps.",
        category: "materials"
      },
      {
        id: "reflective-vinyl",
        name: "Reflective Vinyl",
        definition: "Vinyl embedded with glass beads or prismatic technology that reflects light, used for safety applications and emergency vehicles.",
        category: "materials"
      }
    ]
  },
  {
    id: "tools-equipment",
    name: "Tools & Equipment",
    description: "Essential tools and equipment used in professional vehicle wrap installation",
    terms: [
      {
        id: "squeegee",
        name: "Squeegee",
        definition: "A handheld tool used during installation to press vinyl wrap smoothly onto the surface, eliminate air bubbles, and ensure proper adhesion. Often fitted with felt edges for scratch-free application.",
        category: "tools-equipment"
      },
      {
        id: "heat-gun",
        name: "Heat Gun",
        definition: "A tool that applies controlled heat to make vinyl more pliable and conformable during installation, especially around curves and complex shapes.",
        category: "tools-equipment"
      },
      {
        id: "knifeless-tape",
        name: "Knifeless Tape",
        definition: "A filament-based tape used to cut vinyl wrap material without using a knife, allowing for clean, damage-free cuts along body lines and custom graphics.",
        category: "tools-equipment"
      },
      {
        id: "wrap-glove",
        name: "Wrap Glove",
        definition: "Specialized gloves worn during installation to prevent fingerprints on vinyl and provide better grip while maintaining dexterity.",
        category: "tools-equipment"
      },
      {
        id: "infrared-thermometer",
        name: "Infrared Thermometer",
        definition: "A non-contact temperature measuring device used to monitor vinyl and surface temperatures during installation for optimal results.",
        category: "tools-equipment"
      },
      {
        id: "rivet-brush",
        name: "Rivet Brush",
        definition: "A specialized brush tool used to work vinyl into rivets, bolt holes, and other small recessed areas on commercial vehicles.",
        category: "tools-equipment"
      },
      {
        id: "tucking-tool",
        name: "Tucking Tool",
        definition: "A flat, thin tool used to tuck vinyl edges into gaps, seams, and tight spaces without damaging the material.",
        category: "tools-equipment"
      },
      {
        id: "cutting-mat",
        name: "Cutting Mat",
        definition: "A self-healing mat surface used for cutting vinyl graphics and templates, protecting blades and providing precise cuts.",
        category: "tools-equipment"
      },
      {
        id: "plotter-cutter",
        name: "Plotter/Cutter",
        definition: "Computer-controlled cutting machine used to precisely cut vinyl graphics, lettering, and templates from digital designs.",
        category: "tools-equipment"
      },
      {
        id: "wrap-car",
        name: "Wrap Cart",
        definition: "Mobile cart or station that holds tools, vinyl rolls, and supplies organized for efficient workflow during wrap installation.",
        category: "tools-equipment"
      },
      {
        id: "air-release-tool",
        name: "Air Release Tool",
        definition: "Specialized tool designed to puncture and release trapped air bubbles without damaging the vinyl surface.",
        category: "tools-equipment"
      },
      {
        id: "primer-pen",
        name: "Primer Pen",
        definition: "Applicator pen containing primer solution for treating low-energy surfaces to improve vinyl adhesion.",
        category: "tools-equipment"
      },
      {
        id: "edge-sealer-applicator",
        name: "Edge Sealer Applicator",
        definition: "Precision applicator for applying edge sealer to vinyl edges, ensuring long-term adhesion and preventing lifting.",
        category: "tools-equipment"
      },
      {
        id: "wrap-stick",
        name: "Wrap Stick",
        definition: "Smooth plastic tool used for general smoothing and working vinyl into place without scratching or marring the surface.",
        category: "tools-equipment"
      },
      {
        id: "measuring-tape",
        name: "Measuring Tape",
        definition: "Essential measuring tool for determining vinyl dimensions, planning cuts, and ensuring proper material usage and alignment.",
        category: "tools-equipment"
      }
    ]
  },
  {
    id: "techniques-processes",
    name: "Installation Techniques & Processes",
    description: "Methods and processes used in professional vehicle wrap installation",
    terms: [
      {
        id: "wet-application",
        name: "Wet Application",
        definition: "Installation method using application fluid to allow repositioning of vinyl before final adhesion. Less common with modern air-release adhesives.",
        category: "techniques-processes"
      },
      {
        id: "dry-application",
        name: "Dry Application",
        definition: "Standard installation method where vinyl is applied directly without application fluid, relying on air-release adhesives for bubble-free results.",
        category: "techniques-processes"
      },
      {
        id: "pre-stretch",
        name: "Pre-stretch",
        definition: "The process of slightly stretching vinyl before application to reduce tension and prevent shrinkage over time.",
        category: "techniques-processes"
      },
      {
        id: "post-heating",
        name: "Post-heating",
        definition: "Applying heat to installed vinyl to activate adhesive and ensure long-term bonding, especially important for edges and complex curves.",
        category: "techniques-processes"
      },
      {
        id: "bridging",
        name: "Bridging",
        definition: "When vinyl spans across a recess or gap without conforming to the surface contour, often requiring relief cuts or additional heat.",
        category: "techniques-processes"
      },
      {
        id: "relief-cuts",
        name: "Relief Cuts",
        definition: "Strategic cuts made in vinyl to allow it to conform around complex curves, corners, or raised areas without bunching or wrinkling.",
        category: "techniques-processes"
      },
      {
        id: "cold-pre-stretch",
        name: "Cold Pre-stretch",
        definition: "Stretching vinyl at room temperature before heating, used to reduce stress and improve conformability around complex shapes.",
        category: "techniques-processes"
      },
      {
        id: "edge-wrapping",
        name: "Edge Wrapping",
        definition: "The technique of wrapping vinyl around panel edges and securing it to hidden surfaces for a clean, professional finish.",
        category: "techniques-processes"
      },
      {
        id: "inlay-method",
        name: "Inlay Method",
        definition: "Installation technique where vinyl pieces are cut and fitted precisely within panel boundaries rather than wrapping edges.",
        category: "techniques-processes"
      },
      {
        id: "overlay-method",
        name: "Overlay Method",
        definition: "Installation approach where vinyl extends beyond panel edges and is wrapped around for complete coverage.",
        category: "techniques-processes"
      },
      {
        id: "sectional-wrapping",
        name: "Sectional Wrapping",
        definition: "Breaking down complex vehicle surfaces into manageable sections for easier installation and better results.",
        category: "techniques-processes"
      },
      {
        id: "tenting",
        name: "Tenting",
        definition: "When vinyl forms a tent-like shape over recesses instead of conforming, requiring additional heat and working technique.",
        category: "techniques-processes"
      },
      {
        id: "air-egress",
        name: "Air Egress",
        definition: "The process of air escaping from beneath vinyl during installation, facilitated by air-release adhesive channels.",
        category: "techniques-processes"
      },
      {
        id: "conformability-test",
        name: "Conformability Test",
        definition: "Testing vinyl's ability to stretch and conform to complex curves before installation to ensure proper material selection.",
        category: "techniques-processes"
      },
      {
        id: "temperature-control",
        name: "Temperature Control",
        definition: "Managing ambient and material temperatures during installation for optimal vinyl performance and adhesion.",
        category: "techniques-processes"
      }
    ]
  },
  {
    id: "surface-preparation",
    name: "Surface Preparation & Adhesion",
    description: "Methods and materials for preparing vehicle surfaces and ensuring proper adhesion",
    terms: [
      {
        id: "surface-preparation",
        name: "Surface Preparation",
        definition: "The critical process of cleaning, decontaminating, and priming vehicle surfaces before vinyl application to ensure optimal adhesion.",
        category: "surface-preparation"
      },
      {
        id: "isopropyl-alcohol",
        name: "Isopropyl Alcohol",
        definition: "Cleaning solvent used to remove oils, waxes, and contaminants from vehicle surfaces before wrap installation.",
        category: "surface-preparation"
      },
      {
        id: "tack-cloth",
        name: "Tack Cloth",
        definition: "Lint-free cloth used for final surface cleaning to remove dust and particles before vinyl application.",
        category: "surface-preparation"
      },
      {
        id: "edge-sealer",
        name: "Edge Sealer",
        definition: "A clear adhesive liquid or tape used to reinforce the edges of vinyl wrap, preventing lifting and water intrusion, especially in high-wear areas.",
        category: "surface-preparation"
      },
      {
        id: "primer",
        name: "Primer",
        definition: "Chemical treatment applied to low-energy surfaces like textured plastics and rubber to improve vinyl adhesion.",
        category: "surface-preparation"
      },
      {
        id: "decontamination",
        name: "Decontamination",
        definition: "Process of removing embedded contaminants, tar, and oxidation from paint before wrap installation.",
        category: "surface-preparation"
      },
      {
        id: "clay-bar",
        name: "Clay Bar",
        definition: "Cleaning compound used to remove embedded contaminants from paint surfaces that regular washing cannot eliminate.",
        category: "surface-preparation"
      },
      {
        id: "low-energy-surface",
        name: "Low Energy Surface",
        definition: "Surfaces like textured plastics, rubber, and some paints that require primer treatment for proper vinyl adhesion.",
        category: "surface-preparation"
      },
      {
        id: "high-energy-surface",
        name: "High Energy Surface",
        definition: "Surfaces like smooth painted metal and glass that readily accept vinyl adhesion without primer treatment.",
        category: "surface-preparation"
      },
      {
        id: "adhesion-promoter",
        name: "Adhesion Promoter",
        definition: "Chemical treatment that increases the bond strength between vinyl adhesive and difficult surfaces.",
        category: "surface-preparation"
      },
      {
        id: "surface-energy-test",
        name: "Surface Energy Test",
        definition: "Test using test pens or liquids to determine if a surface requires primer treatment for proper vinyl adhesion.",
        category: "surface-preparation"
      },
      {
        id: "contamination-check",
        name: "Contamination Check",
        definition: "Visual and tactile inspection of surfaces to identify oils, waxes, or other contaminants that could affect adhesion.",
        category: "surface-preparation"
      },
      {
        id: "profile-cleaning",
        name: "Profile Cleaning",
        definition: "Detailed cleaning of vehicle body lines, recesses, and textured areas where contaminants commonly accumulate.",
        category: "surface-preparation"
      },
      {
        id: "static-elimination",
        name: "Static Elimination",
        definition: "Process of removing static electricity from vinyl and surfaces to prevent dust attraction during installation.",
        category: "surface-preparation"
      },
      {
        id: "cure-time",
        name: "Cure Time",
        definition: "The time required for adhesive to reach full bond strength after installation, typically 24-48 hours depending on conditions.",
        category: "surface-preparation"
      }
    ]
  },
  {
    id: "design-graphics",
    name: "Design & Graphics",
    description: "Terms related to design, printing, and graphics in vehicle wrapping",
    terms: [
      {
        id: "vehicle-template",
        name: "Vehicle Template",
        definition: "Precise outline drawing of a specific vehicle model used for designing wraps with accurate proportions and panel breaks.",
        category: "design-graphics"
      },
      {
        id: "bleed-area",
        name: "Bleed Area",
        definition: "Extra design area extending beyond the cut line to ensure complete coverage when vinyl is trimmed during installation.",
        category: "design-graphics"
      },
      {
        id: "safe-zone",
        name: "Safe Zone",
        definition: "Area within the design where important text and graphics should be placed to avoid being hidden by door handles or body lines.",
        category: "design-graphics"
      },
      {
        id: "vector-graphics",
        name: "Vector Graphics",
        definition: "Scalable graphics made of mathematical paths rather than pixels, ideal for logos and text that can be resized without quality loss.",
        category: "design-graphics"
      },
      {
        id: "raster-graphics",
        name: "Raster Graphics",
        definition: "Pixel-based images like photographs that have fixed resolution and can lose quality when enlarged significantly.",
        category: "design-graphics"
      },
      {
        id: "color-matching",
        name: "Color Matching",
        definition: "Process of ensuring printed colors match the intended design colors using color profiles and calibrated equipment.",
        category: "design-graphics"
      },
      {
        id: "pantone-color",
        name: "Pantone Color",
        definition: "Standardized color matching system used to ensure consistent color reproduction across different printing processes.",
        category: "design-graphics"
      },
      {
        id: "cmyk-printing",
        name: "CMYK Printing",
        definition: "Four-color printing process using Cyan, Magenta, Yellow, and Key (black) to create full-color graphics on vinyl.",
        category: "design-graphics"
      },
      {
        id: "spot-color",
        name: "Spot Color",
        definition: "Single, specific color ink used in printing, often for brand colors that need exact matching.",
        category: "design-graphics"
      },
      {
        id: "print-resolution",
        name: "Print Resolution",
        definition: "The detail level in printed graphics, typically measured in DPI (dots per inch), with higher resolution providing better quality.",
        category: "design-graphics"
      },
      {
        id: "color-profile",
        name: "Color Profile",
        definition: "Mathematical description of how colors should be displayed or printed to ensure consistency across devices.",
        category: "design-graphics"
      },
      {
        id: "print-media",
        name: "Print Media",
        definition: "The vinyl material that receives printed graphics, chosen based on durability requirements and finish preferences.",
        category: "design-graphics"
      },
      {
        id: "eco-solvent-ink",
        name: "Eco-Solvent Ink",
        definition: "Environmentally friendly printing ink that provides good durability and color saturation for vehicle graphics.",
        category: "design-graphics"
      },
      {
        id: "uv-ink",
        name: "UV Ink",
        definition: "Ultraviolet-cured ink that provides excellent durability and scratch resistance for demanding vehicle wrap applications.",
        category: "design-graphics"
      },
      {
        id: "print-test",
        name: "Print Test",
        definition: "Small sample print used to verify colors, quality, and material compatibility before producing the full wrap.",
        category: "design-graphics"
      }
    ]
  },
  {
    id: "quality-durability",
    name: "Quality & Durability",
    description: "Terms related to wrap quality, testing, and long-term performance",
    terms: [
      {
        id: "conformability",
        name: "Conformability",
        definition: "The ability of vinyl to stretch and conform to complex curves, recesses, and three-dimensional surfaces without wrinkling or lifting.",
        category: "quality-durability"
      },
      {
        id: "dimensional-stability",
        name: "Dimensional Stability",
        definition: "A vinyl's ability to maintain its size and shape over time without shrinking or expanding due to temperature changes.",
        category: "quality-durability"
      },
      {
        id: "uv-resistance",
        name: "UV Resistance",
        definition: "The ability of vinyl and inks to resist fading and degradation when exposed to ultraviolet light from the sun.",
        category: "quality-durability"
      },
      {
        id: "weatherability",
        name: "Weatherability",
        definition: "A material's ability to withstand outdoor weather conditions including rain, snow, temperature extremes, and UV exposure.",
        category: "quality-durability"
      },
      {
        id: "adhesion-strength",
        name: "Adhesion Strength",
        definition: "The force required to remove vinyl from a surface, indicating how well the adhesive bonds to the substrate.",
        category: "quality-durability"
      },
      {
        id: "removability",
        name: "Removability",
        definition: "The ease with which vinyl can be removed from a surface without leaving residue or damaging the underlying finish.",
        category: "quality-durability"
      },
      {
        id: "warranty-coverage",
        name: "Warranty Coverage",
        definition: "Manufacturer's guarantee covering material performance, including fade resistance, adhesion, and conformability over specified time periods.",
        category: "quality-durability"
      },
      {
        id: "color-stability",
        name: "Color Stability",
        definition: "The ability of vinyl colors to resist fading, shifting, or changing over time when exposed to environmental conditions.",
        category: "quality-durability"
      },
      {
        id: "chemical-resistance",
        name: "Chemical Resistance",
        definition: "A vinyl's ability to resist damage from exposure to fuels, oils, cleaners, and other chemicals commonly encountered by vehicles.",
        category: "quality-durability"
      },
      {
        id: "abrasion-resistance",
        name: "Abrasion Resistance",
        definition: "The ability of vinyl to resist wear and damage from physical contact, important for high-touch areas and commercial applications.",
        category: "quality-durability"
      },
      {
        id: "edge-lifting",
        name: "Edge Lifting",
        definition: "Failure mode where vinyl edges begin to separate from the surface, often due to inadequate preparation or environmental stress.",
        category: "quality-durability"
      },
      {
        id: "silvering",
        name: "Silvering",
        definition: "Appearance defect where trapped air creates a silvery or hazy appearance under the vinyl, typically due to inadequate surface preparation.",
        category: "quality-durability"
      },
      {
        id: "tunneling",
        name: "Tunneling",
        definition: "Formation of air channels or tunnels under vinyl, often caused by contaminated surfaces or inadequate adhesive contact.",
        category: "quality-durability"
      },
      {
        id: "print-durability",
        name: "Print Durability",
        definition: "The ability of printed graphics to maintain color and clarity over time without fading, cracking, or deteriorating.",
        category: "quality-durability"
      },
      {
        id: "scratch-resistance",
        name: "Scratch Resistance",
        definition: "A vinyl's ability to resist surface damage from minor impacts, washing, and normal wear during vehicle use.",
        category: "quality-durability"
      }
    ]
  },
  {
    id: "business-applications",
    name: "Business & Applications",
    description: "Commercial and business aspects of vehicle wrapping",
    terms: [
      {
        id: "fleet-wraps",
        name: "Fleet Wraps",
        definition: "Coordinated wrap designs applied to multiple vehicles in a business fleet to create consistent branding and professional appearance.",
        category: "business-applications"
      },
      {
        id: "roi-return-on-investment",
        name: "ROI (Return on Investment)",
        definition: "The financial benefit gained from vehicle wrap advertising compared to the cost of installation and materials.",
        category: "business-applications"
      },
      {
        id: "brand-recognition",
        name: "Brand Recognition",
        definition: "The ability of customers to identify a business through its vehicle wrap design, colors, and graphics.",
        category: "business-applications"
      },
      {
        id: "mobile-advertising",
        name: "Mobile Advertising",
        definition: "Marketing strategy using wrapped vehicles as moving billboards to reach potential customers throughout their service area.",
        category: "business-applications"
      },
      {
        id: "cost-per-impression",
        name: "Cost Per Impression",
        definition: "Marketing metric calculating the cost of each time a potential customer sees a wrapped vehicle advertisement.",
        category: "business-applications"
      },
      {
        id: "wrap-maintenance",
        name: "Wrap Maintenance",
        definition: "Regular care and cleaning procedures required to maintain wrap appearance and extend its lifespan.",
        category: "business-applications"
      },
      {
        id: "dot-compliance",
        name: "DOT Compliance",
        definition: "Adherence to Department of Transportation regulations regarding commercial vehicle identification and safety markings.",
        category: "business-applications"
      },
      {
        id: "brand-guidelines",
        name: "Brand Guidelines",
        definition: "Company standards for logo usage, colors, fonts, and design elements that must be followed in wrap designs.",
        category: "business-applications"
      },
      {
        id: "wrap-lifecycle",
        name: "Wrap Lifecycle",
        definition: "The complete lifespan of a vehicle wrap from design and installation through maintenance to eventual removal and replacement.",
        category: "business-applications"
      },
      {
        id: "lead-generation",
        name: "Lead Generation",
        definition: "The process of attracting potential customers through effective vehicle wrap advertising and contact information display.",
        category: "business-applications"
      }
    ]
  }
];

export const getAllTerms = (): GlossaryTerm[] => {
  return glossaryData.flatMap(category => category.terms);
};

export const getTermById = (id: string): GlossaryTerm | undefined => {
  return getAllTerms().find(term => term.id === id);
};

export const getTermsByCategory = (categoryId: string): GlossaryTerm[] => {
  const category = glossaryData.find(cat => cat.id === categoryId);
  return category ? category.terms : [];
};

export const searchTerms = (query: string): GlossaryTerm[] => {
  const lowercaseQuery = query.toLowerCase();
  return getAllTerms().filter(term => 
    term.name.toLowerCase().includes(lowercaseQuery) ||
    term.definition.toLowerCase().includes(lowercaseQuery)
  );
};
