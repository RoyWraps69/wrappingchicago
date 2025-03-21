
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { sendEmail } from '@/services/sendgrid';
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

  const handleSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      await sendEmail(data);
      setIsSubmitting(false);
      setSubmitted(true);
      
      toast({
        title: "Request Submitted Successfully",
        description: "Thank you for your message. A confirmation tab may briefly open and close.",
        variant: "default",
        duration: 5000,
      });
      
      form.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      setIsSubmitting(false);
      
      toast({
        title: "Request Failed",
        description: "There was an error sending your message. Please try again or contact us directly at roy@chicagofleetwraps.com",
        variant: "destructive",
        duration: 8000,
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
        * This form submits directly to roy@chicagofleetwraps.com. A new tab may briefly open during submission.
      </p>
    </div>
  );
};

export default ContactForm;
