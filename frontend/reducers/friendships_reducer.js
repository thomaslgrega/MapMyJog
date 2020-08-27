import {
  RECEIVE_FRIENDSHIP,
  REMOVE_FRIENDSHIP
} from '../actions/friendships_action';

const friendshipsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = {...state};
  switch (action.type) {
    case RECEIVE_FRIENDSHIP:
      debugger
      const friendshipId = Object.keys(action.friendship)[0];
      nextState[friendshipId] = action.friendship[friendshipId];
      return nextState;
    case REMOVE_FRIENDSHIP:
      debugger
      delete nextState[action.friendshipId];
      return nextState;
    default:
      return state;
  }
}

export default friendshipsReducer;