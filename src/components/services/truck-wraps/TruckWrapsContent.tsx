
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const TruckWrapsContent = () => {
  return (
    <div className="space-y-12">
      {/* Introduction Section */}
      <section className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-brand-navy mb-4">Professional Truck Wraps in Chicago</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              Transform your commercial trucks into powerful mobile billboards with our professional truck wrapping services. Whether you operate a single pickup truck or an entire fleet of box trucks, Wrapping Chicago delivers exceptional results that help your business stand out on the road.
            </p>
            <p className="mb-4">
              Our truck wraps are designed to withstand the demands of daily commercial use and Chicago's challenging weather conditions. We use premium-grade vinyl materials from trusted manufacturers like 3M and Avery, ensuring your wrap maintains its vibrant appearance for years to come.
            </p>
            <p>
              From design to installation, our experienced team handles every aspect of your truck wrap project with meticulous attention to detail. We understand that your commercial vehicles are essential to your operations, which is why we work efficiently to minimize downtime.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/c4a531de-bb9d-47ee-8771-598051ce485e.jpg" 
              alt="Professional Truck Wrap in Chicago - Commercial box truck with custom vinyl graphics" 
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Types of Truck Wraps Section */}
      <section>
        <h2 className="text-2xl font-bold text-brand-navy mb-6">Our Truck Wrap Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-brand-light p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-brand-navy">Box Truck Wraps</h3>
            <p className="mb-4">
              Maximize the advertising potential of your box trucks with full wraps that transform all sides into attention-grabbing advertisements for your business.
            </p>
            <ul className="space-y-2 mb-5">
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Custom designs for standard box trucks</span>
              </li>
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Attention to roll-up doors and panel seams</span>
              </li>
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Maximum visibility for delivery vehicles</span>
              </li>
            </ul>
          </div>

          <div className="bg-brand-light p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-brand-navy">Pickup Truck Wraps</h3>
            <p className="mb-4">
              Turn your work pickup into a professional marketing tool with custom wraps designed specifically for the unique contours of pickup trucks.
            </p>
            <ul className="space-y-2 mb-5">
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Full and partial wrap options available</span>
              </li>
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Tailgate and bed designs</span>
              </li>
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Perfect for contractors and service businesses</span>
              </li>
            </ul>
          </div>

          <div className="bg-brand-light p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-brand-navy">Fleet Truck Graphics</h3>
            <p className="mb-4">
              Create a unified brand presence across your entire truck fleet with consistent, high-quality wraps and graphics that reinforce your company image.
            </p>
            <ul className="space-y-2 mb-5">
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Consistent branding across multiple vehicles</span>
              </li>
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Volume pricing for multiple trucks</span>
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
        <h2 className="text-2xl font-bold text-brand-navy mb-4">Benefits of Truck Wraps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-brand-red rounded-full p-1 mr-3 mt-1">
                  <Check className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Mobile Advertising</h3>
                  <p className="text-gray-700">Your trucks become moving billboards, generating thousands of impressions daily throughout Chicago and beyond.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-red rounded-full p-1 mr-3 mt-1">
                  <Check className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Cost-Effective Marketing</h3>
                  <p className="text-gray-700">Truck wraps provide one of the lowest costs-per-impression of any advertising medium, with a one-time investment lasting years.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-red rounded-full p-1 mr-3 mt-1">
                  <Check className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Vehicle Protection</h3>
                  <p className="text-gray-700">Vinyl wraps protect your truck's paint from scratches, stone chips, and UV damage, helping maintain resale value.</p>
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
                  <p className="text-gray-700">Well-designed truck wraps convey professionalism and build trust with potential customers who see your vehicles.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-red rounded-full p-1 mr-3 mt-1">
                  <Check className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Local Targeting</h3>
                  <p className="text-gray-700">Truck wraps are particularly effective for businesses that serve specific Chicago neighborhoods or suburbs.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-red rounded-full p-1 mr-3 mt-1">
                  <Check className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Non-Aggressive Advertising</h3>
                  <p className="text-gray-700">Unlike interruptive advertising, truck wraps reach consumers without disrupting their day, creating positive brand impressions.</p>
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
            <h3 className="font-semibold text-brand-navy">Construction</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
            <h3 className="font-semibold text-brand-navy">HVAC</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
            <h3 className="font-semibold text-brand-navy">Plumbing</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
            <h3 className="font-semibold text-brand-navy">Landscaping</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
            <h3 className="font-semibold text-brand-navy">Food Delivery</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
            <h3 className="font-semibold text-brand-navy">Moving Companies</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
            <h3 className="font-semibold text-brand-navy">Electrical</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
            <h3 className="font-semibold text-brand-navy">Retail Delivery</h3>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section>
        <h2 className="text-2xl font-bold text-brand-navy mb-6">Our Truck Wrap Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="bg-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mb-3">1</div>
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">Consultation</h3>
            <p className="text-gray-700">
              We discuss your business needs, truck specifications, and marketing goals to develop a strategic approach for your wrap.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="bg-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mb-3">2</div>
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">Design</h3>
            <p className="text-gray-700">
              Our graphic designers create custom truck wrap designs that align with your brand identity and maximize visual impact.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="bg-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mb-3">3</div>
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">Production</h3>
            <p className="text-gray-700">
              We print your approved designs using high-resolution digital printers and premium vinyl materials for durability.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="bg-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mb-3">4</div>
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">Installation</h3>
            <p className="text-gray-700">
              Our experienced installers carefully apply your wrap, ensuring perfect alignment around all truck contours and features.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-navy text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Wrap Your Commercial Trucks?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Contact us today to schedule a consultation and get a free quote for your truck wrap project. Our team is ready to help you create eye-catching mobile advertising for your business.
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
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">How much does it cost to wrap a truck in Chicago?</h3>
            <p className="text-gray-700">
              Truck wrap costs in Chicago range from $3,000 to $6,500+ depending on the size of your truck, design complexity, and coverage area. Box trucks and commercial vehicles typically cost more than pickup trucks due to their larger surface area.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">How long do truck wraps last in Chicago's climate?</h3>
            <p className="text-gray-700">
              Professional truck wraps in Chicago typically last 5-7 years with proper maintenance. Our premium materials are designed to withstand Chicago's harsh winters and hot summers, ensuring your investment maintains its appearance.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">Can I wrap my truck if it has rust or damage?</h3>
            <p className="text-gray-700">
              Surface imperfections like rust or damage must be repaired before wrapping, as vinyl conforms to the surface underneath. Minor scratches can be covered, but significant damage should be addressed for best results.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">Do you offer fleet discounts for multiple trucks?</h3>
            <p className="text-gray-700">
              Yes, we offer volume pricing for fleet truck wrap projects. The more vehicles you wrap, the more cost-effective the per-vehicle price becomes. Our team can create a custom quote for your specific fleet requirements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TruckWrapsContent;
