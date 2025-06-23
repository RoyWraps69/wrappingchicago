
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Book, ChevronRight, Hash, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UnifiedBreadcrumbs from '@/components/navigation/UnifiedBreadcrumbs';
import UnifiedBreadcrumbSchema from '@/components/schemas/UnifiedBreadcrumbSchema';
import GlossarySchema from '@/components/schemas/GlossarySchema';
import IndexingOptimizer from '@/components/schemas/IndexingOptimizer';
import { glossaryData, searchTerms, type GlossaryTerm } from '@/data/glossaryTerms';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
  };

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
          
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-brand-navy to-blue-800 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center mb-4">
                  <Book className="h-10 w-10 text-brand-red mr-3" />
                  <h1 className="text-3xl md:text-4xl font-bold">
                    Vehicle Wrap Glossary
                  </h1>
                </div>
                <p className="text-lg md:text-xl mb-6 text-blue-100">
                  Master the language of professional vehicle wrapping with 100+ essential terms
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-blue-100">
                    From materials and tools to techniques and quality standards - your complete reference guide
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Search and Filter Section */}
          <section className="py-6 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Search Bar */}
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search terms... (e.g., 'cast vinyl', 'squeegee', 'conformability')"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-3 text-base"
                  />
                </div>

                {/* Active Filters */}
                {(searchQuery || selectedCategory) && (
                  <div className="flex items-center gap-2 mb-4">
                    <Filter className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Active filters:</span>
                    {searchQuery && (
                      <Badge variant="secondary">Search: "{searchQuery}"</Badge>
                    )}
                    {selectedCategory && (
                      <Badge variant="secondary">
                        Category: {glossaryData.find(cat => cat.id === selectedCategory)?.name}
                      </Badge>
                    )}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={clearFilters}
                      className="ml-2"
                    >
                      Clear All
                    </Button>
                  </div>
                )}

                {/* Category Filters */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 mb-6">
                  {glossaryData.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(
                        selectedCategory === category.id ? null : category.id
                      )}
                      className="text-xs"
                    >
                      {category.name}
                      <Badge variant="secondary" className="ml-1 text-xs">
                        {category.terms.length}
                      </Badge>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Terms Display */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {!searchQuery && !selectedCategory && (
                  <div className="text-center py-8">
                    <Hash className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <h2 className="text-xl font-semibold text-gray-600 mb-2">
                      Select a category or search for terms
                    </h2>
                    <p className="text-gray-500">
                      Use the category buttons above or search bar to explore our comprehensive glossary
                    </p>
                  </div>
                )}

                {(searchQuery || selectedCategory) && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold text-brand-navy">
                        {searchQuery 
                          ? `Search Results for "${searchQuery}"` 
                          : glossaryData.find(cat => cat.id === selectedCategory)?.name
                        }
                      </h2>
                      <Badge variant="outline">
                        {filteredTerms.length} term{filteredTerms.length !== 1 ? 's' : ''}
                      </Badge>
                    </div>

                    {filteredTerms.length === 0 && searchQuery && (
                      <div className="text-center py-6">
                        <p className="text-gray-500">
                          No terms found for "{searchQuery}". Try a different search term.
                        </p>
                      </div>
                    )}

                    <div className="grid gap-4">
                      {filteredTerms.map((term: GlossaryTerm) => (
                        <Card key={term.id} id={term.id} className="scroll-mt-20">
                          <CardContent className="pt-4">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-lg font-semibold text-brand-navy">
                                {term.name}
                              </h3>
                              <Badge variant="secondary" className="text-xs ml-2">
                                {glossaryData.find(cat => cat.id === term.category)?.name}
                              </Badge>
                            </div>
                            <p className="text-gray-700 leading-relaxed term-definition speakable mb-3">
                              {term.definition}
                            </p>
                            {term.relatedTerms && term.relatedTerms.length > 0 && (
                              <div className="pt-3 border-t border-gray-100">
                                <p className="text-sm font-medium text-gray-600 mb-2">Related Terms:</p>
                                <div className="flex flex-wrap gap-1">
                                  {term.relatedTerms.map((relatedId) => (
                                    <Badge 
                                      key={relatedId} 
                                      variant="outline"
                                      className="text-xs cursor-pointer hover:bg-brand-red hover:text-white transition-colors"
                                      onClick={() => {
                                        const element = document.getElementById(relatedId);
                                        element?.scrollIntoView({ behavior: 'smooth' });
                                      }}
                                    >
                                      {relatedId.replace('-', ' ')}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Categories Overview (when no filters active) */}
          {!searchQuery && !selectedCategory && (
            <section className="py-8 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-2xl font-bold text-brand-navy text-center mb-8">
                    Browse by Category
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {glossaryData.map((category) => (
                      <Card 
                        key={category.id}
                        className="cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center justify-between">
                            {category.name}
                            <Badge variant="secondary">{category.terms.length}</Badge>
                          </CardTitle>
                          <CardDescription>{category.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-1">
                            {category.terms.slice(0, 3).map((term) => (
                              <div key={term.id} className="flex items-center text-sm">
                                <ChevronRight className="h-3 w-3 text-brand-red mr-1 flex-shrink-0" />
                                <span className="font-medium text-brand-navy">{term.name}</span>
                              </div>
                            ))}
                            {category.terms.length > 3 && (
                              <div className="text-xs text-gray-500 mt-2">
                                +{category.terms.length - 3} more terms
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default GlossaryPage;
