import React from 'react';
import { ProtectedRoute } from '../../util/route_util';
import FindFriends from './find_friends';
import FriendsIndexContainer from './friends_index_container';
import { NavLink } from 'react-router-dom';
const FriendsTab = props => {

  return (
    <div>
      <NavLink activeClassName='dashboard-active' exact to='/dashboard/friends'>MY FRIENDS</NavLink>
      <NavLink activeClassName='dashboard-active' exact to='/dashboard/friends/find'>FIND FRIENDS</NavLink>
    </div>
  )
}

export default FriendsTab;
