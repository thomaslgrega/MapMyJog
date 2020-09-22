import RoutesShow from "./routes_show";
import React from 'react';
import { connect } from "react-redux";
import { requestRoute, updateRoute, clearRouteErrors } from '../../actions/routes_actions';
import { requestUser } from "../../actions/user_actions";

class ShowRouteMap extends React.Component {
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
    const { action, route, errors, clearRouteErrors, requestUser } = this.props;

    if (!route) return null;
    return (
      <RoutesShow
        action={action}
        route={route}
        errors={errors}
        clearRouteErrors={clearRouteErrors}
      />
    );
  }
}

const mSTP = (state, ownProps) => ({
  route: state.entities.routes[ownProps.match.params.routeId],
  errors: state.errors.routes
});

const mDTP = dispatch => ({
  requestRoute: routeId => dispatch(requestRoute(routeId)),
  clearRouteErrors: () => dispatch(clearRouteErrors())
});

export default connect(mSTP, mDTP)(ShowRouteMap);