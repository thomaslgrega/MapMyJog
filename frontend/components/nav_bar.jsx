import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
  const sessionLinks = () => (
    <div className='nav-auth-links'>
      <Link to='/login' className='login-nav'>LOGIN</Link>
      <Link to='/signup' className='sign-up-nav'>SIGN UP</Link>
    </div>
  );

  const loggedInBar = () => (
    <div>
      <button onClick={props.logout}>LOG OUT</button>
    </div>
  );

  return props.currentUser ? loggedInBar() : sessionLinks();
};

export default NavBar;
