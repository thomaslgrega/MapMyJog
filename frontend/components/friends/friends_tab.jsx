import React from 'react';
// import { requestRandomUsers: }
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const FriendsTab = props => {
  return (
    <div className='friends-tab-nav'>
      <NavLink className="fas fa-users" exact to='/dashboard/friends'></NavLink>
      <NavLink className='friends-tab-link' activeClassName='dashboard-active' exact to='/dashboard/friends'>MY FRIENDS</NavLink>
      <NavLink className="fas fa-search" exact to='/dashboard/friends/find'></NavLink>
      <NavLink className='friends-tab-link' activeClassName='dashboard-active' exact to='/dashboard/friends/find'>FIND FRIENDS</NavLink>
    </div>
  )
}

// const mSTP = ({ entities }) => ({
//   friendships: entities.friendships
// });

// const mDTP = dispatch => ({
//   requestFriends: userId => dispatch(requestFriends(userId)),
//   requestRandomUsers: () => dispatch(requestRandomUsers())
// });

// connect
export default FriendsTab;
