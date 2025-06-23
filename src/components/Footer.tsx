
import React from 'react';
import CompanyInfo from './footer/CompanyInfo';
import QuickLinks from './footer/QuickLinks';
import NewsletterAndLocations from './footer/NewsletterAndLocations';
import FooterBottom from './footer/FooterBottom';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <CompanyInfo />
          <QuickLinks />
          <NewsletterAndLocations />
        </div>
        
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
