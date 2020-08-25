import { createRoute } from "../../actions/routes_actions";
import { connect } from "react-redux";
import RoutesMap from './routes_map';



const mSTP = ({ entities, session }) => ({
  route: { 
    creator_id: session.id,
    name: '',
    description: '',
    waypoints: [],
    distance: '0 MI',
    activity: 'Choose an Activity'
  },
  currentUser: entities.users[session.id]
});

const mDTP = dispatch => ({
  action: route => dispatch(createRoute(route))
});

export default connect(mSTP, mDTP)(RoutesMap);