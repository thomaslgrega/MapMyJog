import { connect } from "react-redux";
import NavBar from "./nav_bar";
import { login, logout } from "../actions/session_actions";

const mSTP = ({entities, session}, ownProps) => ({
  currentUser: entities.users[session.id],
});

const mDTP = dispatch => ({
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(NavBar);
