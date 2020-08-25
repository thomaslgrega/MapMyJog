import {
  RECEIVE_USER_FRIENDS, 
  RECEIVE_FRIENDSHIP,
  REMOVE_FRIENDSHIP,
  RECEIVE_FRIEND,
} from "../actions/friends_actions"

const friendsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = {...state};
  switch (action.type) {
    case RECEIVE_USER_FRIENDS:
      return action.friendships;    
    case RECEIVE_FRIENDSHIP:
      const friendshipId = Object.keys(action.friendship)[0];
      nextState[friendshipId] =  action.friend[friendshipId];
      return nextState;
    case RECEIVE_FRIEND:
      return action.friend;
    case REMOVE_FRIENDSHIP:
      delete nextState[action.friendshipId];
      return nextState;
    default:
      return state;
  }
}

export default friendsReducer;