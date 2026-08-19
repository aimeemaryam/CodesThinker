import React from 'react';
import { useOutlet } from 'react-router-dom';
import Services1 from '../Servicespages/Services1';
import Services2 from '../Servicespages/Services2';

const Services = () => {
  const outlet = useOutlet();

  return (
    <div>
      {/* If a nested route (like Website) is active, show it. Otherwise, show Services1 & Services2 */}
      {outlet || (
        <>
          <Services1 />
          <Services2 />
        </>
      )}
    </div>
  );
};

export default Services;