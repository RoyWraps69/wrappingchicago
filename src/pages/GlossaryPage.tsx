
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UnifiedBreadcrumbs from '@/components/navigation/UnifiedBreadcrumbs';
import UnifiedBreadcrumbSchema from '@/components/schemas/UnifiedBreadcrumbSchema';
import GlossarySchema from '@/components/schemas/GlossarySchema';
import IndexingOptimizer from '@/components/schemas/IndexingOptimizer';
import GlossaryHero from '@/components/glossary/GlossaryHero';
import GlossarySearch from '@/components/glossary/GlossarySearch';
import GlossaryTermsList from '@/components/glossary/GlossaryTermsList';
import GlossaryCategoryOverview from '@/components/glossary/GlossaryCategoryOverview';
import { searchTerms, glossaryData } from '@/data/glossaryTerms';

const GlossaryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredTerms = searchQuery 
    ? searchTerms(searchQuery)
    : selectedCategory 
      ? glossaryData.find(cat => cat.id === selectedCategory)?.terms || []
      : [];

  const pageTitle = "Vehicle Wrap Glossary - 100+ Professional Terms & Definitions | Wrapping Chicago";
  const pageDescription = "Complete glossary of vehicle wrap terms covering materials, tools, techniques, and processes. Essential reference for cast vinyl, calendared vinyl, installation methods, and professional equipment.";

  return (
    <>
      <IndexingOptimizer
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        canonicalUrl="/glossary"
        priority="high"
        keywords={[
          "vehicle wrap glossary",
          "vinyl wrap terms",
          "cast vinyl definition",
          "calendared vinyl",
          "wrap installation terms",
          "vehicle wrap materials",
          "wrap tools glossary",
          "professional wrap terms",
          "vinyl wrap dictionary",
          "wrap technique definitions"
        ]}
      />
      
      <UnifiedBreadcrumbSchema />
      <GlossarySchema />
      
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="vehicle wrap glossary, vinyl wrap terms, cast vinyl, calendared vinyl, wrap installation, wrap tools, professional wrap terminology" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="speakable" content="h1, h2, .term-definition" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wrappingchicago.com/glossary" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-4">
            <UnifiedBreadcrumbs />
          </div>
          
          <GlossaryHero />

          <GlossarySearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <GlossaryTermsList
                  searchQuery={searchQuery}
                  selectedCategory={selectedCategory}
                  filteredTerms={filteredTerms}
                />
              </div>
            </div>
          </section>

          {!searchQuery && !selectedCategory && (
            <GlossaryCategoryOverview setSelectedCategory={setSelectedCategory} />
          )}
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default GlossaryPage;
