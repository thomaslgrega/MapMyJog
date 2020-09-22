import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';

const NavBar = props => {
  const sessionLinks = () => (
    <div className="nav-right-container">
      <div className='personal-links-container'>
        <a href="https://github.com/thomaslgrega" target="_blank" className="fab fa-github-square personal-link"></a>
        <a href="https://www.linkedin.com/in/thomas-grega-4931711b6/" target="_blank" className="fab fa-linkedin personal-link"></a>
        <a href="https://angel.co/u/thomas-grega" target="_blank" className="fab fa-angellist personal-link"></a>
      </div>
      <div className='nav-auth-links'>
        <Link to='/login' className='login-nav'>LOGIN</Link>
        <Link to='/signup' className='sign-up-nav'>SIGN UP</Link>
      </div>
    </div>
  );

  const loggedInBar = () => (
    <div className="nav-right-container-logged-in">
      <div className='personal-links-container'>
        <a href="https://github.com/thomaslgrega" target="_blank" className="fab fa-github-square personal-link"></a>
        <a href="https://www.linkedin.com/in/thomas-grega-4931711b6/" target="_blank" className="fab fa-linkedin personal-link"></a>
        <a href="https://angel.co/u/thomas-grega" target="_blank" className="fab fa-angellist personal-link"></a>
      </div>
      <div className='profile-dropdown-container far fa-user-circle'>
        <ul className='profile-dropdown-content'>
          <Link to='/dashboard/routes' className='dropdown-btn'>Dashboard</Link>
          <Link to='/dashboard/friends' className='dropdown-btn'>Friends</Link>
          <div className='dropdown-btn' onClick={props.logout}>Logout</div>
        </ul>
      </div>
    </div>
  );

  return props.currentUser ? loggedInBar() : sessionLinks();
};

export default NavBar;
