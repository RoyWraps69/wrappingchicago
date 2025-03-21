
import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import SubmissionSuccess from './SubmissionSuccess';
import Airform from 'react-airform';

const ContactForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Check for success parameter in URL to show success message after redirect
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setSubmitted(true);
      // Clean URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const handleSubmit = () => {
    setIsSubmitting(true);
    toast({
      title: "Submitting your request...",
      description: "Please wait while we process your information.",
    });
    // Form will be automatically submitted by Airform component
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-brand-navy mb-4">Request a Quote</h2>
      
      {submitted ? (
        <SubmissionSuccess onReset={() => setSubmitted(false)} />
      ) : (
        <Airform 
          email="roy@chicagofleetwraps.com"
          onSubmit={handleSubmit}
          successUrl={`${window.location.origin}/contact?success=true`}
          className="space-y-4"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
              <input 
                id="name"
                type="text" 
                name="name" 
                placeholder="John Smith"
                className="w-full p-2 border border-gray-300 rounded mt-1" 
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
              <input 
                id="email"
                type="email" 
                name="email" 
                placeholder="you@example.com"
                className="w-full p-2 border border-gray-300 rounded mt-1" 
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
              <input 
                id="phone"
                type="tel" 
                name="phone" 
                placeholder="(123) 456-7890"
                className="w-full p-2 border border-gray-300 rounded mt-1" 
                required
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium">Service Interested In</label>
              <select 
                id="service"
                name="service" 
                className="w-full p-2 border border-gray-300 rounded mt-1" 
                required
              >
                <option value="">Select a Service</option>
                <option value="Fleet Wraps">Fleet Wraps</option>
                <option value="Color Change Wraps">Color Change Wraps</option>
                <option value="Commercial Graphics">Commercial Graphics</option>
                <option value="Partial Wraps">Partial Wraps</option>
                <option value="Easy Button Package">Easy Button Package ($3,999)</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea 
                id="message"
                name="message" 
                placeholder="Tell us about your project..." 
                rows={4} 
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              ></textarea>
            </div>
          </div>
          
          <button 
            type="submit" 
            className="bg-brand-red text-white px-4 py-2 rounded hover:bg-red-700 transition-colors inline-flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
          
          <p className="text-sm text-gray-500 mt-2">
            By submitting this form, your request will be sent to: roy@chicagofleetwraps.com
          </p>
          
          <input type="hidden" name="_subject" value="Chicago Fleet Wraps: New Quote Request" />
        </Airform>
      )}
      
      <p className="text-xs text-gray-500 mt-4">
        * This form submits directly to roy@chicagofleetwraps.com
      </p>
    </div>
  );
};

export default ContactForm;
