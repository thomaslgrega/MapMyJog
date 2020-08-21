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
      nextState[action.route.id] = action.route;
      return nextState;
    case REMOVE_ROUTE:
      delete nextState[action.routeId];
      return nextState;
    default:
      return state;
  }
};

export default routesReducer;