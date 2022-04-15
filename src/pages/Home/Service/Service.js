import React from 'react';
import {useNavigate} from 'react-router-dom';

const Service = ({service}) => {
  const {
    id,
    name,
    img,
    price,
    description
  } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = id => {
    navigate(`/service/${id}`);
  }
  return (
    <div className='w-full md:w-1/4 border-2 m-6 rounded-lg bg-slate-100/30 flex flex-col justify-between'>
      <div className='bg-slate-200  shadow-lg'>
        <img className='w-full rounded-lg'
          src={img}
          alt=""/>
        <p className='text-lg px-3 py-3 bg-slate-200 font-semibold'>
          {name}</p>
      </div>
      <div>

        <p className='text-lg px-3 my-2 text-gray-700 font-bold'>Price:
          <span className='text-green-600 text-2xl'>
            {price}</span>
        </p>
        <p className='text-sm px-3 mb-6 text-gray-600'>
          {description}</p>
      </div>
      <div>
        <button onClick={
            () => navigateToServiceDetail(id)
          }
          className='w-full rounded-sm py-2 text-lg font-semibold bg-green-900/40 hover:bg-green-900 hover:text-white'>Get It</button>
      </div>
    </div>
  );
};

export default Service;
