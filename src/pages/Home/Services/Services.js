import React, {useEffect, useState} from 'react';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('services.json').then(r => r.json()).then(data => setServices(data));
  }, [])
  return (
    <div id='services'>
      <h1 className=' text-xl md:text-4xl mt-10 px-4 text-green-600 font-mono font-extrabold'>
        <span>Our Services</span>
      </h1>
      <div className='flex flex-wrap justify-center'>
        {
        services.map(service => <Service key={
            service.id
          }
          service={service}></Service>)
      } </div>
    </div>
  );
};

export default Services;
