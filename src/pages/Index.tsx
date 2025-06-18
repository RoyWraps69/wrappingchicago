
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePageSEO from '@/components/home/HomePageSEO';
import HomePageSections from '@/components/home/HomePageSections';

const Index = () => {
  return (
    <>
      <HomePageSEO />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <HomePageSections />
        <Footer />
      </div>
    </>
  );
};

export default Index;
