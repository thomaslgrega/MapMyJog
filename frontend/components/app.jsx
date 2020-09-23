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
import FindFriendsContainer from './friends/find_friends';
import UsersShowContainer from './users/users_show_container';
import FriendsTab from './friends/friends_tab';
import RoutesShowContainer from './routes/routes_show_container';
import Footer from './footer';

const App = () => {
  return (
    <div className='app-container'>
      <nav className='nav-bar'>
        <Link to='/' className='nav-logo' onClick={clearSessionErrors}>MAPMYJOG</Link>
        <Route path='/' component={NavBarContainer} />
      </nav>
      <div className='dashboard-container'>
        <ProtectedRoute path='/dashboard' component={Dashboard} />
        <ProtectedRoute path='/dashboard/routes' component={RoutesIndexContainer} />
        <ProtectedRoute exact path='/dashboard/friends' component={FriendsIndexContainer} />
        <ProtectedRoute path='/dashboard/friends/find' component={FindFriendsContainer} />
      </div>
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <Switch>
        <ProtectedRoute path='/routes/new' component={RoutesCreateContainer} />
        <ProtectedRoute exact path='/routes/:routeId' component={RoutesShowContainer} />
      </Switch>
      <ProtectedRoute path='/users/:userId' component={UsersShowContainer} />
      <ProtectedRoute path='/routes/:routeId/edit' component={RoutesEditContainer} />
      <AuthRoute exact path='/' component={SplashContainer} />
      <AuthRoute exact path='/' component={Footer} />
    </div>
  )
};

const mDTP = dispatch => ({
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(null, mDTP)(App);
