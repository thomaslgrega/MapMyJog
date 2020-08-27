import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = {...state};
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
    default:
      return state;
  }
};

export default usersReducer;
