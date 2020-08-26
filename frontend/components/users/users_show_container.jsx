import { connect } from "react-redux";
import UserShow from "./users_show";
import { requestUser } from "../../actions/user_actions";

const mSTP = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId]
  }
};

const mDTP = dispatch => ({
  requestUser: userId => dispatch(requestUser(userId))
});

export default connect(mSTP, mDTP)(UserShow);
