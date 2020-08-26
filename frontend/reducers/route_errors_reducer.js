import {
  RECEIVE_ROUTE_ERRORS,
  CLEAR_ROUTE_ERRORS
} from '../actions/routes_actions'

const routeErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ROUTE_ERRORS:
      return action.errors;
    case CLEAR_ROUTE_ERRORS:
      return [];
    default:
      return state;
  }
}

export default routeErrorsReducer;