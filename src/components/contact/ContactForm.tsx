
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MessageSquare, Check } from 'lucide-react';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Check for success parameter in URL on component mount
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setIsSubmitted(true);
      // Clean up URL
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  const handleReset = () => {
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Check className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="text-xl font-medium text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-4">
          Your message has been sent to roy@chicagofleetwraps.com. We'll review your request and get back to you as soon as possible.
        </p>
        <p className="text-gray-500 text-sm mb-6">
          If you don't receive a response within 24 hours, please check your spam folder or call us directly at (312) 597-1286.
        </p>
        <Button onClick={handleReset} className="mt-4">
          Submit Another Request
        </Button>
      </div>
    );
  }

  // Get absolute URL for the success redirect
  const baseUrl = window.location.origin;
  const successUrl = `${baseUrl}/contact?success=true`;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h2>
      
      <form 
        action="https://formsubmit.co/roy@chicagofleetwraps.com"
        method="POST"
        className="space-y-6"
      >
        {/* FormSubmit.co configuration */}
        <input type="hidden" name="_subject" value="Chicago Fleet Wraps: New Quote Request" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value={successUrl} />
        <input type="hidden" name="_template" value="table" />
        <input type="text" name="_honey" style={{ display: 'none' }} />
        
        <div>
          <Label htmlFor="name" className="text-gray-900">Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="text-gray-900">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1"
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <Label htmlFor="phone" className="text-gray-900">Phone *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1"
            placeholder="(123) 456-7890"
          />
        </div>
        
        <div>
          <Label htmlFor="service" className="text-gray-900">Service Interested In *</Label>
          <select
            id="service"
            name="service"
            required
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-navy text-gray-900"
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
          <Label htmlFor="message" className="text-gray-900">Message *</Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={4}
            className="mt-1"
            placeholder="Tell us about your project..."
          />
        </div>
        
        <Button type="submit" className="w-full bg-brand-red hover:bg-red-700">
          <MessageSquare className="mr-2 h-4 w-4" />
          Send Message
        </Button>
        
        <p className="text-sm text-gray-500 mt-2">
          By submitting this form, your request will be sent to: roy@chicagofleetwraps.com
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
