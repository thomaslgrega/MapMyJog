import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import FriendsIndexContainer from '../friends/friends_index_container';
import FindFriends from '../friends/find_friends';
import FriendsTab from '../friends/friends_tab';

const Dashboard = props => {
  return (
    <div>
      <NavLink to='/routes/new'>Create New Route</NavLink>
      <NavLink activeClassName='/dashboard-active' exact to='/dashboard/routes'>Routes</NavLink>
      <NavLink activeClassName='/dashboard-active' exact to='/dashboard/friends'>Friends</NavLink>
      <ProtectedRoute path='/dashboard/friends' component={FriendsTab} />
    </div>
  )
}

export default Dashboard
