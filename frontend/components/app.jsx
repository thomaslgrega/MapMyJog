import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Link, Switch } from 'react-router-dom';
import { clearSessionErrors } from '../actions/session_actions';
import { connect } from 'react-redux';
import React from 'react';
import NavBarContainer from './nav_bar_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import SplashContainer from './splash_container';
import RoutesCreateContainer from './routes/routes_create_container';
import RoutesEditContainer from './routes/routes_edit_container';
import RoutesIndexContainer from './routes/routes_index_container';
import Dashboard from './dashboard/dashboard';
import FriendsIndexContainer from './friends/friends_index_container';

const App = () => {
  return (
    <div className='app-container'>
      <nav className='nav-bar'>
        <Link to='/' className='nav-logo' onClick={clearSessionErrors}>MAPMYJOG</Link>
        <Route path='/' component={NavBarContainer} />
      </nav>
      <Switch>
        <ProtectedRoute exact path='/dashboard' component={Dashboard} />
        <ProtectedRoute exact path='/routes' component={RoutesIndexContainer} />
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <ProtectedRoute path='/routes/new' component={RoutesCreateContainer} />
        <ProtectedRoute path='/routes/:routeId/edit' component={RoutesEditContainer} />
        <ProtectedRoute path='/friends' component={FriendsIndexContainer} />
        <AuthRoute path='/' component={SplashContainer} />
      </Switch>
    </div>
  )
};

const mDTP = dispatch => ({
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(null, mDTP)(App);