
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

interface ServiceContentSelectorProps {
  path: string;
}

const ServiceContentSelector: React.FC<ServiceContentSelectorProps> = ({ path }) => {
  if (path.includes('fleet-wraps')) {
    return <FleetWrapsContent />;
  } else if (path.includes('color-change-wraps')) {
    return <ColorChangeWrapsContent />;
  } else if (path.includes('commercial-graphics')) {
    return <CommercialGraphicsContent />;
  } else if (path.includes('partial-wraps')) {
    return <PartialWrapsContent />;
  } else if (path.includes('protective-films')) {
    return <ProtectiveFilmsContent />;
  } else if (path.includes('vehicle-lettering')) {
    return <VehicleLetteringContent />;
  } else if (path.includes('specialty-wraps')) {
    return <SpecialtyWrapsContent />;
  } else if (path.includes('retail-graphics')) {
    return <RetailGraphicsContent />;
  } else {
    return <GenericServiceContent />;
  }
};

export default ServiceContentSelector;
