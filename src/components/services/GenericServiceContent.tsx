
import React from 'react';

const GenericServiceContent: React.FC = () => {
  return (
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
  );
};

export default GenericServiceContent;
