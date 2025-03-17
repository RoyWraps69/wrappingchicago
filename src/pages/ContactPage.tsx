
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Check } from 'lucide-react';
import ContactItem from '@/components/location/ContactItem';
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real implementation, you would send this data to a server
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      console.log('Form submitted to roy@chicagofleetwraps.com');
      console.log('Form data:', formData);
      
      setIsSubmitting(false);
      setSubmitted(true);
      
      toast({
        title: "Request Submitted",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1000);
  };

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
                
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/efdbc4bf-1f04-42bb-a904-f52dae7bef6c.png" 
                    alt="Chicago Fleet Wraps installation shop" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-brand-navy mb-4">Request a Quote</h2>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-4">Your request has been submitted successfully.</p>
                    <p className="text-gray-600">We'll get back to you as soon as possible.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-red hover:bg-red-700"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block mb-1">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="(123) 456-7890"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block mb-1">Service Interested In</label>
                      <select 
                        id="service" 
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      >
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
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Tell us about your project..."
                        required
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="bg-brand-red hover:bg-red-700 text-white py-2 px-6 rounded transition-colors"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    </button>
                    
                    <p className="text-sm text-gray-500 mt-2">
                      By submitting this form, your request will be sent to: roy@chicagofleetwraps.com
                    </p>
                  </form>
                )}
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
