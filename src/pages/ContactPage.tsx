
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import ContactIntroduction from '@/components/contact/ContactIntroduction';
import ContactDetails from '@/components/contact/ContactDetails';
import ContactStudioImage from '@/components/contact/ContactStudioImage';
import ContactForm from '@/components/contact/ContactForm';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Chicago Fleet Wraps</title>
        <meta 
          name="description" 
          content="Contact Chicago Fleet Wraps for all your vehicle wrapping needs. Get a free quote for fleet wraps, color change wraps, and commercial graphics."
        />
      </Helmet>
      
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
