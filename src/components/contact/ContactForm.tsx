
import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiKeyExists, setApiKeyExists] = useState(false);
  
  useEffect(() => {
    // Check if API key exists in localStorage
    const sendgridKey = localStorage.getItem('sendgrid_api_key');
    setApiKeyExists(!!sendgridKey);
  }, []);
  
  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
  });

  const handleSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const sendgridKey = localStorage.getItem('sendgrid_api_key');
      
      if (!sendgridKey) {
        throw new Error('SendGrid API key not found');
      }

      // Prepare the email data
      const emailData = {
        personalizations: [{
          to: [{ email: 'roy@chicagofleetwraps.com' }],
          subject: `New Quote Request: ${data.service}`,
        }],
        from: { email: data.email, name: data.name },
        reply_to: { email: data.email, name: data.name },
        content: [{
          type: 'text/plain',
          value: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Service: ${data.service}

Message:
${data.message}
          `
        }]
      };

      // Send email using SendGrid API
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sendgridKey}`,
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`SendGrid API error: ${response.status} ${errorText}`);
      }
      
      console.log('Email sent successfully!');
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

  const handleSetApiKey = () => {
    const key = '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';
    localStorage.setItem('sendgrid_api_key', key);
    setApiKeyExists(true);
    
    toast({
      title: "API Key Saved",
      description: "SendGrid API key has been saved to your browser.",
    });
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-brand-navy mb-4">Request a Quote</h2>
      
      {!apiKeyExists && (
        <div className="mb-6 p-4 border border-yellow-300 bg-yellow-50 rounded-md">
          <p className="text-sm text-yellow-800 mb-2">
            SendGrid API key is required to send emails. Click the button below to set up the API key.
          </p>
          <Button onClick={handleSetApiKey} variant="outline" size="sm">
            Set SendGrid API Key
          </Button>
        </div>
      )}
      
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="John Smith" 
                      {...field} 
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="you@example.com" 
                      {...field} 
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="(123) 456-7890" 
                      {...field} 
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Interested In</FormLabel>
                  <FormControl>
                    <select 
                      className="w-full p-2 border border-gray-300 rounded" 
                      {...field} 
                      required
                    >
                      <option value="">Select a Service</option>
                      <option value="Fleet Wraps">Fleet Wraps</option>
                      <option value="Color Change Wraps">Color Change Wraps</option>
                      <option value="Commercial Graphics">Commercial Graphics</option>
                      <option value="Partial Wraps">Partial Wraps</option>
                      <option value="Easy Button Package">Easy Button Package ($3,999)</option>
                    </select>
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your project..." 
                      rows={4} 
                      {...field} 
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              disabled={isSubmitting || !apiKeyExists}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
            
            <p className="text-sm text-gray-500 mt-2">
              By submitting this form, your request will be sent to: roy@chicagofleetwraps.com
            </p>
          </form>
        </Form>
      )}
    </div>
  );
};

export default ContactForm;
