
import React from 'react';
import GenericServiceHero from './heroes/GenericServiceHero';
import ChicagoVehicleWrapsContent from './ChicagoVehicleWrapsContent';
import LocalSEOEnhancer from './LocalSEOEnhancer';
import ServiceCatalog from './ServiceCatalog';

interface GenericServiceContentProps {
  serviceType?: string;
}

const GenericServiceContent: React.FC<GenericServiceContentProps> = ({ serviceType }) => {
  // For the main services page, show comprehensive Chicago content
  if (!serviceType || serviceType === 'services') {
    return (
      <>
        <GenericServiceHero />
        <LocalSEOEnhancer />
        <ChicagoVehicleWrapsContent />
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <ServiceCatalog />
          </div>
        </div>
      </>
    );
  }

  // For specific service types, show targeted content
  return (
    <>
      <GenericServiceHero serviceType={serviceType} />
      <LocalSEOEnhancer />
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-navy mb-6 capitalize">
            {serviceType.replace('-', ' ')} Services in Chicago
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Professional {serviceType.replace('-', ' ')} installation with premium materials and expert craftsmanship.
          </p>
        </div>
        <ServiceCatalog />
      </div>
    </>
  );
};

export default GenericServiceContent;
