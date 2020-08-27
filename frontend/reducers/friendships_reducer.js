import {
  RECEIVE_FRIENDSHIP,
  REMOVE_FRIENDSHIP,
  RECEIVE_USER_FRIENDS
} from '../actions/friendships_action';

const friendshipsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = {...state};
  switch (action.type) {
    case RECEIVE_FRIENDSHIP:
      const friendshipId = Object.keys(action.friendship)[0];
      nextState[friendshipId] = action.friendship[friendshipId];
      return nextState;
    case REMOVE_FRIENDSHIP:
      delete nextState[action.friendshipId];
      return nextState;
    case RECEIVE_USER_FRIENDS:
      return action.friendships
    default:
      return state;
  }
}

export default friendshipsReducer;