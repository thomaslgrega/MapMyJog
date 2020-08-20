import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = {...state};
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const userId = parseInt(Object.keys(action.currentUser)[0])
      nextState[userId] = action.currentUser[userId];
      return nextState
    default:
      return state;
  }
};

export default usersReducer;