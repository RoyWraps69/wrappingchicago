import React from "react";
import { Check, Users, Award, Clock, MapPin, Phone, Mail } from "lucide-react";
import PageSEO from "@/components/seo/PageSEO";
import AboutHero from "@/components/heroes/AboutHero";

const AboutPage = () => {
  return (
    <>
      <PageSEO 
        title="About Wrapping Chicago - 20+ Years Experience | Professional Vehicle Wraps"
        description="Chicago's premier vehicle wrap company with 20+ years experience. Professional car wraps, truck wraps, van wraps, and fleet graphics with 3M certified installation."
        keywords={["about wrapping chicago", "vehicle wrap company", "car wrap installation", "professional wrapping", "chicago wraps"]}
        canonicalUrl="https://www.wrappingchicago.com/about"
      />
      
      <AboutHero />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto py-12 px-4">
          <div className="max-w-4xl mx-auto">
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <div className="prose max-w-none">
                  <p className="text-lg mb-6">
                    Welcome to Chicago's most trusted vehicle wrap company! Since 2014, we've been transforming cars, trucks, vans, and fleet vehicles with professional vinyl wraps, custom graphics, and commercial vehicle branding. Whether you need car wraps, truck wraps, fleet graphics, or specialty vehicle graphics, we deliver results that drive your business forward.
                  </p>
                  
                  <p className="mb-6">
                    Our team specializes in premium vehicle wrap installation using 3M and Avery Dennison materials. From custom car wraps and color change wraps to commercial truck wraps and fleet vehicle graphics, we handle projects of all sizes with professional precision.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">Our Expertise</h2>
                  
                  <p className="mb-6">
                    As Chicago's leading vehicle wrap company, we provide comprehensive wrap services including:
                  </p>
                  
                  <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">Custom car wraps and automotive vinyl wraps</li>
                    <li className="mb-2">Commercial truck wraps and fleet vehicle graphics</li>
                    <li className="mb-2">Van wraps and cargo vehicle graphics</li>
                    <li className="mb-2">Color change wraps and matte car wraps</li>
                    <li className="mb-2">Chrome wraps and specialty vinyl applications</li>
                    <li className="mb-2">Vehicle decals and custom lettering</li>
                    <li className="mb-2">Paint protection wraps and UV protection</li>
                    <li className="mb-2">Mobile vehicle wrap installation</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">Our Commitment to Excellence</h2>
                  
                  <p className="mb-6">
                    At Wrapping Chicago, we're committed to:
                  </p>
                  
                  <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">Using only premium 3M and Avery materials</li>
                    <li className="mb-2">Employing certified and experienced installers</li>
                    <li className="mb-2">Providing end-to-end service from design to installation</li>
                    <li className="mb-2">Delivering projects on time and within budget</li>
                    <li className="mb-2">Ensuring customer satisfaction with every project</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                  <img 
                    alt="Chicago vehicle wrap installation facility showing professional equipment and climate-controlled environment" 
                    className="w-full h-64 object-cover" 
                    src="/lovable-uploads/a10b218d-522c-49b7-b10f-6cde9ee79cf6.jpg" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-brand-navy mb-2">State-of-the-Art Installation Facility</h3>
                    <p className="text-gray-700">
                      Our climate-controlled installation facility ensures optimal conditions for 
                      perfect wrap application every time.
                    </p>
                  </div>
                </div>
                
                <div className="bg-brand-navy/5 rounded-lg p-6 border border-brand-navy/10">
                  <h3 className="text-xl font-semibold text-brand-navy mb-4">Why Choose Wrapping Chicago?</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-brand-red rounded-full p-2 mr-4 text-white">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">20+ Years Experience</h4>
                        <p className="text-sm text-gray-600">Decades of professional experience wrapping all types of vehicles</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-brand-red rounded-full p-2 mr-4 text-white">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Premium Materials Only</h4>
                        <p className="text-sm text-gray-600">We exclusively use premium 3M and Avery wrap films</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-brand-red rounded-full p-2 mr-4 text-white">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Exceptional Customer Service</h4>
                        <p className="text-sm text-gray-600">Dedicated support and attention to detail from start to finish</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-brand-red rounded-full p-2 mr-4 text-white">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Warranty Backed</h4>
                        <p className="text-sm text-gray-600">All our installations come with manufacturer warranties</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-12">
              <h2 className="text-2xl font-semibold text-brand-navy mb-4">Our Professional Installation Process</h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-brand-navy/5 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-navy">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Free Consultation</h3>
                  <p className="text-sm text-gray-600">We discuss your needs and goals for your vehicle wrap project</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-brand-navy/5 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-navy">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Custom Design</h3>
                  <p className="text-sm text-gray-600">Our designers create custom concepts for your approval</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-brand-navy/5 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-navy">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Material Production</h3>
                  <p className="text-sm text-gray-600">We print and prepare your wrap using premium materials</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-brand-navy/5 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-navy">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Expert Installation</h3>
                  <p className="text-sm text-gray-600">Certified installers apply your wrap with precision</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-red text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="mb-6">Contact us today for a free consultation and quote on your vehicle wrap project.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center justify-center bg-white text-brand-red px-6 py-3 rounded-lg font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  (312) 597-1286
                </div>
                <div className="flex items-center justify-center bg-white text-brand-red px-6 py-3 rounded-lg font-semibold">
                  <Mail className="mr-2 h-5 w-5" />
                  info@wrappingchicago.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;