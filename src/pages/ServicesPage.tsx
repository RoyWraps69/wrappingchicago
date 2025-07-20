
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import ServiceContentSelector from '@/components/services/ServiceContentSelector';
import ServicesHero from '@/components/heroes/ServicesHero';
import { useParams } from 'react-router-dom';

const ServicesPage = () => {
  const { service } = useParams();
  const servicePath = service || 'services';
  
  return (
    <>
      <Helmet>
        <title>Vehicle Wraps for Chicago Trade Businesses | Plumbers, Electricians, HVAC</title>
        <meta 
          name="description" 
          content="Turn your work truck into your best salesperson. Chicago trade professionals choose us for vehicle wraps that get noticed and bring in more customers. Same week service, won't hurt your paint." 
        />
        <meta name="keywords" content="plumber truck wraps Chicago, electrician van wraps, HVAC vehicle graphics, contractor truck lettering, trade vehicle wraps Chicago, service truck advertising" />
        <link rel="canonical" href="https://www.wrappingchicago.com/services" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <ServicesHero />
          
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            <ServiceContentSelector path={servicePath} />
          </div>
          <CallToAction />
        </main>
      </div>
    </>
  );
};

export default ServicesPage;
