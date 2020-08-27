import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import FriendsTab from '../friends/friends_tab';

const Dashboard = props => {
  return (
    <div className='dashboard-nav'>
      <div className='dashboard-links-container'>
        <div className='routes-friends-link-container'>
          <NavLink className='dashboard-links' activeClassName='dashboard-active' exact to='/dashboard/routes'>My Routes</NavLink>
          <NavLink className='dashboard-links' activeClassName='dashboard-active' to='/dashboard/friends'>Friends</NavLink>
          {/* <hr className='sliding-underline'/> */}
        </div>
        <NavLink className='dashboard-create-link' to='/routes/new'>Create Route</NavLink>
      </div>
      <ProtectedRoute path='/dashboard/friends' component={FriendsTab} />
    </div>
  )
}

export default Dashboard
