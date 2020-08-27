import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const FriendsTab = props => {
  // debugger
  return (
    <div className='friends-tab-nav'>
      <NavLink className="fas fa-users" exact to='/dashboard/friends'></NavLink>
      <NavLink className='friends-tab-link' activeClassName='dashboard-active' exact to='/dashboard/friends'>MY FRIENDS</NavLink>
      <NavLink className="fas fa-search" exact to='/dashboard/friends/find'></NavLink>
      <NavLink className='friends-tab-link' activeClassName='dashboard-active' exact to='/dashboard/friends/find'>FIND FRIENDS</NavLink>
    </div>
  )
}

export default FriendsTab;
