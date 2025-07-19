
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Award } from 'lucide-react';

/**
 * Keyword-Rich Content Component
 * Natural integration of target keywords while providing genuine value
 */
const KeywordRichContent: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Chicago's Leading Vehicle Transformation Experts
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            From downtown Chicago to suburban communities, we deliver comprehensive vehicle customization 
            that transform cars, trucks, vans, and entire fleets into powerful marketing tools.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-black mb-4 flex items-center">
              <MapPin className="h-6 w-6 mr-2 text-brand-red" />
              Local Chicago Expertise
            </h3>
            <p className="text-black mb-4">
              As Chicago's leading vehicle wrap company, we understand the unique needs of 
              local businesses and residents. Our car wraps Chicago services include everything 
              from luxury vehicle color changes to commercial fleet graphics.
            </p>
            <Link 
              to="/locations" 
              className="text-brand-red hover:underline font-semibold"
            >
              View Service Areas →
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-black mb-4 flex items-center">
              <Star className="h-6 w-6 mr-2 text-brand-red" />
              Complete Wrap Solutions
            </h3>
            <p className="text-black mb-4">
              Our truck wraps Chicago and van wraps Chicago services cover all vehicle types. 
              Whether you need partial wraps, full color change wraps, or custom commercial 
              graphics, we deliver exceptional results using advanced vinyl application technology.
            </p>
            <Link 
              to="/services" 
              className="text-brand-red hover:underline font-semibold"
            >
              Explore Services →
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-black mb-4 flex items-center">
              <Award className="h-6 w-6 mr-2 text-brand-red" />
              Fleet Wrap Specialists
            </h3>
            <p className="text-black mb-4">
              Our fleet wraps Chicago services help businesses create consistent branding 
              across their entire vehicle fleet. From delivery vans to service trucks, 
              we provide comprehensive vehicle graphics solutions that boost brand visibility.
            </p>
            <Link 
              to="/fleet-wraps" 
              className="text-brand-red hover:underline font-semibold"
            >
              Learn About Fleet Wraps →
            </Link>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            What Makes Our Vehicle Customization Services Unique in Chicago?
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-black mb-3">Premium Materials & Installation</h4>
              <p className="text-black mb-4">
                We exclusively use advanced vinyl technology and premium application techniques for all our Chicago vehicle transformation projects. 
                Our certified installers ensure every wrap is applied with precision, from simple car graphics 
                to complex truck lettering and commercial vehicle branding.
              </p>
              
              <h4 className="text-lg font-semibold text-black mb-3">Custom Design Services</h4>
              <p className="text-black">
                Our in-house design team creates custom vehicle graphics that perfectly represent your brand. 
                Whether you need luxury exotic car wraps or commercial fleet graphics, we bring your vision to life 
                with stunning visual impact.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-black mb-3">Comprehensive Vehicle Coverage</h4>
              <p className="text-black mb-4">
                From compact cars to large commercial trucks, our vehicle wrapping services cover all types:
              </p>
              <ul className="text-black space-y-1 mb-4">
                <li>• Car wraps and color change wraps</li>
                <li>• Truck wraps and commercial graphics</li>
                <li>• Van wraps and cargo vehicle graphics</li>
                <li>• Fleet wraps and multi-vehicle branding</li>
                <li>• Specialty wraps and custom designs</li>
              </ul>
              
              <h4 className="text-lg font-semibold text-black mb-3">Local Chicago Service</h4>
              <p className="text-black">
                Serving all Chicago neighborhoods and surrounding suburbs, we provide convenient 
                vehicle wrap installation with flexible scheduling to minimize business disruption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeywordRichContent;
