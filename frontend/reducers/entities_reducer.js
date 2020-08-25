import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import routesReducer from './routes_reducer';
import friendsReducer from './friends_reducer';
import friendshipsReducer from './friendships_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  routes: routesReducer,
  friends: friendsReducer,
  friendships: friendshipsReducer
});

export default entitiesReducer;
