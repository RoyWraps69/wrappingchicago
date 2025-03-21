
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import SubmissionSuccess from './SubmissionSuccess';
import ContactFormFields, { FormValues } from './ContactFormFields';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
  });

  // Function to handle form submission - now primarily used for client-side feedback
  const handleSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // The form is submitted directly via HTML form action to FormSubmit.co
      // This client-side handler is mainly for UX and form reset
      console.log("Form data validated:", data);
      
      setIsSubmitting(false);
      setSubmitted(true);
      
      toast({
        title: "Form Submitted Successfully",
        description: "Your message has been sent. Thank you!",
        variant: "default",
        duration: 5000,
      });
      
      form.reset();
    } catch (error) {
      console.error('Form validation error:', error);
      setIsSubmitting(false);
      
      toast({
        title: "Validation Failed",
        description: "Please check your information and try again.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-brand-navy mb-4">Request a Quote</h2>
      
      {submitted ? (
        <SubmissionSuccess onReset={() => setSubmitted(false)} />
      ) : (
        <ContactFormFields 
          form={form} 
          onSubmit={handleSubmit} 
          isSubmitting={isSubmitting} 
          apiKeyExists={true}
        />
      )}
      
      <p className="text-xs text-gray-500 mt-4">
        * This form submits directly to roy@chicagofleetwraps.com
      </p>
    </div>
  );
};

export default ContactForm;
