import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_FRIENDS, RECEIVE_USERS } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {...state};
  let userId;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      userId = parseInt(Object.keys(action.currentUser)[0])
      nextState[userId] = action.currentUser[userId];
      return nextState
    case RECEIVE_USER:
      userId = Object.keys(action.user)[0];
      nextState[userId] = Object.values(action.user)[0];
      return nextState;
    case RECEIVE_FRIENDS:
      nextState = {...nextState, ...action.friends }
      return nextState;
    case RECEIVE_USERS:
      nextState = {...nextState, ...action.users }
      return nextState;
    default:
      return state;
  }
};

export default usersReducer;
