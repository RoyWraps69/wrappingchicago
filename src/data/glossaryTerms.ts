
import { materialsTerms } from './glossary/materials';
import { toolsTerms } from './glossary/tools';
import { techniquesTerms } from './glossary/techniques';
import { surfacePreparationTerms } from './glossary/surface-preparation';
import { designTerms } from './glossary/design';
import { qualityTerms } from './glossary/quality';
import { businessTerms } from './glossary/business';

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
    terms: materialsTerms
  },
  {
    id: "tools-equipment",
    name: "Tools & Equipment",
    description: "Essential tools and equipment used in professional vehicle wrap installation",
    terms: toolsTerms
  },
  {
    id: "techniques-processes",
    name: "Installation Techniques & Processes",
    description: "Methods and processes used in professional vehicle wrap installation",
    terms: techniquesTerms
  },
  {
    id: "surface-preparation",
    name: "Surface Preparation & Adhesion",
    description: "Methods and materials for preparing vehicle surfaces and ensuring proper adhesion",
    terms: surfacePreparationTerms
  },
  {
    id: "design-graphics",
    name: "Design & Graphics",
    description: "Terms related to design, printing, and graphics in vehicle wrapping",
    terms: designTerms
  },
  {
    id: "quality-durability",
    name: "Quality & Durability",
    description: "Terms related to wrap quality, testing, and long-term performance",
    terms: qualityTerms
  },
  {
    id: "business-applications",
    name: "Business & Applications",
    description: "Commercial and business aspects of vehicle wrapping",
    terms: businessTerms
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
