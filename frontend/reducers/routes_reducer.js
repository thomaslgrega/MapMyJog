import { 
  RECEIVE_USER_ROUTES,
  RECEIVE_ROUTE,
  REMOVE_ROUTE
} from "../actions/routes_actions"

const routesReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = {...state};
  switch (action.type) {
    case RECEIVE_USER_ROUTES:
      return action.routes;
    case RECEIVE_ROUTE:
      const routeId = Object.keys(action.route)[0];
      // action.route[routeId].waypoints = JSON.parse(action.route[routeId].waypoints);
      // nextState[routeId] = action.route[routeId];
      // nextState[routeId].waypoints = JSON.parse(nextState[routeId].waypoints);
      // return nextState;
      return action.route;
    case REMOVE_ROUTE:
      delete nextState[action.routeId];
      return nextState;
    default:
      return state;
  }
};

export default routesReducer;
