import {
  RECEIVE_USER_FRIENDS, 
  RECEIVE_FRIEND,
} from "../actions/friends_actions"

const friendsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = {...state};
  switch (action.type) {
    case RECEIVE_USER_FRIENDS:
      return action.friendships;    
    case RECEIVE_FRIEND:
      return action.friend;
    default:
      return state;
  }
}

export default friendsReducer;