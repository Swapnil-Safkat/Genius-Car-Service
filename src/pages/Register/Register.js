import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const navigateLogin = event => {
    event.preventDefault();
    navigate('/login');
  }
  const handleFormSubmit = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
  }
  return (
    <div className="App bg-green-50/30 h-screen px-20 pt-5">
      <div className='w-1/2 mx-auto '>
        <h1>Please register</h1>
        <form onSubmit={handleFormSubmit} className='bg-light-green rounded-lg py-10 shadow-lg shadow-green-800/40 mb-10 '>
          <h1 className='text-white text-lg w-1/2 text-left mx-auto'>Please Log In...</h1>
          <input className='bg-grey-100 rounded-md border-2 border-green-400/60 my-2 p-2 w-2/4'
            type="text"
            name='name'
            placeholder='Enter your name'
            required
          /><br/>
          <input className='bg-grey-100 rounded-md border-2 border-green-400/60 my-2 p-2 w-2/4'
            type="email"
            name='email'
            placeholder='Enter your email'
            required
          /><br/>
          <input className='bg-grey-100 rounded-md border-2 border-green-400/60 my-2 p-2 w-2/4'
            type="password"
            name='password'
            placeholder='Enter your password'
            required
          /><br/>
          <p className='text-left w-1/2 mx-auto font-semibold text-red-600 text-sm'>
            {}</p>
          <input
            className='bg-dark-green text-white font-bold rounded-full p-2 mt-2 w-1/4'
            type="submit"
            value="Log In"
          />
          <p  onClick={navigateLogin} className='text-gray-300 text-sm mt-4 font-semibold cursor-pointer'>Already have an account? <span className='text-white'>Log in</span></p>
        </form>
      </div>
    </div>
  );
};

export default Register; <h1>Please register</h1>
