
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { useLocation } from 'react-router-dom';

const ServicesPage = () => {
  const location = useLocation();
  const path = location.pathname;
  const isSpecificService = path.includes('/services/');
  
  // Determine which service to display based on the URL
  let serviceTitle = "Our Services";
  let serviceDescription = "Professional vehicle wrapping services in Chicago";
  
  if (isSpecificService) {
    if (path.includes('fleet-wraps')) {
      serviceTitle = "Fleet Wraps";
      serviceDescription = "Professional fleet wrapping services for your business vehicles";
    } else if (path.includes('color-change-wraps')) {
      serviceTitle = "Color Change Wraps";
      serviceDescription = "Transform your vehicle with our premium color change wraps";
    } else if (path.includes('commercial-graphics')) {
      serviceTitle = "Commercial Graphics";
      serviceDescription = "Eye-catching commercial graphics for your business vehicles";
    } else if (path.includes('partial-wraps')) {
      serviceTitle = "Partial Wraps";
      serviceDescription = "Cost-effective partial wraps for your business needs";
    }
  }

  return (
    <>
      <Helmet>
        <title>{serviceTitle} | Chicago Fleet Wraps</title>
        <meta 
          name="description" 
          content={serviceDescription}
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold text-brand-navy mb-6">{serviceTitle}</h1>
            <p className="text-lg mb-8">
              At Chicago Fleet Wraps, we provide premium quality vehicle wrapping services
              throughout the greater Chicago area. Our team of experienced professionals
              uses only the highest quality materials to ensure your wrap looks great and lasts.
            </p>
            
            {/* Service content could be expanded based on the specific service */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-semibold text-brand-navy mb-4">Professional Installers</h2>
                <p>
                  Our certified installers have years of experience wrapping vehicles of all types.
                  From compact cars to large commercial trucks, we have the expertise to handle any project.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-brand-navy mb-4">Premium Materials</h2>
                <p>
                  We use only the highest quality 3M and Avery vinyl wraps, ensuring your vehicle
                  wrap will look great and stand up to the harsh Chicago weather for years to come.
                </p>
              </div>
            </div>
          </div>
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
