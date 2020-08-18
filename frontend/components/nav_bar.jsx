import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
  const sessionLinks = () => (
    <nav>
      <Link to='/login'>LOGIN</Link>
      <Link to='/signup'>SIGN UP</Link>
    </nav>
  );

  const loggedInBar = () => (
    <nav>
      <button onClick={props.logout}>LOG OUT</button>
    </nav>
  );

  return props.currentUser ? loggedInBar() : sessionLinks();
};

export default NavBar;
