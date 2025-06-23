
import React, { useState } from 'react';
import { Search, Book, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { searchTerms, type GlossaryTerm } from '@/data/glossaryTerms';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SearchableGlossaryProps {
  maxResults?: number;
  showViewAll?: boolean;
  compact?: boolean;
}

const SearchableGlossary: React.FC<SearchableGlossaryProps> = ({ 
  maxResults = 5, 
  showViewAll = true,
  compact = false 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredTerms = searchQuery 
    ? searchTerms(searchQuery).slice(0, maxResults)
    : [];

  if (compact) {
    return (
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center mb-3">
          <Book className="h-5 w-5 text-brand-red mr-2" />
          <h3 className="font-semibold text-brand-navy">Quick Glossary Lookup</h3>
        </div>
        
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search wrap terms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 text-sm"
          />
        </div>

        {filteredTerms.length > 0 && (
          <div className="space-y-2 mb-3">
            {filteredTerms.map((term: GlossaryTerm) => (
              <div key={term.id} className="bg-white rounded p-2 text-sm">
                <div className="font-medium text-brand-navy">{term.name}</div>
                <p className="text-gray-600 text-xs mt-1">
                  {term.definition.length > 100 
                    ? `${term.definition.substring(0, 100)}...`
                    : term.definition
                  }
                </p>
              </div>
            ))}
          </div>
        )}

        {showViewAll && (
          <Link 
            to="/glossary" 
            className="inline-flex items-center text-brand-red hover:text-brand-red/80 text-sm font-medium"
          >
            View Full Glossary
            <ExternalLink className="h-3 w-3 ml-1" />
          </Link>
        )}
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Book className="h-5 w-5 text-brand-red mr-2" />
          Vehicle Wrap Glossary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search glossary terms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        {filteredTerms.length > 0 && (
          <div className="space-y-3 mb-4">
            {filteredTerms.map((term: GlossaryTerm) => (
              <div key={term.id} className="border-l-2 border-brand-red pl-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-brand-navy">{term.name}</span>
                  <Badge variant="outline" className="text-xs">
                    {term.category.replace('-', ' ')}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm">
                  {term.definition.length > 150 
                    ? `${term.definition.substring(0, 150)}...`
                    : term.definition
                  }
                </p>
              </div>
            ))}
          </div>
        )}

        {showViewAll && (
          <Link 
            to="/glossary" 
            className="inline-flex items-center text-brand-red hover:text-brand-red/80 font-medium"
          >
            View Complete Glossary
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default SearchableGlossary;
