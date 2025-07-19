
import React from 'react';
import { Shield, Award, Users, Clock, CheckCircle } from 'lucide-react';

/**
 * E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) Content Component
 * Demonstrates credibility signals and expertise for Google's quality guidelines
 */
const EEATContent: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Why Chicago Trusts Our Vehicle Wrap Expertise
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Over two decades of documented excellence in automotive customization, backed by industry certifications, 
            industry recognition, and thousands of satisfied customers across Chicago.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-black mb-2">Two Decades of Excellence</h3>
            <p className="text-black">Founded in 2003, we've wrapped over 16,000 vehicles in Chicago</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-black mb-2">3M Certified Installers</h3>
            <p className="text-black">Our team holds official certifications from leading vinyl manufacturers</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-black mb-2">Licensed & Insured</h3>
            <p className="text-black">Fully licensed business with comprehensive insurance coverage</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-black mb-2">98% Satisfaction Rate</h3>
            <p className="text-black">Consistently high customer satisfaction with 5-star reviews</p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            Our Expertise in Numbers
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-red mb-2">16,000+</div>
              <p className="text-black">Vehicles Wrapped</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-red mb-2">500+</div>
              <p className="text-black">Commercial Fleets Served</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-red mb-2">20+</div>
              <p className="text-black">Years in Business</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-black text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Meet Roy - Your Vehicle Wrap Expert</h3>
          <p className="text-lg mb-4">
            With over 20 years in the vehicle wrap industry, Roy has personally overseen the 
            transformation of thousands of vehicles across Chicago. As a 3M Certified Installer 
            and business owner, he ensures every project meets the highest standards of quality and craftsmanship.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-brand-red" />
              3M Certified Master Installer
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-brand-red" />
              Two Decades of Excellence
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-brand-red" />
              Licensed Business Owner
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EEATContent;
