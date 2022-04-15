import React from 'react';

const Expert = ({expert}) => {
  const {name, img} = expert;
  return (
    <div className='w-full md:w-1/4 m-6 px-12 rounded-lg flex flex-col justify-between'>
      <h1 className='text-xl my-2 font-semibold font-serif'>{name}</h1>
      <div className='shadow-lg rounded-full'>
        <img className='w-full shadow-lg rounded-full'
          src={img}
          alt=""/>
      </div>
      <div>
        <button
          className='w-full rounded-full my-4 py-2 text-lg font-semibold bg-green-900/40 hover:bg-green-900 hover:text-white'>Contact Now</button>
      </div>
    </div>
  );
};

export default Expert;
