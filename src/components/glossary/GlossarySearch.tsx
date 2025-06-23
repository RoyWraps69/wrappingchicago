
import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { glossaryData } from '@/data/glossaryTerms';

interface GlossarySearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const GlossarySearch: React.FC<GlossarySearchProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory
}) => {
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
  };

  return (
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

          {/* Category Filters - Updated to 2 rows */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {glossaryData.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="default"
                onClick={() => setSelectedCategory(
                  selectedCategory === category.id ? null : category.id
                )}
                className="text-sm px-4 py-3 h-auto whitespace-normal text-center min-h-[3rem] flex flex-col items-center justify-center gap-1"
              >
                <span className="font-medium">{category.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {category.terms.length}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlossarySearch;
