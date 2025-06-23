
import React from 'react';
import FleetWrapsContent from './FleetWrapsContent';
import ColorChangeWrapsContent from './ColorChangeWrapsContent';
import CommercialGraphicsContent from './CommercialGraphicsContent';
import PartialWrapsContent from './PartialWrapsContent';
import ProtectiveFilmsContent from './ProtectiveFilmsContent';
import VehicleLetteringContent from './VehicleLetteringContent';
import SpecialtyWrapsContent from './SpecialtyWrapsContent';
import RetailGraphicsContent from './RetailGraphicsContent';
import GenericServiceContent from './GenericServiceContent';
import SearchableGlossary from '@/components/glossary/SearchableGlossary';

interface ServiceContentSelectorProps {
  path: string;
}

const ServiceContentSelector: React.FC<ServiceContentSelectorProps> = ({ path }) => {
  console.log("ServiceContentSelector received path:", path);
  
  // Normalize path by removing /services/ prefix if present and removing trailing slashes
  const normalizedPath = path.replace(/^\/services\//, '').replace(/\/$/, '');
  
  // Handle direct routes without the /services/ prefix
  const servicePath = normalizedPath || 'services';
  
  console.log("ServiceContentSelector using normalized path:", servicePath);
  
  if (servicePath === 'fleet-wraps') {
    return (
      <>
        <FleetWrapsContent />
        <div className="container mx-auto px-4 py-8">
          <SearchableGlossary compact={true} />
        </div>
      </>
    );
  } else if (servicePath === 'color-change-wraps') {
    return (
      <>
        <ColorChangeWrapsContent />
        <div className="container mx-auto px-4 py-8">
          <SearchableGlossary compact={true} />
        </div>
      </>
    );
  } else if (servicePath === 'commercial-graphics') {
    return (
      <>
        <CommercialGraphicsContent />
        <div className="container mx-auto px-4 py-8">
          <SearchableGlossary compact={true} />
        </div>
      </>
    );
  } else if (servicePath === 'partial-wraps') {
    return (
      <>
        <PartialWrapsContent />
        <div className="container mx-auto px-4 py-8">
          <SearchableGlossary compact={true} />
        </div>
      </>
    );
  } else if (servicePath === 'protective-films') {
    return (
      <>
        <ProtectiveFilmsContent />
        <div className="container mx-auto px-4 py-8">
          <SearchableGlossary compact={true} />
        </div>
      </>
    );
  } else if (servicePath === 'vehicle-lettering') {
    return (
      <>
        <VehicleLetteringContent />
        <div className="container mx-auto px-4 py-8">
          <SearchableGlossary compact={true} />
        </div>
      </>
    );
  } else if (servicePath === 'specialty-wraps') {
    return (
      <>
        <SpecialtyWrapsContent />
        <div className="container mx-auto px-4 py-8">
          <SearchableGlossary compact={true} />
        </div>
      </>
    );
  } else if (servicePath === 'retail-graphics') {
    return (
      <>
        <RetailGraphicsContent />
        <div className="container mx-auto px-4 py-8">
          <SearchableGlossary compact={true} />
        </div>
      </>
    );
  } else if (servicePath === 'car-wraps') {
    return (
      <>
        <GenericServiceContent serviceType="car" />
        <div className="container mx-auto px-4 py-8">
          <SearchableGlossary compact={true} />
        </div>
      </>
    );
  } else if (servicePath === 'truck-wraps') {
    return (
      <>
        <GenericServiceContent serviceType="truck" />
        <div className="container mx-auto px-4 py-8">
          <SearchableGlossary compact={true} />
        </div>
      </>
    );
  } else if (servicePath === 'van-wraps') {
    return (
      <>
        <GenericServiceContent serviceType="van" />
        <div className="container mx-auto px-4 py-8">
          <SearchableGlossary compact={true} />
        </div>
      </>
    );
  } else if (servicePath === 'designer-wraps') {
    return (
      <>
        <GenericServiceContent serviceType="designer" />
        <div className="container mx-auto px-4 py-8">
          <SearchableGlossary compact={true} />
        </div>
      </>
    );
  } else if (servicePath === 'luxury-exotic-wraps') {
    return (
      <>
        <GenericServiceContent serviceType="luxury" />
        <div className="container mx-auto px-4 py-8">
          <SearchableGlossary compact={true} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <GenericServiceContent />
        <div className="container mx-auto px-4 py-8">
          <SearchableGlossary maxResults={8} />
        </div>
      </>
    );
  }
};

export default ServiceContentSelector;
