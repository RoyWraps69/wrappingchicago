
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import ContactIntroduction from '@/components/contact/ContactIntroduction';
import ContactDetails from '@/components/contact/ContactDetails';
import ContactStudioImage from '@/components/contact/ContactStudioImage';
import ContactForm from '@/components/contact/ContactForm';
import Schema from '@/components/Schema';
import { cities } from '@/data/cities';
import { Card } from '@/components/ui/card';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Chicago Fleet Wraps | Request a Quote</title>
        <meta 
          name="description" 
          content="Contact Chicago Fleet Wraps for all your vehicle wrapping needs. Get a free quote for fleet wraps, color change wraps, and commercial graphics from Chicago's premier vehicle wrap company."
        />
        <meta 
          name="keywords" 
          content="contact vehicle wrap company Chicago, request vehicle wrap quote Chicago, fleet wrap quote, commercial vehicle graphics Chicago, car wrap consultation, free vehicle wrap estimate Chicago"
        />
        <link rel="canonical" href="https://wrappingchicago.com/contact" />
      </Helmet>
      
      <Schema 
        city={cities[0]} 
        path="/contact" 
        pageTitle="Contact Us | Chicago Fleet Wraps | Request a Quote" 
        pageDescription="Contact Chicago Fleet Wraps for all your vehicle wrapping needs. Get a free quote for fleet wraps, color change wraps, and commercial graphics from Chicago's premier vehicle wrap company."
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            <h1 className="text-4xl font-bold text-brand-navy mb-6">Contact Us</h1>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <ContactIntroduction />
                <ContactDetails />
                <ContactStudioImage />
                
                <Card className="p-6 mt-8 bg-gray-50">
                  <h2 className="text-xl font-bold text-brand-navy mb-3">Contact Form Information</h2>
                  <p className="mb-3">
                    Our contact form is configured to open your default email client with a pre-filled message addressed to: <strong>roy@chicagofleetwraps.com</strong>
                  </p>
                  <p className="text-sm text-gray-600">
                    When you submit the form, your default email client will open with all your information pre-filled. Simply click send to complete your request.
                  </p>
                </Card>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
