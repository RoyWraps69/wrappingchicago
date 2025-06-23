
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, TrendingUp, Target, Zap } from 'lucide-react';
import StatsHero from '@/components/stats/StatsHero';
import StatsGrid from '@/components/stats/StatsGrid';
import StatsCategories from '@/components/stats/StatsCategories';
import MetaTags from '@/components/seo/MetaTags';
import Schema from '@/components/Schema';
import { vehicleWrapStats } from '@/data/vehicleWrapStats';
import { cities } from '@/data/cities';

const StatsPage = () => {
  const chicago = cities.find(city => city.slug === 'chicago') || cities[0];

  return (
    <>
      <MetaTags
        title="100+ Vehicle Wrap Statistics & Facts | Industry Data 2024"
        description="Discover 100+ fascinating vehicle wrap statistics, facts, and industry data. From ROI percentages to material costs - the ultimate collection of wrap facts."
        keywords="vehicle wrap statistics, car wrap facts, fleet wrap data, vinyl wrap industry stats, commercial wrap ROI, vehicle advertising effectiveness"
        canonicalUrl="/stats"
      />
      
      <Schema
        city={chicago}
        path="/stats"
        pageTitle="Vehicle Wrap Statistics & Facts"
        pageDescription="Comprehensive collection of vehicle wrap industry statistics, facts, and data points from around the world."
        isServicePage={false}
        keywords={['vehicle wrap statistics', 'car wrap facts', 'industry data', 'wrap ROI', 'fleet statistics']}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <StatsHero />
        
        <main className="container mx-auto px-4 py-12">
          <StatsCategories stats={vehicleWrapStats} />
          <StatsGrid stats={vehicleWrapStats} />
        </main>
      </div>
    </>
  );
};

export default StatsPage;
