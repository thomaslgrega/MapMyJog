import { AuthRoute } from '../util/route_util';
import { Route, Link } from 'react-router-dom';
import { clearSessionErrors } from '../actions/session_actions';
import { connect } from 'react-redux';
import React from 'react';
import NavBarContainer from './nav_bar_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import SplashContainer from './splash_container';
import RoutesIndexContainer from './routes/routes_index_container'

const App = () => {
  return (
    <div>
      <nav className='nav-bar'>
        <Link to='/' className='nav-logo' onClick={clearSessionErrors}>MAPMYJOG</Link>
        <Route path='/' component={NavBarContainer} />
      </nav>
      <Route exact path='/' component={SplashContainer} />
      <Route exact path='/dashboard' component={RoutesIndexContainer} />
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
    </div>
  )
};

// export default App;

const mDTP = dispatch => ({
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(null, mDTP)(App);