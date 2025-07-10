
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import ServiceContentSelector from '@/components/services/ServiceContentSelector';
import { useParams } from 'react-router-dom';

const ServicesPage = () => {
  const { service } = useParams();
  const servicePath = service || 'services';
  
  return (
    <>
      <Helmet>
        <title>Vehicle Wrap Services Chicago | Professional Installation | Wrapping Chicago</title>
        <meta 
          name="description" 
          content="Complete vehicle wrap services in Chicago. Car wraps, truck wraps, van wraps, fleet graphics, color change wraps, and protective films. Expert installation with premium materials." 
        />
        <meta name="keywords" content="vehicle wrap services Chicago, car wraps, truck wraps, van wraps, fleet graphics, commercial vehicle wraps, color change wraps, protective films Chicago" />
        <link rel="canonical" href="https://www.wrappingchicago.com/services" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
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
