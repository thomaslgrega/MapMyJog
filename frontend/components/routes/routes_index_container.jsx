import RoutesIndex from './routes_index';
import { connect } from 'react-redux';
import { requestRoutes, deleteRoute, updateRoute } from '../../actions/routes_actions';

const mSTP = ({ entities, session }) => {
  return ({
    currentUser: entities.users[session.id],
    routes: Object.values(entities.routes)
  })
};

const mDTP = dispatch => ({
  deleteRoute: routeId => dispatch(deleteRoute(routeId)),
  updateRoute: route => dispatch(updateRoute(route)),
  requestRoutes: userId => dispatch(requestRoutes(userId))
});

export default connect(mSTP, mDTP)(RoutesIndex);
