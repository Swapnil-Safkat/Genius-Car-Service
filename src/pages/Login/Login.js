import React, { useRef } from 'react';
import auth from '../../Firebase.init';
import useFirebase from '../hooks/useFirebase';
import '../site.css'
import {useSignInWithGithub} from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const {GoogleSignIn, errorText} = useFirebase();
  const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
  const googleLogoURL = 'https://1000logos.net/wp-content/uploads/2016/11/google-logo.jpg'
  const gitLogoURL = 'https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png';
  const signOutURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSci-rG_bfLZqKWCBGFVEJpiuQl0qd7-CEW6w&usqp=CAU';
  
  const navigate = useNavigate();
  const navigateRegister = event => {
    event.preventDefault();
    navigate('/register');
  }

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const handleFormSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password)
  }
  return (
    <div className="App bg-green-50/30 h-screen px-20 pt-5">
      <div className='w-1/2 mx-auto '>
        <h1 className='font-bold text-4xl text-green-800 ml-1 mt-1 mb-2 text-left'>Welcome!
        </h1>
        <form className='bg-light-green rounded-lg py-10 shadow-lg shadow-green-800/40 mb-10 '>
          <h1 className='text-white text-lg w-1/2 text-left mx-auto'>Please Log In...</h1>
          <input className='bg-grey-100 rounded-md border-2 border-green-400/60 my-2 p-2 w-2/4'
            //onBlur={handleEmailChange}
            type="email"
            placeholder='Enter your email'
            ref={emailRef}
            required
          /><br/>
          <input className='bg-grey-100 rounded-md border-2 border-green-400/60 my-2 p-2 w-2/4'
            //onBlur={handlePassChange}
            type="password"
            placeholder='Enter your password'
            ref={passwordRef}
            required
          /><br/>
          <p className='text-left w-1/2 mx-auto font-semibold text-red-600 text-sm'>
            {errorText}</p>
          <input onClick={handleFormSubmit}
            className='bg-dark-green text-white font-bold rounded-full p-2 mt-2 w-1/4'
            type="submit"
            value="Log In"
          />
          <p  onClick={navigateRegister} className='text-gray-300 text-sm mt-4 font-semibold cursor-pointer'>New To The Car Doctor? <span className='text-white'>Please Register</span></p>
        </form>
        <p>or</p>
      </div>


      {
      false && <button //onClick={handleSignOut}
        className='p-3 m-6 border-2 border-red-300 rounded-lg'
      ><img className='btn-img-size'
          src={signOutURL}
          alt="Google Sign Out"/></button>
    }

      <div>
        <button onClick={GoogleSignIn}
          className='px-3 m-6 border-2 border-red-50 rounded-lg bg-white shadow-lg'><img className='btn-img-size'
            src={googleLogoURL}
            alt="Google Sign In"/></button>
        <button onClick={
            () => signInWithGithub()
          }
          className='px-3 m-6 border-2 border-red-50 rounded-lg bg-white shadow-lg'><img className='btn-img-size'
            src={gitLogoURL}
            alt="Git Sign In"/></button>
      </div>

      {
      false && <div className=' flex justify-center m-8 mx-auto'>
        <div>
          <img className='btn-img-size'
            src={
              ''
              // user.photoURL
            }
            alt=""/>
        </div>
        <div className='px-3 bg-gray-100 flex flex-col justify-center'>
          <p className='text-xl font-bold text-left'>
            {
            // user.displayName ||
            'Not Found'
          }</p>
          <p className='text-xs text-left'>
            {
            // user.email ||
            'Not Found'
          }</p>
        </div>
      </div>
    } </div>

  );
};

export default Login;
