
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Book, ChevronRight, Hash } from 'lucide-react';
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
import { Separator } from '@/components/ui/separator';

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
        
        {/* AI/LLM Optimization */}
        <meta name="keywords" content="vehicle wrap glossary, vinyl wrap terms, cast vinyl, calendared vinyl, wrap installation, wrap tools, professional wrap terminology" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        
        {/* Voice Search Optimization */}
        <meta name="speakable" content="h1, h2, .term-definition" />
        
        {/* Additional SEO */}
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
          <section className="bg-gradient-to-br from-brand-navy to-blue-800 text-white py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center mb-6">
                  <Book className="h-12 w-12 text-brand-red mr-4" />
                  <h1 className="text-4xl md:text-5xl font-bold">
                    Vehicle Wrap Glossary
                  </h1>
                </div>
                <p className="text-xl md:text-2xl mb-8 text-blue-100">
                  Complete dictionary of 100+ professional vehicle wrap terms, materials, and techniques
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                  <p className="text-lg text-blue-100">
                    From cast vinyl to conformability, master the language of professional vehicle wrapping. 
                    Essential reference for installers, designers, and customers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Search and Navigation */}
          <section className="py-8 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Search Bar */}
                <div className="relative mb-8">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search glossary terms... (e.g., 'cast vinyl', 'squeegee', 'conformability')"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-3 text-lg"
                  />
                </div>

                {/* Category Navigation */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {glossaryData.map((category) => (
                    <Card 
                      key={category.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedCategory === category.id ? 'ring-2 ring-brand-red' : ''
                      }`}
                      onClick={() => setSelectedCategory(
                        selectedCategory === category.id ? null : category.id
                      )}
                    >
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center justify-between">
                          {category.name}
                          <Badge variant="secondary">{category.terms.length}</Badge>
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {category.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Terms Display */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {!searchQuery && !selectedCategory && (
                  <div className="text-center py-12">
                    <Hash className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h2 className="text-2xl font-semibold text-gray-600 mb-2">
                      Select a category or search for terms
                    </h2>
                    <p className="text-gray-500">
                      Browse by category above or use the search bar to find specific terms
                    </p>
                  </div>
                )}

                {(searchQuery || selectedCategory) && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-brand-navy">
                        {searchQuery 
                          ? `Search Results for "${searchQuery}"` 
                          : glossaryData.find(cat => cat.id === selectedCategory)?.name
                        }
                      </h2>
                      <Badge variant="outline" className="text-sm">
                        {filteredTerms.length} term{filteredTerms.length !== 1 ? 's' : ''}
                      </Badge>
                    </div>

                    {filteredTerms.length === 0 && searchQuery && (
                      <div className="text-center py-8">
                        <p className="text-gray-500">
                          No terms found for "{searchQuery}". Try a different search term.
                        </p>
                      </div>
                    )}

                    <div className="space-y-6">
                      {filteredTerms.map((term: GlossaryTerm) => (
                        <Card key={term.id} id={term.id} className="scroll-mt-20">
                          <CardHeader>
                            <CardTitle className="text-xl text-brand-navy flex items-center">
                              {term.name}
                              <ChevronRight className="h-5 w-5 mx-2 text-gray-400" />
                              <Badge variant="secondary" className="text-xs">
                                {glossaryData.find(cat => cat.id === term.category)?.name}
                              </Badge>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700 text-lg leading-relaxed term-definition speakable">
                              {term.definition}
                            </p>
                            {term.relatedTerms && term.relatedTerms.length > 0 && (
                              <div className="mt-4 pt-4 border-t border-gray-200">
                                <p className="text-sm font-medium text-gray-600 mb-2">Related Terms:</p>
                                <div className="flex flex-wrap gap-2">
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

          {/* All Categories Overview */}
          {!searchQuery && !selectedCategory && (
            <section className="py-12 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">
                    Complete Vehicle Wrap Terminology Reference
                  </h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {glossaryData.map((category, index) => (
                      <div key={category.id}>
                        <Card className="h-full">
                          <CardHeader>
                            <CardTitle className="text-xl text-brand-navy flex items-center justify-between">
                              {category.name}
                              <Badge variant="secondary">{category.terms.length} terms</Badge>
                            </CardTitle>
                            <CardDescription>{category.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              {category.terms.slice(0, 5).map((term) => (
                                <div key={term.id} className="flex items-start">
                                  <ChevronRight className="h-4 w-4 text-brand-red mt-1 mr-2 flex-shrink-0" />
                                  <div>
                                    <span className="font-medium text-brand-navy">{term.name}</span>
                                    <p className="text-sm text-gray-600 mt-1">
                                      {term.definition.length > 100 
                                        ? `${term.definition.substring(0, 100)}...`
                                        : term.definition
                                      }
                                    </p>
                                  </div>
                                </div>
                              ))}
                              {category.terms.length > 5 && (
                                <button
                                  onClick={() => setSelectedCategory(category.id)}
                                  className="text-brand-red hover:text-brand-red/80 font-medium text-sm mt-3 flex items-center"
                                >
                                  View all {category.terms.length} terms
                                  <ChevronRight className="h-4 w-4 ml-1" />
                                </button>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                        {index < glossaryData.length - 1 && <Separator className="my-8 lg:hidden" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Professional Resources */}
          <section className="py-12 bg-brand-navy text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Professional Vehicle Wrap Resources</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Master these terms to communicate effectively about vehicle wrap projects, 
                  materials, and installation techniques.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-3">For Installers</h3>
                    <p className="text-blue-100 text-sm">
                      Essential terminology for professional wrap installation and quality control
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-3">For Designers</h3>
                    <p className="text-blue-100 text-sm">
                      Graphics and design terms specific to vehicle wrap production
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-3">For Customers</h3>
                    <p className="text-blue-100 text-sm">
                      Understanding materials and processes for informed wrap decisions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default GlossaryPage;
