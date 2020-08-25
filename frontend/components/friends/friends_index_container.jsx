import FriendsIndex from './friends_index';
import { connect } from 'react-redux';
import { requestFriends, deleteFriendship } from '../../actions/friendship_actions';

const mSTP = ({ entities, session }) => {
  
  let friendships;
  if (entities.friends.friendships) {
    friendships = Object.values(entities.friends.friendships);
  } else {
    friendships = [];
  }

  let friends;
  if (entities.friends.friends) {
    friends = Object.values(entities.friends.friends);
  } else {
    friends = Object.values(entities.friends);
  }

  return ({
    currentUser: entities.users[session.id],
    friends,
    friendships
  })
};

const mDTP = dispatch => ({
  requestFriends: userId => dispatch(requestFriends(userId)),
  deleteFriendship: friendshipId => dispatch(deleteFriendship(friendshipId)),
});

export default connect(mSTP, mDTP)(FriendsIndex);