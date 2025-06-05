
import React from 'react';
import { CheckCircle, DollarSign, Clock, Shield } from 'lucide-react';

/**
 * Featured Snippet Optimized Content Component
 * Structured to capture featured snippets and AI Overviews for vehicle wrap queries
 */
const FeaturedSnippetContent: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* How Much Do Vehicle Wraps Cost? - Optimized for featured snippet */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">
            How Much Do Vehicle Wraps Cost in Chicago?
          </h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-black mb-4 flex items-center">
              <DollarSign className="h-6 w-6 mr-2 text-brand-red" />
              Vehicle Wrap Pricing Guide
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-black mb-2">Full Vehicle Wraps:</h4>
                <ul className="space-y-1 text-black">
                  <li>• Small Cars: $2,500 - $3,500</li>
                  <li>• Mid-size Cars: $3,000 - $4,000</li>
                  <li>• Large Cars/SUVs: $3,500 - $5,000</li>
                  <li>• Trucks/Vans: $4,000 - $7,000</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Partial Wraps:</h4>
                <ul className="space-y-1 text-black">
                  <li>• Hood Only: $500 - $800</li>
                  <li>• Doors Only: $800 - $1,200</li>
                  <li>• Half Wrap: $1,500 - $2,500</li>
                  <li>• Fleet Discounts Available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* How Long Do Vehicle Wraps Last? - Optimized for featured snippet */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">
            How Long Do Vehicle Wraps Last?
          </h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-black mb-4 flex items-center">
              <Clock className="h-6 w-6 mr-2 text-brand-red" />
              Vehicle Wrap Lifespan
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-red mb-2">5-7 Years</div>
                <p className="text-black">Premium 3M Materials</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-red mb-2">3-5 Years</div>
                <p className="text-black">Standard Vinyl Materials</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-red mb-2">2+ Years</div>
                <p className="text-black">Warranty Coverage</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle Wrap Installation Process - Step by step for featured snippets */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">
            Vehicle Wrap Installation Process
          </h2>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
                <div>
                  <h4 className="font-semibold text-black">Design Consultation</h4>
                  <p className="text-black">Meet with our design team to discuss your vision and requirements</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
                <div>
                  <h4 className="font-semibold text-black">Vehicle Inspection</h4>
                  <p className="text-black">Thoroughly inspect and clean the vehicle surface</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
                <div>
                  <h4 className="font-semibold text-black">Precision Installation</h4>
                  <p className="text-black">Apply vinyl wrap using professional techniques and tools</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center font-bold mr-4">4</span>
                <div>
                  <h4 className="font-semibold text-black">Quality Inspection</h4>
                  <p className="text-black">Final inspection and touch-ups to ensure perfect finish</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Benefits of Vehicle Wraps - List format for snippets */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-6">
            Benefits of Vehicle Wraps
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-black mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-brand-red" />
                Paint Protection Benefits
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-black">
                  <CheckCircle className="h-5 w-5 mr-2 text-brand-red" />
                  Protects original paint from UV damage
                </li>
                <li className="flex items-center text-black">
                  <CheckCircle className="h-5 w-5 mr-2 text-brand-red" />
                  Prevents stone chips and scratches
                </li>
                <li className="flex items-center text-black">
                  <CheckCircle className="h-5 w-5 mr-2 text-brand-red" />
                  Maintains vehicle resale value
                </li>
                <li className="flex items-center text-black">
                  <CheckCircle className="h-5 w-5 mr-2 text-brand-red" />
                  Removable without paint damage
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-black mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2 text-brand-red" />
                Business Advantages
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-black">
                  <CheckCircle className="h-5 w-5 mr-2 text-brand-red" />
                  Mobile advertising 24/7
                </li>
                <li className="flex items-center text-black">
                  <CheckCircle className="h-5 w-5 mr-2 text-brand-red" />
                  Cost-effective marketing
                </li>
                <li className="flex items-center text-black">
                  <CheckCircle className="h-5 w-5 mr-2 text-brand-red" />
                  Professional brand image
                </li>
                <li className="flex items-center text-black">
                  <CheckCircle className="h-5 w-5 mr-2 text-brand-red" />
                  Tax deductible business expense
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSnippetContent;
