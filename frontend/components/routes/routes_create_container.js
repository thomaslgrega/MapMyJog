import { requestRoutes, createRoute, requestRoute, updateRoute, deleteRoute } from "../../actions/routes_actions";
import { connect } from "react-redux";
import RoutesCreate from './routes_create';

const mSTP = ({ entities, session }) => ({
  routes: Object.values(entities.routes),
  currentUser: entities.users[session.id]
});

const mDTP = dispatch => ({
  requestRoutes: (userId) => dispatch(requestRoutes(userId)),
  requestRoute: routeId => dispatch(requestRoute(routeId)),
  createRoute: route => dispatch(createRoute(route)),
  updateRoute: route => dispatch(updateRoute(route)),
  deleteRoute: routeId => dispatch(deleteRoute(routeId))
});

export default connect(mSTP, mDTP)(RoutesCreate);