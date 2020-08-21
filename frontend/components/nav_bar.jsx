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
      <div className='profile-dropdown-container far fa-user-circle'>
        <ul className='profile-dropdown-content'>
          <Link to='/dashboard' className='dropdown-btn'>Dashboard</Link>
          <Link className='dropdown-btn'>Friends</Link>
          <div className='dropdown-btn' onClick={props.logout}>Logout</div>
        </ul>
      </div>
    </div>
  );

  return props.currentUser ? loggedInBar() : sessionLinks();
};

export default NavBar;
