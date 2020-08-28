import { connect } from "react-redux";
import { requestRoute } from "../../actions/routes_actions";
import RoutesShow from "./routes_show";

const mSTP = ({ entities }) => {
  return {
    routes: entities.routes
  }
};

const mDTP = dispatch => ({
  requestRoute: routeId => dispatch(requestRoute(routeId))
});

export default connect(mSTP, mDTP)(RoutesShow)