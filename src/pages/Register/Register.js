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
    console.log(name, email, password);
  }
  return (
    <div className="App bg-green-50/30 h-screen px-20 pt-5">
      <div className='w-1/2 mx-auto '>
        <h1 className='font-bold text-4xl text-green-800 ml-1 mt-1 mb-2 text-left'>Please register</h1>
        <form onSubmit={handleFormSubmit} className='bg-green-100/50 border-2 rounded-lg py-10 shadow-lg shadow-green-800/40 mb-10 '>
          <input className='bg-grey-100 rounded-md border-2 border-green-400/60 my-2 p-2 w-3/4'
            type="text"
            name='name'
            placeholder='Enter your name'
            required
          /><br/>
          <input className='bg-grey-100 rounded-md border-2 border-green-400/60 my-2 p-2 w-3/4'
            type="email"
            name='email'
            placeholder='Enter your email'
            required
          /><br/>
          <input className='bg-grey-100 rounded-md border-2 border-green-400/60 my-2 p-2 w-3/4'
            type="password"
            name='password'
            placeholder='Enter your password'
            required
          /><br/>
          <p className='text-left w-1/2 mx-auto font-semibold text-red-600 text-sm'>
            {}</p>
          <input
            className='bg-green-400 hover:text-white font-bold rounded-full p-2 mt-2 w-2/4 text-gray-700 hover:bg-green-800'
            type="submit"
            value="Log In"
          />
          <p  onClick={navigateLogin} className='text-gray-600 text-sm mt-4 font-semibold cursor-pointer'>Already have an account? <span className='text-black'>Log in</span></p>
        </form>
      </div>
    </div>
  );
};

export default Register; <h1>Please register</h1>
