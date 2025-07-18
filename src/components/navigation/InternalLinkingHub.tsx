import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Central hub for all internal links to prevent orphaned pages
 * This component ensures every page is discoverable by search engines
 */
const InternalLinkingHub: React.FC = () => {
  return (
    <>
      {/* Service Pages Links */}
      <div style={{ display: 'none' }}>
        {/* Core Services */}
        <Link to="/services">Vehicle Wrap Services</Link>
        <Link to="/car-wraps">Car Wraps</Link>
        <Link to="/truck-wraps">Truck Wraps</Link>
        <Link to="/van-wraps">Van Wraps</Link>
        <Link to="/fleet-wraps">Fleet Wraps</Link>
        <Link to="/color-change-wraps">Color Change Wraps</Link>
        <Link to="/luxury-exotic-wraps">Luxury Exotic Wraps</Link>
        <Link to="/designer-wraps">Designer Wraps</Link>
        
        {/* Trade Services */}
        <Link to="/plumbing-wraps">Plumbing Vehicle Wraps</Link>
        <Link to="/hvac-wraps">HVAC Vehicle Wraps</Link>
        <Link to="/electrical-wraps">Electrical Vehicle Wraps</Link>
        <Link to="/movers-wraps">Moving Company Vehicle Wraps</Link>
        <Link to="/logistics-wraps">Logistics Vehicle Wraps</Link>
        <Link to="/delivery-wraps">Delivery Vehicle Wraps</Link>
        
        {/* Main Location Pages */}
        <Link to="/locations">Service Locations</Link>
        <Link to="/chicago">Vehicle Wraps Chicago</Link>
        <Link to="/evanston">Vehicle Wraps Evanston</Link>
        <Link to="/naperville">Vehicle Wraps Naperville</Link>
        <Link to="/schaumburg">Vehicle Wraps Schaumburg</Link>
        <Link to="/skokie">Vehicle Wraps Skokie</Link>
        <Link to="/arlington-heights">Vehicle Wraps Arlington Heights</Link>
        <Link to="/palatine">Vehicle Wraps Palatine</Link>
        <Link to="/waukegan">Vehicle Wraps Waukegan</Link>
        <Link to="/des-plaines">Vehicle Wraps Des Plaines</Link>
        <Link to="/elgin">Vehicle Wraps Elgin</Link>
        <Link to="/hoffman-estates">Vehicle Wraps Hoffman Estates</Link>
        <Link to="/oak-park">Vehicle Wraps Oak Park</Link>
        <Link to="/aurora">Vehicle Wraps Aurora</Link>
        <Link to="/joliet">Vehicle Wraps Joliet</Link>
        <Link to="/cicero">Vehicle Wraps Cicero</Link>
        <Link to="/berwyn">Vehicle Wraps Berwyn</Link>
        <Link to="/wheaton">Vehicle Wraps Wheaton</Link>
        <Link to="/downers-grove">Vehicle Wraps Downers Grove</Link>
        <Link to="/bolingbrook">Vehicle Wraps Bolingbrook</Link>
        
        {/* Chicago Neighborhoods */}
        <Link to="/lakeview-chicago">Vehicle Wraps Lakeview Chicago</Link>
        <Link to="/logan-square-chicago">Vehicle Wraps Logan Square Chicago</Link>
        <Link to="/andersonville-chicago">Vehicle Wraps Andersonville Chicago</Link>
        <Link to="/bucktown-chicago">Vehicle Wraps Bucktown Chicago</Link>
        <Link to="/gold-coast-chicago">Vehicle Wraps Gold Coast Chicago</Link>
        
        {/* Extended IL Areas */}
        <Link to="/arlington-heights-il">Vehicle Wraps Arlington Heights IL</Link>
        <Link to="/oak-lawn-il">Vehicle Wraps Oak Lawn IL</Link>
        <Link to="/tinley-park-il">Vehicle Wraps Tinley Park IL</Link>
        <Link to="/orland-park-il">Vehicle Wraps Orland Park IL</Link>
        <Link to="/palatine-il">Vehicle Wraps Palatine IL</Link>
        <Link to="/elmhurst-il">Vehicle Wraps Elmhurst IL</Link>
        <Link to="/lombard-il">Vehicle Wraps Lombard IL</Link>
        <Link to="/glen-ellyn-il">Vehicle Wraps Glen Ellyn IL</Link>
        
        {/* Special Pages */}
        <Link to="/truck-wraps-chicago">Truck Wraps Chicago</Link>
        <Link to="/vehicle-wraps-chicago-il">Vehicle Wraps Chicago IL</Link>
        
        {/* Info Pages */}
        <Link to="/gallery">Vehicle Wrap Gallery</Link>
        <Link to="/about">About Wrapping Chicago</Link>
        <Link to="/pricing">Vehicle Wrap Pricing</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/faq">Frequently Asked Questions</Link>
        <Link to="/blog">Vehicle Wrap Blog</Link>
        <Link to="/ai-wrap-ideas">AI Wrap Design Ideas</Link>
        <Link to="/glossary">Vehicle Wrap Glossary</Link>
        <Link to="/stats">Company Statistics</Link>
        <Link to="/sitemap">Website Sitemap</Link>
        
        {/* Legal Pages */}
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
        <Link to="/return-policy">Return Policy</Link>
        <Link to="/shipping">Shipping Information</Link>
      </div>
    </>
  );
};

export default InternalLinkingHub;