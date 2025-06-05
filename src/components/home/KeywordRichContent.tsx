
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Truck, Palette, Shield, Star, MapPin } from 'lucide-react';

const KeywordRichContent: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Main keyword-rich hero content */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Chicago's Premier Vehicle Wrap Specialists
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-6">
            Transform your vehicle with our professional <strong>car wraps</strong>, <strong>truck wraps</strong>, 
            <strong> van wraps</strong>, and <strong>fleet graphics</strong> in Chicago. We specialize in 
            <strong> custom graphics</strong>, <strong>color change wraps</strong>, <strong>luxury wraps</strong>, 
            and <strong>commercial branding solutions</strong> using premium <strong>3M vinyl wraps</strong> and 
            <strong>Avery materials</strong>.
          </p>
        </div>

        {/* Service categories with keywords */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Car className="h-6 w-6 text-brand-red mr-2" />
              <h3 className="text-xl font-semibold">Car Wraps Chicago</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Professional <strong>car wrap installation</strong> with <strong>custom car wrap designs</strong>. 
              From <strong>luxury exotic car wraps</strong> to budget-friendly <strong>partial car wraps</strong>, 
              we deliver premium results with competitive <strong>car wrap cost Chicago</strong> pricing.
            </p>
            <Link to="/services/car-wraps" className="text-brand-red font-medium hover:underline">
              Learn about our car wrap services →
            </Link>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Truck className="h-6 w-6 text-brand-red mr-2" />
              <h3 className="text-xl font-semibold">Truck & Van Wraps</h3>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Best truck wrap installers Chicago</strong> for commercial vehicles. 
              Specializing in <strong>box truck advertising wraps</strong>, <strong>cargo van wrap specialists</strong>, 
              <strong>sprinter van graphics</strong>, and <strong>truck wrap lettering Chicago</strong>.
            </p>
            <Link to="/services/truck-wraps" className="text-brand-red font-medium hover:underline">
              Explore truck wrap options →
            </Link>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-brand-red mr-2" />
              <h3 className="text-xl font-semibold">Fleet Branding Solutions</h3>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Commercial fleet branding solutions</strong> and <strong>fleet wrap services Chicago</strong>. 
              <strong>Business vehicle branding Chicago</strong> that creates consistent brand recognition with 
              <strong>mobile advertising vehicle wraps</strong>.
            </p>
            <Link to="/services/fleet-wraps" className="text-brand-red font-medium hover:underline">
              View fleet wrap portfolio →
            </Link>
          </div>
        </div>

        {/* Premium materials and services */}
        <div className="bg-brand-navy text-white p-8 rounded-lg mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Premium Materials & Expert Installation</h3>
              <p className="mb-4">
                We use only the finest <strong>premium 3M vinyl wraps Chicago</strong> and 
                <strong> Avery car wrap materials</strong> for durability and vibrant colors. 
                Our <strong>professional vehicle wrap consultation</strong> ensures your vision 
                becomes reality with <strong>designer vehicle wraps</strong> tailored to your needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Star className="h-4 w-4 mr-2" />
                  <span><strong>Premium vinyl</strong> materials with warranty</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-4 w-4 mr-2" />
                  <span><strong>Custom designs</strong> and consultation</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-4 w-4 mr-2" />
                  <span><strong>Protective paint film</strong> options</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-4 w-4 mr-2" />
                  <span><strong>Car wrap maintenance tips</strong> included</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Our Specialties Include:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-white/10 p-2 rounded">Color Change Wraps</div>
                <div className="bg-white/10 p-2 rounded">Luxury Wraps</div>
                <div className="bg-white/10 p-2 rounded">Commercial Graphics</div>
                <div className="bg-white/10 p-2 rounded">Partial Wraps</div>
                <div className="bg-white/10 p-2 rounded">Designer Wraps</div>
                <div className="bg-white/10 p-2 rounded">Supercar Wraps</div>
              </div>
            </div>
          </div>
        </div>

        {/* Service areas and quotes */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Get Professional Vehicle Wrap Services in Chicago
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Ready to transform your vehicle? <strong>Get a vehicle wrap quote Chicago</strong> today! 
            Our <strong>high-end car wrap service Chicago</strong> team provides detailed estimates 
            for all <strong>vehicle wrap pricing Chicago</strong> options. We serve Chicago and 
            surrounding areas with <strong>wrap installation</strong>, <strong>wrap design</strong>, 
            and comprehensive <strong>wrap services</strong>.
          </p>
          <div className="flex items-center justify-center text-gray-600 mb-4">
            <MapPin className="h-5 w-5 mr-2" />
            <span>Serving Chicago, IL and surrounding communities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeywordRichContent;
