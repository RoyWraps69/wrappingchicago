
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Separator } from "@/components/ui/separator";

const SitemapPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Site Map | Wrapping Chicago Vehicle Wraps</title>
        <meta 
          name="description" 
          content="Complete site map of Wrapping Chicago's vehicle wrap services, locations, and resources. Find all our pages and services in one place." 
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-8">Site Map</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Main Pages</h2>
          <Separator className="mb-4" />
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-brand-red">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand-red">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-red">Contact</Link></li>
            <li><Link to="/gallery" className="hover:text-brand-red">Gallery</Link></li>
            <li><Link to="/locations" className="hover:text-brand-red">Locations</Link></li>
            <li><Link to="/ai-wrap-ideas" className="hover:text-brand-red">AI Wrap Designer</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Vehicle Wrap Services</h2>
          <Separator className="mb-4" />
          <ul className="space-y-2">
            <li><Link to="/services/fleet-wraps" className="hover:text-brand-red">Fleet Wraps</Link></li>
            <li><Link to="/services/car-wraps" className="hover:text-brand-red">Car Wraps</Link></li>
            <li><Link to="/services/truck-wraps" className="hover:text-brand-red">Truck Wraps</Link></li>
            <li><Link to="/services/van-wraps" className="hover:text-brand-red">Van Wraps</Link></li>
            <li><Link to="/services/color-change-wraps" className="hover:text-brand-red">Color Change Wraps</Link></li>
            <li><Link to="/services/partial-wraps" className="hover:text-brand-red">Partial Wraps</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Specialty Services</h2>
          <Separator className="mb-4" />
          <ul className="space-y-2">
            <li><Link to="/services/commercial-graphics" className="hover:text-brand-red">Commercial Graphics</Link></li>
            <li><Link to="/services/protective-films" className="hover:text-brand-red">Protective Films</Link></li>
            <li><Link to="/services/vehicle-lettering" className="hover:text-brand-red">Vehicle Lettering</Link></li>
            <li><Link to="/services/specialty-wraps" className="hover:text-brand-red">Specialty Wraps</Link></li>
            <li><Link to="/services/designer-wraps" className="hover:text-brand-red">Designer Wraps</Link></li>
            <li><Link to="/services/luxury-exotic-wraps" className="hover:text-brand-red">Luxury & Exotic Wraps</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
