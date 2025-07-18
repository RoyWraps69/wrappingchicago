
import React from 'react';
import { Helmet } from 'react-helmet-async';
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
        <title>Contact | Chicago Vehicle Wraps, Car Wraps & Truck Wrap Installation Quote</title>
        <meta 
          name="description" 
          content="Get your vehicle wrap quote! Professional car wraps, truck wraps, van wraps, fleet graphics. Vehicle wrap cost estimates, same day installation available. Call (312) 597-1286 for instant quote." 
        />
        <meta name="keywords" content="vehicle wrap quote Chicago, car wrap cost, truck wrap estimate, van wrap price, fleet wrap quote, vinyl wrap installation quote, mobile wrap service, wrap shop near me" />
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
        
        <main className="flex-grow bg-white">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Get Your Vehicle Wrap Quote Today | Chicago Car Wraps & Truck Installation</h1>
              <p className="text-lg text-black font-medium">Professional vehicle wrap installation quote! Car wraps, truck wraps, van wraps, fleet graphics. Call (312) 597-1286 for instant vehicle wrap cost estimate and same day service.</p>
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
      </div>
    </>
  );
};

export default ContactPage;
