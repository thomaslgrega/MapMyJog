import React from 'react';
import { connect } from 'react-redux';
import UsersShowRouteItem from '../users/users_show_route_item';
import FindFriendsIndexItem from './find_friends_index_item';
import { requestFriends } from '../../actions/friendships_action';
import { requestRandomUsers } from '../../actions/user_actions';

class FindFriends extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestFriends(this.props.currentUser.id)
    this.props.requestRandomUsers()
  }

  render() {
    const { users, friendships, currentUser } = this.props;
    const friendsIdsArr = [] 
    Object.values(friendships).forEach(friendship => friendsIdsArr.push(friendship.friend_id))

    const unfriendedUsers = [];
    Object.values(users).forEach(user => {
      if (user.id !== currentUser.id && !friendsIdsArr.includes(user.id)) {
        unfriendedUsers.push(user);
      }
    });

    return (
      <div className='find-friends-container'>
        <span>Or check out some of our favorite users!</span>
        <div className='more-friends-list'>
          {
            unfriendedUsers.map(user => <FindFriendsIndexItem key={user.id} user={user} />)
          }
        </div>
      </div>
    )
  }
}

const mSTP = ({ entities, session }) => {
  debugger
  return {
    currentUser: entities.users[session.id],
    friendships: entities.friendships,
    users: entities.users
  }
};

const mDTP = dispatch => ({
  requestFriends: userId => dispatch(requestFriends(userId)),
  requestRandomUsers: () => dispatch(requestRandomUsers())
});

export default connect(mSTP, mDTP)(FindFriends);

// export default FindFriends;