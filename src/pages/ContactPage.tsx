import React from "react";
import { MapPin, Phone, Mail, Clock, Star } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import ContactStudioImage from "@/components/contact/ContactStudioImage";
import PageSEO from "@/components/seo/PageSEO";
import ContactHero from "@/components/heroes/ContactHero";

const ContactPage = () => {
  return (
    <>
      <PageSEO 
        title="Contact Wrapping Chicago - Get Your Free Quote Today | Vehicle Wraps"
        description="Contact Wrapping Chicago for your vehicle wrap needs. Get a free quote for car wraps, truck wraps, van wraps, and fleet graphics. Call (312) 597-1286 for immediate service."
        keywords={["contact wrapping chicago", "vehicle wrap quote", "car wrap estimate", "truck wrap cost", "van wrap price", "fleet graphics quote"]}
        canonicalUrl="https://www.wrappingchicago.com/contact"
      />
      
      <ContactHero />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto py-12 px-4">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <ContactForm />
              </div>
              
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-brand-navy mb-6">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-6 w-6 text-brand-red mr-4" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-gray-600">(312) 597-1286</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="h-6 w-6 text-brand-red mr-4" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-gray-600">info@wrappingchicago.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="h-6 w-6 text-brand-red mr-4" />
                      <div>
                        <h3 className="font-semibold">Location</h3>
                        <p className="text-gray-600">Serving Chicago and surrounding areas</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="h-6 w-6 text-brand-red mr-4" />
                      <div>
                        <h3 className="font-semibold">Business Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                        <p className="text-gray-600">Sunday: By appointment</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold text-brand-navy mb-4">Why Choose Us?</h2>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
                      <p className="text-gray-700">20+ years of professional vehicle wrap experience</p>
                    </div>
                    
                    <div className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
                      <p className="text-gray-700">Premium 3M and Avery Dennison materials only</p>
                    </div>
                    
                    <div className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
                      <p className="text-gray-700">Certified installation technicians</p>
                    </div>
                    
                    <div className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
                      <p className="text-gray-700">Free consultations and quotes</p>
                    </div>
                    
                    <div className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
                      <p className="text-gray-700">Same-day service available</p>
                    </div>
                  </div>
                </div>
                
                <ContactStudioImage />
              </div>
            </div>
            
            <div className="bg-brand-navy text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Vehicle?</h2>
              <p className="mb-6">Get your free quote today and see why Chicago businesses trust us with their vehicle wrapping needs.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:3125971286" 
                  className="bg-brand-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: (312) 597-1286
                </a>
                <a 
                  href="mailto:info@wrappingchicago.com" 
                  className="bg-white text-brand-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;