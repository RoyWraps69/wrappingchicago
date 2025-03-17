
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactItem from '@/components/location/ContactItem';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Chicago Fleet Wraps</title>
        <meta 
          name="description" 
          content="Contact Chicago Fleet Wraps for all your vehicle wrapping needs. Get a free quote for fleet wraps, color change wraps, and commercial graphics."
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold text-brand-navy mb-6">Contact Us</h1>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <p className="text-lg mb-6">
                  Ready to transform your vehicle or fleet? Contact Chicago Fleet Wraps today 
                  for a free consultation and quote. Our team is standing by to answer your 
                  questions and help you get started on your vehicle wrap project.
                </p>
                
                <div className="space-y-4 mb-8">
                  <ContactItem icon={MapPin} title="Address">
                    <span>4711 N. Lamon Ave<br />Chicago, IL 60630</span>
                  </ContactItem>
                  
                  <ContactItem icon={Phone} title="Phone">
                    <a href="tel:3125971286" className="text-brand-red hover:underline">
                      (312) 597-1286
                    </a>
                  </ContactItem>
                  
                  <ContactItem icon={Mail} title="Email">
                    <a href="mailto:roy@chicagofleetwraps.com" className="text-brand-red hover:underline">
                      roy@chicagofleetwraps.com
                    </a>
                  </ContactItem>
                  
                  <ContactItem icon={Clock} title="Hours">
                    <span>Monday - Friday: 9am - 5pm<br />Saturday: By appointment<br />Sunday: Closed</span>
                  </ContactItem>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-brand-navy mb-4">Request a Quote</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-2 border border-gray-300 rounded"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-2 border border-gray-300 rounded"
                      placeholder="you@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full p-2 border border-gray-300 rounded"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block mb-1">Service Interested In</label>
                    <select id="service" className="w-full p-2 border border-gray-300 rounded">
                      <option value="">Select a Service</option>
                      <option value="fleet-wraps">Fleet Wraps</option>
                      <option value="color-change">Color Change Wraps</option>
                      <option value="commercial-graphics">Commercial Graphics</option>
                      <option value="partial-wraps">Partial Wraps</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full p-2 border border-gray-300 rounded"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="bg-brand-red hover:bg-red-700 text-white py-2 px-6 rounded transition-colors"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
