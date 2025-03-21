
import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import emailjs from 'emailjs-com';

// Constants for EmailJS - you'll need to replace these with your actual values
const EMAILJS_SERVICE_ID = "service_id"; // Replace with your Gmail Service ID from EmailJS
const EMAILJS_TEMPLATE_ID = "template_id"; // Replace with your Template ID
const EMAILJS_USER_ID = "user_id"; // Replace with your User ID (Public Key)

const ContactForm = () => {
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
  const [emailjsInitialized, setEmailjsInitialized] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_USER_ID);
    setEmailjsInitialized(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare the template parameters - these field names must match your EmailJS template variables
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      service: formData.service,
      message: formData.message,
      to_email: 'roy@chicagofleetwraps.com'
    };

    // Send email using EmailJS
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
      .then((response) => {
        console.log('Email successfully sent!', response);
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
      })
      .catch((error) => {
        console.error('Email failed to send:', error);
        setIsSubmitting(false);
        
        toast({
          title: "Request Failed",
          description: "There was an error sending your request. Please try again.",
          variant: "destructive"
        });
      });
  };

  return (
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
              <option value="easy-button-package">Easy Button Package ($3,999)</option>
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
            disabled={isSubmitting || !emailjsInitialized}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
          
          <p className="text-sm text-gray-500 mt-2">
            By submitting this form, your request will be sent to: roy@chicagofleetwraps.com
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
