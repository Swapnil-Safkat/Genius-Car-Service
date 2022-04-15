import React from 'react';

const NotFound = () => {
  const imgURL = 'https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1649068037~exp=1649068637~hmac=322c307d60eebf2173a6a3b271ce4eb9855c103f0fa2a819366b6c52a4022191';
  return (
    <div className='bg-white h-screen'>
      <div className='flex justify-center '><img className='w-1/3' src={imgURL} alt="" /></div>
      <button location={'/home'} text={'Back To Home'}></button>  
    </div>
  );
};

export default NotFound;