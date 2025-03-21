
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { sendEmail } from '@/services/sendgrid';
import ApiKeyNotice from './ApiKeyNotice';
import SubmissionSuccess from './SubmissionSuccess';
import ContactFormFields, { FormValues } from './ContactFormFields';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showNotice, setShowNotice] = useState(true);
  
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
      await sendEmail(data);
      console.log('Email client opened');
      
      setIsSubmitting(false);
      setSubmitted(true);
      
      toast({
        title: "Important - Complete Your Request",
        description: "Your email client has opened with your message. Please click SEND in your email app to complete your request.",
        variant: "default",
        duration: 10000, // Show for 10 seconds to ensure user sees it
      });
      
      form.reset();
    } catch (error) {
      console.error('Failed to process email request:', error);
      setIsSubmitting(false);
      
      toast({
        title: "Request Failed",
        description: "There was an error opening your email client. Please try again or contact us directly at roy@chicagofleetwraps.com",
        variant: "destructive"
      });
    }
  };

  const handleDismissNotice = () => {
    setShowNotice(false);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-brand-navy mb-4">Request a Quote</h2>
      
      {showNotice && <ApiKeyNotice onDismiss={handleDismissNotice} />}
      
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
    </div>
  );
};

export default ContactForm;
