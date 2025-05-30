
import React from 'react';

const DesignerWrapsProcess = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-brand-navy mb-8">From Concept to Completion</h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2"></div>
        
        {/* Timeline items */}
        <div className="space-y-12">
          {/* Item 1 */}
          <div className="relative">
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                <div className="md:text-right">
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">Initial Design Consultation</h3>
                  <p className="text-gray-700">
                    We begin with an in-depth discussion of your vision, preferences, and goals for your designer wrap. 
                    Our creative team will help you explore various possibilities and artistic directions.
                  </p>
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center transform -translate-y-1/2 md:-translate-x-1/2 z-10">
                <span className="text-white font-bold">1</span>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                  alt="Design consultation with client and designer discussing wrap concepts"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
          
          {/* Item 2 */}
          <div className="relative">
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:order-2">
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">Custom Design Creation</h3>
                  <p className="text-gray-700">
                    Our graphic designers develop custom concepts based on your input. We create digital 
                    mockups showing how the design will look on your specific vehicle, allowing you to visualize 
                    the final result before production.
                  </p>
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center transform -translate-y-1/2 md:-translate-x-1/2 z-10">
                <span className="text-white font-bold">2</span>
              </div>
              <div className="md:w-1/2 md:pl-12 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80"
                  alt="Designer creating custom vehicle wrap design on computer"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
          
          {/* Item 3 */}
          <div className="relative">
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                <div className="md:text-right">
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">Material Selection & Production</h3>
                  <p className="text-gray-700">
                    Once the design is approved, we select the perfect combination of premium vinyl materials to 
                    achieve your desired look. Our state-of-the-art printing equipment produces vibrant, 
                    long-lasting graphics that bring your design to life.
                  </p>
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center transform -translate-y-1/2 md:-translate-x-1/2 z-10">
                <span className="text-white font-bold">3</span>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <img 
                  src="https://images.unsplash.com/photo-1588497859490-85d1c17db96d?auto=format&fit=crop&w=800&q=80"
                  alt="Large format printer producing custom vehicle wrap graphics"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
          
          {/* Item 4 */}
          <div className="relative">
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:order-2">
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">Professional Installation</h3>
                  <p className="text-gray-700">
                    Our certified installation team meticulously applies your custom designer wrap with precision and attention 
                    to detail. Complex designs require specialized techniques to ensure perfect alignment and a flawless finish.
                  </p>
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center transform -translate-y-1/2 md:-translate-x-1/2 z-10">
                <span className="text-white font-bold">4</span>
              </div>
              <div className="md:w-1/2 md:pl-12 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1625131258126-d1abe3bc1c95?auto=format&fit=crop&w=800&q=80"
                  alt="Professional installer applying custom wrap to vehicle"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
          
          {/* Item 5 */}
          <div className="relative">
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                <div className="md:text-right">
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">Final Reveal & Care Instructions</h3>
                  <p className="text-gray-700">
                    Experience the excitement of seeing your custom designer wrap for the first time. We'll provide 
                    comprehensive care instructions to ensure your one-of-a-kind wrap maintains its stunning appearance 
                    for years to come.
                  </p>
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center transform -translate-y-1/2 md:-translate-x-1/2 z-10">
                <span className="text-white font-bold">5</span>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <img 
                  src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80"
                  alt="Completed custom wrapped vehicle with unique design"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignerWrapsProcess;
