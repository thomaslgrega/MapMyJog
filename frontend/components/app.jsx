import React from 'react';
import NavBarContainer from './nav_bar_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { AuthRoute } from '../util/route_util';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header >
        <h1>MAPMYJOG</h1>
        <Route exact path='/' component={NavBarContainer} />
      </header>
      
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
    </div>
  )
};

export default App;