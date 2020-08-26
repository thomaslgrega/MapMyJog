import { createRoute, clearRouteErrors } from "../../actions/routes_actions";
import { connect } from "react-redux";
import RoutesMap from './routes_map';



const mSTP = ({ entities, session, errors }) => ({
  route: { 
    creator_id: session.id,
    name: '',
    description: '',
    waypoints: [],
    distance: '0 MI',
    activity: 'Choose an Activity'
  },
  currentUser: entities.users[session.id],
  errors: errors.routes
});

const mDTP = dispatch => ({
  action: route => dispatch(createRoute(route)),
  clearRouteErrors: () => dispatch(clearRouteErrors())
});

export default connect(mSTP, mDTP)(RoutesMap);