
import React from 'react';
import FleetWrapsContent from './FleetWrapsContent';
import ColorChangeWrapsContent from './ColorChangeWrapsContent';
import CommercialGraphicsContent from './CommercialGraphicsContent';
import PartialWrapsContent from './PartialWrapsContent';
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
  } else {
    return <GenericServiceContent />;
  }
};

export default ServiceContentSelector;
