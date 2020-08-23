import { requestRoutes, createRoute, requestRoute, updateRoute, deleteRoute } from "../../actions/routes_actions";
import { connect } from "react-redux";
import RoutesMap from './routes_map';

const mSTP = ({ entities, session }) => ({
  // routes: Object.values(entities.routes),
  route: { 
    creator_id: session.id,
    name: '',
    description: '',
    waypoints: [],
    distance: '0 MI'
  },
  currentUser: entities.users[session.id]
});

const mDTP = dispatch => ({
  // requestRoutes: userId => dispatch(requestRoutes(userId)),
  // requestRoute: routeId => dispatch(requestRoute(routeId)),
  action: route => dispatch(createRoute(route))
  // updateRoute: route => dispatch(updateRoute(route)),
  // deleteRoute: routeId => dispatch(deleteRoute(routeId))
});

export default connect(mSTP, mDTP)(RoutesMap);