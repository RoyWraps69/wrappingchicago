
import React from 'react';
import StatsCard from './StatsCard';

interface StatsGridProps {
  stats: any[];
}

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <StatsCard key={index} stat={stat} index={index} />
      ))}
    </div>
  );
};

export default StatsGrid;
