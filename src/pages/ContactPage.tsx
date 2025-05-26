
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactMap from '@/components/contact/ContactMap';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import Schema from '@/components/Schema';
import { cities } from '@/data/cities';

const ContactPage = () => {
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  const domain = "https://www.wrappingchicago.com";

  return (
    <>
      <Helmet>
        <title>Contact Wrapping Chicago</title>
        <meta 
          name="description" 
          content="Get contact Wrapping Chicago services for quotes, consultations, and scheduling. Speak with our vehicle wrap experts and start your project today." 
        />
        <meta name="keywords" content="contact Wrapping Chicago, vehicle wrap quotes, consultation, scheduling, wrap experts Chicago" />
        <link rel="canonical" href={`${domain}/contact`} />
        <meta property="og:title" content="Contact Wrapping Chicago" />
        <meta property="og:description" content="Get contact Wrapping Chicago services for quotes, consultations, and scheduling. Speak with our vehicle wrap experts and start your project today." />
        <meta property="og:url" content={`${domain}/contact`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      </Helmet>

      <Schema 
        city={chicagoCity}
        path="/contact"
        pageTitle="Contact Wrapping Chicago"
        pageDescription="Get contact Wrapping Chicago services for quotes, consultations, and scheduling. Speak with our vehicle wrap experts and start your project today."
      />

      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Contact Us</h1>
              <p className="text-lg text-gray-700">Get in touch for quotes, consultations, and scheduling</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactForm />
              <div>
                <ContactInfo />
                <ContactMap />
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
