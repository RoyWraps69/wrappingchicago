
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { glossaryData } from '@/data/glossaryTerms';

interface GlossaryCategoryOverviewProps {
  setSelectedCategory: (category: string | null) => void;
}

const GlossaryCategoryOverview: React.FC<GlossaryCategoryOverviewProps> = ({
  setSelectedCategory
}) => {
  return (
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
  );
};

export default GlossaryCategoryOverview;
