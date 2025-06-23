
import React from 'react';
import { Hash } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { glossaryData, type GlossaryTerm } from '@/data/glossaryTerms';

interface GlossaryTermsListProps {
  searchQuery: string;
  selectedCategory: string | null;
  filteredTerms: GlossaryTerm[];
}

const GlossaryTermsList: React.FC<GlossaryTermsListProps> = ({
  searchQuery,
  selectedCategory,
  filteredTerms
}) => {
  if (!searchQuery && !selectedCategory) {
    return (
      <div className="text-center py-8">
        <Hash className="h-12 w-12 text-gray-300 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-600 mb-2">
          Select a category or search for terms
        </h2>
        <p className="text-gray-500">
          Use the category buttons above or search bar to explore our comprehensive glossary
        </p>
      </div>
    );
  }

  return (
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
  );
};

export default GlossaryTermsList;
