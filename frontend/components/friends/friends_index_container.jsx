import FriendsIndex from './friends_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteFriendship, requestFriends } from '../../actions/friendships_action';
import { requestUserFriends } from '../../actions/user_actions';

const mSTP = ({ entities, session }) => ({
  currentUser: entities.users[session.id],
  friendships: entities.friendships,
  users: entities.users
});

const mDTP = dispatch => ({
  requestFriends: userId => dispatch(requestFriends(userId)),
  deleteFriendship: friendshipId => dispatch(deleteFriendship(friendshipId)),
  requestUserFriends: userId => dispatch(requestUserFriends(userId))
});

export default withRouter(connect(mSTP, mDTP)(FriendsIndex));
