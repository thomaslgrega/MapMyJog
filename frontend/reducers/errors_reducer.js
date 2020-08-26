import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import routeErrorsReducer from './route_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  routes: routeErrorsReducer
});

export default errorsReducer;
