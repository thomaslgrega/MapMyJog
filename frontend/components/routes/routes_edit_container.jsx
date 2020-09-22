import React from 'react';
import { connect } from "react-redux";
import RoutesMap from './routes_map';
import { requestRoute, updateRoute, clearRouteErrors } from '../../actions/routes_actions';

class EditRouteMap extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestRoute(this.props.match.params.routeId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.routeId !== this.props.match.params.routeId) {
      this.props.requestRoute(this.props.match.params.routeId);
    }
  }

  render() {
    const { action, route, errors, clearRouteErrors, type } = this.props;

    if (!route) return null;
    return (
      <RoutesMap
        action={action}
        route={route}
        errors={errors}
        clearRouteErrors={clearRouteErrors}
        type={type}
      />
    );
  }
}

const mSTP = (state, ownProps) => ({
  route: state.entities.routes[ownProps.match.params.routeId],
  errors: state.errors.routes,
  type: "edit"
});

const mDTP = dispatch => ({
  requestRoute: routeId => dispatch(requestRoute(routeId)),
  action: route => dispatch(updateRoute(route)),
  clearRouteErrors: () => dispatch(clearRouteErrors())
});

export default connect(mSTP, mDTP)(EditRouteMap);