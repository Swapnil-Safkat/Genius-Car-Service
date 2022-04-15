import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Link, NavLink} from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase'
import logo from '../../../images/logo-black.png'
import '../../site.css'
import auth from '../../../Firebase.init'

const Header = () => {
  const navLinkClass = 'text-lg py-3 px-6 my-3 font-semibold text-gray-700 rounded-lg'
  const {handleSignOut} = useFirebase();
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className='flex justify-between p-5 bg-green-100 shadow-md sticky top-0'>
      <div>
        <NavLink className={navLinkClass}
          to={'/home'}>Home</NavLink>
        <a as={NavLink} href="home#services" className={navLinkClass}>Services</a>
        <a as={NavLink} href="home#experts" className={navLinkClass}>Experts</a>
      </div>
      <div  className='h-8'>
        <img className='h-full' src={logo} alt="" />
      </div>
      <div> {
        user ? <NavLink onClick={handleSignOut}
          className={navLinkClass}
          to={'/login'}>Sign out</NavLink> : <NavLink className={navLinkClass}
          to={'/login'}>Login</NavLink>
      }
        {
        user ? <div className={navLinkClass}>
          <p>{
            'welcome ' + user.displayName
          }</p>
        </div> : <NavLink className={navLinkClass}
          to={'/register'}>Register</NavLink>
      } </div>
    </div>
  );
};

export default Header;
