import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = (state = { id: null }, action) => {
  Object.freeze(state);
  const nextState = {...state};
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      debugger
      const userId = parseInt(Object.keys(action.currentUser)[0])
      return { id: userId }
    case LOGOUT_CURRENT_USER:
      debugger
      nextState.id = null;
      return nextState;
    default:
      return state;
  }
};

export default sessionReducer;