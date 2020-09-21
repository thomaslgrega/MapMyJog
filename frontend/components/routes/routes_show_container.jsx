// import { connect } from "react-redux";
// import { requestRoute } from "../../actions/routes_actions";
import RoutesShow from "./routes_show";

// const mSTP = ({ entities }) => {
//   return {
//     routes: entities.routes
//   }
// };

// const mDTP = dispatch => ({
//   requestRoute: routeId => dispatch(requestRoute(routeId))
// });

// export default connect(mSTP, mDTP)(RoutesShow)

import React from 'react';
import { connect } from "react-redux";
import { requestRoute, updateRoute, clearRouteErrors } from '../../actions/routes_actions';

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
    const { action, route, errors, clearRouteErrors } = this.props;

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
  action: route => dispatch(updateRoute(route)),
  clearRouteErrors: () => dispatch(clearRouteErrors())
});

export default connect(mSTP, mDTP)(ShowRouteMap);