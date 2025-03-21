
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

// EmailJS configuration
// Replace these with your actual EmailJS account details
const EMAILJS_SERVICE_ID = 'service_5f00lkt';
const EMAILJS_TEMPLATE_ID = 'template_lznnmhm';
const EMAILJS_USER_ID = 'p4Ac1nNy55x5QUFel';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
  });

  const handleSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Get the form element and properly cast it to HTMLFormElement
      const formElement = document.getElementById('contact-form') as HTMLFormElement;
      
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,      // Service ID
        EMAILJS_TEMPLATE_ID,     // Template ID
        formElement,             // Properly cast form element
        EMAILJS_USER_ID          // User ID is required
      );
      
      console.log('Email sent successfully!', result);
      setIsSubmitting(false);
      setSubmitted(true);
      
      toast({
        title: "Request Submitted",
        description: "We'll get back to you as soon as possible.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Email failed to send:', error);
      setIsSubmitting(false);
      
      toast({
        title: "Request Failed",
        description: "There was an error sending your request. Please try again or contact us directly.",
        variant: "destructive"
      });
    }
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
          <Button 
            onClick={() => setSubmitted(false)}
            className="mt-4"
          >
            Submit Another Request
          </Button>
        </div>
      ) : (
        <form id="contact-form" className="space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
          <div>
            <label htmlFor="name" className="block mb-1">Your Name</label>
            <Input 
              type="text" 
              id="name"
              name="name" 
              {...form.register('name')}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="John Smith"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-1">Email Address</label>
            <Input 
              type="email" 
              id="email"
              name="from_email"  
              {...form.register('email')}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="you@example.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block mb-1">Phone Number</label>
            <Input 
              type="tel" 
              id="phone"
              name="phone" 
              {...form.register('phone')}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="(123) 456-7890"
              required
            />
          </div>
          
          <div>
            <label htmlFor="service" className="block mb-1">Service Interested In</label>
            <select 
              id="service"
              name="service" 
              {...form.register('service')}
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
            <Textarea 
              id="message"
              name="message" 
              rows={4} 
              {...form.register('message')}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Tell us about your project..."
              required
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </Button>
          
          <p className="text-sm text-gray-500 mt-2">
            By submitting this form, your request will be sent to: roy@chicagofleetwraps.com
          </p>
          
          <input type="hidden" name="to_email" value="roy@chicagofleetwraps.com" />
        </form>
      )}
    </div>
  );
};

export default ContactForm;
