
import React from 'react';
import UniversalRichSnippets from '@/components/seo/UniversalRichSnippets';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import CallToAction from '@/components/CallToAction';
import FAQHero from '@/components/heroes/FAQHero';
import VehicleWrapFAQ from '@/components/home/VehicleWrapFAQ';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const FAQPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Simple FAQ Test</h1>
      <p className="text-center">If you can see this, the component loads.</p>
    </div>
  );
};

export default FAQPage;
