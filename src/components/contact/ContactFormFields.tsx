
import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";

export type FormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

interface ContactFormFieldsProps {
  form: UseFormReturn<FormValues>;
  apiKeyExists: boolean;
}

const ContactFormFields = ({ form, apiKeyExists }: ContactFormFieldsProps) => {
  // Get absolute URL for the success redirect
  const baseUrl = window.location.origin;
  const successUrl = `${baseUrl}/contact?success=true`;

  return (
    <Form {...form}>
      <form 
        action="https://formsubmit.co/roy@chicagofleetwraps.com"
        method="POST"
        className="space-y-4"
      >
        {/* FormSubmit.co specific configuration fields */}
        <input type="hidden" name="_subject" value="Chicago Fleet Wraps: New Quote Request" />
        <input type="hidden" name="_captcha" value="true" />
        <input type="hidden" name="_next" value={successUrl} />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_blacklist" value="viagra,casino,porn,gambling,pharmacy" />
        <input type="hidden" name="_cc" value="" />
        
        {/* Honeypot field to prevent spam */}
        <input type="text" name="_honey" style={{ display: 'none' }} />
        
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
                  name="name"
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
                  name="email"
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
                  name="phone"
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
                  name="service"
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
                  name="message"
                  required
                />
              </FormControl>
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          disabled={!apiKeyExists}
        >
          Submit Request
        </Button>
        
        <p className="text-sm text-gray-500 mt-2">
          By submitting this form, your request will be sent to: roy@chicagofleetwraps.com
        </p>
      </form>
    </Form>
  );
};

export default ContactFormFields;
