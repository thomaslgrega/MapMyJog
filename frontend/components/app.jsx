import React from 'react';
import NavBarContainer from './nav_bar_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { AuthRoute } from '../util/route_util';
import { Route, Link } from 'react-router-dom';
import { clearSessionErrors } from '../actions/session_actions';

const App = () => {
  return (
    <div>
      <nav className='nav-bar'>
        <Link to='/' className='nav-logo' onClick={() => dispatch(clearSessionErrors())}>MAPMYJOG</Link>
        <Route exact path='/' component={NavBarContainer} />
      </nav>
      
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
    </div>
  )
};

export default App;
