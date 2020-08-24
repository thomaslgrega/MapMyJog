import React from 'react';
import { connect } from "react-redux";
import RoutesMap from './routes_map';
import { requestRoute, updateRoute } from '../../actions/routes_actions';

class EditRouteMap extends React.Component {
  componentDidMount() {
    this.props.requestRoute(this.props.match.params.routeId)
  }

  render() {
    const { action, route } = this.props;

    if (!route) return null;
    return (
      <RoutesMap
        action={action}
        route={route}
      />
    );
  }
}

const mSTP = (state, ownProps) => ({
  route: state.entities.routes[ownProps.match.params.routeId]
});

const mDTP = dispatch => ({
  requestRoute: routeId => dispatch(requestRoute(routeId)),
  action: route => dispatch(updateRoute(route))
});

export default connect(mSTP, mDTP)(EditRouteMap);