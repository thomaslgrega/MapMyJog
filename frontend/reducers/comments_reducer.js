import {
  RECEIVE_ROUTE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from "../actions/comments_actions"

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = {...state};
  switch (action.type) {
    case RECEIVE_ROUTE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      return {...nextState, ...action.comment};
    case REMOVE_COMMENT:
      delete nextState[action.commentId];
      return nextState;
      default:
        return state;
  }
};

export default commentsReducer;