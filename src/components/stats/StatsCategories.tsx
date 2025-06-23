
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface StatsCategoriesProps {
  stats: any[];
}

const StatsCategories: React.FC<StatsCategoriesProps> = ({ stats }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Stats', icon: '📊' },
    { id: 'roi', name: 'ROI & Performance', icon: '💰' },
    { id: 'market', name: 'Market Data', icon: '📈' },
    { id: 'materials', name: 'Materials & Tech', icon: '🔬' },
    { id: 'consumer', name: 'Consumer Behavior', icon: '👥' },
    { id: 'industry', name: 'Industry Trends', icon: '🚀' },
    { id: 'cost', name: 'Cost Analysis', icon: '💲' },
    { id: 'durability', name: 'Durability & Quality', icon: '🛡️' }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-center mb-8">Browse by Category</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
            className="flex items-center gap-2"
          >
            <span>{category.icon}</span>
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default StatsCategories;
