import React from 'react';
import NavBarContainer from './nav_bar_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { AuthRoute } from '../util/route_util';


const App = () => {
  return (
    <div>
      <header>
        <h1>MapMyJog</h1>
        <NavBarContainer />
      </header>

      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
    </div>
  )
};

export default App;