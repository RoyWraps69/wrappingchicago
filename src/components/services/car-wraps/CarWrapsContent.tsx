
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const CarWrapsContent = () => {
  return (
    <div className="space-y-12">
      {/* Introduction Section */}
      <section className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-brand-navy mb-4">Premium Car Wraps in Chicago</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              Transform your vehicle with our premium car wrapping services in Chicago. Whether you're looking to promote your business, protect your car's paint, or simply stand out on the road, our expert installation team delivers exceptional results every time.
            </p>
            <p className="mb-4">
              At Wrapping Chicago, we use only the highest quality 3M and Avery vinyl materials, ensuring your wrap looks amazing and stands the test of time. Our experienced installers meticulously apply each wrap, paying close attention to every curve, edge, and detail of your vehicle.
            </p>
            <p>
              From full color changes to custom graphics, our car wraps offer a cost-effective alternative to paint while providing additional protection for your vehicle's exterior. Plus, they're fully removable, allowing you to return to your original paint or update your look whenever you want.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/38f1a5ce-45bd-4ebc-83bd-709dc1a2f9ce.jpg" 
              alt="Premium Car Wrap in Chicago - Red sports car with high-quality vinyl wrap" 
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Types of Car Wraps Section */}
      <section>
        <h2 className="text-2xl font-bold text-brand-navy mb-6">Our Car Wrap Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-brand-light p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-brand-navy">Full Car Wraps</h3>
            <p className="mb-4">
              Complete transformation of your vehicle with full coverage vinyl wraps. Choose from hundreds of colors and finishes to create a unique look that turns heads.
            </p>
            <ul className="space-y-2 mb-5">
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Premium 3M and Avery vinyl materials</span>
              </li>
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Matte, gloss, satin, and specialty finishes</span>
              </li>
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Professional installation with 2-year warranty</span>
              </li>
            </ul>
          </div>

          <div className="bg-brand-light p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-brand-navy">Custom Graphics</h3>
            <p className="mb-4">
              Personalize your vehicle with custom designed graphics and artwork. Ideal for business branding or showcasing your personality.
            </p>
            <ul className="space-y-2 mb-5">
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Professional graphic design services</span>
              </li>
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>High-resolution digital printing</span>
              </li>
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>UV-resistant inks for long-lasting color</span>
              </li>
            </ul>
          </div>

          <div className="bg-brand-light p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-brand-navy">Partial Wraps</h3>
            <p className="mb-4">
              Budget-friendly options that focus on specific areas of your vehicle. Create maximum impact while keeping costs down.
            </p>
            <ul className="space-y-2 mb-5">
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Strategic placement for maximum visibility</span>
              </li>
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Hood, roof, trunk, or side panel wraps</span>
              </li>
              <li className="flex items-start">
                <Check className="text-brand-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <span>Perfect for accents and racing stripes</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-brand-navy mb-4">Benefits of Car Wraps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-brand-red rounded-full p-1 mr-3 mt-1">
                  <Check className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Paint Protection</h3>
                  <p className="text-gray-700">Vinyl wraps provide a protective layer that shields your car's paint from minor scratches, stone chips, and sun damage.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-red rounded-full p-1 mr-3 mt-1">
                  <Check className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Reversible Customization</h3>
                  <p className="text-gray-700">Unlike paint, wraps can be removed without damaging your vehicle's original finish, making them perfect for leased vehicles.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-red rounded-full p-1 mr-3 mt-1">
                  <Check className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Cost-Effective</h3>
                  <p className="text-gray-700">Car wraps typically cost significantly less than a comparable quality custom paint job and offer more design flexibility.</p>
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
                  <h3 className="font-semibold text-lg">Quick Installation</h3>
                  <p className="text-gray-700">Most car wraps can be completed in just 3-5 days, compared to weeks for custom paint jobs that require drying time.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-red rounded-full p-1 mr-3 mt-1">
                  <Check className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Resale Value</h3>
                  <p className="text-gray-700">Protecting your original paint helps maintain your vehicle's resale value, while the wrap can be removed to return to factory condition.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-red rounded-full p-1 mr-3 mt-1">
                  <Check className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Endless Design Options</h3>
                  <p className="text-gray-700">Choose from countless colors, finishes, and effects including matte, gloss, satin, color-shift, carbon fiber, and custom designs.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section>
        <h2 className="text-2xl font-bold text-brand-navy mb-6">Our Car Wrap Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="bg-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mb-3">1</div>
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">Consultation</h3>
            <p className="text-gray-700">
              We discuss your vision, provide material samples, and review design options. Our team helps you select the best wrap solution for your vehicle and budget.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="bg-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mb-3">2</div>
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">Design</h3>
            <p className="text-gray-700">
              Our graphic designers create a custom design tailored to your vehicle. We provide digital mockups so you can visualize the final result before production.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="bg-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mb-3">3</div>
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">Installation</h3>
            <p className="text-gray-700">
              Our certified installers meticulously prep, clean, and apply the wrap to your vehicle in our climate-controlled facility, ensuring perfect application.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="bg-brand-navy rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mb-3">4</div>
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">Final Inspection</h3>
            <p className="text-gray-700">
              We perform a comprehensive quality check before delivery, provide care instructions, and offer a warranty on our workmanship and materials.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-navy text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Car?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Contact us today to schedule a consultation and get a free quote for your car wrap project. Our team is ready to help you create the perfect look for your vehicle.
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
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">How much does a car wrap cost in Chicago?</h3>
            <p className="text-gray-700">
              Car wrap costs in Chicago typically range from $2,500 to $5,000 for a full wrap, depending on vehicle size and design complexity. Partial wraps start around $1,200. We provide detailed quotes after consultation.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">How long does a car wrap last?</h3>
            <p className="text-gray-700">
              With proper care and maintenance, a professional car wrap can last 5-7 years. We use premium 3M and Avery materials that provide excellent durability and UV resistance to withstand Chicago's weather conditions.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">Can I wash my car after getting it wrapped?</h3>
            <p className="text-gray-700">
              Yes, you can wash your wrapped car. We recommend waiting at least one week after installation, then hand washing using mild soap, soft cloths, and avoiding high-pressure washers. We provide complete care instructions after installation.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-2 text-brand-navy">Will a car wrap damage my paint?</h3>
            <p className="text-gray-700">
              No, professional car wraps actually protect your paint. When properly installed and removed, wraps leave the original paint in excellent condition, often better than unwrapped vehicles that have been exposed to the elements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarWrapsContent;
