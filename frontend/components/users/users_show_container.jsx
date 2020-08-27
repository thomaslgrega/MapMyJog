import { connect } from "react-redux";
import UserShow from "./users_show";
import { requestUser } from "../../actions/user_actions";
import { requestRoutes } from "../../actions/routes_actions";
import { createFriendship, deleteFriendship } from "../../actions/friendships_action";
import { requestFriends } from "../../actions/friends_actions";

const mSTP = ({entities, session}, ownProps) => {
  return {
    user: entities.users[ownProps.match.params.userId],
    routes: entities.routes,
    friendships: entities.friends.friendships,
    // friends: entities.friends.friends,
    currentUser: entities.users[session.id]
  }
}

const mDTP = dispatch => ({
  requestUser: userId => dispatch(requestUser(userId)),
  requestRoutes: userId => dispatch(requestRoutes(userId)),
  createFriendship: friendship => dispatch(createFriendship(friendship)),
  requestFriends: userId => dispatch(requestFriends(userId)),
  deleteFriendship: friendshipId => dispatch(deleteFriendship(friendshipId))
});

export default connect(mSTP, mDTP)(UserShow);
