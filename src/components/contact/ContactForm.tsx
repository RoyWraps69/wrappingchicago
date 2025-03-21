
import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
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

  // Check for success parameter in URL to show success message after redirect
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setSubmitted(true);
      // Clean URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  // This function mainly handles client-side validation and UI feedback
  // The actual form submission is handled by the native HTML form action
  const handleSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      console.log("Form data validated:", data);
      
      // Show feedback to user while form is submitting
      toast({
        title: "Submitting Form",
        description: "Your request is being sent. Please wait...",
        variant: "default",
        duration: 3000,
      });
      
      // We don't need to manually submit the form - it will be handled by the HTML form action
      // This function is just for validation and UI feedback
      
      // FormSubmit.co will handle the actual submission and redirect
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
