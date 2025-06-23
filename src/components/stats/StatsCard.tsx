
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface StatData {
  statistic: string;
  value: string;
  category: string;
  source: string;
  insight: string;
}

interface StatsCardProps {
  stat: StatData;
  index: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ stat, index }) => {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'roi': 'bg-green-100 text-green-800',
      'market': 'bg-blue-100 text-blue-800',
      'materials': 'bg-purple-100 text-purple-800',
      'consumer': 'bg-orange-100 text-orange-800',
      'industry': 'bg-red-100 text-red-800',
      'cost': 'bg-yellow-100 text-yellow-800',
      'durability': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getValueColor = (value: string) => {
    if (value.includes('%')) {
      const percentage = parseInt(value.replace('%', ''));
      if (percentage >= 80) return 'text-green-600';
      if (percentage >= 60) return 'text-blue-600';
      if (percentage >= 40) return 'text-orange-600';
      return 'text-red-600';
    }
    return 'text-brand-navy';
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-brand-red">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <Badge className={getCategoryColor(stat.category)}>
            {stat.category.toUpperCase()}
          </Badge>
          <span className="text-sm text-gray-500">#{index + 1}</span>
        </div>
        
        <div className={`text-3xl font-bold mb-2 ${getValueColor(stat.value)}`}>
          {stat.value}
        </div>
        
        <h3 className="font-semibold text-gray-800 mb-3 leading-tight">
          {stat.statistic}
        </h3>
        
        <p className="text-sm text-gray-600 mb-3 leading-relaxed">
          {stat.insight}
        </p>
        
        <div className="text-xs text-gray-500 border-t pt-2">
          Source: {stat.source}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
