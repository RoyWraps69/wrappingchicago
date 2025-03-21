
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const VanWrapsContent = () => {
  return (
    <div className="space-y-12">
      {/* Introduction Section */}
      <section className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-brand-navy mb-4">Professional Van Wraps in Chicago</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              Transform your commercial vans into powerful marketing assets with our professional van wrapping services. Whether you operate a single service van or manage an entire delivery fleet, Wrapping Chicago delivers exceptional results that help your business stand out.
            </p>
            <p className="mb-4">
              Our van wraps are engineered to withstand the rigors of daily commercial use and Chicago's challenging weather conditions. We use premium-grade vinyl materials from industry leaders like 3M and Avery, ensuring your wrap maintains its vibrant appearance year after year.
            </p>
            <p>
              From cargo vans and sprinters to transit vans and minivans, our experienced team has the expertise to handle any van type. We understand that your commercial vehicles are essential to your operations, which is why we work efficiently to minimize downtime.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/199b8977-07e4-488c-8e27-0ad83b25af33.jpg" 
              alt="Professional Van Wrap in Chicago - Commercial delivery van with custom vinyl graphics" 
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Types of Van Wraps Section */}
      <section>
        <h2 className="text-2xl font-bold text-brand-navy mb-6">Our Van Wrap Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-brand-light p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-brand-navy">Cargo Van Wraps</h3>
            <p className="mb-4">
              Transform standard cargo vans into eye-catching mobile billboards with full or partial wraps designed specifically for maximum advertising impact.
            </p>
            <ul className="space-y-2 mb-5">
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Custom designs for all cargo van makes and models</span>
              </li>
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Attention to panel seams and door handles</span>
              </li>
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Perfect for service and delivery businesses</span>
              </li>
            </ul>
          </div>

          <div className="bg-brand-light p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-brand-navy">Sprinter & Transit Van Wraps</h3>
            <p className="mb-4">
              Maximize the extensive surface area of sprinter and transit vans with high-impact graphics that make the most of these tall, versatile vehicles.
            </p>
            <ul className="space-y-2 mb-5">
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Specialized templates for various van heights</span>
              </li>
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>High-visibility designs for maximum impact</span>
              </li>
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Ideal for mobile businesses and contractors</span>
              </li>
            </ul>
          </div>

          <div className="bg-brand-light p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-brand-navy">Fleet Van Graphics</h3>
            <p className="mb-4">
              Create a unified brand presence across your entire van fleet with consistent, high-quality wraps and graphics that reinforce your company image.
            </p>
            <ul className="space-y-2 mb-5">
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Consistent branding across multiple vehicles</span>
              </li>
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Volume pricing for multiple vans</span>
              </li>
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Project management for large fleets</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-brand-navy mb-4">Benefits of Van Wraps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-brand-red rounded-full p-1 mr-3 mt-1">
                  <Check className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">24/7 Mobile Advertising</h3>
                  <p className="text-gray-700">Your vans become moving billboards, generating thousands of impressions daily throughout Chicago and beyond.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-red rounded-full p-1 mr-3 mt-1">
                  <Check className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Cost-Effective Marketing</h3>
                  <p className="text-gray-700">Van wraps provide one of the lowest costs-per-impression of any advertising medium, with a one-time investment lasting years.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-red rounded-full p-1 mr-3 mt-1">
                  <Check className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Vehicle Protection</h3>
                  <p className="text-gray-700">Vinyl wraps protect your van's paint from scratches, stone chips, and UV damage, helping maintain resale value.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-brand-red rounded-full p-1 mr-3 mt-1">
                  <Check className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Professional Image</h3>
                  <p className="text-gray-700">Well-designed van wraps convey professionalism and build trust with potential customers who see your vehicles.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-red rounded-full p-1 mr-3 mt-1">
                  <Check className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Local Targeting</h3>
                  <p className="text-gray-700">Van wraps are particularly effective for service businesses that operate throughout Chicago neighborhoods.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-red rounded-full p-1 mr-3 mt-1">
                  <Check className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Brand Recognition</h3>
                  <p className="text-gray-700">Consistent branding across your van fleet builds recognition and reinforces your presence in the market.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section>
        <h2 className="text-2xl font-bold text-brand-navy mb-6">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
            <h3 className="font-semibold text-brand-navy">HVAC Services</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
            <h3 className="font-semibold text-brand-navy">Plumbing</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
            <h3 className="font-semibold text-brand-navy">Delivery Services</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
            <h3 className="font-semibold text-brand-navy">Electrical</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
            <h3 className="font-semibold text-brand-navy">Flooring</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
            <h3 className="font-semibold text-brand-navy">Home Services</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
            <h3 className="font-semibold text-brand-navy">Catering</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
            <h3 className="font-semibold text-brand-navy">Mobile Businesses</h3>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section>
        <h2 className="text-2xl font-bold text-brand-navy mb-6">Our Van Wrap Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="bg-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mb-3">1</div>
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">Consultation</h3>
            <p className="text-gray-700">
              We discuss your business needs, van specifications, and marketing goals to develop a strategic approach for your wrap design.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="bg-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mb-3">2</div>
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">Design</h3>
            <p className="text-gray-700">
              Our graphic designers create custom van wrap designs that align with your brand identity and maximize visual impact on the road.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="bg-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mb-3">3</div>
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">Production</h3>
            <p className="text-gray-700">
              We print your approved designs using high-resolution digital printers and premium vinyl materials for maximum durability.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="bg-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mb-3">4</div>
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">Installation</h3>
            <p className="text-gray-700">
              Our experienced installers meticulously apply your wrap, ensuring perfect alignment around all van contours, windows, and doors.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-navy text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Commercial Vans?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Contact us today to schedule a consultation and get a free quote for your van wrap project. Our team is ready to help you create eye-catching mobile advertising for your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-brand-red hover:bg-red-700 text-white">
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
          <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-brand-navy">
            <Link to="/gallery">View Our Gallery</Link>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-bold text-brand-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">How much does it cost to wrap a van in Chicago?</h3>
            <p className="text-gray-700">
              Van wrap costs in Chicago generally range from $2,800 to $5,500 depending on van size, design complexity, and wrap coverage. Full wraps for cargo vans typically start at $3,500, while partial wraps begin around $1,800.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">How long does a van wrap last in Chicago's weather conditions?</h3>
            <p className="text-gray-700">
              Professional van wraps installed in Chicago typically last 5-7 years with proper maintenance. Our premium 3M and Avery vinyl materials are specifically chosen to withstand Chicago's varied weather conditions.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">Do you offer wraps for different types of vans?</h3>
            <p className="text-gray-700">
              Yes, we provide wrapping services for all van types including cargo vans, sprinter vans, transit vans, passenger vans, and minivans. Each installation is customized to the specific vehicle's dimensions and contours.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">Do you offer fleet discounts for multiple vans?</h3>
            <p className="text-gray-700">
              Yes, we offer volume pricing for fleet van wrap projects. The more vehicles you wrap, the more cost-effective the per-vehicle price becomes. We can create a custom quote for your specific fleet requirements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VanWrapsContent;
