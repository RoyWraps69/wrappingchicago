
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
  onSubmit: (data: FormValues) => void;
  isSubmitting: boolean;
  apiKeyExists: boolean;
}

const ContactFormFields = ({ form, onSubmit, isSubmitting, apiKeyExists }: ContactFormFieldsProps) => {
  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        action="https://formsubmit.co/roy@chicagofleetwraps.com" 
        method="POST"
        className="space-y-4"
      >
        {/* Honeypot field to prevent spam - not visible to users */}
        <input type="text" name="_honey" style={{ display: 'none' }} />
        
        {/* FormSubmit.co specific fields */}
        <input type="hidden" name="_subject" value="Chicago Fleet Wraps: Quote Request from Contact Form" />
        <input type="hidden" name="_replyto" value={form.getValues().email || ''} />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value={window.location.href} />
        
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
          disabled={isSubmitting || !apiKeyExists}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </Button>
        
        <p className="text-sm text-gray-500 mt-2">
          By submitting this form, your request will be sent to: roy@chicagofleetwraps.com
        </p>
      </form>
    </Form>
  );
};

export default ContactFormFields;
